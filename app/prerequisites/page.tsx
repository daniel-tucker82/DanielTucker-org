import Image from "next/image";

export default function PrerequisitesPage() {
  const pillars = [
    {
      number: "1",
      title: "Executive Sponsorship & Direct Access",
      blurb:
        "I report directly to the primary decision-maker. It doesn't have to be \
        the CEO or managing director, but it does need to be someone who can make\
        decisions that are followed and implemented.",
      why:
        "To ensure findings aren't diluted, decisions are made quickly and \
        proposed changes are evaluated (and supported) at the right level of \
        management. Four weeks is not much time, and it will quickly be wasted \
        if I spend too much of it waiting for action or answers.",
      requirement:
        "An initial consultation on Day 1, and a guaranteed 15-minute weekly \
        check-in to align my findings with your vision. Furthermore, an agreement \
        that I can escalate high-level blockers to the right level (no matter how \
        high up) for immediate resolution.",
    },
    {
      number: "2",
      title: "Total Transparency",
      blurb:
        "I require the unfiltered truth of how your company actually functions. \
        I’m not interested in polished weekly status reports or your best \
        investor sales pitch.",
      why:
        "Valuable improvements only come from addressing real, unfiltered problems. \
        The faster I can uncover the real issues, the more effective the fixes will be.",
      requirement:
        "Read-only access to your source-of-truth tools (Jira, Linear, Asana), \
        communication hubs (Slack, Teams), and documentation (Notion, Confluence). \
        In addition, I require your senior leader's assurance that not only will they \
        give me the open and honest truth, but that they will encourage their teams \
        to do the same. I am willing to sign an NDA if required, and have one prepared \
        if you need it.",
    },
    {
      number: "3",
      title: "The Internal Mandate (Cultural Alignment)",
      blurb:
        "On or before day 1, the relevant teams and people must be made aware of my \
        presence and role, and asked to give their full cooperation.",
      why:
        "So the team understands I am a temporary resource here to improve their \
        quality of life, not an auditor looking for someone to blame.",
      requirement:
        "A clear internal message from leadership stating that I have your full \
        backing to observe, interview, and identify gaps without judgment.",
    },
    {
      number: "4",
      title: "Authority to Adjust",
      blurb:
        "By Week 4, my goal is to have done some early-stage implementation of real \
        processes or tools to improve productivity, but this will only work in such \
        a short timeframe if we aren't held back by change resistance or inertia.",
      why:
        "To ensure the recommended fix actually works in your specific environment.",
      requirement:
        "Access to operational processes and tools, including low- or no-code tools \
        or sandbox environments where I can build \"functional\" tools in a safe \
        space.",
    },
    {
      number: "5",
      title: "Decisive Response Velocity",
      blurb:
        "A 4-week engagement lives or dies on the speed of information. Response \
        times measured in hours, rather than seconds or minutes, will severely limit \
        the value I can deliver.",
      why:
        "Stalling for three days on a simple login or a \"Why do we do it this way?\" \
        question kills the momentum of a short-term engagement. We both want real value, \
        delivered quickly. I will also do my best to avoid being disruptive to your \
        day-to-day operations.",
      requirement:
        "A commitment that the organisation will endeavour to respond to questions or \
        requests for information/access rapidly. A point of contact who I can contact \
        to \"encourage action\" if I run into roadblocks.",
    },
    {
      number: "6",
      title: "The Integrity Pact (The Ugly Truth)",
      blurb:
        "I provide the objective reality of your operations. This may involves shining \
        a light on some uncomfortable truths.",
      why:
        "If the findings are sugar-coated to the point of diluting the message, the \
        ROI of the engagement drops dramatically.",
      requirement:
        "An agreement that we prioritize business objectives over organizational \
        politics. I provide the \"ugly truth,\" and we focus entirely on the solution. \
        Having said that, I can still be respectful and professional, and know how to \
        deliver bad news in a palletable way.",
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

          <div className="relative mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <p className="mt-6 text-[#C5C6C7] text-lg md:text-xl leading-relaxed">
                4 weeks is a tight window to move from chaos to clarity. To ensure we
                bypass standard administrative lag and focus entirely on delivery, the
                following must be agreed.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <div className="w-40 h-40 border border-[#66FCF1]/25 bg-[#0B0C10] p-2">
                <Image
                  src="/Prereq Header.png"
                  alt="Technical blueprint icon"
                  width={320}
                  height={320}
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
