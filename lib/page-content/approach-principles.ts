import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  GitBranch,
  Handshake,
  Layers,
  Microscope,
  RefreshCw,
  Route,
  Users,
  TrendingUp,
} from "lucide-react";

export type ApproachPrinciple = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

export const guidingPrinciples: ApproachPrinciple[] = [
  {
    title: "People first",
    body: "The success of a company still depends on its people. I seek to remember that people want respect and dignity at work. Start with those, and most people will work with you in good faith.",
    Icon: Users,
  },
  {
    title: "Seek first to understand",
    body: "A career of diverse and challenging roles has taught me how to get to the heart of issues. I know when I've found the root cause of a problem, or if more digging is required.",
    Icon: Microscope,
  },
  {
    title: "One- or two-way doors",
    body: "Decisions that are low risk and reversible should be made quickly. High-risk, irreversible decisions deserve care and consideration.",
    Icon: GitBranch,
  },
  {
    title: "You win, or you learn",
    body: "Handing over responsibility either improves productivity now, or teaches through experience, improving productivity later.",
    Icon: TrendingUp,
  },
  {
    title: "Ditch the dogma",
    body: "Take from Agile, PRINCE2, Kanban and other methods what fits your organisation — and leave behind what is unnecessary or counter-productive.",
    Icon: BookOpen,
  },
  {
    title: "Win-win",
    body: "Changes that benefit one stakeholder but make life harder for another are not sustainable. It is worth finding solutions that genuinely improve work-life for everyone involved.",
    Icon: Handshake,
  },
  {
    title: "Automate what repeats",
    body: "If it's worth doing twice, it's worth never doing manually again. One-off tasks can be done by hand; repeated work should be automated as much as practical.",
    Icon: RefreshCw,
  },
  {
    title: "Long-term over quick fixes",
    body: "Quick fixes can create bigger issues later. Improvements should be robust and sustainable to ensure long-term value.",
    Icon: Route,
  },
  {
    title: "Minimal disruption",
    body: "No unnecessary new processes, tools, or restructures. Pinpoint bottlenecks and introduce simple habits that optimise flow for the teams doing the work.",
    Icon: Layers,
  },
];

export const focusLoopSteps = [
  "Find the bottleneck",
  "Optimise operations for the bottleneck",
  "Curate and coordinate work to maximise flow",
  "Upgrade the bottleneck",
  "Start again",
] as const;
