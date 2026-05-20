import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Aligning operations to strategy",
  description: "Connect executive strategy to day-to-day operational execution.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
