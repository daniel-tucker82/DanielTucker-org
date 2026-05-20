export const STITCH_TEMPLATE_IDS = [
  "content",
  "team",
  "projects",
  "contact",
  "blog",
  "faq",
] as const;

export type StitchTemplateId = (typeof STITCH_TEMPLATE_IDS)[number];

export function isStitchTemplateId(value: string): value is StitchTemplateId {
  return (STITCH_TEMPLATE_IDS as readonly string[]).includes(value);
}
