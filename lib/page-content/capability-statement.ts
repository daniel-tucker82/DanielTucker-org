import type { LucideIcon } from "lucide-react";
import {
  Crosshair,
  GitBranch,
  Globe,
  Hourglass,
  Link2,
  Mail,
  MapPin,
  Microscope,
  Mountain,
  Phone,
  RefreshCw,
  RotateCcw,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const CAPABILITY_STATEMENT_PDF_PATH = "/Capability%20Statement%202026.pdf";
export const CAPABILITY_STATEMENT_PDF_FILENAME = "Capability Statement 2026.pdf";

/** Stable anchor id from heading or subsection title text. */
export function capabilityAnchorId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type CapabilityNavItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

type CapabilityOutlineEntry = {
  id: string;
  heading: string;
  level: 2 | 3;
};

/**
 * Source of truth for capability statement section headings and in-page navigation.
 * Add or reorder entries here; the page TOC and anchor targets update automatically.
 */
export const capabilityStatementOutline: readonly CapabilityOutlineEntry[] = [
  { id: "cover", heading: "Overview", level: 2 },
  { id: "optimizing-productivity", heading: "Optimizing productivity", level: 2 },
  { id: "why-work-with-aspyre", heading: "Why work with Aspyre", level: 2 },
  { id: "how-we-work", heading: "How we work", level: 2 },
  { id: "reality-shaping", heading: "Reality shaping", level: 3 },
  { id: "focus-method", heading: "FOCUS method", level: 3 },
  { id: "where-we-operate", heading: "Where we operate", level: 2 },
  {
    id: "contact",
    heading: "Build your high-throughput delivery engine",
    level: 2,
  },
] as const;

/** Top-level (h2) entries for the floating on-page navigation. */
export function buildCapabilityStatementNav(): CapabilityNavItem[] {
  return capabilityStatementOutline
    .filter((entry) => entry.level === 2)
    .map((entry) => ({
      id: entry.id,
      label: entry.heading,
      level: 2 as const,
    }));
}

export function capabilityOutlineHeading(id: string): string {
  const entry = capabilityStatementOutline.find((item) => item.id === id);
  if (!entry) {
    throw new Error(`Unknown capability outline id: ${id}`);
  }
  return entry.heading;
}

export const optimizingProductivityIntro =
  "We support Australian tech businesses to design and implement operational systems that maximize throughput. We focus on tech SMBs where inefficient systems and bottlenecks directly constrain growth. Scaling inefficient workflows only scales friction. We add value by cutting through the noise to build resilient, high-velocity delivery engines.";

export const optimizingProductivityFeatures: ReadonlyArray<{
  title: string;
  body: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Designing your future reality",
    body: "We identify real, impactful injection points to shift your current reality to your desired future reality.",
    Icon: GitBranch,
  },
  {
    title: "Focus on bottlenecks",
    body: "We find the bottlenecks limiting your productivity and offer specific solutions to address them",
    Icon: Hourglass,
  },
  {
    title: "Big picture",
    body: "We give you the tools and frameworks to help you make decisions which benefit your organization long-term.",
    Icon: Mountain,
  },
  {
    title: "Targeted value",
    body: "Improvement in the wrong area can have the opposite of the intended effect. We direct effort to where it is most impactful.",
    Icon: Target,
  },
] as const;

export const whyWorkWithAspyre: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Solutions fit for your business",
    body: "Aspyre doesn\u2019t use out-of-the-box, one-size-fits-all methodologies, though we may borrow elements from all of them. Instead, we focus on deeply understanding your business to architect structures, tools and methodologies that fit your specific needs and minimise transitional pain.",
  },
  {
    title: "Focus on bottlenecks",
    body: "A bottleneck is a resource, tool, policy, process or system which limits the throughput of your organisation. Directing attention to improving throughput in any area outside the bottleneck will fail to increase productivity and can decrease it. By finding your organisation\u2019s bottlenecks, we ensure we focus on implementing changes that achieve maximum return of value, for minimal impact.",
  },
  {
    title: "Deep knowledge",
    body: "Aspyre\u2019s founder, Daniel Tucker, has had a long and varied career building the deep knowledge necessary to deliver a world-class service. The one consistent theme throughout Daniel\u2019s career has been a laser focus on finding innovative ways to increase productivity and improve ways of working. Daniel now brings this skill to Aspyre, where SMBs can benefit from his deep knowledge and experience in operational excellence and productivity.",
  },
  {
    title: "Disproportionate return",
    body: "Small, targeted incremental changes can be more impactful than large, disruptive initiatives. The first week of our engagement is focussed on understanding your business and finding the high leverage points where specific shifts can have a huge impact. We are so confident in the value we can provide with our approach, that if you engage with us for an initial period of four weeks or more, we provide the first week of the engagement completely free. If you are not convinced by the end of the first week (or any time thereafter), then you can terminate the engagement with no additional fees or penalties.",
  },
  {
    title: "Long-term solutions",
    body: "Every solution we propose and implement is done with long-term sustainability and growth in mind. We live in a time of rapid change in all areas of business, any solution developed to fit a current reality without being able to adapt to change, is simply not fit for purpose in today\u2019s environment.",
  },
] as const;

export const howWeWorkIntro =
  "We have two main operating models and can employ one or both depending on the needs of your organisation. Note, these are how we, Aspyre, operate to find solutions for you. However the solutions generated are bespoke and unique to your needs.";

export const realityShapingSteps: ReadonlyArray<{
  label: string;
  body: string;
  Icon: LucideIcon;
}> = [
  {
    label: "Current reality",
    body: "We start by identifying key pain points within the business. Through interviews with leaders and frontline staff, and investigation into internal tools and processes, we start to build out a current reality tree which maps \u2013 as thoroughly as possible \u2013 the underlying causes of each of these pain points, working backwards until we reach the root causes.",
    Icon: Microscope,
  },
  {
    label: "Test hypotheses",
    body: "Once our current reality tree is developed, we test the causal links wherever possible, using quantitative methods as much as possible. This is to ensure that our understanding of the current reality is as accurate as possible. Once our current reality tree is validated, we then identify and overlay injection points \u2013 these are the points in the current reality tree that we can inject changes which we expect to cause the current reality to shift.",
    Icon: Crosshair,
  },
  {
    label: "Initial implementation",
    body: "We categorize our identified injections in terms of implementation effort and impact and select the highest impact to effort ratio injections for implementation. We choose the highest impact and lowest effort injections to roll out first, and for each identify key metrics which can be reviewed both before and after the change, to verify definitively that the change has the intended impact on the current reality.",
    Icon: RefreshCw,
  },
  {
    label: "Validation and roadmap",
    body: "After a change is implemented and enough time has passed to gather data, we confirm that it had the intended effect. If it didn\u2019t, then we identify why the expected outcomes were not observed. We also finalize a roadmap, mapping out the continued process of design, implementation and validation of injections. I can remain engaged throughout this process, or I can hand the roadmap over to internal staff to carry forward.",
    Icon: MapPin,
  },
] as const;

export const focusMethodSteps: ReadonlyArray<{
  label: string;
  body: string;
  Icon: LucideIcon;
}> = [
  {
    label: "Find the bottleneck",
    body: "A bottleneck can be anything that limits the overall throughput of an organization or team. It can be a staff member or resource (or a skillset), or even a policy or regulation. We investigate the way your work flows in your organisation to identify your bottleneck, ensuring the following steps are directed at areas that are most impactful.",
    Icon: Microscope,
  },
  {
    label: "Optimise for the bottleneck",
    body: "We identify work the bottleneck must do, and work the bottleneck doesn\u2019t need to do. In cases where bottlenecks are people or resources, we regularly find that 20 \u2013 30% of the workload is something that could be done by someone else. By shifting work to non-bottleneck resources, or by ensuring non-bottleneck resources do whatever they can to expedite the bottleneck\u2019s work, we often gain huge productivity increases with minimal structural or process change.",
    Icon: Target,
  },
  {
    label: "Collaborate, coordinate and curate work",
    body: "The bottleneck is the thing that governs the throughput of the whole team. This means, that if the bottleneck is not doing productive work, then the productivity of the entire system is depleted. We therefore structure our work pipeline in a way that ensures the bottleneck always has work to do but is never overloaded. Their backlog should be large enough to compensate for blockages in upstream steps, but not so large as to overload and slow down the bottleneck.",
    Icon: Users,
  },
  {
    label: "Upgrade the bottleneck",
    body: "Once you have done the work to identify the bottleneck, protect their ability to do the work that only they can do, and structured your flow of work around optimising their throughput, you can then investigate increasing capacity. This may mean recruiting, purchasing equipment or tools, re-assigning staff to new roles or out-sourcing.",
    Icon: TrendingUp,
  },
  {
    label: "Start again",
    body: "Whenever you make changes in the flow of a system to optimise the throughput of the bottleneck, the bottleneck can shift. The FOCUS method is an ongoing, continuous method which requires constant confirmation to ensure the bottleneck has not moved to a new location (if it has, doing further improvements will no longer be effective). Although start again is the last step in this process, it is \u2013 in actuality \u2013 done continuously throughout the process to ensure the location of the bottleneck is always known and changes are effective.",
    Icon: RotateCcw,
  },
] as const;

export const whereWeOperateBullets = [
  "Software Engineering Teams,",
  "Tech SMBs,",
  "AI & Emerging Technology,",
  "Digital Prototyping.",
] as const;

export const capabilityContacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-tucker82",
    display: "https://www.linkedin.com/in/daniel-tucker82",
    Icon: Link2,
  },
  {
    label: "Website",
    href: "https://www.aspyreconsulting.com.au",
    display: "https://www.aspyreconsulting.com.au",
    Icon: Globe,
  },
  {
    label: "Email",
    href: "mailto:daniel@aspyreconsulting.com.au",
    display: "daniel@aspyreconsulting.com.au",
    Icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+61404848859",
    display: "+61 404 848 859",
    Icon: Phone,
  },
] as const;
