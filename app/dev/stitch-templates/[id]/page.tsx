import Link from "next/link";
import { notFound } from "next/navigation";
import { StitchTemplatePage } from "@/components/stitch-template-page";
import { STITCH_TEMPLATES, isStitchTemplateId } from "@/lib/stitch-templates";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return Object.keys(STITCH_TEMPLATES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  if (!isStitchTemplateId(id)) return { title: "Template not found" };
  return {
    title: `${STITCH_TEMPLATES[id].title} (preview)`,
    robots: { index: false, follow: false },
  };
}

export default async function StitchTemplatePreviewPage({ params }: PageProps) {
  const { id } = await params;
  if (!isStitchTemplateId(id)) notFound();

  const meta = STITCH_TEMPLATES[id];

  return (
    <div className="space-y-6">
      <div className="border-b border-outline-variant/20 bg-surface-container-low px-margin-mobile py-4 md:px-margin-desktop">
        <Link
          href="/dev/stitch-templates"
          className="font-stitch-body text-[11px] font-semibold uppercase tracking-wider text-primary-container hover:underline"
        >
          ← All templates
        </Link>
        <h1 className="mt-2 font-stitch-display text-xl font-semibold uppercase text-white">
          {meta.title}
        </h1>
        <p className="mt-1 font-stitch-body text-sm text-on-surface-variant">{meta.description}</p>
      </div>
      <StitchTemplatePage templateId={id} enableScripts className="-mt-6" />
    </div>
  );
}
