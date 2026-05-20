import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "4-week intensive program",
  description: "Aspyre Consulting — intensive operational transformation program.",
  templateId: "content",
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
