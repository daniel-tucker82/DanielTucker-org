"use client";

import Link from "next/link";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { ChevronDown, HelpCircle, Layers, Shield, Timer, Users } from "lucide-react";
import { faqCategories, type FaqAnswerLink, type FaqCategory } from "@/lib/page-content/faq";

function renderFaqAnswer(answer: string, links?: FaqAnswerLink[]) {
  if (!links?.length) {
    return answer;
  }

  const parts: ReactNode[] = [];
  let remaining = answer;

  for (const link of links) {
    const index = remaining.indexOf(link.text);
    if (index === -1) {
      continue;
    }

    if (index > 0) {
      parts.push(remaining.slice(0, index));
    }

    parts.push(
      <Link
        key={`${link.href}-${link.text}`}
        href={link.href}
        className="text-primary-container underline-offset-4 hover:underline"
      >
        {link.text}
      </Link>,
    );

    remaining = remaining.slice(index + link.text.length);
  }

  if (remaining) {
    parts.push(remaining);
  }

  return parts.length > 0 ? parts : answer;
}

const categoryIcons: Record<string, typeof HelpCircle> = {
  "working-with-aspyre": HelpCircle,
  "four-week-program": Timer,
  engagements: Layers,
  "practical-fit": Shield,
};

function FaqAccordionItem({
  itemId,
  question,
  answer,
  links,
  isOpen,
  onToggle,
}: {
  itemId: string;
  question: string;
  answer: string;
  links?: FaqAnswerLink[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-outline-variant/30 last:border-b-0">
      <button
        type="button"
        id={`${itemId}-button`}
        aria-expanded={isOpen}
        aria-controls={`${itemId}-panel`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span
          className={`font-stitch-body text-base leading-[140%] transition-colors md:text-lg ${
            isOpen ? "text-primary-container" : "text-on-surface hover:text-primary-container"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary-container transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        id={`${itemId}-panel`}
        role="region"
        aria-labelledby={`${itemId}-button`}
        hidden={!isOpen}
        className="pb-4"
      >
        <p className="font-stitch-body text-sm leading-[160%] text-on-surface-variant md:text-base">
          {renderFaqAnswer(answer, links)}
        </p>
      </div>
    </div>
  );
}

function FaqCategorySection({
  category,
  openItemId,
  onToggleItem,
}: {
  category: FaqCategory;
  openItemId: string | null;
  onToggleItem: (id: string) => void;
}) {
  const Icon = categoryIcons[category.id] ?? HelpCircle;

  return (
    <section
      id={category.id}
      className="scroll-mt-28 border border-outline-variant/25 bg-surface-container-low p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-3 border-l-4 border-primary-container pl-4">
        <Icon className="h-6 w-6 text-primary-container" aria-hidden />
        <h2 className="font-stitch-display text-xl font-semibold uppercase text-white md:text-2xl">
          {category.label}
        </h2>
      </div>
      <div>
        {category.items.map((item, index) => {
          const itemId = `${category.id}-${index}`;
          return (
            <FaqAccordionItem
              key={itemId}
              itemId={itemId}
              question={item.question}
              answer={item.answer}
              links={item.links}
              isOpen={openItemId === itemId}
              onToggle={() => onToggleItem(itemId)}
            />
          );
        })}
      </div>
    </section>
  );
}

export function FaqPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId);
    const el = document.getElementById(categoryId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCategories = normalizedQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              item.question.toLowerCase().includes(normalizedQuery) ||
              item.answer.toLowerCase().includes(normalizedQuery),
          ),
        }))
        .filter((category) => category.items.length > 0)
    : faqCategories;

  const navCategories = filteredCategories;

  const handleToggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overflow-x-hidden bg-stitch-canvas font-stitch-body text-on-surface">
      <section className="relative overflow-hidden border-b border-outline-variant/10 bg-gradient-to-br from-[#003732] via-[#005049] to-surface-dim px-margin-mobile pb-10 pt-24 md:px-margin-desktop md:pb-12 md:pt-28">
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
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-primary bg-clip-text text-transparent text-glow-cyan">
              Questions
            </span>
          </h1>
          <p className="mt-5 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant md:text-lg">
            Practical answers about working with Aspyre, our programs, and what to expect from an
            engagement.
          </p>
          <label className="relative mt-8 block max-w-xl">
            <span className="sr-only">Search FAQ</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenItemId(null);
              }}
              placeholder="Search questions..."
              className="w-full border border-outline-variant/40 bg-surface-container-high/80 py-3.5 pl-4 pr-4 font-stitch-body text-base text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container"
            />
          </label>
        </div>
      </section>

      <section className="px-margin-mobile py-12 md:px-margin-desktop md:py-16">
        <div className="mx-auto grid max-w-container-max gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <p className="mb-4 font-stitch-body text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
              Categories
            </p>
            <nav className="flex flex-col gap-1" aria-label="FAQ categories">
              {navCategories.map((category) => {
                const Icon = categoryIcons[category.id] ?? HelpCircle;
                const isActive = activeCategoryId === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => scrollToCategory(category.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-left font-stitch-body text-sm transition-colors ${
                      isActive
                        ? "border border-primary-container/30 bg-primary-container/10 text-primary-container"
                        : "border border-transparent text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    {category.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div ref={mainRef} className="space-y-8 lg:col-span-9">
            {filteredCategories.length === 0 ? (
              <p className="font-stitch-body text-base text-on-surface-variant">
                No questions match your search. Try different keywords or{" "}
                <button
                  type="button"
                  className="text-primary-container underline-offset-4 hover:underline"
                  onClick={() => setSearchQuery("")}
                >
                  clear the search
                </button>
                .
              </p>
            ) : (
              filteredCategories.map((category) => (
                <FaqCategorySection
                  key={category.id}
                  category={category}
                  openItemId={openItemId}
                  onToggleItem={handleToggleItem}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container-low px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto max-w-container-max text-center">
          <Users className="mx-auto mb-4 h-10 w-10 text-primary-container" aria-hidden />
          <h2 className="font-stitch-display text-2xl font-semibold uppercase text-white md:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-stitch-body text-base leading-[160%] text-on-surface-variant">
            Book a short call and we can talk through your situation — no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-primary-container px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-on-primary-container transition-all hover:bg-primary-container/90"
            >
              Contact Aspyre
            </Link>
            <Link
              href="/prerequisites"
              className="inline-block border border-primary-container/50 px-10 py-4 font-stitch-display text-[12px] font-bold uppercase tracking-[0.1em] text-primary-container transition-colors hover:bg-primary-container/10"
            >
              Prerequisites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
