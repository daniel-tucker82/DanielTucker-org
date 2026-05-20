import type { Metadata } from "next";
import { StitchTemplatePage } from "@/components/stitch-template-page";
import type { StitchTemplateId } from "@/lib/stitch-templates";

export type StitchPageConfig = {
  title: string;
  description?: string;
  templateId: StitchTemplateId;
  enableScripts?: boolean;
};

export function buildStitchPage(config: StitchPageConfig) {
  const metadata: Metadata = {
    title: config.title,
    description: config.description,
  };

  function Page() {
    return (
      <StitchTemplatePage
        templateId={config.templateId}
        enableScripts={config.enableScripts}
      />
    );
  }

  return { metadata, Page };
}
