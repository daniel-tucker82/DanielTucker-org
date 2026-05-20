import { buildStitchPage } from "@/lib/build-stitch-page";

const stitchPage = buildStitchPage({
  title: "Our results",
  description: "Case studies, outcomes, and client testimonials from Aspyre engagements.",
  templateId: "projects",
  enableScripts: true,
});

export const metadata = stitchPage.metadata;
export default stitchPage.Page;
