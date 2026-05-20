"use client";

import Image from "next/image";
import { useState } from "react";
import { profileExperienceSections } from "@/lib/page-content/profile-sections";

export function TeamProfileExperience() {
  const [selected, setSelected] = useState(0);
  const active = profileExperienceSections[selected];

  return (
    <section className="py-24 max-w-max-width mx-auto px-gutter">
      <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-outline-variant/30 teal-glow">
            <Image
              src="/Profile%20Image%202a.jpg"
              alt="Daniel Tucker"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 320px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
          </div>
          <h2 className="mt-4 font-headline-md text-white">Daniel Tucker</h2>
          <p className="font-label-sm text-primary-fixed">Founder, Aspyre Consulting</p>
        </div>

        <div className="lg:col-span-8">
          <h3 className="font-headline-md text-white mb-4">Experience</h3>
          <p className="mb-6 text-on-surface-variant">
            A career spanning defence, consulting, and technology leadership.
          </p>
          <div className="flex flex-col gap-2">
            {profileExperienceSections.map((section, index) => {
              const isActive = index === selected;
              return (
                <button
                  key={section.heading}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "border-primary-fixed/30 bg-primary-fixed/10 text-primary-fixed"
                      : "border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="font-body-md text-body-md">{section.heading}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-primary-fixed" />
          <span className="font-label-sm uppercase tracking-widest text-primary-fixed">
            {active.heading}
          </span>
        </div>
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant mb-6">
          {active.lead}
        </p>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {active.body}
        </p>
      </div>
    </section>
  );
}
