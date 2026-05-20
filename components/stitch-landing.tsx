import Image from "next/image";
import Link from "next/link";

const legacyFooterLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/prerequisites", label: "Prerequisites" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/application", label: "Application" },
  { href: "/profile", label: "Profile" },
  { href: "/sign-in", label: "Sign in" },
  { href: "/admin", label: "Admin" },
  { href: "/unauthorized", label: "Unauthorized" },
] as const;

export function StitchLanding() {
  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-dim px-margin-mobile pb-16 pt-28 md:px-margin-desktop">
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-kinetic opacity-60" />
        <div className="vortex-layer pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 z-[2] opacity-20">
          <div className="absolute left-[-100%] top-1/4 h-px w-[300%] -rotate-1 bg-primary-container blur-[1px]" />
          <div className="absolute left-[-100%] top-1/2 h-0.5 w-[300%] bg-primary-container blur-[3px]" />
          <div className="absolute left-[-100%] top-3/4 h-px w-[300%] rotate-1 bg-primary-container blur-[1px]" />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[min(135vmin,1200px)] w-[min(135vmin,1200px)] origin-bottom-right rotate-[20deg] translate-x-[-22%] translate-y-[40%]"
          aria-hidden
        >
          <Image
            src="/Aspyre%20Logo%20Dark%20-%20Clear%20background.png"
            alt=""
            fill
            unoptimized
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl space-y-2 text-center">
          <p className="mb-6 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.6em] text-primary-container">
            Architecture. Performance. Delivery.
          </p>
          <h1 className="font-stitch-display text-[60px] font-extrabold uppercase leading-[0.9] tracking-tighter text-white md:text-[110px] md:leading-[95%] md:tracking-[-0.04em]">
            BUILD A HIGH-THROUGHPUT <br />
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              DELIVERY ENGINE.
            </span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl font-stitch-body text-lg font-normal leading-[160%] text-on-surface-variant">
            Stop managing chaos. Start engineering flow. We transform legacy operational friction into a
            high-velocity delivery pipeline for enterprise teams.
          </p>
          <div className="pt-16">
            <Link
              href="/contact"
              className="button-scanline pulse-cta group relative inline-block bg-primary-container px-12 py-6 font-stitch-display text-[12px] font-black uppercase leading-none tracking-[0.1em] text-on-primary-container transition-all hover:scale-110 active:scale-95"
            >
              Book your free diagnostic
              <span className="pointer-events-none absolute -inset-2 rounded-lg border border-primary-container/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
          <span className="font-stitch-body text-[10px] font-semibold uppercase tracking-widest text-primary-container/60">
            Initiate scroll
          </span>
          <span className="material-symbols-outlined animate-bounce text-4xl text-primary-container">
            expand_more
          </span>
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="who-its-for"
        className="scroll-mt-28 relative overflow-hidden border-y border-outline-variant/10 bg-stitch-canvas py-24"
      >
        <div className="mx-auto grid max-w-container-max items-center gap-16 px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
          <div className="space-y-6">
            <div className="font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-widest text-error">
              System status: critical
            </div>
            <h2 className="font-stitch-display text-4xl font-semibold uppercase leading-[105%] text-white md:text-[64px] md:leading-[110%]">
              Drowning in the <span className="text-error">Chaos</span> of Legacy Ops.
            </h2>
            <div className="space-y-4 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
              <p>
                Status meetings that yield no status. Work-in-Progress (WIP) that never reaches
                &quot;Done.&quot; The persistent friction of misaligned engineering efforts.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <span className="material-symbols-outlined text-error">warning</span>
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  ERROR_FATIGUE: Velocity dropping below sustainable levels.
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <span className="material-symbols-outlined text-error">sync_problem</span>
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  WIP_OVERLOAD: 40+ concurrent tasks per engineer.
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded border border-outline-variant/20 bg-surface-container-high shadow-2xl md:aspect-video">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvpBgD-LGC338pD6qRkDxdYCm6OjwwxBRvFnSr5ZLgwTxYyysIthHkQ0cOXqeAhIzJPSWFrIhMlx3GcCxgTyzXL7VDBN2zUpXBV1m_3CdLNYO33jM_MjEA3Ht7PPQIVLflPpontj4yNZI0eQHXHDtF3pgMWKWPJZhNs7yGHdaD4mhHsJldtAYPq9pN3W_Vd7xIxhqHWxW8HHCKmTbw9InYPybF4d_aLUBVuOzvxb6G7i4X36PM9WdHxbhtLAcJaiuSdpo0tbc4fL4"
              alt="Abstract visualization of operational systems"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="relative z-10 border border-error/50 bg-surface-dim/80 p-8 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-3 animate-pulse rounded-full bg-error" />
                <div className="font-stitch-body text-[10px] font-semibold uppercase text-error">
                  TERMINAL_OUTPUT_034
                </div>
              </div>
              <code className="block space-y-1 font-stitch-body text-xs text-error">
                <div>{">"} ANALYZING_THROUGHPUT... [FAILED]</div>
                <div>{">"} BOTTLENECK_DETECTED: STAKEHOLDER_REVIEWS</div>
                <div>{">"} SYSTEM_FATAL: FLOW_EFFICIENCY {"<"} 12%</div>
                <div>{">"} RETRYING_TRANSFORMATION...</div>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Our method */}
      <section id="our-method" className="scroll-mt-28 relative bg-stitch-canvas py-32">
        <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-error to-primary-container" />
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <div className="mb-6 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-widest text-primary-container">
            The pivot
          </div>
          <h2 className="mb-12 font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
            Engineering the <span className="text-primary-container">Shift</span>.
          </h2>
          <div className="grid gap-gutter md:grid-cols-3">
            {[
              {
                icon: "architecture",
                title: "Structural Clarity",
                body: "We strip away the noise. Using Value Stream Mapping to identify exactly where your delivery engine is leaking power.",
              },
              {
                icon: "bolt",
                title: "Kinetic Flow",
                body: "Implementation of WIP limits and pull-based systems to ensure work moves at maximum velocity from backlog to production.",
              },
              {
                icon: "insights",
                title: "Data Autonomy",
                body: "Shift from gut-feel management to precision metrics. We install live throughput dashboards for real-time steering.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group border-t border-primary/20 bg-surface-container-low p-8 transition-all hover:bg-surface-container-high"
              >
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-primary-container transition-transform group-hover:scale-110">
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-4 font-stitch-display text-[32px] font-medium leading-[120%]">{card.title}</h3>
                <p className="font-stitch-body text-base font-normal leading-[160%] text-on-surface-variant">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our services */}
      <section id="our-services" className="scroll-mt-28 overflow-hidden bg-stitch-canvas py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-xl text-left">
              <h2 className="mb-4 font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
                The 4-Week Velocity Sprint.
              </h2>
              <p className="font-stitch-body text-lg leading-[160%] text-on-surface-variant">
                A productized service designed to diagnose, re-tool, and launch your high-throughput engine in 28
                days.
              </p>
            </div>
            <div className="shrink-0 border border-primary-container/20 bg-primary-container/5 px-4 py-2 font-stitch-body text-[14px] font-medium leading-[140%] text-primary-container">
              REF_ID: V_SPRINT_2024
            </div>
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden h-px -translate-y-1/2 bg-outline-variant/30 md:block" />
            {[
              {
                week: "WEEK 01",
                title: "The Diagnostic",
                body: "Deep-dive audit of current tooling, culture, and flow bottlenecks.",
                icon: "biotech",
              },
              {
                week: "WEEK 02",
                title: "Bottleneck ID",
                body: "Isolating the friction points. Visualizing the waste in your current system.",
                icon: "target",
              },
              {
                week: "WEEK 03",
                title: "The Pivot",
                body: "Implementation of new rituals, WIP limits, and structural changes.",
                icon: "published_with_changes",
              },
              {
                week: "WEEK 04",
                title: "The Roadmap",
                body: "Handover of the sustained velocity blueprint and live monitoring.",
                icon: "route",
              },
            ].map((w) => (
              <div
                key={w.week}
                className="group relative z-10 border border-outline-variant/30 bg-surface p-8 transition-all hover:border-primary-container/50"
              >
                <div className="mb-4 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
                  {w.week}
                </div>
                <h4 className="mb-2 font-stitch-display text-2xl font-medium uppercase">{w.title}</h4>
                <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">{w.body}</p>
                <div className="mt-8 flex justify-center opacity-20 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-primary-container">{w.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-28 bg-stitch-canvas py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid items-center gap-24 md:grid-cols-2">
            <div className="space-y-12">
              <h2 className="font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
                Measured <span className="text-primary-container">Throughput.</span>
              </h2>
              <div className="space-y-8">
                <div className="relative border border-primary-container/10 bg-surface-container p-6">
                  <div className="mb-2 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
                    Release frequency
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="font-stitch-display text-[64px] leading-none text-white opacity-40">2/mo</span>
                    <span className="material-symbols-outlined pb-2 text-primary-container">trending_flat</span>
                    <span className="text-glow-cyan font-stitch-display text-[64px] leading-none text-primary-container">
                      2/wk
                    </span>
                  </div>
                </div>
                <div className="relative border border-primary-container/10 bg-surface-container p-6">
                  <div className="mb-2 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
                    Cycle time efficiency
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="font-stitch-display text-[64px] leading-none text-white opacity-40">24d</span>
                    <span className="material-symbols-outlined pb-2 text-primary-container">trending_flat</span>
                    <span className="text-glow-cyan font-stitch-display text-[64px] leading-none text-primary-container">
                      4.2d
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary-container/5 blur-3xl" />
              <div className="relative border border-outline-variant/30 bg-surface-container-low p-12">
                <span className="material-symbols-outlined mb-8 text-6xl text-primary-container">format_quote</span>
                <p className="mb-8 font-stitch-display text-[28px] italic text-white">
                  &quot;Aspyre didn&apos;t just give us a report; they re-wired how our engineering team thinks about
                  value. Our throughput tripled in a single quarter.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded bg-surface-variant" />
                  <div>
                    <div className="font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary">
                      CTO, Global FinTech
                    </div>
                    <div className="font-stitch-body text-xs text-on-surface-variant">
                      Confidential Client Architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-28 border-y border-outline-variant/10 bg-stitch-canvas py-24">
        <div className="mx-auto max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
            Aspyre
          </h2>
          <p className="mt-6 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            Aspyre helps leadership teams replace fragile, meeting-heavy delivery with measurable flow: clearer
            ownership, tighter feedback loops, and systems that keep shipping after the engagement ends.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-stitch-canvas py-40">
        <div className="scanline absolute top-0 left-0 right-0" />
        <div className="scanline absolute bottom-0 left-0 right-0" />
        <div className="mx-auto max-w-3xl px-margin-mobile text-center">
          <h2 className="mb-8 font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
            Ready to Optimize?
          </h2>
          <p className="mb-12 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            Take the first step towards a high-throughput engine. Schedule your technical diagnostic session today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
          >
            Book diagnostic session
          </Link>
        </div>
      </section>

      {/* Legacy routes + footer */}
      <section className="border-t border-primary/20 bg-stitch-canvas px-margin-mobile py-12 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <p className="mb-6 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
            Site pages (restructure in progress)
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Legacy site navigation">
            {legacyFooterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-stitch-body text-[12px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <footer className="border-t border-primary/20 bg-stitch-canvas">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-8 px-margin-mobile py-12 md:flex-row md:px-margin-desktop">
          <Link href="/" className="mb-8 md:mb-0">
            <Image
              src="/Aspyre%20Logo.png"
              alt="Aspyre logo"
              width={180}
              height={40}
              unoptimized
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="text-center font-stitch-body text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant md:text-right">
            © {new Date().getFullYear()} Aspyre Consulting. Engineered for high-throughput delivery.
          </div>
        </div>
      </footer>
    </div>
  );
}
