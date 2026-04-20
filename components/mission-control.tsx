"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Gauge, Radar } from "lucide-react";
import { useState } from "react";

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
};

const panels: Panel[] = [
  {
    id: "recovery",
    title: "Project Recovery",
    subtitle:
      "You have a high-stakes project that has gone off the rails. It is over budget, behind schedule, or stalled, and you need an objective and actionable roadmap to get it back on track.",
    icon: AlertTriangle,
  },
  {
    id: "alignment",
    title: "Strategic Alignment",
    subtitle:
      "Your leadership vision is strong, but you -as a leader - are spread too thin. The vision is not translating into clean delivery, and you cannot take your eyes off operations without drift.",
    icon: Radar,
  },
  {
    id: "velocity",
    title: "Operational Velocity",
    subtitle:
      "Your teams are talented, but your operational tempo feels capped. You are working hard, yet no matter how hard you push, you cannot actually get your team to move faster.",
    icon: Gauge,
  },
];

const missionMap = [
  "Diagnosis",
  "Observation",
  "Prototyping",
  "Roadmap",
];

type WeekDetail = {
  inputs: string;
  activities: string;
  outcomes: string;
};

const weekDetails: Record<string, WeekDetail[]> = {
  recovery: [
    {
      inputs:
        "Current project plan and overview, risk registers, project reporting history, stakeholder interviews, and delivery constraints.",
      activities:
        "Run a recovery diagnostic, identify failure points, map dependencies, and establish a stabilisation baseline.",
      outcomes:
        "Shared recovery truth, prioritised risk register, and a realistic week-by-week rescue sequence.",
    },
    {
      inputs:
        "Delivery observations, team handoff data, meeting cadence, and real-time execution bottlenecks.",
      activities:
        "Observe project flow directly, isolate decision lag and queue buildup, and validate root-cause assumptions.",
      outcomes:
        "Clear picture of where momentum is lost and where intervention produces fastest schedule regain.",
    },
    {
      inputs:
        "Approved intervention hypotheses, available tooling, team capacity, and sponsor constraints.",
      activities:
        "Prototype recovery workflows, tighten communication loops, and test rapid governance changes in flight.",
      outcomes:
        "Working recovery mechanisms with early performance gains and reduced firefighting overhead.",
    },
    {
      inputs:
        "Prototype performance data, remaining risks, leadership appetite, and scale requirements.",
      activities:
        "Convert tested interventions into a full roadmap with owners, milestones, and escalation triggers.",
      outcomes:
        "Defensible recovery roadmap that leadership can execute with confidence after the pilot window.",
    },
  ],
  alignment: [
    {
      inputs:
        "Leadership intent, strategic objectives, org chart realities, and operating rhythm pain points.",
      activities:
        "Map strategy-to-operations disconnects and identify where leader attention is compensating for system gaps.",
      outcomes:
        "Alignment baseline showing exactly why strategic intent is not landing in daily execution.",
    },
    {
      inputs:
        "Observed planning forums, team rituals, role clarity gaps, and cross-functional friction patterns.",
      activities:
        "Shadow execution pathways, review decision rights, and surface where accountability diffuses.",
      outcomes:
        "Operational truth model of leadership drag points and fragile process handoffs.",
    },
    {
      inputs:
        "Target-state leadership model, pilot teams, and candidate process interventions.",
      activities:
        "Prototype lean operating cadences, simplify reporting paths, and test ownership boundary resets.",
      outcomes:
        "Early strategic alignment loops that reduce executive babysitting and improve operating autonomy.",
    },
    {
      inputs:
        "Pilot outcomes, leadership feedback, and prioritised scale opportunities.",
      activities:
        "Produce an implementation roadmap for codifying alignment behaviors across teams.",
      outcomes:
        "Practical plan to embed strategy into operations without increasing management overhead.",
    },
  ],
  velocity: [
    {
      inputs:
        "Current throughput metrics, cycle-time data, blocker inventory, and team workload signals.",
      activities:
        "Diagnose velocity caps, quantify process drag, and identify where effort does not convert to output.",
      outcomes:
        "Baseline map of limiting constraints that cap tempo despite strong team effort.",
    },
    {
      inputs:
        "Real-time workflow observation, queue depth patterns, and communication latency evidence.",
      activities:
        "Observe execution bottlenecks in context and validate high-friction work pathways.",
      outcomes:
        "Verified list of bottlenecks ranked by velocity impact and ease of intervention.",
    },
    {
      inputs:
        "Candidate acceleration levers, team feedback, and safe-to-test process changes.",
      activities:
        "Prototype faster execution loops, reduce manual hops, and test flow-control adjustments.",
      outcomes:
        "Demonstrated velocity lifts with lower rework and fewer coordination stalls.",
    },
    {
      inputs:
        "Prototype performance results, future demand assumptions, and leadership priorities.",
      activities:
        "Design the operational roadmap for sustained high-tempo execution and guardrails.",
      outcomes:
        "Scalable velocity roadmap with clear owners, KPI tracking, and continuous optimization loops.",
    },
  ],
};

export function MissionControl() {
  const [active, setActive] = useState<string | null>(null);
  const [activeWeek, setActiveWeek] = useState<number>(0);
  const activePanel = panels.find((panel) => panel.id === active) ?? null;
  const activeWeekDetail = active
    ? weekDetails[active]?.[activeWeek] ?? null
    : null;

  return (
    <section className="space-y-10 border border-[#66FCF1]/10 bg-[#16181d]/80 px-6 py-14 sm:px-10">
      <div className="space-y-4">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Select Focus Area
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#66FCF1]/85">
          What problem can I help you solve?
        </p>
      </div>
      <div className="grid gap-0 border border-[#66FCF1]/15 md:grid-cols-3">
        {panels.map((panel) => {
          const Icon = panel.icon;
          const selected = panel.id === active;
          return (
            <button
              key={panel.id}
              type="button"
              onClick={() => {
                setActive(panel.id);
                setActiveWeek(0);
              }}
              className={`group relative min-h-[24rem] border-r border-[#66FCF1]/15 p-10 text-left transition-colors last:border-r-0 ${
                selected
                  ? "bg-[#222a34] shadow-[inset_0_0_0_1px_rgba(102,252,241,0.35)]"
                  : "bg-[#15181d] hover:bg-[#1b1f26]"
              }`}
            >
              <span className="mb-10 block h-px w-16 bg-[#66FCF1]/80" />
              <span
                className={`mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] ${
                  selected ? "text-[#66FCF1]" : "text-[#C5C6C7]/75"
                }`}
              >
                {panel.id === "recovery"
                  ? "01. Recovery"
                  : panel.id === "alignment"
                    ? "02. Strategy"
                    : "03. Scale"}
              </span>
              <Icon className="mb-4 h-5 w-5 text-[#66FCF1]" />
              <h3 className="text-3xl font-black leading-tight tracking-tight text-white">
                {panel.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#C5C6C7]">{panel.subtitle}</p>
              <div
                className={`mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#66FCF1] transition-opacity ${
                  selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {selected ? "Active" : "View 4-week plan"}
              </div>
              {selected ? (
                <span
                  aria-hidden
                  className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 border-r border-b border-[#66FCF1] bg-[#0B0C10]"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="border border-[#66FCF1]/25 bg-[#13171d] p-8 sm:p-10"
          >
            <div className="mb-10 flex flex-col gap-6 border-b border-[#66FCF1]/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#66FCF1]">
                  Execution Timeline
                </p>
                <h3 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  4-Week Mission Map
                </h3>
              </div>
              <p className="border-l-2 border-[#66FCF1] pl-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#C5C6C7]/80">
                Focus: {activePanel?.title}
                <br />
                Phase: Deployment Visualization
              </p>
            </div>
            <div className="grid gap-2 lg:grid-cols-4">
              {missionMap.map((item, idx) => (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => setActiveWeek(idx)}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 30,
                    delay: idx * 0.04,
                  }}
                  className={`relative border p-6 text-left transition-colors ${
                    activeWeek === idx
                      ? "border-[#66FCF1]/45 bg-[#24303d] shadow-[0_0_24px_rgba(102,252,241,0.12)]"
                      : idx === 3
                      ? "border-[#66FCF1]/40 bg-[#202833] shadow-[0_0_30px_rgba(102,252,241,0.07)]"
                      : idx % 2 === 0
                        ? "border-[#66FCF1]/15 bg-[#1a1f26]"
                        : "border-[#66FCF1]/18 bg-[#20242c]"
                  }`}
                >
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#66FCF1]/70">
                    Week {idx + 1}
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-white">{item}</p>
                </motion.button>
              ))}
            </div>

            {activeWeekDetail ? (
              <div className="mt-8 border border-[#66FCF1]/18 bg-[#12161c] p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#66FCF1]">
                      Inputs
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                      {activeWeekDetail.inputs}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#66FCF1]">
                      Activities
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                      {activeWeekDetail.activities}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#66FCF1]">
                      Outcomes
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#C5C6C7]">
                      {activeWeekDetail.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
