import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog-storage";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center border border-[#66FCF1]/45 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#C5C6C7] transition-colors hover:border-[#66FCF1] hover:text-white"
      >
        Back to Blog
      </Link>

      <section className="border border-[#66FCF1]/25 bg-[#1F2833]/35 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
          {post.category}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        {post.subtitle ? (
          <p className="mt-4 text-lg text-[#C5C6C7]">{post.subtitle}</p>
        ) : null}
      </section>

      <div className="w-full overflow-hidden border border-[#66FCF1]/25 bg-[#0B0C10]">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={0}
          height={0}
          unoptimized
          className="h-auto w-full contrast-125 opacity-95"
          sizes="100vw"
        />
      </div>

      <section className="panel-surface rounded-none p-8">
        <p className="mb-6 text-[#C5C6C7]">{post.excerpt}</p>
        <div
          className="text-[#C5C6C7] [&_a]:text-[#66FCF1] [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:text-white [&_h3]:mt-5 [&_h3]:text-white [&_li]:ml-5 [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>
    </article>
  );
}
