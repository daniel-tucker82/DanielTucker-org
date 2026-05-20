import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Who we work with",
  description: "The organizations and leaders we partner with most often.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
