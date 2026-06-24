"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { RecommendationsCarousel } from "@/components/recommendations-carousel";
import { getRecommendationsForTeamMember } from "@/lib/page-content/recommendations";
import { teamMembers, type TeamMember } from "@/lib/page-content/team-members";

const GALLERY_SCROLL_PX = 200;

function ExperienceAccordion({
  member,
  expandedIndex,
  onToggle,
}: {
  member: TeamMember;
  expandedIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-stitch-display text-xl font-semibold uppercase text-white md:text-2xl">
          Experience
        </h3>
        <p className="mt-2 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
          {member.experienceIntro}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {member.experience.map((section, index) => {
          const isOpen = expandedIndex === index;
          return (
            <div
              key={section.heading}
              className={`overflow-hidden border transition-colors ${
                isOpen
                  ? "border-primary-container/40 bg-surface-container-high"
                  : "border-outline-variant/25 bg-surface/60"
              }`}
            >
              <button
                type="button"
                onClick={() => onToggle(index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left md:px-5 md:py-4"
                aria-expanded={isOpen}
              >
                <span
                  className={`font-stitch-body text-xs font-semibold uppercase tracking-[0.06em] md:text-sm ${
                    isOpen ? "text-primary-container" : "text-on-surface"
                  }`}
                >
                  {section.heading}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary-container transition-transform md:h-5 md:w-5 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen ? (
                <div className="border-t border-outline-variant/20 px-4 pb-4 pt-1 md:px-5 md:pb-5">
                  <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant">
                    {section.lead}
                  </p>
                  <p className="mt-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant/90">
                    {section.body}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeamGalleryCard({
  member,
  isSelected,
  onSelect,
}: {
  member: TeamMember;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group shrink-0 snap-start text-left transition-all ${
        isSelected ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
      aria-pressed={isSelected}
      aria-current={isSelected ? "true" : undefined}
    >
      <div
        className={`relative h-24 w-24 overflow-hidden border-2 transition-all duration-300 ease-out md:h-28 md:w-28 ${
          isSelected
            ? "border-primary-container shadow-[0_0_20px_rgba(74,242,225,0.25)] ring-2 ring-primary-container/30"
            : "border-outline-variant/40"
        } group-hover:border-primary-container/70 group-hover:shadow-[0_0_22px_rgba(74,242,225,0.4)] group-hover:ring-1 group-hover:ring-primary-container/40 ${
          member.isPlaceholder ? "bg-surface-container-high" : ""
        }`}
      >
        <Image
          src={member.imageSrc}
          alt={member.imageAlt}
          fill
          unoptimized
          className={`object-cover transition-transform duration-300 ease-out group-hover:scale-[1.08] ${
            member.isPlaceholder
              ? "object-contain p-2 opacity-90"
              : isSelected
                ? "grayscale-0"
                : "grayscale group-hover:grayscale-0"
          }`}
          sizes="112px"
        />
      </div>
      <p
        className={`mt-2 w-28 font-stitch-display text-[11px] font-semibold uppercase leading-tight transition-colors duration-300 md:w-32 md:text-xs ${
          isSelected ? "text-white" : "text-on-surface-variant group-hover:text-white"
        }`}
      >
        {member.name}
      </p>
      <p className="mt-0.5 w-28 break-words font-stitch-body text-[10px] uppercase leading-snug tracking-[0.08em] text-primary-container/80 md:w-32">
        {member.isPlaceholder ? "Preview" : member.role.split(",")[0]}
      </p>
    </button>
  );
}

export function OurTeamPageContent() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const active = teamMembers[selectedIndex];
  const activeRecommendations = getRecommendationsForTeamMember(active.id);

  const scrollGallery = useCallback((direction: -1 | 1) => {
    galleryRef.current?.scrollBy({
      left: direction * GALLERY_SCROLL_PX,
      behavior: "smooth",
    });
  }, []);

  const selectMember = useCallback((index: number) => {
    setSelectedIndex(index);
    setExpandedExperience(null);
  }, []);

  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      {/* Compact hero + team gallery */}
      <section className="relative overflow-hidden border-b border-outline-variant/10 bg-gradient-to-br from-[#003732] via-[#005049] to-surface-dim px-margin-mobile pb-8 pt-24 md:px-margin-desktop md:pb-10 md:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 35%, rgba(85, 250, 233, 0.45) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-kinetic opacity-60" />
        <div className="pointer-events-none absolute -right-16 top-0 z-0 h-48 w-48 rounded-full bg-primary-container/20 blur-[72px] md:h-72 md:w-72" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 z-0 h-32 w-64 rounded-full bg-primary/10 blur-[64px]" />
        <div className="relative z-10 mx-auto max-w-container-max">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.5em] text-primary-container">
                About
              </p>
              <h1 className="font-stitch-display text-3xl font-extrabold uppercase leading-[105%] tracking-tighter text-white md:text-5xl">
                Our{" "}
                <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
                  Team
                </span>
              </h1>
              <p className="mt-3 font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
                Select a team member to view their profile and experience.
              </p>
            </div>

            <div className="w-full lg:max-w-md xl:max-w-lg">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="font-stitch-body text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                  Team
                </p>
                {teamMembers.length > 1 ? (
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => scrollGallery(-1)}
                      className="inline-flex h-8 w-8 items-center justify-center border border-outline-variant/40 text-primary-container hover:bg-surface-container-high"
                      aria-label="Scroll team gallery left"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollGallery(1)}
                      className="inline-flex h-8 w-8 items-center justify-center border border-outline-variant/40 text-primary-container hover:bg-surface-container-high"
                      aria-label="Scroll team gallery right"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                ) : null}
              </div>
              <div
                ref={galleryRef}
                className="flex gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
              >
                {teamMembers.map((member, index) => (
                  <TeamGalleryCard
                    key={member.id}
                    member={member}
                    isSelected={index === selectedIndex}
                    onSelect={() => selectMember(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile + experience — visible without scrolling past a tall hero */}
      <section className="px-margin-mobile py-10 md:px-margin-desktop md:py-14">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="mx-auto w-full max-w-[320px] border border-outline-variant/30 bg-surface-container-high p-2 lg:mx-0 lg:max-w-none">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  width={active.imageWidth}
                  height={active.imageHeight}
                  unoptimized
                  className={`mx-auto h-auto w-full max-h-[min(72vh,560px)] ${
                    active.isPlaceholder ? "p-6 opacity-95" : ""
                  }`}
                  sizes="(max-width: 1024px) 320px, 33vw"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              {active.isPlaceholder ? (
                <span className="mb-3 inline-block border border-outline-variant/40 bg-surface-container-high px-2 py-1 font-stitch-body text-[10px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                  Placeholder profile
                </span>
              ) : null}
              <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
                {active.name}
              </h2>
              <p className="mt-2 font-stitch-body text-xs font-semibold uppercase tracking-[0.1em] text-primary-container md:text-sm">
                {active.role}
              </p>
              <p className="mt-5 font-stitch-body text-base leading-[160%] text-on-surface-variant">
                {active.intro}
              </p>

              <div className="mt-8 md:mt-10">
                <ExperienceAccordion
                  member={active}
                  expandedIndex={expandedExperience}
                  onToggle={(index) =>
                    setExpandedExperience((prev) => (prev === index ? null : index))
                  }
                />
              </div>
            </div>
          </div>

          {active.showRecommendations ? (
            <div className="mt-12 border-t border-outline-variant/20 pt-12 md:mt-14 md:pt-14">
              <p className="mb-5 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
                Recommendations
              </p>
              <RecommendationsCarousel
                key={active.id}
                recommendations={activeRecommendations}
                memberName={active.name}
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-outline-variant/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max text-center">
          <p className="mb-4 font-stitch-body text-[12px] font-semibold uppercase tracking-widest text-primary-container">
            Interested in working together?
          </p>
          <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-4xl">
            Let&apos;s work together
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-primary-container px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-on-primary-container transition-all hover:bg-primary-container/90"
            >
              Contact us
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
