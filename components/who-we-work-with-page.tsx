import Link from "next/link";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Code2,
  Timer,
  Users,
  XCircle,
  type LucideIcon,
} from "lucide-react";

const clientProfiles: ReadonlyArray<{ title: string; body: string; Icon: LucideIcon }> = [
  {
    title: "Growth-stage technology businesses",
    body: "Small to medium software and technology companies that have outgrown informal ways of working but are not ready for enterprise-scale transformation programs.",
    Icon: Building2,
  },
  {
    title: "Leaders accountable for delivery",
    body: "Founders, COOs, heads of engineering, delivery managers, and program leaders who need clearer flow across product, engineering, and operations — and honest insight into where work breaks down.",
    Icon: Users,
  },
  {
    title: "Teams building real products",
    body: "Organisations shipping software, platforms, or technology-enabled services where throughput, hand-offs, and prioritisation directly affect revenue and customer outcomes.",
    Icon: Code2,
  },
] as const;

const goodFitSignals = [
  "Delivery feels reactive — everything is urgent and little feels truly finished",
  "Projects slip despite teams working long hours",
  "Cross-functional hand-offs are where work stalls or bounces back",
  "Leadership lacks a shared, evidence-based view of where flow breaks down",
  "Throughput has not scaled at the same rate as headcount or revenue",
  "You want practical improvements without a full process or tooling overhaul",
] as const;

const painSignals = [
  "Development projects are consistently \"down to the wire\"",
  "Schedules include heavy buffer for cross-functional delays",
  "A few key people carry an endless backlog while others wait on them",
  "Top priorities shift faster than teams can finish work",
  "Known technical debt ships to meet deadlines",
] as const;

const notIdealFor = [
  "You are looking for a large-scale Agile or SAFe rollout as the primary deliverable",
  "You need a permanent embedded delivery manager to run day-to-day stand-ups indefinitely",
  "Leadership is not willing to engage with findings or remove blockers at pace",
  "You want a generic playbook applied without regard to your context",
] as const;

export function WhoWeWorkWithPage() {
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
            Who we{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Work with
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Aspyre partners with leaders and teams who want to improve how work flows — without
            unnecessary disruption, dogma, or theatre.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        <div className="mx-auto max-w-container-max">
          <p className="mx-auto max-w-3xl text-center font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            We are not a fit for every organisation. The clients who get the most value are
            growth-stage technology businesses ready for direct conversation, evidence-led diagnosis,
            and targeted change — led by someone who has operated in high-accountability
            environments and complex delivery settings.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 bg-surface-container-low px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-10 font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            Typical clients
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {clientProfiles.map(({ title, body, Icon }) => (
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto grid max-w-container-max gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Good fit
            </p>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              You are likely a strong match if
            </h2>
            <ul className="mt-8 space-y-3">
              {goodFitSignals.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-primary-container bg-surface-container/50 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-container" aria-hidden />
                  <span className="font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-error">
              Common symptoms
            </p>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              Chaos and churn ≠ productivity
            </h2>
            <p className="mt-4 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
              If several of these sound familiar, you are probably busy — but not necessarily
              productive in the way that moves the business forward.
            </p>
            <ul className="mt-8 space-y-3">
              {painSignals.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-error/80 bg-error-container/5 px-4 py-3"
                >
                  <Timer className="mt-0.5 h-5 w-5 shrink-0 text-error" aria-hidden />
                  <span className="font-stitch-body text-sm leading-[160%] text-on-error-container/90 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 bg-surface-container-low px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                Working together
              </p>
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
                What we need from you
              </h2>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                Engagements move quickly. The best results come when leadership provides access,
                transparency, and the authority to act on findings — especially for intensive
                programs with a short window to deliver value.
              </p>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                See our{" "}
                <Link href="/prerequisites" className="text-primary-container underline-offset-4 hover:underline">
                  engagement prerequisites
                </Link>{" "}
                for the full list of what makes a partnership work.
              </p>
            </div>
            <div>
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-on-surface-variant">
                Honest fit check
              </p>
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
                When we are not the right partner
              </h2>
              <ul className="mt-8 space-y-3">
                {notIdealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border border-outline-variant/25 bg-surface px-4 py-3"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-on-surface-variant" aria-hidden />
                    <span className="font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        <div className="mx-auto max-w-container-max border border-primary-container/20 bg-primary-container/5 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 shrink-0 text-primary-container" aria-hidden />
            <div>
              <h2 className="font-stitch-display text-xl font-semibold uppercase text-white md:text-2xl">
                A new practice, an experienced operator
              </h2>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                Aspyre is a new consultancy. We are transparent about that. What we offer is deep
                experience in delivery leadership, bottleneck thinking, and practical improvement —
                applied with a bias for honesty, speed, and respect for your teams. If the fit is
                right, we would rather earn your trust through the work than through marketing claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-20 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Sound like you?
          </h2>
          <p className="mb-10 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Start with a short conversation, or explore the{" "}
            <Link href="/services/4-week-intensive-program" className="text-primary-container hover:underline">
              4-week intensive program
            </Link>{" "}
            — the first week is free.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
            >
              Contact Aspyre
            </Link>
            <Link
              href="/about/our-approach"
              className="inline-block border border-primary-container/50 px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-primary-container transition-colors hover:bg-primary-container/10"
            >
              Our approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
