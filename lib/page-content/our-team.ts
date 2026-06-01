/** Hero and CTA copy for the TEAM stitch template. */
export function applyOurTeamHero(html: string): string {
  let out = html;

  const pairs: [string, string][] = [
    ["Meet the Architects of Success", "People behind the work"],
    ["Our Team Template", "Our Team"],
    [
      "Bridging the gap between visionary strategy and technical excellence. Aspyre Consulting brings together the brightest minds in digital transformation.",
      "Meet the consultants behind Aspyre — select a team member to explore their background and experience.",
    ],
  ];

  for (const [from, to] of pairs) {
    out = out.split(from).join(to);
  }

  return out;
}

export function applyOurTeamTail(html: string): string {
  return html
    .replace("Let's build the future together.", "Let's work together.")
    .replace("Ready to collaborate?", "Interested in working together?")
    .replace(
      '<button class="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(38,221,205,0.3)] transition-all">Book a Strategy Session</button>',
      '<a href="/contact" class="inline-block bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(38,221,205,0.3)] transition-all">Contact Daniel</a>',
    )
    .replace(
      '<button class="border border-primary-fixed text-primary-fixed px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed/5 transition-all">View All Capabilities</button>',
      '<a href="/about/our-approach" class="inline-block border border-primary-fixed text-primary-fixed px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed/5 transition-all">My approach</a>',
    );
}
