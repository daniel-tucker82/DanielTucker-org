"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  focusLoopSteps,
  guidingPrinciples,
  type ApproachPrinciple,
} from "@/lib/page-content/approach-principles";

function PrincipleCard({ title, body, Icon }: ApproachPrinciple) {
  return (
    <article className="flex h-full flex-col border border-outline-variant/25 bg-surface p-6 transition-colors hover:border-primary-container/35 hover:bg-surface-container-high md:p-8">
      <Icon className="mb-4 h-8 w-8 text-primary-container" aria-hidden />
      <h3 className="mb-3 font-stitch-display text-base font-semibold uppercase leading-tight text-white md:text-lg">
        {title}
      </h3>
      <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">{body}</p>
    </article>
  );
}

function PrincipleAccordion({
  principle,
  isOpen,
  onToggle,
}: {
  principle: ApproachPrinciple;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { title, body, Icon } = principle;
  return (
    <div
      className={`overflow-hidden border transition-colors ${
        isOpen
          ? "border-primary-container/40 bg-surface-container-high"
          : "border-outline-variant/25 bg-surface/60"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5"
        aria-expanded={isOpen}
      >
        <Icon className="h-5 w-5 shrink-0 text-primary-container" aria-hidden />
        <span
          className={`flex-1 font-stitch-body text-sm font-semibold uppercase tracking-[0.06em] ${
            isOpen ? "text-primary-container" : "text-on-surface"
          }`}
        >
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary-container transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      {isOpen ? (
        <div className="border-t border-outline-variant/20 px-4 pb-4 pt-1 md:px-5 md:pb-5">
          <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">{body}</p>
        </div>
      ) : null}
    </div>
  );
}

export function OurApproachPage() {
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null);

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
              Approach
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Pragmatic principles that guide how I work with leaders and teams — combining rigorous
            problem-solving with respect for the people doing the work.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        <div className="mx-auto max-w-container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              Pragmatic innovation
            </h2>
            <p className="mt-5 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
              Aspyre does not sell a proprietary framework or a one-size-fits-all transformation.
              Every organisation has its own constraints, culture, and goals. These principles are
              how I stay grounded while diagnosing bottlenecks, designing improvements, and helping
              teams adopt changes that actually stick.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 bg-surface-container-low px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
              Guiding principles
            </p>
            <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
              How decisions get made
            </h2>
            <p className="mt-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
              Tap a principle on mobile to read more. On larger screens, browse the full grid.
            </p>
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {guidingPrinciples.map((principle) => (
              <PrincipleCard key={principle.title} {...principle} />
            ))}
          </div>

          <div className="flex flex-col gap-2 md:hidden">
            {guidingPrinciples.map((principle, index) => (
              <PrincipleAccordion
                key={principle.title}
                principle={principle}
                isOpen={openPrinciple === index}
                onToggle={() =>
                  setOpenPrinciple((prev) => (prev === index ? null : index))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
                In practice
              </p>
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
                The focus loop
              </h2>
              <p className="mt-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                When improving productivity, I work through a repeating cycle — the same logic we
                use on the homepage and in our intensive program. There is always a constraint; the
                job is to find it, relieve it, and then find the next one.
              </p>
            </div>
            <ol className="space-y-0 border border-outline-variant/30 bg-surface-dim">
              {focusLoopSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 border-b border-outline-variant/20 px-5 py-5 last:border-b-0 md:px-6 md:py-6"
                >
                  <span className="font-stitch-display text-2xl font-bold leading-none text-primary-container/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 font-stitch-body text-sm font-semibold uppercase tracking-[0.06em] text-on-surface md:text-base">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container-low px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max">
          <h2 className="mb-8 font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            What you can expect from an engagement
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Evidence-led diagnosis — interviews, observation, and your real systems of record",
              "Root-cause thinking, not symptom-chasing or blame",
              "Changes sized for your team’s capacity to adopt them",
              "Clear handover so improvements continue after the engagement ends",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-primary-container bg-surface px-5 py-4 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 font-stitch-body text-base leading-[160%] text-on-surface-variant">
            See how this plays out in our{" "}
            <Link
              href="/services/4-week-intensive-program"
              className="text-primary-container underline-offset-4 hover:underline"
            >
              4-week intensive program
            </Link>{" "}
            or read{" "}
            <Link
              href="/about/our-story"
              className="text-primary-container underline-offset-4 hover:underline"
            >
              our story
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-20 md:px-margin-desktop">
        <div className="scanline absolute left-0 right-0 top-0" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Ready to talk?
          </h2>
          <p className="mb-10 font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            If these principles resonate with how you want your organisation to operate, I would
            like to hear what you are working on.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-primary-container px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-on-primary-container transition-all hover:bg-primary-container/90"
            >
              Contact Daniel
            </Link>
            <Link
              href="/customers/our-results"
              className="inline-block border border-primary-container/50 px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-primary-container transition-colors hover:bg-primary-container/10"
            >
              Our results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
