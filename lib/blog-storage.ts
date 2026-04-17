import { get, put } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import { getBlogBlobAccess } from "@/lib/blog-blob-access";
import { BlogPost, BlogPostInput } from "@/types/blog";

// Vercel serverless filesystem is read-only except /tmp.
const dataDir =
  process.env.VERCEL === "1"
    ? path.join("/tmp", "danieltucker-data")
    : path.join(process.cwd(), "data");
const blogFile = path.join(dataDir, "blog-posts.json");
const blogBlobPath = process.env.BLOG_POSTS_BLOB_PATH?.trim() || "blog/blog-posts.json";

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN?.trim() || "";
}

function normalizePosts(parsed: Array<Partial<BlogPost>>): BlogPost[] {
  const normalized: BlogPost[] = parsed.map((post) => {
    const title = (post.title ?? "").trim();
    const slug =
      (post.slug ?? "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") ||
      title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    return {
      id: post.id ?? crypto.randomUUID(),
      title,
      subtitle: post.subtitle ?? "",
      slug,
      excerpt: (post.excerpt ?? "").trim(),
      imageUrl: (post.imageUrl ?? "").trim(),
      thumbnailUrl: (post.thumbnailUrl ?? post.imageUrl ?? "").trim(),
      category: (post.category ?? "General").trim(),
      tags: Array.isArray(post.tags) ? post.tags.filter(Boolean) : [],
      status: post.status === "DRAFT" ? "DRAFT" : "PUBLISHED",
      contentHtml: (post.contentHtml ?? "<p></p>").trim(),
      createdAt: post.createdAt ?? new Date().toISOString(),
      updatedAt: post.updatedAt ?? post.createdAt ?? new Date().toISOString(),
    };
  });
  return normalized.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

async function readBlogPostsFromBlob(): Promise<BlogPost[] | null> {
  const token = getBlobToken();
  if (!token) {
    return null;
  }

  try {
    const blob = await get(blogBlobPath, {
      access: getBlogBlobAccess(),
      token,
      useCache: false,
    });

    if (!blob || !blob.stream) {
      return [];
    }

    const text = await new Response(blob.stream).text();
    if (!text.trim()) {
      return [];
    }

    const parsed = JSON.parse(text) as Array<Partial<BlogPost>>;
    return normalizePosts(parsed);
  } catch (err) {
    const message = err instanceof Error ? err.message.toLowerCase() : "";
    if (message.includes("404")) {
      return [];
    }
    throw err;
  }
}

async function writeBlogPostsToBlob(posts: BlogPost[]): Promise<boolean> {
  const token = getBlobToken();
  if (!token) {
    return false;
  }

  await put(blogBlobPath, JSON.stringify(posts, null, 2), {
    access: getBlogBlobAccess(),
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  return true;
}

async function ensureBlogFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(blogFile);
  } catch {
    await fs.writeFile(blogFile, "[]", "utf8");
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const fromBlob = await readBlogPostsFromBlob();
  if (fromBlob) {
    return fromBlob;
  }

  await ensureBlogFile();
  const file = await fs.readFile(blogFile, "utf8");
  const parsed = JSON.parse(file) as Array<Partial<BlogPost>>;
  return normalizePosts(parsed);
}

async function writeBlogPosts(posts: BlogPost[]) {
  const wroteToBlob = await writeBlogPostsToBlob(posts);
  if (wroteToBlob) {
    return;
  }

  await ensureBlogFile();
  await fs.writeFile(blogFile, JSON.stringify(posts, null, 2), "utf8");
}

export async function createBlogPost(input: BlogPostInput): Promise<BlogPost> {
  const posts = await getBlogPosts();
  const now = new Date().toISOString();
  const post: BlogPost = {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    subtitle: (input.subtitle ?? "").trim(),
    slug: input.slug.trim(),
    excerpt: input.excerpt.trim(),
    imageUrl: (input.imageUrl ?? "").trim(),
    thumbnailUrl: (input.thumbnailUrl ?? input.imageUrl ?? "").trim(),
    category: input.category.trim(),
    tags: (input.tags ?? []).map((tag) => tag.trim()).filter(Boolean),
    status: input.status,
    contentHtml: input.contentHtml.trim(),
    createdAt: now,
    updatedAt: now,
  };
  posts.unshift(post);
  await writeBlogPosts(posts);
  return post;
}

export async function updateBlogPost(
  id: string,
  input: BlogPostInput,
): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return null;

  const existing = posts[index];
  const updated: BlogPost = {
    ...existing,
    title: input.title.trim(),
    subtitle: (input.subtitle ?? "").trim(),
    slug: input.slug.trim(),
    excerpt: input.excerpt.trim(),
    imageUrl: (input.imageUrl ?? "").trim(),
    thumbnailUrl: (input.thumbnailUrl ?? input.imageUrl ?? "").trim(),
    category: input.category.trim(),
    tags: (input.tags ?? []).map((tag) => tag.trim()).filter(Boolean),
    status: input.status,
    contentHtml: input.contentHtml.trim(),
    updatedAt: new Date().toISOString(),
  };
  posts[index] = updated;
  await writeBlogPosts(posts);
  return updated;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = await getBlogPosts();
  const nextPosts = posts.filter((post) => post.id !== id);
  if (nextPosts.length === posts.length) return false;
  await writeBlogPosts(nextPosts);
  return true;
}

export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts();
  return Array.from(new Set(posts.map((post) => post.category))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
