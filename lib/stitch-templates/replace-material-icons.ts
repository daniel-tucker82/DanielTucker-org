import "server-only";

import { STITCH_MATERIAL_ICON_SVGS } from "./material-icon-svgs";

const MATERIAL_ICON_RE =
  /<(span|div)(\s[^>]*\bmaterial-symbols-outlined\b[^>]*)>([^<]+)<\/\1>/gi;

function isFilledIcon(attrs: string): boolean {
  return /FILL['"]\s*1|data-weight=["']fill/i.test(attrs);
}

function sizeClassFromAttrs(attrs: string): string {
  if (/text-6xl/.test(attrs)) return "h-14 w-14";
  if (/text-4xl/.test(attrs)) return "h-10 w-10";
  if (/text-3xl/.test(attrs)) return "h-8 w-8";
  if (/text-\[14px\]/.test(attrs)) return "h-3.5 w-3.5";
  if (/text-\[20px\]/.test(attrs)) return "h-5 w-5";
  if (/text-sm/.test(attrs)) return "h-4 w-4";
  return "h-6 w-6";
}

function buildIconClassName(attrs: string, filled: boolean): string {
  const classMatch = attrs.match(/class="([^"]*)"/);
  const preserved = classMatch
    ? classMatch[1]
        .split(/\s+/)
        .filter((c) => c && c !== "material-symbols-outlined")
        .join(" ")
    : "";
  const size = sizeClassFromAttrs(attrs);
  const fill = filled ? "fill-current" : "";
  return ["inline-block shrink-0", size, fill, preserved].filter(Boolean).join(" ");
}

function applySvgClass(svgTemplate: string, className: string, filled: boolean): string {
  let svg = svgTemplate.replace("__CLASS__", className);
  if (filled) {
    svg = svg.replace('fill="none"', 'fill="currentColor"');
  }
  return svg;
}

/**
 * Replaces Material Symbols placeholder markup in Stitch template HTML with Lucide SVGs.
 * Parent `font-body-md` inherits Inter/Geist and prevents the icon font from rendering.
 */
export function replaceMaterialSymbolsInHtml(html: string): string {
  return html.replace(MATERIAL_ICON_RE, (_match, _tag, attrs, iconName) => {
    const name = iconName.trim();
    const svgTemplate = STITCH_MATERIAL_ICON_SVGS[name];
    if (!svgTemplate) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[stitch] unknown material icon: ${name}`);
      }
      return _match;
    }

    const filled = isFilledIcon(attrs);
    const className = buildIconClassName(attrs, filled);
    return applySvgClass(svgTemplate, className, filled);
  });
}
