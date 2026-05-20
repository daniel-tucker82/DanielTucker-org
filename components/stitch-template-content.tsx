import type { ParsedStitchTemplate } from "@/lib/stitch-templates";
import { StitchTemplateScripts } from "./stitch-template-scripts";

type StitchTemplateContentProps = {
  template: ParsedStitchTemplate;
  /** Run inline template scripts (accordions, modals). Off by default for SSR pages. */
  enableScripts?: boolean;
  className?: string;
};

/**
 * Renders the <main> markup from a Stitch HTML template inside the site shell.
 * Nav and footer from the source HTML are omitted — use SiteLayout for those.
 */
export function StitchTemplateContent({
  template,
  enableScripts = false,
  className = "",
}: StitchTemplateContentProps) {
  return (
    <div className={`stitch-template-root ${className}`.trim()}>
      {template.styleCss ? (
        <style dangerouslySetInnerHTML={{ __html: template.styleCss }} />
      ) : null}
      <div
        className="stitch-template-main font-body-md text-on-surface"
        dangerouslySetInnerHTML={{ __html: template.mainHtml }}
      />
      {enableScripts && template.scriptBodies.length > 0 ? (
        <StitchTemplateScripts scripts={template.scriptBodies} />
      ) : null}
    </div>
  );
}
