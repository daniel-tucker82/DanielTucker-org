import { loadStitchTemplate } from "@/lib/stitch-templates";
import { StitchTemplateContent } from "@/components/stitch-template-content";
import { ContactForm } from "@/components/contact-form";

const FORM_MARKER = "<!-- STITCH_CONTACT_FORM -->";

export async function StitchContactPage() {
  const base = await loadStitchTemplate("contact");

  if (!base.mainHtml.includes(FORM_MARKER)) {
    throw new Error("Contact template is missing STITCH_CONTACT_FORM marker.");
  }

  const [beforeForm, afterForm] = base.mainHtml.split(FORM_MARKER);

  return (
    <div className="stitch-template-root">
      {base.styleCss ? (
        <style dangerouslySetInnerHTML={{ __html: base.styleCss }} />
      ) : null}
      <div className="stitch-template-main font-body-md text-on-surface">
        <div dangerouslySetInnerHTML={{ __html: beforeForm }} />
        <ContactForm />
        <div dangerouslySetInnerHTML={{ __html: afterForm }} />
      </div>
    </div>
  );
}
