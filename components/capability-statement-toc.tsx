"use client";

import { useCallback, useEffect, useState } from "react";
import type { CapabilityNavItem } from "@/lib/page-content/capability-statement";

/** Extra space below the fixed header when scrolling to a heading. */
const SCROLL_BUFFER_PX = 12;

function getHeaderOffset(): number {
  const header = document.querySelector("header");
  if (!header) return 112;
  return header.getBoundingClientRect().height + SCROLL_BUFFER_PX;
}

function isHeadingFullyVisible(el: HTMLElement, headerOffset: number): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top >= headerOffset && rect.bottom <= window.innerHeight;
}

function resolveActiveSection(
  items: readonly CapabilityNavItem[],
  headerOffset: number,
): string {
  if (items.length === 0) return "";

  // Prefer the last heading that is fully visible below the site header.
  let activeFromFullyVisible: string | null = null;
  for (const { id } of items) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (isHeadingFullyVisible(el, headerOffset)) {
      activeFromFullyVisible = id;
    }
  }
  if (activeFromFullyVisible) return activeFromFullyVisible;

  const atPageBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atPageBottom) return items[items.length - 1].id;

  // While reading a long section, keep the last heading that has reached the header
  // (even if that heading has since scrolled off-screen).
  let active = items[0].id;
  for (const { id } of items) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= headerOffset) {
      active = id;
    }
  }

  return active;
}

export function CapabilityStatementToc({ items }: { items: readonly CapabilityNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = getHeaderOffset();
    const top = window.scrollY + el.getBoundingClientRect().top - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    setActiveId(id);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const next = resolveActiveSection(items, getHeaderOffset());
      setActiveId((prev) => (prev === next ? prev : next));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-28 z-40 max-h-[calc(100vh-8rem)] w-28 shrink-0 overflow-y-auto border border-outline-variant/25 bg-surface-container-low/95 p-3 backdrop-blur-sm"
    >
      <p className="mb-2 font-stitch-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-container">
        On this page
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map(({ id, label }) => {
          const isActive = id === activeId;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(id);
                }}
                className={`block border-l-2 py-1 pl-2 font-stitch-body text-[10px] font-semibold uppercase leading-tight tracking-wide transition-colors ${
                  isActive
                    ? "border-primary-container text-primary-container"
                    : "border-transparent text-on-surface-variant hover:border-primary-container/40 hover:text-primary-container"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
