import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  LifeBuoy,
  ListChecks,
  ShieldAlert,
  Target,
  type LucideIcon,
} from "lucide-react";
import { StitchHeroBackground, stitchPageHeroSectionClass } from "@/components/stitch-hero-background";

const idealFor = [
  "A critical project has slipped and confidence is dropping",
  "Delivery teams are overloaded and recovery plans keep changing",
  "Stakeholders no longer trust current timelines or status reporting",
  "Dependencies and blockers are compounding faster than they are resolved",
  "You need focused intervention to stabilise execution quickly",
] as const;

const recoveryPhases: ReadonlyArray<{ phase: string; title: string; body: string; Icon: LucideIcon }> = [
  {
    phase: "PHASE 1",
    title: "Rapid triage",
    body: "Establish a clear picture of current risk, blocker severity, and recovery constraints.",
    Icon: AlertTriangle,
  },
  {
    phase: "PHASE 2",
    title: "Stabilisation plan",
    body: "Define a practical recovery sequence, reset priorities, and align ownership across teams.",
    Icon: ListChecks,
  },
  {
    phase: "PHASE 3",
    title: "Execution support",
    body: "Drive the recovery cadence, remove impediments, and restore predictable progress.",
    Icon: LifeBuoy,
  },
  {
    phase: "PHASE 4",
    title: "Handover and safeguards",
    body: "Embed controls and reporting so the project remains stable after intervention ends.",
    Icon: ShieldAlert,
  },
] as const;

const engagementDetails: ReadonlyArray<{ label: string; value: string; Icon: LucideIcon }> = [
  {
    label: "When to use it",
    value: "Best suited for high-risk projects where delivery confidence has materially declined.",
    Icon: Clock3,
  },
  {
    label: "Operating mode",
    value: "Hands-on and embedded with leadership and delivery teams to accelerate decision velocity.",
    Icon: Target,
  },
  {
    label: "Outcome",
    value: "A controlled recovery path with realistic milestones and stronger execution discipline.",
    Icon: CheckCircle2,
  },
] as const;

export function ProjectRecoveryPage() {
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
            Project{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Recovery
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            A targeted intervention to stabilise at-risk initiatives, restore delivery confidence, and get
            critical work moving again with realistic control.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="button-scanline pulse-cta group relative inline-block bg-primary-container px-12 py-6 font-stitch-display text-[12px] font-black uppercase leading-none tracking-[0.1em] text-on-primary-container transition-all hover:scale-110 active:scale-95"
            >
              Request a recovery consult
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
                Project recovery is for situations where delivery risk has moved beyond routine optimisation
                and requires immediate, structured intervention.
              </p>
              <p>
                The objective is not to create the illusion of progress. It is to rapidly diagnose root causes,
                reset execution on solid footing, and rebuild stakeholder confidence through visible outcomes.
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
              Recovery sequence
            </p>
            <h2 className="font-stitch-display text-3xl font-semibold uppercase leading-[105%] text-white md:text-[48px]">
              How recovery works
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {recoveryPhases.map(({ phase, title, body, Icon }) => (
              <div
                key={title}
                className="group flex h-full flex-col border border-outline-variant/30 bg-surface p-8 transition-all hover:border-primary-container/50"
              >
                <div className="mb-3 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
                  {phase}
                </div>
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
            {engagementDetails.map(({ label, value, Icon }) => (
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
              Pricing for project recovery is intentionally left as placeholder content for now. Final pricing
              can be set once you decide whether to position this as a fixed-response engagement, time-boxed
              rescue sprint, or ongoing stabilisation support.
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
              "A realistic recovery plan linked to your actual constraints",
              "Clear ownership and tighter cadence on high-risk work",
              "Reduction in blocker age and execution uncertainty",
              "Improved trust in delivery reporting and milestone forecasts",
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
            Need to stabilise a critical project?
          </h2>
          <p className="mb-10 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            If delivery risk is rising and deadlines are under pressure, we can quickly scope a practical
            recovery path tailored to your project reality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
          >
            Contact Aspyre
          </Link>
        </div>
      </section>
    </div>
  );
}
