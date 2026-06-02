/**
 * Multi-domain Clerk configuration for aspyreconsulting.com.au and danieltucker.org.
 *
 * Admin auth uses same-origin /sign-in (see middleware.ts). For production, Clerk
 * Dashboard must use Aspyre as the primary domain so sessions are not forced to
 * danieltucker.org — see .env.example.
 */

const ASPYRE_HOSTS = new Set([
  "aspyreconsulting.com.au",
  "www.aspyreconsulting.com.au",
]);

const DANIEL_HOSTS = new Set(["danieltucker.org", "www.danieltucker.org"]);

export const SITE_ORIGINS = [
  "https://www.aspyreconsulting.com.au",
  "https://aspyreconsulting.com.au",
  "https://www.danieltucker.org",
  "https://danieltucker.org",
] as const;

export const PRIMARY_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_PRIMARY_ORIGIN ??
  "https://www.aspyreconsulting.com.au";

export function normalizeHost(host: string): string {
  return host.split(":")[0].toLowerCase();
}

export function isAspyreHost(host: string): boolean {
  return ASPYRE_HOSTS.has(normalizeHost(host));
}

export function isDanielHost(host: string): boolean {
  return DANIEL_HOSTS.has(normalizeHost(host));
}

type ClerkHostOptions = {
  isSatellite?: boolean;
  domain?: string;
  signInUrl?: string;
  signUpUrl?: string;
  allowedRedirectOrigins?: string[];
};

function clerkOptionsForProductionHosts(): ClerkHostOptions {
  return {
    signInUrl: "/sign-in",
    signUpUrl: "/sign-up",
    allowedRedirectOrigins: [...SITE_ORIGINS],
  };
}

/** Options for ClerkProvider (server layout). */
export function getClerkProviderProps(host: string): ClerkHostOptions {
  if (isAspyreHost(host) || isDanielHost(host)) {
    return clerkOptionsForProductionHosts();
  }

  return { allowedRedirectOrigins: [...SITE_ORIGINS] };
}

/** Options for clerkMiddleware (second argument). */
export function getClerkMiddlewareOptions(host: string): ClerkHostOptions {
  return getClerkProviderProps(host);
}
