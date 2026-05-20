import type { StitchTemplateId } from "./types";

export type StitchTemplateMeta = {
  id: StitchTemplateId;
  /** Source file under templates/stitch/ */
  filename: string;
  title: string;
  description: string;
  /** Templates with inline scripts (modals, accordions) need a client enhancement pass before production use. */
  hasInlineScripts: boolean;
};

export const STITCH_TEMPLATES: Record<StitchTemplateId, StitchTemplateMeta> = {
  content: {
    id: "content",
    filename: "content.html",
    title: "Content page",
    description:
      "Hero, bento feature grid, vertical roadmap timeline, and CTA — general marketing / service detail pages.",
    hasInlineScripts: true,
  },
  team: {
    id: "team",
    filename: "team.html",
    title: "Team",
    description: "Leadership grid, culture spotlight, and hiring CTA.",
    hasInlineScripts: true,
  },
  projects: {
    id: "projects",
    filename: "projects.html",
    title: "Projects & testimonials",
    description: "Portfolio bento grid, testimonial strip, case-study modal, and metrics.",
    hasInlineScripts: true,
  },
  contact: {
    id: "contact",
    filename: "contact.html",
    title: "Contact",
    description: "Inquiry form, office locations, and regional imagery.",
    hasInlineScripts: true,
  },
  blog: {
    id: "blog",
    filename: "blog.html",
    title: "Blog / insights",
    description: "Featured article hero, category filters, and article grid.",
    hasInlineScripts: true,
  },
  faq: {
    id: "faq",
    filename: "faq.html",
    title: "FAQ",
    description: "Category sidebar, accordion Q&A, and related-resources cards.",
    hasInlineScripts: true,
  },
};

export const STITCH_TEMPLATE_LIST = Object.values(STITCH_TEMPLATES);
