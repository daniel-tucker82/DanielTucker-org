import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Microscope,
  RefreshCw,
  Route,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

const weeks = [
  {
    week: "WEEK 1 - FREE",
    title: "Understand the current reality",
    body: "Structured interviews with leaders and front-line staff to map pain points, bottlenecks, and the symptoms blocking flow. By the end of the week you have a shared and comprehensive picture of what is actually happening in your organisation to cause the pain you are observing.",
    deliverables: [
      "Draft current reality tree",
      "Plan to confirm root cause hypotheses",
      "Key metrics to measure before and after engagement",
      "End of week back-brief with leadership",
    ],
    Icon: Microscope,
  },
  {
    week: "WEEK 2",
    title: "Test hypotheses and build a plan",
    body: "Independent observation and data collection to verify root causes. We identify high-leverage injections - specific changes designed to shift operations toward the desired future - and rank them by value-to-effort ratio.",
    deliverables: [
      "Validated current reality tree",
      "Prioritised injection backlog and how we expect them to impact the current reality",
      "Week 3 implementation plan with leadership buy-in",
    ],
    Icon: Target,
  },
  {
    week: "WEEK 3",
    title: "Low-hanging fruit",
    body: "Implementation of the highest-value, lowest-friction changes that can be completed within the engagement window. Changes are designed to make daily work easier for the people doing it, not harder.",
    deliverables: [
      "Pilot changes implemented in live workflows",
      "Supporting tools or rituals where needed",
      "Early signal metrics on throughput and flow",
    ],
    Icon: RefreshCw,
  },
  {
    week: "WEEK 4",
    title: "Validation and roadmap",
    body: "Compare expected outcomes against the new current reality. Confirm what worked, diagnose mismatches, and hand over a prioritised roadmap for sustained improvement — whether you continue with Aspyre or run it internally.",
    deliverables: [
      "Brief to leadership on the results of the engagement",
      "Roadmap for remaining improvements, implementation plans, expected impacts and validation methods",
    ],
    Icon: Route,
  },
] as const;

const idealFor = [
  "Delivery feels reactive — everything is urgent and nothing ever feels finished",
  "Projects slip repeatedly despite teams working long hours",
  "Cross-functional hand-offs are where work goes to die",
  "Leadership lacks a shared, evidence-based view of where flow breaks down",
  "Your teams are over-inflating timelines to account for process delays like cross-functional hand-overs",
  "Your throughput hasn't scaled at the same rate as your team or organisation has grown",
  "Despite always making what seem to be correct 'in-the-moment' decisions, you seem to be veering further and further away from your desired future state",
  "Either your technical debt is growing, or you are spending a lot of your avaialble development time keeping on top of it",
] as const;

const engagementDetails = [
  {
    label: "Duration",
    value: "4 weeks (28 working days). These can be consecutive, or spread over a longer period of time depending on your needs",
    Icon: Clock,
  },
  {
    label: "Engagement model",
    value: "Embedded with your teams and observing real work in progress — we do not report-from-the-sidelines, and we are not trying to push a \"one size fits all\" solution",
    Icon: Users,
  },
  {
    label: "Scope",
    value: "Varies. We go where the investigation takes us. We may be implementing solutions to address a large, organisation-wide bottleneck, or we may design a repeatable process or tool to be implemented at scale",
    Icon: Target,
  },
] as const;

function WeekCard({
  week,
  title,
  body,
  deliverables,
  Icon,
}: {
  week: string;
  title: string;
  body: string;
  deliverables: readonly string[];
  Icon: LucideIcon;
}) {
  return (
    <div className="group flex h-full flex-col border border-outline-variant/30 bg-surface p-8 transition-all hover:border-primary-container/50">
      <div className="mb-4 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
        {week}
      </div>
      <h3 className="mb-3 font-stitch-display text-2xl font-medium uppercase">{title}</h3>
      <p className="mb-6 font-stitch-body text-sm leading-[160%] text-on-surface-variant">{body}</p>
      <ul className="mb-8 space-y-2">
        {deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 font-stitch-body text-sm text-on-surface-variant">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex shrink-0 justify-center opacity-20 transition-opacity group-hover:opacity-100 md:pt-4">
        <Icon className="h-10 w-10 text-primary-container" aria-hidden />
      </div>
    </div>
  );
}

export function FourWeekIntensiveProgramPage() {
  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-dim px-margin-mobile pb-20 pt-28 md:px-margin-desktop">
        <div className="pointer-events-none absolute inset-0 bg-gradient-kinetic opacity-40" />
        <div className="relative z-10 mx-auto max-w-container-max">
          <p className="mb-6 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.6em] text-primary-container">
            Services
          </p>
          <h1 className="max-w-4xl font-stitch-display text-4xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-[72px] md:leading-[95%]">
            4-Week{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Intensive Program
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            A focused, hands-on engagement to diagnose your biggest bottlenecks, implement high-leverage
            improvements, and leave you with a validated roadmap — all within 28 days.
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

      {/* Week-by-week */}
      <section className="border-b border-outline-variant/10 px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Intensive Program Overview
            </p>
            <h2 className="font-stitch-display text-4xl font-semibold uppercase leading-[105%] text-white md:text-[56px]">
              Four phases
            </h2>
            <p className="mt-4 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
              Each week has a clear objective, defined activities, and tangible deliverables.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden h-px -translate-y-1/2 bg-outline-variant/30 md:block" />
            {weeks.map((w) => (
              <WeekCard key={w.week} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-outline-variant/10 px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-stitch-display text-3xl font-semibold uppercase leading-[105%] text-white md:text-[48px]">
              Pricing and conditions
            </h2>
            <div className="space-y-4 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
              <p>
                The first week of the four week engagement is free. At the conclusion of the first week or at any point thereafter, if you are not convinced with the
                direction of the engagement, you can cancel without any obligation. 
              </p>
              <p>
                  For weeks two to four, labour is charged at AUD$214.47 per hour inclusive of GST.
                Hours are capped at 38 hours per week, which means the maximum cost for the engagement is AUD$24,449.58 (noting that all hours 
                worked in the first week are not billed, neither are any hours worked in excess of 38 hours in weeks two to four).
              </p>
              <p>
                You can cancel at any time, and will only be billed for the hours completed up until the date and time you notify us of the cancellation.
              </p>
              <p>
                You retain ownership of intellectual property of all final deliverables produced specifically for you, while Aspyre retains ownership of
                interlectual property of all underlying methodologies, frameworks and tools used in delivering the service.
              </p>
              <p>
                We are happy to sign a Non Disclosure Agreement (NDA) prior to commencing the engagement, and have a suitable template available if required.
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

      {/* Engagement details */}
      <section className="border-y border-outline-variant/10 bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-12 font-stitch-display text-3xl font-semibold uppercase text-white md:text-[48px]">
            How it works
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
              First week is free
            </h3>
            <p className="max-w-3xl font-stitch-body text-base leading-[160%] text-on-surface-variant">
              No catches.
              <br></br><br></br>
              We are doing this for two main reasons. The first is because we are so certain of the value that we deliver, that we are prepared to make the
              bet that after the first week of engagement, you'll be convinced. The second reason - full disclosure - is because we are new, so we don't 
              (YET!) have an extensive list of satisfied clients to point to, so by providing the first week of work for free, we are trying to share that 
              risk as a show of confidence and good faith.
              <br></br><br></br>
              We also understand that even though you may not pay money for the first week, it still requires an investment of your time, so if you are
              unsure as to whether meeting with us will be a net gain, then feel free to get in touch for an intial consultation call. We can discuss your
              needs and the type of work we do, and you can see whether you feel it might be worthwhile bringing us in to help you.
            </p>
          </div>
        </div>
      </section>

      {/* What you walk away with */}
      <section className="px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-8 font-stitch-display text-3xl font-semibold uppercase text-white md:text-[48px]">
            What you walk away with
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A verified map of your current and desired future reality",
              "Implemented, high-leverage improvements with verified impacts",
              "A prioritised backlog of remaining improvements",
              "A roadmap your team can execute independently",
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

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-32 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-4xl font-semibold uppercase leading-[105%] text-white md:text-[56px]">
            Ready to start?
          </h2>
          <p className="mb-10 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            Book a short discovery call to confirm fit and scope before the engagement begins.
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
