import Image from "next/image";
import Link from "next/link";
import {
  AlertCircleIcon,
  BarChart3,
  CalendarPlus2Icon,
  ChevronDown,
  FileWarningIcon,
  GanttChartIcon,
  HashIcon,
  Layers,
  Microscope,
  Quote,
  RefreshCw,
  RefreshCwOff,
  Repeat1Icon,
  RepeatIcon,
  Route,
  Target,
  TimerIcon,
  TriangleAlert,
  UserIcon,
  Zap,
  type LucideIcon,
} from "lucide-react";

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
            Productivity. Performance. Delivery.
          </p>
          <h1 className="font-stitch-display text-[60px] font-extrabold uppercase leading-[0.9] tracking-tighter text-white md:text-[110px] md:leading-[95%] md:tracking-[-0.04em]">
            BUILD A <br></br>HIGH-THROUGHPUT <br />
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              DELIVERY ENGINE
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
              Contact Aspyre
              <span className="pointer-events-none absolute -inset-2 rounded-lg border border-primary-container/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
          <span className="font-stitch-body text-[10px] font-semibold uppercase tracking-widest text-primary-container/60">
            Initiate scroll
          </span>
          <ChevronDown
            className="h-9 w-9 animate-bounce text-primary-container"
            aria-hidden
          />
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
              Chaos and churn ≠ productivity
            </div>
            <h2 className="font-stitch-display text-4xl font-semibold uppercase leading-[105%] text-white md:text-[64px] md:leading-[110%]">
              Your team is <span className="text-error">always working hard</span> so you must be productive
            </h2>
            <div className="space-y-4 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
              <p>
                If any of the following describe your work environment, then probably not:
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <TimerIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                 all of your development projects are &quot;down to the wire&quot;
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <CalendarPlus2Icon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  you add excessive buffer to project schedules to compensate for delayed cross-functional hand-overs
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <UserIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  a few key staff are always in demand, with a never-ending backlog of work
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <HashIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  the top priority projects always seem to be changing
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <FileWarningIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  everything always seems urgent and your teams are burning themselves out to keep up
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <AlertCircleIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  you release product with known technical debt in order to meet a deadline
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <RepeatIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  your code regularly goes stale and has to be re-worked
                </span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-error bg-error-container/5 p-4">
                <GanttChartIcon className="h-6 w-6 shrink-0 text-error" aria-hidden />
                <span className="font-stitch-body text-[14px] font-medium leading-[140%] text-on-error-container">
                  your team has more active projects than you can keep track of
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
                  OUR STEPS TO FIND FOCUS
                </div>
              </div>
              <code className="block space-y-1 font-stitch-body text-xs text-error">
                <div>{">"} FIND THE BOTTLENECK</div>
                <div>{">"} OPTIMISE OPERATIONS FOR THE BOTTLENECK</div>
                <div>{">"} CURATE AND COORDINATE WORK TO MAXIMISE FLOW</div>
                <div>{">"} UPGRADE THE BOTTLENECK</div>
                <div>{">"} START AGAIN</div>
              </code>
            </div>
          </div>
          <div className="flex justify-center pt-4 md:col-span-2 md:pt-16">
            <Link
              href="/contact"
              className="group pulse-cta-error relative inline-block bg-error px-12 py-6 font-stitch-display text-[12px] font-black uppercase leading-none tracking-[0.1em] text-black transition-all hover:scale-110 active:scale-95"
            >
              Aspyre can help, contact us today
              <span className="pointer-events-none absolute -inset-2 rounded-lg border border-error/50 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our method */}
      <section id="our-method" className="scroll-mt-28 relative bg-stitch-canvas py-32">
        <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-error to-primary-container" />
        <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <div className="mb-6 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-widest text-primary-container">
            change for the better
          </div>
          <h2 className="mb-12 font-stitch-display text-4xl font-semibold uppercase leading-[105%] md:text-[64px] md:leading-[110%]">
            Maximise your return on the investment you <span className="text-primary-container">already made</span> in your team
          </h2>
          <div className="grid gap-gutter md:grid-cols-3">
            {(
              [
                {
                  Icon: Layers,
                  title: "Minimal disruption",
                  body: "No new processes and tools to learn, no complicated re-structuring, cultural shifts or staff training. Just \
                  pinpointing your biggest bottlenecks and implementing some simple habits or behaviours to optimise flow.",
                },
                {
                  Icon: Zap,
                  title: "Tailored solutions",
                  body: "We don't use a \"one-size-fits-all\" approach. We tailor our solutions to meet the specific needs of your team and organisation \
                  and we don't rely on AI to solve problems that take years of experience, knowledge and intuition to understand.",
                },
                {
                  Icon: BarChart3,
                  title: "Zero risk",
                  body: "We are so confident in our ability to deliver \"real\" value, that we offer the first week of our engagement for free. \
                  If, at the conclusion of that week, you don't like the direction we are heading, you can walk away with no obligation to pay.",
                },
              ] satisfies { Icon: LucideIcon; title: string; body: string }[]
            ).map((card) => (
              <div
                key={card.title}
                className="group border-t border-primary/20 bg-surface-container-low p-8 transition-all hover:bg-surface-container-high"
              >
                <div className="mb-6">
                  <card.Icon
                    className="h-10 w-10 text-primary-container transition-transform group-hover:scale-110"
                    aria-hidden
                  />
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
                4-Week Productivity Programme
              </h2>
              <p className="font-stitch-body text-lg leading-[160%] text-on-surface-variant">
                In just 28 days we can identify your biggest bottlenecks, diagnose their root causes, and implement solutions to optimise flow.
                days.
              </p>
            </div>
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden h-px -translate-y-1/2 bg-outline-variant/30 md:block" />
            {(
              [
                {
                  week: "WEEK 1",
                  title: "Understand the current reality",
                  body: "Interviewing staff to understand pain points and start to uncover bottlenecks and their root causes.",
                  Icon: Microscope,
                },
                {
                  week: "WEEK 2",
                  title: "Test hypotheses and build a plan",
                  body: "Construct a complete current reality tree, and identify improvements which can be injected to shift the current reality towards the desired future reality.",
                  Icon: Target,
                },
                {
                  week: "WEEK 3",
                  title: "Low-hanging fruit",
                  body: "Implementation of changes which have the best value-to-effort ratio (focussing on those which can be implemented within the time available).",
                  Icon: RefreshCw,
                },
                {
                  week: "WEEK 4",
                  title: "Validation and Roadmap",
                  body: "Test the efficacy of the changes implemented in week 3, and hand-over a roadmap for ongoing improvements.",
                  Icon: Route,
                },
              ] satisfies { week: string; title: string; body: string; Icon: LucideIcon }[]
            ).map((w) => (
              <div
                key={w.week}
                className="group relative z-10 flex h-full flex-col border border-outline-variant/30 bg-surface p-8 transition-all hover:border-primary-container/50"
              >
                <div className="mb-4 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary-container">
                  {w.week}
                </div>
                <h4 className="mb-2 font-stitch-display text-2xl font-medium uppercase">{w.title}</h4>
                <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">{w.body}</p>
                <div className="mt-8 flex shrink-0 justify-center opacity-20 transition-opacity group-hover:opacity-100 md:mt-auto md:pt-8">
                  <w.Icon className="h-10 w-10 text-primary-container" aria-hidden />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-28 bg-stitch-canvas py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="relative w-full">
            <div className="absolute -inset-4 rounded-full bg-primary-container/5 blur-3xl" />
            <div className="relative border border-outline-variant/30 bg-surface-container-low p-12">
              <Quote className="mb-8 h-14 w-14 text-primary-container opacity-40" aria-hidden />
              <p className="mb-8 font-stitch-display text-[28px] italic text-white">
                &quot;Aspyre Pty Ltd is a new company. I have had a long and successful career accelerating teams and un-blocking projects,
                and while I could add a quote here about the work I've done, or even invent one, I believe it is best to be honest. There is no list of customers
                lining up to add thier quotes to my page because Aspyre is brand new, but I DO know with absolute certainty that I'm great at what I do, and if 
                you allow me to work with you, it will be your glowing recommendation that appears here on my website in short order.&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQGdZlHxP7_bYw/profile-displayphoto-crop_800_800/B56Z34Jer7HEAI-/0/1777984729989?e=1781136000&v=beta&t=v__CUyVv5dq7rHBSrgnfd0MfN6Ie99nC9Nqmh37t6LI"
                  alt="Daniel Tucker"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded object-cover"
                />
                <div>
                  <div className="font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-primary">
                    Daniel Tucker
                  </div>
                  <div className="font-stitch-body text-xs text-on-surface-variant">
                    Founder and Principal Consultant
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
            Aspyre helps small to medium technology businesses optimise their productivity without radical changes to processes, 
            tooling or culture. We focus on identifying the bottlenecks that are preventing you from delivering value faster, 
            and making targeted changes to unblock them.
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
            Take the first step towards a high-throughput engine. Contact us to arrange a free initial consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary px-12 py-6 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary shadow-2xl transition-all hover:-translate-y-1 hover:bg-primary-container hover:text-on-primary-container"
          >
            Book initial consultation
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
