import Link from "next/link";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const beliefs = [
  {
    title: "Productivity is not the same as busyness",
    body: "Teams can work long hours and still miss deadlines. Real productivity is measured by throughput, flow, and whether the organisation is moving toward its goals.",
    Icon: Target,
  },
  {
    title: "Small changes, outsized impact",
    body: "You do not need a full restructure or a new methodology rollout. Often the biggest gains come from finding the right bottleneck and making targeted improvements that teams can adopt quickly.",
    Icon: Zap,
  },
  {
    title: "People do the work",
    body: "Sustainable improvement respects the people on the ground. Solutions should make daily work easier, not harder — and they should be designed with the teams who will use them.",
    Icon: Users,
  },
] as const;

const milestones = [
  {
    period: "Founding",
    title: "Aspyre is born",
    body: "After years leading technical programs and delivery teams — and a deliberate break to reflect, build, and recharge — Daniel Tucker founded Aspyre to help growth-stage businesses improve how work flows without unnecessary disruption.",
  },
  {
    period: "Today",
    title: "A focused practice",
    body: "Aspyre is a new consultancy with a clear offer: diagnose bottlenecks, implement high-leverage improvements, and leave clients with a roadmap they can run themselves. The first week of the intensive program is free so you can judge fit before committing.",
  },
  {
    period: "What's next",
    title: "Growing with clients",
    body: "We are building our track record one engagement at a time. Every client who works with Aspyre helps shape how we refine our services — and we are honest that the best proof will come from the results we deliver together.",
  },
] as const;

export function OurStoryPage() {
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
            About
          </p>
          <h1 className="max-w-3xl font-stitch-display text-3xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Story
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Aspyre exists to help technology businesses deliver more reliably — by improving flow,
            removing friction, and building systems that teams can sustain.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto grid max-w-container-max gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              Why Aspyre exists
            </h2>
            <div className="mt-6 space-y-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
              <p>
                Too many growing tech companies hit the same wall: teams are busy, priorities keep
                shifting, and delivery still feels unpredictable. Leaders are told to adopt new
                frameworks, new tools, or wholesale cultural change — but those approaches often add
                complexity without fixing what is actually slowing work down.
              </p>
              <p>
                Aspyre was founded on a simpler premise. Find where flow breaks in your organisation,
                address the root causes with practical changes, and help your people get more done
                without burning out. Daniel Tucker brings more than a decade of leadership in
                high-stakes environments — from the Australian Army to global software delivery — and
                applies that experience to the operational challenges growth-stage businesses face
                today.
              </p>
            </div>
          </div>
          <div className="border border-outline-variant/25 bg-surface-container-low p-8 md:p-10">
            <p className="font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              In one sentence
            </p>
            <p className="mt-4 font-stitch-display text-xl font-medium leading-[140%] text-white md:text-2xl">
              We help small to medium technology businesses optimise productivity without radical
              changes to processes, tooling, or culture.
            </p>
            <p className="mt-6 font-stitch-body text-sm leading-[160%] text-on-surface-variant">
              That line has guided the work from day one. It is the same promise on our homepage,
              and it is what every engagement is designed to deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 bg-surface-container-low px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-4 font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            What we believe
          </h2>
          <p className="mb-10 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant">
            These principles shape how we diagnose problems, work with teams, and recommend
            changes.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {beliefs.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="border border-outline-variant/25 bg-surface p-8 transition-colors hover:border-primary-container/30"
              >
                <Icon className="mb-4 h-8 w-8 text-primary-container" aria-hidden />
                <h3 className="mb-3 font-stitch-display text-lg font-semibold uppercase text-white">
                  {title}
                </h3>
                <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-10 font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            Where we are today
          </h2>
          <div className="space-y-6">
            {milestones.map(({ period, title, body }) => (
              <div
                key={title}
                className="grid gap-4 border-l-2 border-primary-container bg-surface-container/40 p-6 md:grid-cols-[140px_1fr] md:gap-8 md:p-8"
              >
                <p className="font-stitch-body text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-container">
                  {period}
                </p>
                <div>
                  <h3 className="font-stitch-display text-lg font-semibold uppercase text-white">
                    {title}
                  </h3>
                  <p className="mt-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-8 font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            Who we work with
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Growth-stage technology businesses where delivery has not kept pace with headcount",
              "Leaders who want evidence-based insight, not another slide deck of generic advice",
              "Teams stuck in reactive mode — everything urgent, nothing reliably finished",
              "Organisations open to targeted change and honest conversation about what is not working",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-outline-variant/20 bg-surface-container-low p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-container" aria-hidden />
                <span className="font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-stitch-body text-base leading-[160%] text-on-surface-variant">
            If that sounds like your situation, explore our{" "}
            <Link href="/services/4-week-intensive-program" className="text-primary-container underline-offset-4 hover:underline">
              4-week intensive program
            </Link>
            , our{" "}
            <Link href="/about/our-approach" className="text-primary-container underline-offset-4 hover:underline">
              approach
            </Link>
            , or{" "}
            <Link href="/about/our-team" className="text-primary-container underline-offset-4 hover:underline">
              meet the team
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-20 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Want to hear more?
          </h2>
          <p className="mb-10 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Book a short conversation to talk through your context and whether Aspyre is the right
            fit.
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
