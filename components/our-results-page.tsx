import Link from "next/link";
import { ArrowRight, CheckCircle2, LineChart, Sparkles, Target } from "lucide-react";

const experiencePillars = [
  "Leading technical programs and delivery teams through complex, high-stakes work",
  "Finding bottlenecks and implementing improvements that teams actually adopt",
  "Recovering drifting projects and restoring predictable flow without wholesale restructures",
  "Applying Theory of Constraints and continuous improvement in real operating environments",
] as const;

const futureResults = [
  {
    title: "Throughput and flow",
    body: "How work moved faster once the real constraint was identified — and what changed in day-to-day delivery.",
    Icon: LineChart,
  },
  {
    title: "Project recovery",
    body: "Engagements where a critical initiative had lost momentum, and what it took to get it back on track.",
    Icon: Target,
  },
  {
    title: "Operational clarity",
    body: "Leaders who gained a shared, evidence-based picture of where work breaks down — and a roadmap to fix it.",
    Icon: CheckCircle2,
  },
] as const;

export function OurResultsPage() {
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
          <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.5em] text-primary-container">
            Customers
          </p>
          <h1 className="max-w-3xl font-stitch-display text-3xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Results
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            This page is where client outcomes will live — case studies, measured improvements, and
            the stories behind them. We are not there yet, and we would rather say so plainly than
            fill the space with borrowed credibility.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-primary-container/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary-container" aria-hidden />
              <span className="font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
                A page waiting for its first stories
              </span>
            </div>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              Aspyre is new. The work is not.
            </h2>
            <p className="mt-6 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
              Aspyre is a young consultancy — founded to bring a focused offer to growth-stage
              technology businesses. We do not yet have a portfolio of Aspyre-branded engagements to
              showcase here, and we will not invent one.
            </p>
            <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
              What we do have is a long career spent doing exactly this: diagnosing why delivery
              stalls, finding the leverage points, and helping teams improve how work flows. The
              methodology is battle-tested. The practice is just getting started — and the companies
              who partner with us early will be the results that appear on this page next.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 bg-surface-dim/40 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                The foundation
              </p>
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
                Experience you can build on
              </h2>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                Before Aspyre, this work was done inside organisations — leading programs, untangling
                cross-functional bottlenecks, and helping teams deliver under pressure. That depth
                informs every engagement, even if the consultancy name on the letterhead is new.
              </p>
              <ul className="mt-8 space-y-3">
                {experiencePillars.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border border-outline-variant/25 bg-surface px-4 py-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-container"
                      aria-hidden
                    />
                    <span className="font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                The opportunity
              </p>
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
                Be the proof we point to
              </h2>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                Early partners get something larger consultancies cannot offer: direct access to the
                founder, a methodology applied with full attention, and the chance to shape how
                Aspyre tells its story.
              </p>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                When we publish results here, they will be real — shared with permission, described
                honestly, and focused on what changed for the client. If that standard appeals to you,
                you may be exactly who this page is waiting for.
              </p>
              <div className="mt-8 border border-primary-container/20 bg-primary-container/5 p-6">
                <p className="font-stitch-body text-base leading-[160%] text-on-surface-variant italic">
                  &ldquo;We would rather earn your trust through the work than through a wall of
                  logos we haven&apos;t earned yet.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
              What will appear here
            </p>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              The outcomes we aim to document
            </h2>
            <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
              When this page fills in, these are the kinds of stories you can expect — not vanity
              metrics, but practical improvements clients can point to.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {futureResults.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="relative border border-dashed border-outline-variant/40 bg-surface-container-low/50 p-6 md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-primary-container/30 bg-primary-container/10">
                  <Icon className="h-6 w-6 text-primary-container" aria-hidden />
                </div>
                <h3 className="font-stitch-display text-lg font-semibold uppercase text-white">
                  {title}
                </h3>
                <p className="mt-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                  {body}
                </p>
                <p className="mt-6 font-stitch-body text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant/70">
                  First story pending
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-20 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Help us write the first chapter
          </h2>
          <p className="mb-10 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            If you want an experienced operator and an honest partner — not a glossy case study —
            start with a conversation or explore the{" "}
            <Link
              href="/services/4-week-intensive-program"
              className="text-primary-container hover:underline"
            >
              4-week intensive program
            </Link>
            . The first week is free.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
            >
              Contact Aspyre
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/customers/who-we-work-with"
              className="inline-block border border-primary-container/50 px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-primary-container transition-colors hover:bg-primary-container/10"
            >
              Who we work with
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
