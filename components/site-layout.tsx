"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircuitBoard } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "My Approach" },
  { href: "/prerequisites", label: "Prerequisites" },
  { href: "/profile", label: "Profile" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-[#66FCF1]/35 bg-[#0B0C10]/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-[#66FCF1]"
          >
            <CircuitBoard className="h-4 w-4" />
            danieltucker.org
          </Link>
          <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1 text-xs font-mono uppercase tracking-[0.16em]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border px-3 py-2 transition-colors ${
                    active
                      ? "border-[#66FCF1] text-white"
                      : "border-transparent text-[#C5C6C7] hover:border-[#66FCF1]/40 hover:text-white"
                  } rounded-none`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
            {isSignedIn ? (
              <div className="border border-[#66FCF1]/40 p-1">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-7 w-7 rounded-none",
                    },
                  }}
                />
              </div>
            ) : (
              <SignInButton mode="redirect" fallbackRedirectUrl="/admin">
                <button
                  type="button"
                  className="rounded-none border border-[#66FCF1] px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                >
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">{children}</main>
      <footer className="border-t border-[#66FCF1]/25 bg-[#1F2833]/45">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-[#C5C6C7] sm:px-6">
          danieltucker.org
        </div>
      </footer>
    </div>
  );
}
