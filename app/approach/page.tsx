import { HardHat, ShieldAlert, Users, Zap, Building2 } from "lucide-react";

type Section = {
  heading: string;
  body: string;
  icon: React.ReactNode;
  spanTwoOnLg?: boolean;
};

export default function ApproachPage() {
  const sections: Section[] = [
    {
      heading: "People First",
      body: "Operational systems only work when people can actually run them. I design for adoption first, then optimize for scale. If the team cannot trust the process on Monday morning, it is not ready.",
      icon: <Users className="h-10 w-10" />,
    },
    {
      heading: "No Fluff",
      body: "No performative frameworks, no slideware theater, and no process for process sake. Every intervention must have a measurable operational purpose tied to decision speed, delivery quality, or execution reliability.",
      icon: <ShieldAlert className="h-10 w-10" />,
    },
    {
      heading: "Reality Over Theory",
      body: "Elegant architecture means little if it breaks under daily pressure. I prioritize practical solutions that survive real constraints, messy handoffs, and imperfect data environments.",
      icon: <Building2 className="h-10 w-10" />,
    },
    {
      heading: "Rapid Validation",
      body: "We test quickly in live conditions, gather evidence, and iterate with intention. The goal is to reduce uncertainty early, avoid expensive rework, and move from assumptions to proof.",
      icon: <Zap className="h-10 w-10" />,
    },
    {
      heading: "Built to Last",
      body: "The end state is operational independence. Teams should leave with clear ownership, repeatable routines, and systems that continue delivering value long after the engagement ends.",
      icon: <HardHat className="h-10 w-10" />,
      spanTwoOnLg: true,
    },
  ];

  return (
    <div className="relative">
      {/* Hide the default <details> marker so the cards match the reference design */}
      <style>{`
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary {
          list-style: none;
        }
      `}</style>

      {/* Blueprint overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(102, 252, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(102, 252, 241, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <section className="max-w-[1920px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 mb-32 pt-4">
        <div className="col-span-12 lg:col-span-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-[#66FCF1]" />
            <span className="font-mono text-[#66FCF1] text-xs uppercase tracking-[0.3em]">
              My Approach
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-tight mb-10">
            Pragmatism Over Purity.
          </h1>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {sections.map((section, index) => (
            <details
              key={section.heading}
              open={index === 0}
              className={`bg-[#171d25] border border-white/5 p-12 flex flex-col justify-between min-h-[400px] hover:bg-[#1f1f24] transition-colors group rounded-none ${
                section.spanTwoOnLg ? "lg:col-span-2" : ""
              }`}
            >
              <summary className="flex flex-col cursor-pointer select-none">
                <span className="text-[#66FCF1] mb-12 block">{section.icon}</span>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {section.heading}
                </h3>
              </summary>

              <div className="mt-6 border-t border-[#66FCF1]/20 pt-6">
                <p className="text-[#C5C6C7] leading-relaxed text-lg">
                  {section.body}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Visual Divider */}
      <section className="max-w-[1920px] mx-auto px-8 lg:px-16 mt-32">
        <div className="h-px w-full bg-white/10" />
      </section>
    </div>
  );
}
