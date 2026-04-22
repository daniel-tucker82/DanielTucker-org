import { HardHat, ShieldAlert, Users, Zap, Building2, EarIcon, DoorOpenIcon, BrainIcon, BookMinusIcon, CogIcon, HandshakeIcon, Clock10Icon } from "lucide-react";

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
      body: "For the time being, the success company still depends on its people. \
      I always seek to remember that people want respect and dignity at work. \
      Start with those, and most people will work with you in good faith.",
      icon: <Users className="h-10 w-10" />,
    },
    {
      heading: "Seek first to understand",
      body: "A career of diverse and challenging roles has taught me how to \
      get to the heart of issues. The questions aren't \
      ground-breaking, but I have gotten very good at knowing when I've found the \
      root cause of a problem, or if more digging is required.",
      icon: <EarIcon className="h-10 w-10" />,
    },
    {
      heading: "One- or two-way doors",
      body: "Popularized by Steven Bartlett and Amazon, decisions that are low \
      risk and reversible (two-way doors) should be made quickly without over-analyzing. \
      High-risk, irreversible decisions should be made with care and consideration.",
      icon: <DoorOpenIcon className="h-10 w-10" />,
    },
    {
      heading: "You win, or you learn",
      body: "It can be hard to trust our staff to work independently when every decision \
      feels huge. Handing over responsibility either improves productivity now, or teaches \
      through experience, improving productivity later.",
      icon: <BrainIcon className="h-10 w-10" />,
    },
    {
      heading: "Ditch the Dogma",
      body: "Out-of-the-box management methodologies can provide useful tools \
      for delivering Projects, but projects don't fail because the project manager didn't \
      follow Agile, PRINCE2, Six Sigma, Kanban or CCPM methodolgies to the letter. Every organisation \
      is different, so their needs differ too. Rather than rigidly sticking to any one \
      methodology, you should take from all of them, using things that are best suited to your \
      needs, and leaving behind anything that is unnecessary or counter-productive.",
      icon: <BookMinusIcon className="h-10 w-10" />,
      spanTwoOnLg: true,
    },
    {
      heading: "Win-win",
      body: "Changes that benefit one stakeholder but make life more difficult for another, are \
      not sustainable. It is worth the effort to find innovative solutions that benefit all \
      stakeholders and make work-life genuinely better for everyone involved.",
      icon: <HandshakeIcon className="h-10 w-10" />,
    },
    {
      heading: "If it's worth doing twice, it's worth never doing again.",
      body: "One-off tasks that are not repeatable can be done manually, but tasks that are likely \
      to be repeated, should be automated as much as possible.",
      icon: <CogIcon className="h-10 w-10" />,
    },
    {
      heading: "Long-term solutions over short-term fixes.",
      body: "While short-term value may be achieved through quick fixes, these can lead to bigger \
      issues in the long term. Improvements should be robust and sustainable to ensure long-term value.",
      icon: <Clock10Icon className="h-10 w-10" />,
    },
  ];

  return (
    <div className="relative">

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
            Pragmatic Innovation
          </h1>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {sections.map((section) => (
            <article
              key={section.heading}
              className={`bg-[#171d25] border border-white/5 p-12 flex flex-col min-h-[400px] hover:bg-[#1f1f24] transition-colors group rounded-none ${
                section.spanTwoOnLg ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col">
                <span className="text-[#66FCF1] mb-12 block">{section.icon}</span>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {section.heading}
                </h3>
              </div>

              <div className="mt-4 border-t border-[#66FCF1]/20 pt-6">
                <p className="text-[#C5C6C7] leading-relaxed text-lg">
                  {section.body}
                </p>
              </div>
            </article>
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
