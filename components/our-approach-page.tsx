import { StitchTemplateContent } from "@/components/stitch-template-content";
import { applyOurApproachContent } from "@/lib/page-content/our-approach";
import { loadStitchTemplate } from "@/lib/stitch-templates";

export async function OurApproachPage() {
  const base = await loadStitchTemplate("content");
  const mainHtml = applyOurApproachContent(base.mainHtml);

  return <StitchTemplateContent template={{ ...base, mainHtml }} />;
}
