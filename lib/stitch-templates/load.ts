import { readFile } from "fs/promises";
import path from "path";
import { parseStitchTemplateHtml, type ParsedStitchTemplate } from "./parse";
import { STITCH_TEMPLATES } from "./registry";
import type { StitchTemplateId } from "./types";

const TEMPLATES_DIR = path.join(process.cwd(), "templates", "stitch");

export async function loadStitchTemplateRaw(id: StitchTemplateId): Promise<string> {
  const meta = STITCH_TEMPLATES[id];
  const filePath = path.join(TEMPLATES_DIR, meta.filename);
  return readFile(filePath, "utf-8");
}

export async function loadStitchTemplate(id: StitchTemplateId): Promise<ParsedStitchTemplate> {
  const raw = await loadStitchTemplateRaw(id);
  return parseStitchTemplateHtml(raw);
}
