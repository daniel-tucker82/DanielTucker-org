import {
  loadStitchTemplate,
  type StitchTemplateId,
} from "@/lib/stitch-templates";
import { StitchTemplateContent } from "./stitch-template-content";

type StitchTemplatePageProps = {
  templateId: StitchTemplateId;
  enableScripts?: boolean;
  className?: string;
};

export async function StitchTemplatePage({
  templateId,
  enableScripts = false,
  className,
}: StitchTemplatePageProps) {
  const template = await loadStitchTemplate(templateId);
  return (
    <StitchTemplateContent
      template={template}
      enableScripts={enableScripts}
      className={className}
    />
  );
}
