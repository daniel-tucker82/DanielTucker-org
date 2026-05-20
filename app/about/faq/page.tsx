import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "FAQ",
  description: "Frequently asked questions about working with Aspyre Consulting.",
  templateId: "faq",
  enableScripts: true,
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
