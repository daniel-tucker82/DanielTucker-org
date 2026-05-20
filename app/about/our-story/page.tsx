import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Our story",
  description: "How Aspyre Consulting helps enterprises build high-throughput delivery engines.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
