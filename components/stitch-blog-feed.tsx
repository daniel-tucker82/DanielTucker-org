"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/types/blog";

export function StitchBlogFeed({ posts }: { posts: BlogPost[] }) {
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

  const [featured, ...rest] = filtered;

  return (
    <section className="py-24 px-gutter max-w-max-width mx-auto">
      <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
        <div>
          <h2 className="font-headline-md text-headline-md text-white mb-4">Blog</h2>
          <p className="max-w-xl font-body-md text-on-surface-variant">
            Lessons I&apos;ve learned, approaches I take, and other insights I feel inclined to
            share.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-primary-fixed text-on-primary-fixed"
                : "border border-outline-variant/30 bg-surface-container-high text-on-surface-variant hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm transition-all ${
                selectedCategory === category
                  ? "bg-primary-fixed font-bold text-on-primary-fixed"
                  : "border border-outline-variant/30 bg-surface-container-high text-on-surface-variant hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <article className="glass-card rounded-xl p-10 text-on-surface-variant font-body-md">
          No posts in this category yet.
        </article>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {featured ? (
            <article className="group glass-card relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(38,221,205,0.15)] md:col-span-8">
              {featured.imageUrl.trim() ? (
                <div className="h-80 overflow-hidden">
                  <Image
                    src={featured.imageUrl}
                    alt={featured.title}
                    width={1200}
                    height={640}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-label-sm text-label-sm text-primary-fixed">
                    {featured.category}
                  </span>
                </div>
                <h3 className="mb-4 font-headline-md text-headline-md text-white transition-colors group-hover:text-primary-fixed">
                  {featured.title}
                </h3>
                {featured.subtitle ? (
                  <p className="mb-2 font-body-md text-body-md text-on-surface-variant">
                    {featured.subtitle}
                  </p>
                ) : null}
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center font-bold text-primary-fixed transition-all hover:gap-2"
                >
                  Read article
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                </Link>
              </div>
            </article>
          ) : null}

          {rest.map((post) => (
            <article
              key={post.id}
              className="group glass-card flex flex-col overflow-hidden rounded-xl transition-all hover:shadow-[0_0_20px_rgba(38,221,205,0.1)] md:col-span-4"
            >
              {post.imageUrl.trim() ? (
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={800}
                    height={480}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="flex flex-grow flex-col p-6">
                <span className="mb-2 block font-label-sm text-label-sm text-primary-fixed">
                  {post.category}
                </span>
                <h3 className="mb-3 font-headline-md text-xl text-white transition-colors group-hover:text-primary-fixed">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-on-surface-variant">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center text-sm font-bold text-primary-fixed"
                >
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
