"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { ChevronDown, Menu, X } from "lucide-react";
import { isStitchLayoutPath } from "@/lib/stitch-layout-paths";

type NavChild = { href: string; label: string };

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: NavChild[]; href?: never };

const primaryNav: NavItem[] = [
  {
    label: "Services",
    children: [
      { href: "/services/4-week-intensive-program", label: "4-week intensive program" },
      { href: "/services/optimizing-productivity", label: "Optimizing Productivity" },
      { href: "/services/aligning-operations-to-strategy", label: "Aligning operations to strategy" },
      { href: "/services/project-recovery", label: "Project recovery" },
    ],
  },
  {
    label: "About",
    children: [
      { href: "/about/our-story", label: "Our story" },
      { href: "/about/our-team", label: "Our Team" },
      { href: "/about/our-approach", label: "Our approach" },
      { href: "/about/faq", label: "FAQ" },
    ],
  },
  {
    label: "Customers",
    children: [
      { href: "/customers/who-we-work-with", label: "Who we work with" },
      { href: "/customers/our-results", label: "Our results" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

const navLinkClass =
  "font-stitch-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] text-on-surface-variant transition-colors hover:text-primary";

function NavDropdown({ item }: { item: Extract<NavItem, { children: NavChild[] }> }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`${navLinkClass} inline-flex items-center gap-1`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2 transition-opacity duration-150 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        role="menu"
      >
        <div className="border border-primary/15 bg-surface/95 py-2 shadow-lg backdrop-blur-xl">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 font-stitch-body text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavSection({
  item,
  onNavigate,
}: {
  item: Extract<NavItem, { children: NavChild[] }>;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="border-b border-primary/10 pb-2">
      <button
        type="button"
        className={`${navLinkClass} flex w-full items-center justify-between gap-2 py-2`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div className="flex flex-col gap-1 pl-3 pt-1">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="py-2 font-stitch-body text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant/80 hover:text-primary"
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";
  const isFullBleed = isHome || isStitchLayoutPath(pathname);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-stitch-canvas font-stitch-body text-on-surface">
      <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-container-max items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={closeMobile}
          >
            <Image
              src="/Aspyre%20Logo%20-%20Clear%20background.png"
              alt="Aspyre logo"
              width={160}
              height={32}
              priority
              unoptimized
              className="h-8 w-auto max-w-[140px] object-contain brightness-110 drop-shadow-[0_0_8px_rgba(84,253,240,0.3)] md:max-w-none"
            />
            <Image
              src="/Name%20only.png"
              alt="Aspyre"
              width={96}
              height={26}
              priority
              unoptimized
              className="h-[1.2rem] w-auto object-contain sm:h-[1.4rem]"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {primaryNav.map((item) =>
              "children" in item && item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link key={item.label} href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-primary px-4 py-2 font-stitch-body text-[12px] font-bold uppercase leading-none tracking-[0.1em] text-on-primary transition-all hover:scale-95 hover:bg-primary-container sm:inline-block"
            >
              Contact Us
            </Link>
            {isSignedIn ? (
              <div className="border border-primary-container/40 p-1">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-7 w-7 rounded-none",
                    },
                  }}
                />
              </div>
            ) : null}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-outline-variant/40 text-primary md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <nav
            id="mobile-nav"
            className="border-t border-primary/10 bg-surface px-margin-mobile py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-container-max flex-col gap-1">
              {primaryNav.map((item) =>
                "children" in item && item.children ? (
                  <MobileNavSection
                    key={item.label}
                    item={item}
                    onNavigate={closeMobile}
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${navLinkClass} py-2`}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                className="mt-4 bg-primary px-4 py-3 text-center font-stitch-body text-[12px] font-bold uppercase tracking-[0.1em] text-on-primary"
                onClick={closeMobile}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        ) : null}
      </header>

      <main
        className={
          isFullBleed
            ? "w-full flex-1 pt-0"
            : "mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6"
        }
      >
        {children}
      </main>

      {!isFullBleed ? (
        <footer className="border-t border-[#66FCF1]/25 bg-[#1F2833]/45">
          <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-[#C5C6C7] sm:px-6">
            danieltucker.org
          </div>
        </footer>
      ) : null}
    </div>
  );
}
