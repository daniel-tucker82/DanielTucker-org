import Image from "next/image";
import Link from "next/link";
import { prerequisitePillars } from "@/lib/page-content/prerequisites";

export function PrerequisitesPage() {
  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      <section className="relative overflow-hidden border-b border-outline-variant/10 bg-gradient-to-br from-[#003732] via-[#005049] to-surface-dim px-margin-mobile pb-12 pt-24 md:px-margin-desktop md:pb-16 md:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 35%, rgba(85, 250, 233, 0.45) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-kinetic opacity-60" />
        <div className="relative z-10 mx-auto max-w-container-max">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.5em] text-primary-container">
                Engagement
              </p>
              <h1 className="font-stitch-display text-3xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-5xl lg:text-6xl">
                How we hit the{" "}
                <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
                  ground running
                </span>
              </h1>
              <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
                Four weeks is a tight window to move from chaos to clarity. To bypass administrative
                lag and focus entirely on delivery, the following must be agreed before we start.
              </p>
            </div>
            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative h-40 w-40 overflow-hidden border border-outline-variant/30 bg-surface-container-high p-2 md:h-48 md:w-48">
                <Image
                  src="/Prereq%20Header.png"
                  alt="Technical blueprint illustration"
                  width={320}
                  height={320}
                  unoptimized
                  className="h-full w-full object-cover opacity-70 contrast-110 grayscale"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Six prerequisites
            </p>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              What we need from you
            </h2>
            <p className="mt-3 font-stitch-body text-base leading-[160%] text-on-surface-variant">
              Each pillar includes the expectation, why it matters, and the specific requirement
              to agree before the engagement begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prerequisitePillars.map((pillar) => (
              <article
                key={pillar.number}
                className="flex h-full flex-col border border-outline-variant/25 border-t-2 border-t-primary-container bg-surface-container-low p-6 transition-colors hover:border-primary-container/30 hover:bg-surface-container-high md:p-8"
              >
                <p className="mb-4 font-stitch-body text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-container">
                  {pillar.number}
                </p>
                <h3 className="mb-4 font-stitch-display text-lg font-semibold uppercase leading-tight text-white">
                  {pillar.title}
                </h3>
                <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                  {pillar.blurb}
                </p>
                <div className="mt-6 border-t border-outline-variant/20 pt-5">
                  <p className="mb-2 font-stitch-body text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-container">
                    Why
                  </p>
                  <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                    {pillar.why}
                  </p>
                </div>
                <div className="mt-5 border-t border-outline-variant/20 pt-5">
                  <p className="mb-2 font-stitch-body text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-container">
                    The requirement
                  </p>
                  <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                    {pillar.requirement}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-20 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Ready to begin?
          </h2>
          <p className="mb-10 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            If these prerequisites work for your organisation, explore the{" "}
            <Link
              href="/services/4-week-intensive-program"
              className="text-primary-container underline-offset-4 hover:underline"
            >
              4-week intensive program
            </Link>{" "}
            or get in touch to discuss fit.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
            >
              Contact Aspyre
            </Link>
            <Link
              href="/about/faq"
              className="inline-block border border-primary-container/50 px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-primary-container transition-colors hover:bg-primary-container/10"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
