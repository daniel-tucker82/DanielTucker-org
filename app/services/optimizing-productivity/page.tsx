import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Optimizing Productivity",
  description: "Improve throughput and flow across your delivery organization.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
