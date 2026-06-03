import Image from "next/image";
import Link from "next/link";
import { Download, type LucideIcon } from "lucide-react";
import {
  buildCapabilityStatementNav,
  CAPABILITY_STATEMENT_PDF_FILENAME,
  CAPABILITY_STATEMENT_PDF_PATH,
  capabilityAnchorId,
  capabilityContacts,
  capabilityOutlineHeading,
  focusMethodSteps,
  howWeWorkIntro,
  optimizingProductivityFeatures,
  optimizingProductivityIntro,
  realityShapingSteps,
  whereWeOperateBullets,
  whyWorkWithAspyre,
} from "@/lib/page-content/capability-statement";
import { CapabilityStatementToc } from "@/components/capability-statement-toc";
import { StitchHeroBackground, stitchPageHeroSectionClass } from "@/components/stitch-hero-background";

const capabilityNav = buildCapabilityStatementNav();

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="scroll-mt-[7.5rem] font-stitch-display text-2xl font-bold uppercase tracking-wide text-primary-container md:text-3xl"
      >
        {children}
      </h2>
      <div className="mt-3 h-px w-full bg-primary-container/60" aria-hidden />
    </div>
  );
}

function SubsectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="mb-3 scroll-mt-28 font-stitch-body text-lg font-semibold text-primary-container"
    >
      {children}
    </h3>
  );
}

function CapabilityDocSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[7.5rem] border-b border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-container-max">{children}</div>
    </section>
  );
}

function SplitStepRow({
  label,
  body,
  Icon,
}: {
  label: string;
  body: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-[minmax(140px,220px)_1fr]">
      <div className="flex flex-col items-center justify-center gap-3 border border-outline-variant/25 bg-surface-container-high px-4 py-8 text-center md:py-10">
        <Icon className="h-10 w-10 text-primary-container" aria-hidden />
        <span className="font-stitch-body text-sm font-bold leading-snug text-white">{label}</span>
      </div>
      <div className="flex items-center border border-outline-variant/25 bg-surface-container-low px-6 py-6 md:px-8 md:py-8">
        <p className="font-stitch-body text-sm leading-[165%] text-on-surface-variant md:text-base">{body}</p>
      </div>
    </div>
  );
}

export function CapabilityStatementPage() {
  return (
    <div className="bg-stitch-canvas font-stitch-body text-on-surface">
      <section
        className={`${stitchPageHeroSectionClass} px-margin-mobile pb-20 pt-28 md:px-margin-desktop`}
      >
        <StitchHeroBackground />
        <div className="relative z-10 mx-auto max-w-container-max">
          <p className="mb-4 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.6em] text-primary-container">
            Services
          </p>
          <h1 className="max-w-4xl font-stitch-display text-4xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-[56px]">
            Capability{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Statement
            </span>
          </h1>
          <div className="mt-8">
            <a
              href={CAPABILITY_STATEMENT_PDF_PATH}
              download={CAPABILITY_STATEMENT_PDF_FILENAME}
              className="inline-flex items-center gap-3 border border-primary-container/40 bg-primary-container/10 px-6 py-4 font-stitch-body text-sm font-semibold uppercase tracking-[0.08em] text-primary-container transition-colors hover:border-primary-container hover:bg-primary-container/20"
            >
              <Download className="h-5 w-5 shrink-0" aria-hidden />
              Download capability statement (PDF)
            </a>
          </div>
        </div>
      </section>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_min(100%,90rem)_minmax(0,1fr)]">
        <div className="hidden xl:flex xl:col-start-1 xl:justify-end xl:pe-6">
          <CapabilityStatementToc items={capabilityNav} />
        </div>

        <div className="min-w-0 scroll-pt-[7.5rem] xl:col-start-2">
      {/* Cover */}
      <CapabilityDocSection id="cover" className="bg-surface-dim">
        <div className="flex min-h-[70vh] flex-col items-center justify-center py-8 text-center">
          <p className="mb-16 font-stitch-body text-sm text-on-surface-variant">Capability Statement 2026</p>
          <Image
            src="/Aspyre%20Logo%20-%20Clear%20background.png"
            alt="Aspyre"
            width={280}
            height={280}
            unoptimized
            className="mb-10 h-auto w-48 max-w-[280px] object-contain brightness-110 drop-shadow-[0_0_24px_rgba(84,253,240,0.35)] md:w-64"
            priority
          />
          <p className="mb-4 font-stitch-display text-4xl font-bold uppercase tracking-[0.35em] text-white md:text-5xl">
            ASPYRE
          </p>
          <p className="mb-20 font-stitch-body text-lg font-bold text-white md:text-xl">
            Productivity. Performance. Delivery
          </p>
          <div className="max-w-2xl">
            <p className="font-stitch-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
              Operational velocity for tech SMBs
            </p>
            <p className="mt-4 font-stitch-body text-base leading-[165%] text-on-surface-variant md:text-lg">
              We transform legacy operational friction into a high-velocity delivery pipeline.
            </p>
          </div>
          <div className="mt-auto w-full pt-24 text-left md:max-w-md md:self-start">
            <p className="font-stitch-body text-sm leading-relaxed text-on-surface-variant">
              <span className="font-bold text-white">Founder:</span> Daniel Tucker
            </p>
            <p className="mt-2 font-stitch-body text-sm leading-relaxed text-on-surface-variant">
              <span className="font-bold text-white">Location:</span> Sydney, NSW
            </p>
            <p className="mt-2 font-stitch-body text-sm leading-relaxed text-on-surface-variant">
              <span className="font-bold text-white">Website:</span>{" "}
              <a
                href="https://www.aspyreconsulting.com.au"
                className="text-primary-container hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aspyreconsulting.com.au
              </a>
            </p>
          </div>
        </div>
      </CapabilityDocSection>

      {/* Optimizing productivity */}
      <CapabilityDocSection>
        <SectionHeading id="optimizing-productivity">
          {capabilityOutlineHeading("optimizing-productivity")}
        </SectionHeading>
        <p className="mb-10 max-w-4xl font-stitch-body text-base leading-[165%] text-on-surface-variant">
          {optimizingProductivityIntro}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {optimizingProductivityFeatures.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center border border-outline-variant/25 bg-surface-container-high px-6 py-10 text-center"
            >
              <Icon className="mb-5 h-12 w-12 text-primary-container" aria-hidden />
              <h3 className="mb-3 font-stitch-body text-base font-bold text-white">{title}</h3>
              <p className="font-stitch-body text-sm leading-[165%] text-on-surface-variant">{body}</p>
            </div>
          ))}
        </div>
      </CapabilityDocSection>

      {/* Why work with Aspyre */}
      <CapabilityDocSection className="bg-surface-container-low/40">
        <SectionHeading id="why-work-with-aspyre">
          {capabilityOutlineHeading("why-work-with-aspyre")}
        </SectionHeading>
        <div className="space-y-8">
          {whyWorkWithAspyre.map(({ title, body }) => (
            <div key={title}>
              <SubsectionHeading id={capabilityAnchorId(title)}>{title}</SubsectionHeading>
              <p className="font-stitch-body text-base leading-[165%] text-on-surface-variant">{body}</p>
            </div>
          ))}
        </div>
      </CapabilityDocSection>

      {/* How we work */}
      <CapabilityDocSection>
        <SectionHeading id="how-we-work">{capabilityOutlineHeading("how-we-work")}</SectionHeading>
        <p className="mb-10 max-w-4xl font-stitch-body text-base leading-[165%] text-on-surface-variant">
          {howWeWorkIntro}
        </p>
        <SubsectionHeading id="reality-shaping">
          {capabilityOutlineHeading("reality-shaping")}
        </SubsectionHeading>
        <div className="space-y-2">
          {realityShapingSteps.map((step) => (
            <SplitStepRow key={step.label} {...step} />
          ))}
        </div>
      </CapabilityDocSection>

      {/* FOCUS method */}
      <CapabilityDocSection className="bg-surface-container-low/40">
        <SubsectionHeading id="focus-method">{capabilityOutlineHeading("focus-method")}</SubsectionHeading>
        <div className="mt-6 space-y-2">
          {focusMethodSteps.map((step) => (
            <SplitStepRow key={step.label} {...step} />
          ))}
        </div>
      </CapabilityDocSection>

      {/* Where we operate & contact */}
      <CapabilityDocSection>
        <SectionHeading id="where-we-operate">
          {capabilityOutlineHeading("where-we-operate")}
        </SectionHeading>
        <div className="space-y-4 font-stitch-body text-base leading-[165%] text-on-surface-variant">
          <p>We operate in the Greater Sydney area.</p>
          <p>
            We prefer to operate through in-person engagements, and can travel for up to 1 week at a time to
            other locations if required.
          </p>
          <p>We support businesses operating across:</p>
          <ul className="list-none space-y-1 pl-1">
            {whereWeOperateBullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Although these are our areas of expertise and focus, our knowledge and methods work for any teams
            or organisations in which a system of varied inputs work together in a structured, or
            semi-structured way to generate a valuable product or service (i.e. manufacturing, managed
            services etc)
          </p>
        </div>

        <div className="mt-16">
          <SectionHeading id="contact">{capabilityOutlineHeading("contact")}</SectionHeading>
          <p className="mb-2 font-stitch-body text-base leading-[165%] text-on-surface-variant">
            Let&apos;s have a conversation about accelerating your operational flow.
          </p>
          <p className="mb-8 font-stitch-body text-base font-semibold text-on-surface-variant">Contact us:</p>
          <ul className="space-y-6">
            {capabilityContacts.map(({ label, href, display, Icon }) => (
              <li key={label} className="flex items-center gap-5">
                <Icon className="h-10 w-10 shrink-0 text-primary-container" aria-hidden />
                {label === "Phone" ? (
                  <a href={href} className="font-stitch-body text-lg text-white hover:text-primary-container">
                    {display}
                  </a>
                ) : (
                  <a
                    href={href}
                    className="font-stitch-body text-base text-primary-container underline-offset-4 hover:underline md:text-lg"
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                  >
                    {display}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CapabilityDocSection>

      <section className="relative overflow-hidden border-t border-outline-variant/10 px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 font-stitch-body text-lg leading-[160%] text-on-surface-variant">
            Prefer the printable version? Download the full capability statement as a PDF.
          </p>
          <a
            href={CAPABILITY_STATEMENT_PDF_PATH}
            download={CAPABILITY_STATEMENT_PDF_FILENAME}
            className="inline-flex items-center gap-3 bg-primary px-10 py-5 font-stitch-display text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container"
          >
            <Download className="h-5 w-5 shrink-0" aria-hidden />
            Download PDF
          </a>
          <p className="mt-10">
            <Link
              href="/contact"
              className="font-stitch-body text-sm uppercase tracking-widest text-primary-container hover:underline"
            >
              Or contact Aspyre
            </Link>
          </p>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
