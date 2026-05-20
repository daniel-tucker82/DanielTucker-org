import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Project recovery",
  description: "Stabilize at-risk programs and restore predictable delivery.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
