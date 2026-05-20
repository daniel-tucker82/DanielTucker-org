import { replaceMaterialSymbolsInHtml } from "./replace-material-icons";

export type ParsedStitchTemplate = {
  /** Inner HTML of <main> (nav/footer excluded for SiteLayout integration). */
  mainHtml: string;
  /** Concatenated <style> block contents from the document <head>. */
  styleCss: string;
  /** Raw inline script bodies before </body> (preview / future client hooks). */
  scriptBodies: string[];
};

const MAIN_RE = /<main\b[^>]*>([\s\S]*?)<\/main>/i;
const STYLE_RE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const SCRIPT_RE = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

export function parseStitchTemplateHtml(rawHtml: string): ParsedStitchTemplate {
  const mainMatch = rawHtml.match(MAIN_RE);
  if (!mainMatch) {
    throw new Error("Stitch template is missing a <main> element.");
  }

  const styleCss = [...rawHtml.matchAll(STYLE_RE)]
    .map((match) => match[1].trim())
    .filter(Boolean)
    .join("\n\n");

  const scriptBodies = [...rawHtml.matchAll(SCRIPT_RE)]
    .map((match) => match[1].trim())
    .filter((body) => body.length > 0 && !body.includes("tailwind.config"));

  return {
    mainHtml: replaceMaterialSymbolsInHtml(mainMatch[1].trim()),
    styleCss,
    scriptBodies,
  };
}
