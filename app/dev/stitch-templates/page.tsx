import Link from "next/link";
import { STITCH_TEMPLATE_LIST } from "@/lib/stitch-templates";

export const metadata = {
  title: "Stitch templates",
  robots: { index: false, follow: false },
};

export default function StitchTemplatesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-margin-mobile py-16 md:px-margin-desktop">
      <div>
        <p className="font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
          Dev
        </p>
        <h1 className="mt-2 font-stitch-display text-3xl font-semibold uppercase text-white">
          Stitch page templates
        </h1>
        <p className="mt-4 font-stitch-body text-on-surface-variant">
          HTML design exports stored under{" "}
          <code className="text-primary-container">templates/stitch/</code>. Preview
          renders the template <code className="text-primary-container">&lt;main&gt;</code>{" "}
          inside the site shell (site nav replaces the template nav).
        </p>
      </div>
      <ul className="space-y-3 border border-outline-variant/30 bg-surface-container-low p-6">
        {STITCH_TEMPLATE_LIST.map((item) => (
          <li key={item.id}>
            <Link
              href={`/dev/stitch-templates/${item.id}`}
              className="group block rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-primary-container/30 hover:bg-surface-container"
            >
              <span className="font-stitch-display text-lg font-medium uppercase text-white group-hover:text-primary-container">
                {item.title}
              </span>
              <span className="mt-1 block font-stitch-body text-sm text-on-surface-variant">
                {item.description}
              </span>
              {item.hasInlineScripts ? (
                <span className="mt-2 inline-block font-stitch-body text-[10px] uppercase tracking-wider text-tertiary-fixed-dim">
                  Includes inline scripts in preview
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
