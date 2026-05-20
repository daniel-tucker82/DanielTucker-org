/** Routes that render full-bleed Stitch templates (no max-width content shell). */
const STITCH_LAYOUT_PREFIXES = [
  "/services/",
  "/about/",
  "/customers/",
] as const;

const STITCH_LAYOUT_EXACT = ["/blog", "/contact"] as const;

export function isStitchLayoutPath(pathname: string): boolean {
  if ((STITCH_LAYOUT_EXACT as readonly string[]).includes(pathname)) return true;
  return STITCH_LAYOUT_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
