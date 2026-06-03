import Link from "next/link";
import {
  Activity,
  ArrowRightLeft,
  CheckCircle2,
  Gauge,
  Layers,
  Route,
  ShieldCheck,
  TreesIcon,
  type LucideIcon,
} from "lucide-react";
import { StitchHeroBackground, stitchPageHeroSectionClass } from "@/components/stitch-hero-background";

const idealFor = [
  "Teams that are always busy but still miss delivery goals",
  "Leaders who need clearer flow across product, engineering, and operations",
  "Organisations with recurring hand-off delays and rework loops",
  "Teams struggling to protect focus while priorities continue to shift",
  "Businesses that want practical improvements without a full restructure",
] as const;

const focusAreas: ReadonlyArray<{ title: string; body: string; Icon: LucideIcon }> = [
  {
    title: "Optimise flow",
    body: "Identify your key operational bottlenecks and then organise your operations to ensure we can maximise throughput.",
    Icon: Route,
  },
  {
    title: "Priority discipline",
    body: "Throughput reduces when concurrency is too high. We identify the optimum number of concurrent projects and then ensure we implement practices so as to not exceed them.",
    Icon: Layers,
  },
  {
    title: "Minimise churn",
    body: "There are some key behaviours which increase re-work and cause churn and delays. We identify these and ensure concious decisions are made about optimal behaviours which minimise these.",
    Icon: Activity,
  },
  {
    title: "The forest, not the trees",
    body: "Ensure decision making is made with long-term goals in mind, and teams are not subject to short-term pressures guiding them incrementally further from their desired future reality.",
    Icon: TreesIcon,
  },
] as const;

const engagementModel: ReadonlyArray<{ label: string; value: string; Icon: LucideIcon }> = [
  {
    label: "Format",
    value: "Flexible advisory engagement, tailored to your current constraints and business goals.",
    Icon: Gauge,
  },
  {
    label: "Approach",
    value: "Embedded and evidence-led. We work from observed reality, not assumptions or generic frameworks.",
    Icon: ShieldCheck,
  },
  {
    label: "Output",
    value: "A practical sequence of improvements your teams can adopt quickly and sustain over time.",
    Icon: CheckCircle2,
  },
] as const;

export function OptimizingProductivityPage() {
  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      <section
        className={`${stitchPageHeroSectionClass} px-margin-mobile pb-20 pt-28 md:px-margin-desktop`}
      >
        <StitchHeroBackground />
        <div className="relative z-10 mx-auto max-w-container-max">
          <p className="mb-6 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.6em] text-primary-container">
            Services
          </p>
          <h1 className="max-w-4xl font-stitch-display text-4xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-[72px] md:leading-[95%]">
            Optimizing{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Productivity
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            A practical service for improving throughput, reducing delivery friction, and helping your teams
            execute with greater consistency, confidence, and focus.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="button-scanline pulse-cta group relative inline-block bg-primary-container px-12 py-6 font-stitch-display text-[12px] font-black uppercase leading-none tracking-[0.1em] text-on-primary-container transition-all hover:scale-110 active:scale-95"
            >
              Book a discovery call
              <span className="pointer-events-none absolute -inset-2 rounded-lg border border-primary-container/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-stitch-display text-3xl font-semibold uppercase leading-[105%] text-white md:text-[48px]">
              What this service is for
            </h2>
            <div className="space-y-4 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
              <p>
                This offer is designed for organisations that do not need a crisis intervention, but do need
                measurable improvement in how work flows through the business.
              </p>
              <p>
                We focus on identifying and relieving constraints that slow delivery and increase burnout,
                while keeping changes targeted and realistic for your environment.
              </p>
            </div>
          </div>
          <div className="border border-outline-variant/20 bg-surface-container-low p-8">
            <h3 className="mb-6 font-stitch-display text-xl font-semibold uppercase text-primary-container">
              Ideal if you are experiencing
            </h3>
            <ul className="space-y-3">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-error" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Core focus areas
            </p>
            <h2 className="font-stitch-display text-3xl font-semibold uppercase leading-[105%] text-white md:text-[48px]">
              How productivity is improved
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="group flex h-full flex-col border border-outline-variant/30 bg-surface p-8 transition-all hover:border-primary-container/50"
              >
                <Icon className="mb-4 h-8 w-8 text-primary-container" aria-hidden />
                <h3 className="mb-3 font-stitch-display text-2xl font-medium uppercase">{title}</h3>
                <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/10 bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-12 font-stitch-display text-3xl font-semibold uppercase text-white md:text-[48px]">
            Engagement model
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModel.map(({ label, value, Icon }) => (
              <div key={label} className="border border-outline-variant/20 bg-surface p-8">
                <Icon className="mb-4 h-8 w-8 text-primary-container" aria-hidden />
                <div className="mb-2 font-stitch-body text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-container">
                  {label}
                </div>
                <p className="font-stitch-body text-base leading-[160%] text-on-surface-variant">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-primary-container/20 bg-primary-container/5 p-8 md:p-10">
            <h3 className="mb-4 font-stitch-display text-xl font-semibold uppercase text-white">
              Placeholder pricing note
            </h3>
            <p className="max-w-3xl font-stitch-body text-base leading-[160%] text-on-surface-variant">
              Engagement for producitivity optimisation can be varied in length and scope depending on your requirements. If commit to an engagement of 4 or more weeks,
              then we will honor the '1st week free' offer made in the 4-week intensive program. <br></br><br></br>Our hourly rate is $214.47 (inclusive of GST), and we limit weekly hours
              to 38 (we may work more than this in order to deliver the value you deserve, however we will not bill you for any work exceeding 38 hours). 
            </p>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-8 font-stitch-display text-3xl font-semibold uppercase text-white md:text-[48px]">
            What you can expect
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Higher throughput with less operational noise",
              "Clearer prioritisation and reduced work-in-progress overload",
              "Faster, more reliable handovers between teams",
              "A practical backlog of improvements with clear ownership",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-l-2 border-primary-container bg-surface-container/50 p-6"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary-container" aria-hidden />
                <span className="font-stitch-body text-base leading-[160%] text-on-surface-variant">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-32 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-4xl font-semibold uppercase leading-[105%] text-white md:text-[56px]">
            Build a stronger delivery rhythm
          </h2>
          <p className="mb-10 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            If you want to increase output without increasing chaos, we can scope an engagement around your
            current reality and immediate priorities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
          >
            Contact Aspyre
            <ArrowRightLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
