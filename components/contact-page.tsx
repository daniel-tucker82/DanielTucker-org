import { ContactForm } from "@/components/contact-form";
import { StitchHeroBackground, stitchPageHeroSectionClass } from "@/components/stitch-hero-background";

export function ContactPage() {
  return (
    <div className="bg-stitch-canvas font-stitch-body text-on-surface">
      <section
        className={`${stitchPageHeroSectionClass} px-margin-mobile pb-16 pt-28 md:px-margin-desktop md:pb-20`}
      >
        <StitchHeroBackground />
        <div className="relative z-10 mx-auto max-w-container-max">
          <p className="mb-4 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.6em] text-primary-container">
            Contact
          </p>
          <h1 className="max-w-3xl font-stitch-display text-4xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-5xl">
            Start the{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Conversation
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Tell us about your current challenges and goals — we will get back to you as soon as we
            can.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        <div className="mx-auto grid max-w-container-max gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="border border-outline-variant/25 bg-surface-container-low p-8 lg:col-span-5 lg:p-10">
            <h2 className="mb-6 font-stitch-display text-xl font-semibold uppercase text-primary-container">
              Get in touch
            </h2>
            <div className="space-y-4 font-stitch-body text-base leading-[160%] text-on-surface-variant">
              <p>Based in Australia. Remote and on-site engagements available.</p>
              <p>Send the form and we will respond by email.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
