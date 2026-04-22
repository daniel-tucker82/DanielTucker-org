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
      "You have a high-stakes project that isn't going to plan. It is over budget, \
      behind schedule, or stalled, and you need an objective and actionable \
      roadmap to get it back on track.",
    icon: AlertTriangle,
  },
  {
    id: "alignment",
    title: "Strategic Alignment",
    subtitle:
      "Your vision is strong, but you - as a leader - are spread too thin. The \
      vision is not translating into clean delivery, meaning you can't take your \
      eyes off operations long enough to do your job.",
    icon: Radar,
  },
  {
    id: "velocity",
    title: "Operational Velocity",
    subtitle:
      "Your teams are talented, but your operational tempo feels capped. You are \
      working hard, yet no matter how hard you push, you cannot actually get your \
      team to move faster. You need a clear plan to increase velocity.",
    icon: Gauge,
  },
];

const missionMap = [
  "Define Problem",
  "Identify Root Causes",
  "Implement quick wins",
  "Validate improvements and build roadmap",
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
        "Current project plan and overview, risk registers, project reporting history, \
        access to stakeholders, and delivery constraints.",
      activities:
        "Review project plans, reports and other documentation, interview internal \
        project stakeholders, build understanding of project's intended outcomes and \
        current context.",
      outcomes:
        "I clearly understand the project, its stakeholders, intended outcomes and the \
        current difficulties it is facing.",
    },
    {
      inputs:
        "Understanding project context, meeting cadence, project reports, access to \
        project team.",
      activities:
        "Observe project in execution, from attending routine and one-off meetings, \
        to observing and interviewing project team members and 'spot checking' packets \
        of work as they progress through your organisation's delivery processes.",
      outcomes:
        "I understand the root cause of project issues, and have mapped these in a clear \
        'current reality tree' diagram, annotated with points where injecting changes \
        can lead to a desired future reality. Injections prioritised based on impact \
        and ease of implementation.",
    },
    {
      inputs:
        "Current and future reality trees and prioritised injections from week 2.",
      activities:
        "With leader's approval, implement the best value-to-effort injections from week \
        2, ensuring changes are implemented sustainably and effectively.",
      outcomes:
        "Back-brief on implemented changes and expected outcomes.",
    },
    {
      inputs:
        "Prioritised list of injections from week 2, implmemented changes from week 3.",
      activities:
        "Validate implememnted changes from week 3 to confirm that new current reality \
        aligns with the desired future reality where applicable, adjust the current \
        reality tree as required. Implment additional injections as required and develop \
        a roadmap for implmementing any incomplete injedctions moving forward.",
      outcomes:
        "Validated current and future reality trees, validated improvement from initial \
        injections, roadmap for implementing remaining injections.",
    },
  ],
  alignment: [
    {
      inputs:
        "Consultation with leadership, access to any strategic documentation, interviews \
        with staff as required.",
      activities:
        "Understand straegic vision and blockers to achieving it, identify disconnects \
        between vision and execution, and identify where leader attention is compensating \
        for system gaps.",
      outcomes:
        "I understand the issues causing misalignment between vision and execution and have \
        mapped observed issues to root causes in a causal diagram which is accepted by senior \
        leadership.",
    },
    {
      inputs:
        "Causal diagram from week 1, access to meetings and interviews with staff as required.",
      activities:
        "Confirm through observation or data analysis, the causal diagram from week 1, validating root \
        causes of issues and identifying any additional contributing factors to add to the \
        diagram. Identification of improvements which can be injected into the causal diagram \
        to shift current reality towards desired future reality. Prioritisation of injections \
        based on impact and ease of implementation.",
      outcomes:
        "Accurate current reality tree and prioritised list of improvements, future reality \
        tree, leader endorsement to proceed to early implementation of quick wins.",
    },
    {
      inputs:
        "Current and future reality trees and prioritised injections from week 2.",
      activities:
      "With leader's approval, implement the best value-to-effort injections from week \
      2, ensuring changes are implemented sustainably and effectively.",
    outcomes:
      "Back-brief on implemented changes and expected outcomes.",
    },
    {
      inputs:
        "Prioritised list of injections from week 2, implmemented changes from week 3.",
      activities:
        "Validate implememnted changes from week 3 to confirm that new current reality \
        aligns with the desired future reality where applicable, adjust the current \
        reality tree as required. Implment additional injections as required and develop \
        a roadmap for implmementing any incomplete injedctions moving forward.",
      outcomes:
        "Validated current and future reality trees, validated improvement from initial \
        injections, roadmap for implementing remaining injections.",
    },
  ],
  velocity: [
    {
      inputs:
        "Consultation with leaders, interviews with staff as required, list of active \
        projects or work, access to documentation or intelligence which defines ways of \
        working, access to work management system",
      activities:
        "Initial consultation with leadership, interview staff at all levels of management \
        to understand problems observed (and reason for engaging me in the first place), \
        observe operations in execution to develop my own understanding of issues. Back-brief \
        leaders on my understanding of their issues and get endorsement for my plan for week 2.",
      outcomes:
        "I understand the issues identified by leaders and have mapped them in an initial \
        causal diagram (current reality tree) that has been validated by senior leaders.",
    },
    {
      inputs:
        "Current reality tree from week 1, access to work management systems, access to operational \
        meetings, agreement to interview staff at all levels of management as required.",
      activities:
        "Confirm the accuracy of the current reality tree developed in week 1 through direct \
        observation or data analysis adjust as required in order to finalize a complete current \
        reality tree. Identify improvements which can be injected into the current reality to \
        shift to the desired future reality and prioritise these improvements based on impact \
        and ease of implementation.",
      outcomes:
        "Current and future reality trees endorsed by leaders as accurate and valid, \
        prioritised list of improvements to inject into the current reality tree to cause \
        a shift towards the desired future reality.",
    },
    {
      inputs:
        "Current and future reality trees and prioritised injections from week 2.",
      activities:
      "With leader's approval, implement the best value-to-effort injections from week \
      2, ensuring changes are implemented sustainably and effectively.",
    outcomes:
      "Back-brief on implemented changes and expected outcomes.",
    },
    {
      inputs:
        "Prioritised list of injections from week 2, implmemented changes from week 3.",
      activities:
        "Validate implememnted changes from week 3 to confirm that new current reality \
        aligns with the desired future reality where applicable, adjust the current \
        reality tree as required. Implment additional injections as required and develop \
        a roadmap for implmementing any incomplete injedctions moving forward.",
      outcomes:
        "Validated current and future reality trees, validated improvement from initial \
        injections, roadmap for implementing remaining injections.",
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
