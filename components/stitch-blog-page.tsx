import { StitchBlogFeed } from "@/components/stitch-blog-feed";
import { loadStitchTemplate } from "@/lib/stitch-templates";
import { splitMainAtMarker } from "@/lib/stitch-templates/split-main";
import { getBlogPosts } from "@/lib/blog-storage";

const INSIGHTS_SECTION = "<!-- Insights Grid Section -->";
const NEWSLETTER = "<!-- Newsletter Integration -->";

export async function StitchBlogPage() {
  const [posts, base] = await Promise.all([getBlogPosts(), loadStitchTemplate("blog")]);

  const [heroHtml, rest] = splitMainAtMarker(base.mainHtml, INSIGHTS_SECTION);
  const newsletterIndex = rest.indexOf(NEWSLETTER);
  const afterFeed = newsletterIndex === -1 ? "" : rest.slice(newsletterIndex);

  const featured = posts.find((p) => p.status === "PUBLISHED");

  const heroWithContent = heroHtml
    .replace(
      "Navigating the Quantum Shift in Enterprise Logistics",
      featured?.title ?? "Blog",
    )
    .replace(
      "How next-generation computational models are redefining the efficiency of global supply chains in the post-digital era.",
      featured?.excerpt ??
        "Lessons I've learned, approaches I take, and other insights I feel inclined to share.",
    );

  return (
    <div className="stitch-template-root">
      {base.styleCss ? (
        <style dangerouslySetInnerHTML={{ __html: base.styleCss }} />
      ) : null}
      <div className="stitch-template-main font-body-md text-on-surface">
        <div dangerouslySetInnerHTML={{ __html: heroWithContent }} />
        <StitchBlogFeed posts={posts} />
        {afterFeed ? <div dangerouslySetInnerHTML={{ __html: afterFeed }} /> : null}
      </div>
    </div>
  );
}
