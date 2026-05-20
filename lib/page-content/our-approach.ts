/** Maps approach page copy into the CONTENT stitch template (layout unchanged). */
export function applyOurApproachContent(mainHtml: string): string {
  let html = mainHtml;

  const pairs: [string, string][] = [
    ["STRATEGIC INFRASTRUCTURE", "MY APPROACH"],
    [
      `Digital <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-tertiary-container">Infrastructure</span> Audit`,
      `Pragmatic <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-tertiary-container">Innovation</span>`,
    ],
    [
      `Deconstruct and optimize your enterprise's digital backbone. We provide a rigorous, data-driven assessment of your cloud architecture, security protocols, and scalability vectors.`,
      `Principles that guide how I work with leaders and teams — combining rigorous problem-solving with respect for the people doing the work.`,
    ],
    ["Core Competencies", "Guiding principles"],
    ["Architecture Resilience", "People First"],
    [
      `We stress-test your existing systems against catastrophic failure modes, ensuring that high availability isn't just a promise, but a fundamental property of your technical stack.`,
      `For the time being, the success of a company still depends on its people. I always seek to remember that people want respect and dignity at work. Start with those, and most people will work with you in good faith.`,
    ],
    ["Cloud Native Shift", "Seek first to understand"],
    [
      `Migrating legacy monoliths into serverless, containerized ecosystems that scale with demand without manual intervention.`,
      `A career of diverse and challenging roles has taught me how to get to the heart of issues. I know when I've found the root cause of a problem, or if more digging is required.`,
    ],
    ["Data Governance", "One- or two-way doors"],
    [
      `Ensuring compliance and integrity across global clusters.`,
      `Decisions that are low risk and reversible should be made quickly. High-risk, irreversible decisions deserve care and consideration.`,
    ],
    ["Telemetry &amp; Observability", "You win, or you learn"],
    [
      `Real-time insight into every node and transaction.`,
      `Handing over responsibility either improves productivity now, or teaches through experience, improving productivity later.`,
    ],
    ["API Modernization", "Ditch the Dogma"],
    [
      `Unified interfaces for seamless third-party integration.`,
      `Take from Agile, PRINCE2, Kanban and other methods what fits your organisation — and leave behind what is unnecessary or counter-productive.`,
    ],
    ["Methodology Roadmap", "More principles"],
    [
      `A structured six-week sprint designed to transform your infrastructure from a bottleneck into a competitive advantage.`,
      `How I think about sustainable improvement when working with growth-stage teams.`,
    ],
    ["Discovery &amp; Ingestion", "Win-win"],
    [
      `Comprehensive scanning of all network assets, cloud configurations, and identity management policies.`,
      `Changes that benefit one stakeholder but make life harder for another are not sustainable. It is worth finding solutions that genuinely improve work-life for everyone involved.`,
    ],
    ["Risk Identification", "If it's worth doing twice, it's worth never doing again"],
    [
      `Applying algorithmic threat models to identify security vulnerabilities and potential performance bottlenecks.`,
      `One-off tasks can be done manually; work that will be repeated should be automated as much as possible.`,
    ],
    ["Optimization Blueprints", "Long-term solutions over short-term fixes"],
    [
      `Delivery of detailed engineering plans for remediation, re-architecting, and technological scaling.`,
      `Quick fixes can create bigger issues later. Improvements should be robust and sustainable to ensure long-term value.`,
    ],
    ["Ready to solidify your foundations?", "Ready to talk?"],
    [
      `Our consultants are ready to conduct a preliminary review of your infrastructure goals. No commitment required—just clarity.`,
      `If these principles resonate with how you want your organisation to operate, I'd like to hear what you're working on.`,
    ],
    ["Schedule Technical Session", "Contact Daniel"],
    ["Request Audit", "Get in touch"],
    ["View Case Studies", "Our results"],
  ];

  for (const [from, to] of pairs) {
    html = html.split(from).join(to);
  }

  html = html.replace(/<div class="flex items-center gap-12 mt-8">[\s\S]*?<\/div>\s*<\/div>/, "");

  html = html
    .replace(
      '<button class="px-8 py-4 bg-primary-fixed text-on-primary-fixed rounded-lg font-bold hover:shadow-[0_0_20px_rgba(38,221,205,0.3)] transition-all">\n                            Get in touch\n                        </button>',
      '<a href="/contact" class="inline-block px-8 py-4 bg-primary-fixed text-on-primary-fixed rounded-lg font-bold hover:shadow-[0_0_20px_rgba(38,221,205,0.3)] transition-all">Get in touch</a>',
    )
    .replace(
      '<button class="px-8 py-4 border border-outline-variant text-white rounded-lg font-bold hover:bg-surface-variant transition-all">\n                            Our results\n                        </button>',
      '<a href="/customers/our-results" class="inline-block px-8 py-4 border border-outline-variant text-white rounded-lg font-bold hover:bg-surface-variant transition-all">Our results</a>',
    )
    .replace(
      '<button class="px-10 py-5 bg-primary-fixed text-on-primary-fixed rounded-xl font-bold hover:scale-105 transition-transform text-lg">\n                            Contact Daniel\n                        </button>',
      '<a href="/contact" class="inline-block px-10 py-5 bg-primary-fixed text-on-primary-fixed rounded-xl font-bold hover:scale-105 transition-transform text-lg">Contact Daniel</a>',
    );

  return html;
}
