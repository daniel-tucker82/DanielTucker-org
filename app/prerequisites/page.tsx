import Image from "next/image";

export default function PrerequisitesPage() {
  const pillars = [
    {
      number: "1",
      title: "Executive Sponsorship & Direct Access",
      blurb:
        "I report directly to the primary decision-maker—the CEO, COO, or Founder. We do not use intermediaries.",
      why:
        "To ensure findings aren't diluted and decisions are made in real-time.",
      requirement:
        "A guaranteed 15-minute weekly checkpoint to align our findings with your vision and clear high-level blockers immediately.",
    },
    {
      number: "2",
      title: "Total Environmental Transparency",
      blurb:
        "I need the unfiltered truth of how your company actually functions. I’m not here to read polished weekly status reports; I’m here to see the work in motion.",
      why:
        "To identify the \"hidden\" bottlenecks that don't make it into the official slide decks.",
      requirement:
        "Read-only access to your source-of-truth tools (Jira, Linear, Asana), communication hubs (Slack, Teams), and documentation (Notion, Confluence).",
    },
    {
      number: "3",
      title: "The Internal Mandate (Cultural Alignment)",
      blurb:
        "Before Day 1, a company-wide announcement must be made to the relevant teams.",
      why:
        "So the team understands I am a temporary resource here to solve their bottlenecks, not an auditor looking for someone to blame.",
      requirement:
        "A clear internal message from leadership stating that I have your full backing to observe, interview, and identify gaps without judgment.",
    },
    {
      number: "4",
      title: "Authority to Prototype (The Sandbox)",
      blurb:
        "By Week 4, my goal is to deliver a functional Proof of Concept, not just a PDF.",
      why:
        "To prove that the recommended fix actually works in your specific environment.",
      requirement:
        "Access to—and permission to use—your technical sandbox or low-code environments (e.g., Power BI, Zapier, or a test Project Board) where I can build \"hacked but functional\" fixes in a safe, isolated space.",
    },
    {
      number: "5",
      title: "Decisive Response Velocity",
      blurb:
        "A 4-week engagement lives or dies on the speed of information. We are trading bureaucracy for velocity.",
      why:
        "Stalling for three days on a simple login or a \"Why do we do it this way?\" question kills the momentum of a short-term pilot.",
      requirement:
        "A commitment that questions regarding logins, process history, or strategic objectives are addressed within 24 hours.",
    },
    {
      number: "6",
      title: "The Integrity Pact (The Ugly Truth)",
      blurb:
        "I provide the objective reality of your operations. This often involves highlighting \"misguided decisions\" or uncomfortable process gaps.",
      why:
        "If the findings are sugar-coated to protect egos, the ROI of the engagement drops to zero.",
      requirement:
        "An agreement that we prioritize business objectives over organizational politics. I provide the \"ugly truth,\" and we focus entirely on the solution.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative border border-[#66FCF1]/25 bg-[#121317] px-6 py-12 sm:px-8">
          <p className="relative font-mono text-[#66FCF1] text-xs uppercase tracking-[0.3em]">
            Mission Prerequisites
          </p>
          <h1 className="relative mt-4 text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            How We Hit the<br />
            Ground Running.
          </h1>

          <div className="relative mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-[#C5C6C7] text-lg md:text-xl leading-relaxed">
                This page acts as your &quot;Rules of Engagement.&quot; It moves you from being
                a &quot;visitor&quot; to an integrated specialist by removing the friction that
                usually kills 4-week projects.
              </p>
              <p className="mt-6 text-[#C5C6C7] text-lg md:text-xl leading-relaxed">
                4 weeks is a tight window to move from chaos to clarity. To ensure we
                bypass standard administrative lag and focus entirely on delivery, the
                following five pillars are non-negotiable.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <div className="w-40 h-40 border border-[#66FCF1]/25 bg-[#0B0C10] p-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPA-35-7yRodq_eZvQciB71QndeCoq9PmBmtTom_etqCZmTtIl5xxqSdJkebz6pA3Zwd299Y49Jskhs5muHPJrLrKZ8soHI_UwNci1rEd15BLPl_Nb1IRZGSASLf3NPmKuSeG_wMcGm2mK24Y-bdpd30ePrqolVx2Z-9krZM51AEx6gfmPAl_YIF4HEAtoE4lldrojwVrP2Oj586wY2cZJuA-YS_kCbdON5NWeQc29ioijoQEE6u3JqCjrqfU429fp9_7vKnS1HhU"
                  alt="Technical blueprint icon"
                  width={320}
                  height={320}
                  unoptimized
                  className="w-full h-full object-cover filter grayscale opacity-60 contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {pillars.map((pillar) => (
          <article
            key={pillar.number}
            className="bg-[#1a1b20] border border-[#66FCF1]/25 border-t-2 border-[#66FCF1] p-8 transition-colors duration-300 hover:bg-[#1d2630] rounded-none"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#66FCF1] mb-6">
              {pillar.number}.
            </p>
            <h3 className="font-black text-white text-xl mb-6 uppercase tracking-tight">
              {pillar.title}
            </h3>

            <p className="text-sm text-[#C5C6C7] leading-relaxed">
              {pillar.blurb}
            </p>

            <div className="mt-6 pt-6 border-t border-[#66FCF1]/25">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#66FCF1] mb-2">
                Why
              </p>
              <p className="text-sm text-[#C5C6C7] leading-relaxed">
                {pillar.why}
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-[#66FCF1]/25">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#66FCF1] mb-2">
                The Requirement
              </p>
              <p className="text-sm text-[#C5C6C7] leading-relaxed">
                {pillar.requirement}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
