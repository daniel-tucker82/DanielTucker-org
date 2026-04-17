"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogPost } from "@/types/blog";

export function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const publishedPosts = useMemo(
    () => posts.filter((post) => post.status === "PUBLISHED"),
    [posts],
  );

  const categories = useMemo(
    () => Array.from(new Set(publishedPosts.map((post) => post.category))).sort(),
    [publishedPosts],
  );

  const filtered = useMemo(() => {
    if (selectedCategory === "all") return publishedPosts;
    return publishedPosts.filter((post) => post.category === selectedCategory);
  }, [publishedPosts, selectedCategory]);

  return (
    <div className="space-y-8">
      <section className="panel-surface rounded-none p-5">
        <label className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
            Filter Category
          </span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-sm text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {filtered.length === 0 ? (
          <article className="panel-surface rounded-none p-8 text-[#C5C6C7] lg:col-span-2">
            No posts in this category yet.
          </article>
        ) : (
          filtered.map((post) => (
            <article
              key={post.id}
              className="border border-[#66FCF1]/25 bg-[#1F2833]/35 rounded-none overflow-hidden transition-colors hover:bg-[#1d2630]"
            >
              {post.imageUrl.trim() ? (
                <div className="w-full border-b border-[#66FCF1]/25 bg-[#0B0C10]">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={0}
                    height={0}
                    unoptimized
                    className="h-auto w-full contrast-125 opacity-95"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                </div>
              ) : null}
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                    {post.subtitle ? (
                      <p className="text-sm text-[#C5C6C7]/90">{post.subtitle}</p>
                    ) : null}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
                    {post.category}
                  </span>
                </div>
                <p className="text-[#C5C6C7]">{post.excerpt}</p>
                {post.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={`${post.id}-${tag}`}
                        className="border border-[#66FCF1]/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#66FCF1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center border border-[#66FCF1] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                >
                  Read Full Post
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
