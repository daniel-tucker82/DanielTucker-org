import Image from "next/image";
import { BlogFeed } from "@/components/blog-feed";
import { getBlogPosts } from "@/lib/blog-storage";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden border-b border-[#66FCF1]/10 bg-[#121317]">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/95 via-transparent to-[#66FCF1]/8" />
        <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-8 px-6 py-16 md:px-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#66FCF1]" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#66FCF1]">
                Blog
              </p>
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tighter text-white sm:text-6xl">
              Operational Briefings
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#C5C6C7]">
              Lessons from project recovery, strategic alignment, and confidence
              execution systems.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 flex justify-end">
            <div className="w-32 h-32 border border-[#66FCF1]/25 bg-[#0B0C10] p-2">
              <Image
                src="https://images.unsplash.com/photo-1557683311-973673baf926?auto=format&fit=crop&w=512&q=80"
                alt="Technical blueprint icon"
                width={256}
                height={256}
                unoptimized
                className="w-full h-full object-cover filter grayscale opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
      <BlogFeed posts={posts} />
    </div>
  );
}
