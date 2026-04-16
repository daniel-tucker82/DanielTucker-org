import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MissionControl } from "@/components/mission-control";
import { getSiteConfig } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export default async function Home() {
  const siteConfig = await getSiteConfig();
  const heroCallout = siteConfig.heroCallout;

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden border border-[#66FCF1]/20 bg-[#121317] px-8 py-14 sm:px-12 sm:py-18">
        <Image
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800&auto=format&fit=crop"
          alt="Brutalist architectural geometry"
          fill
          priority
          unoptimized
          className="object-cover grayscale contrast-125 opacity-28"
        />
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/95 via-[#0B0C10]/72 to-[#66FCF1]/8" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#66FCF1]">
              Maximise your organization&apos;s potential
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Transform your operations to match your vision
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#C5C6C7] sm:text-xl">
              Your shortcut to lean, clean and pragmatic delivery.
            </p>
          </div>

          {heroCallout.enabled ? (
            <aside className="border border-[#66FCF1]/30 bg-[#11161d]/85 p-6 lg:self-start">
              <article>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#66FCF1]">
                  {heroCallout.title}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {heroCallout.subtitle}
                </p>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#C5C6C7]">
                  {heroCallout.body}
                </p>
                {heroCallout.ctaLabel.trim() && heroCallout.ctaHref.trim() ? (
                  <Link
                    href={heroCallout.ctaHref}
                    className="mt-5 inline-flex items-center gap-2 border border-[#66FCF1] bg-[#66FCF1] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0B0C10] transition-colors hover:bg-transparent hover:text-[#66FCF1]"
                  >
                    {heroCallout.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </article>
            </aside>
          ) : null}
        </div>
      </section>

      <section className="bg-[#1a1b20] px-0 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <MissionControl />
        </div>
      </section>

      <section className="bg-[#121317] px-4 py-24 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl overflow-hidden border-2 border-[#66FCF1]/25 bg-[#0f1217] p-10 sm:p-14 lg:p-16">
          <div className="relative grid items-start gap-12 md:grid-cols-2">
            <div className="absolute right-0 top-0 h-64 w-64 bg-[#66FCF1]/8 blur-[110px]" />
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#66FCF1]">
                Success-Based Pilot
              </p>
              <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
                Success-Based Pilot: Zero Upfront Cost. Pay what the results are worth.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#C5C6C7]">
                The engagement model is intentionally high-trust: value is proven in
                your operating rhythm first, then priced by impact. It is a confidence
                model, not a discount.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-2 border border-[#66FCF1] bg-[#66FCF1] px-10 py-5 font-mono text-xs uppercase tracking-[0.2em] text-[#0B0C10] transition-colors hover:bg-transparent hover:text-[#66FCF1] rounded-none"
              >
                Initiate Pilot
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="relative z-10 space-y-6 border border-[#66FCF1]/15 bg-[#181d24] p-7">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 bg-[#66FCF1]" />
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                    Open Infrastructure
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                    No proprietary lock-ins. Systems are built so your team owns and
                    controls the operating model.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 bg-[#66FCF1]" />
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                    Privacy Obsession
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                    Strategy documentation and internal data handling are treated with
                    strict confidentiality protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 bg-[#66FCF1]" />
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                    High Precision
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                    Recommendations are grounded in operational evidence, not generic
                    playbooks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
