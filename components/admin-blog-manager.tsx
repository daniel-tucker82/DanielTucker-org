"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { QuillEditor } from "@/components/quill-editor";
import { BlogPost } from "@/types/blog";

type FormState = {
  id: string | null;
  category: string;
  newCategory: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  tags: string;
  status: "DRAFT" | "PUBLISHED";
  imageUrl: string;
  thumbnailUrl: string;
  contentHtml: string;
};

const initialForm: FormState = {
  id: null,
  category: "",
  newCategory: "",
  title: "",
  subtitle: "",
  slug: "",
  excerpt: "",
  tags: "",
  status: "DRAFT",
  imageUrl: "",
  thumbnailUrl: "",
  contentHtml: "<p></p>",
};

export function AdminBlogManager({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [form, setForm] = useState<FormState>(initialForm);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const featuredFileInputRef = useRef<HTMLInputElement>(null);

  async function loadPosts() {
    const response = await fetch("/api/blog/posts", { cache: "no-store" });
    const data = (await response.json()) as { posts: BlogPost[] };
    setPosts(data.posts ?? []);
  }

  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))).sort(),
    [posts],
  );

  const selectedCategory =
    form.category === "__new__" ? form.newCategory.trim() : form.category.trim();
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  /** Prefer in-memory blob preview, else saved URL from form. */
  const featuredDisplaySrc = (imagePreviewUrl || form.imageUrl).trim();

  const revokePreviewIfBlob = (url: string) => {
    if (url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  };

  const clearFeaturedImage = () => {
    setImagePreviewUrl((prev) => {
      revokePreviewIfBlob(prev);
      return "";
    });
    setForm((prev) => ({ ...prev, imageUrl: "", thumbnailUrl: "" }));
    if (featuredFileInputRef.current) {
      featuredFileInputRef.current.value = "";
    }
  };

  const reset = () => {
    setImagePreviewUrl((prev) => {
      revokePreviewIfBlob(prev);
      return "";
    });
    setForm(initialForm);
    setSlugTouched(false);
    if (featuredFileInputRef.current) {
      featuredFileInputRef.current.value = "";
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (
      !selectedCategory ||
      !form.title.trim() ||
      !form.slug.trim() ||
      !form.contentHtml.trim()
    ) {
      setLoading(false);
      setError("Category, title, slug, and content are required.");
      return;
    }

    const payload = {
      category: selectedCategory,
      title: form.title,
      subtitle: form.subtitle,
      slug: slugify(form.slug),
      excerpt: form.excerpt,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      status: form.status,
      imageUrl: form.imageUrl,
      thumbnailUrl: form.thumbnailUrl,
      contentHtml: form.contentHtml,
    };

    const isEdit = Boolean(form.id);
    const response = await fetch("/api/blog/posts", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isEdit ? { ...payload, id: form.id } : payload),
    });

    if (!response.ok) {
      setLoading(false);
      setError("Unable to save blog post.");
      return;
    }

    await loadPosts();
    reset();
    setLoading(false);
  };

  const onEdit = (post: BlogPost) => {
    setImagePreviewUrl((prev) => {
      revokePreviewIfBlob(prev);
      return post.imageUrl || "";
    });
    setForm({
      id: post.id,
      category: categories.includes(post.category) ? post.category : "__new__",
      newCategory: categories.includes(post.category) ? "" : post.category,
      title: post.title,
      subtitle: post.subtitle,
      slug: post.slug,
      excerpt: post.excerpt,
      tags: post.tags.join(", "),
      status: post.status,
      imageUrl: post.imageUrl,
      thumbnailUrl: post.thumbnailUrl,
      contentHtml: post.contentHtml,
    });
    setSlugTouched(true);
  };

  const onDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`/api/blog/posts?id=${id}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Unable to delete post.");
      setLoading(false);
      return;
    }
    await loadPosts();
    if (form.id === id) reset();
    setLoading(false);
  };

  const onImageSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImagePreviewUrl((prev) => {
      revokePreviewIfBlob(prev);
      return URL.createObjectURL(file);
    });
    setUploadingImage(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/admin/blog-images", {
      method: "POST",
      body: formData,
    });
    const payloadUnknown = await response.json().catch(() => ({}));
    const payload = payloadUnknown as {
      imageUrl?: string;
      thumbnailUrl?: string;
      error?: string;
      detail?: string;
      hint?: string;
    };
    if (!response.ok) {
      const hint =
        payload.error ||
        (response.status === 503
          ? "Image upload failed: Vercel Blob is not configured for this environment. Add BLOB_READ_WRITE_TOKEN to .env.local (e.g. vercel env pull) and restart dev, then try again."
          : "Image upload failed.");
      const parts = [hint];
      if (payload.detail) parts.push(`(${payload.detail})`);
      if (payload.hint) parts.push(payload.hint);
      setError(parts.join(" "));
      // Keep blob preview + file input so a failed upload (e.g. missing token in dev) does not look like "remove" was clicked.
      setUploadingImage(false);
      return;
    }
    setForm((prev) => ({
      ...prev,
      imageUrl: payload.imageUrl ?? "",
      thumbnailUrl: payload.thumbnailUrl ?? "",
    }));
    setImagePreviewUrl((prev) => {
      revokePreviewIfBlob(prev);
      return payload.imageUrl ?? "";
    });
    if (featuredFileInputRef.current) {
      featuredFileInputRef.current.value = "";
    }
    setUploadingImage(false);
  };

  return (
    <section className="panel-surface rounded-none p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Blog Editor
        </h2>
        <button
          type="button"
          onClick={reset}
          className="rounded-none border border-[#66FCF1]/45 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white"
        >
          New Post
        </button>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Category
            </span>
            <select
              value={form.category}
              onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            >
              <option value="">No Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value="__new__">+ Create new category</option>
            </select>
          </label>
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Status
            </span>
            <select
              value={form.status}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  status: event.target.value as FormState["status"],
                }))
              }
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
            </select>
          </label>
          {form.category === "__new__" ? (
            <label className="space-y-2 sm:col-span-2">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
                New Category
              </span>
              <input
                value={form.newCategory}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, newCategory: event.target.value }))
                }
                className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
              />
            </label>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Title
            </span>
            <input
              value={form.title}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  title: event.target.value,
                  slug: slugTouched ? prev.slug : slugify(event.target.value),
                }))
              }
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            />
          </label>
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Subtitle
            </span>
            <input
              value={form.subtitle}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, subtitle: event.target.value }))
              }
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Slug
            </span>
            <input
              value={form.slug}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, slug: slugify(event.target.value) }))
              }
              onInput={() => setSlugTouched(true)}
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            />
            <p className="text-xs text-[#C5C6C7]/80">
              Auto-generated from title, editable.
            </p>
          </label>
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
              Featured Image
            </span>
            <input
              ref={featuredFileInputRef}
              type="file"
              accept="image/*"
              onChange={(event) => void onImageSelected(event)}
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-sm text-[#C5C6C7] file:mr-3 file:border-0 file:bg-[#66FCF1] file:px-3 file:py-1 file:font-mono file:text-[11px] file:uppercase file:tracking-[0.12em] file:text-[#0B0C10]"
            />
            {featuredDisplaySrc ? (
              <div className="mt-2 space-y-2 border border-[#66FCF1]/25 p-2 bg-[#0B0C10]/50">
                <div className="flex max-h-64 w-full items-center justify-center overflow-hidden bg-[#0B0C10]">
                  <Image
                    src={featuredDisplaySrc}
                    alt="Selected featured image"
                    width={1200}
                    height={800}
                    unoptimized
                    className="h-auto max-h-64 w-full object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={clearFeaturedImage}
                  className="rounded-none border border-[#66FCF1]/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#C5C6C7] hover:border-red-400/60 hover:text-red-200"
                >
                  Remove featured image
                </button>
              </div>
            ) : null}
            {uploadingImage ? (
              <p className="text-xs text-[#66FCF1]">Uploading and generating variants...</p>
            ) : null}
          </label>
        </div>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
            Excerpt
          </span>
          <textarea
            value={form.excerpt}
            onChange={(event) => setForm((prev) => ({ ...prev, excerpt: event.target.value }))}
            className="min-h-20 w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
          />
        </label>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
            Tags (comma-separated)
          </span>
          <input
            value={form.tags}
            onChange={(event) => setForm((prev) => ({ ...prev, tags: event.target.value }))}
            className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            placeholder="api, product, release"
          />
        </label>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
            Content
          </span>
          <QuillEditor
            value={form.contentHtml}
            onChange={(nextValue) => setForm((prev) => ({ ...prev, contentHtml: nextValue }))}
          />
          <p className="text-xs text-[#C5C6C7]/80">
            Use toolbar options for links, images, code blocks, and formatting.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-none border border-[#66FCF1] bg-[#0B0C10] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {form.id ? "Save Post" : "Publish Post"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-none border border-[#66FCF1]/45 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white"
          >
            Cancel
          </button>
          {form.id ? (
            <button
              type="button"
              onClick={() => void onDelete(form.id as string)}
              className="rounded-none border border-red-400/50 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-red-300 hover:border-red-300 hover:text-red-200"
            >
              Delete
            </button>
          ) : null}
        </div>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
      </form>

      <div className="mt-8 space-y-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          Existing Posts
        </h3>
        {posts.length === 0 ? (
          <p className="text-sm text-[#C5C6C7]">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-wrap items-center justify-between gap-3 border border-[#66FCF1]/35 bg-[#0B0C10]/45 p-3"
            >
              <div>
                <p className="text-white">{post.title}</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1]">
                  {post.category} | {post.status}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onEdit(post)}
                  className="rounded-none border border-[#66FCF1]/45 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => void onDelete(post.id)}
                  className="rounded-none border border-red-400/50 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-red-300 hover:border-red-300 hover:text-red-200"
                >
                  Delete
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
