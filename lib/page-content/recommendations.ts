export type Recommendation = {
  staffMemberId: string;
  name: string;
  title: string;
  quote: string;
  /** Path under /public, e.g. /micha-essers.jpg */
  avatarSrc: string;
};

export const recommendations: Recommendation[] = [
  {
    staffMemberId: "daniel-tucker",
    name: "Micha Essers",
    title: "Program Manager",
    quote:
      "Daniel is one of the sharpest minds I have worked with throughout my career. He has an incredible ability to process and absorb significant volumes of information and create innovative, lasting and scalable solutions to complex problems.",
    avatarSrc: "/micha-essers.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Yasaman Ferdosi",
    title: "Productivity and Delivery Leader",
    quote:
      "Dan excels in identifying root causes and illustrating clear cause-and-effect relationships. When faced with a problem, he consistently delivers innovative and pragmatic solutions that can be effectively applied in the real world.",
    avatarSrc: "/yasaman-ferdosi.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Jason Longville",
    title: "Change Leader",
    quote:
      "He is analytical but creative, determined but considered, pursuing best for business outcomes over local agendas... He encourages an open environment of honesty and accountability, leading by example rather than positional authority, but tackles the hard conversations when needed. I always appreciate his perspective on challenging issues, as he brings high IQ & EQ to the topic at hand. He has boundless energy and enthusiasm for making things better, and this has a positive ripple effect on the teams he works with.",
    avatarSrc: "/jason-longville.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Henry Kwong",
    title: "Delivery Manager",
    quote:
      "He continuously strives to look for ways to improve ways of working (including his own), converting his strong natural sense of \"work smarter, not harder\" into concrete outcomes that are usable and highly appreciated by the teams.",
    avatarSrc: "/henry-kwong.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Michael Hitchen",
    title: "Program & IT Portfolio Leader",
    quote:
      "Dan is able to operate at a high portfolio level and then dive in to the macro team level to assist when needed. He identifies issues and proposes win-win solutions to resolve them, then manages those solutions through delivery on the small and large scale. Dan has a genuine thirst for knowledge and passion for getting to the heart of an issue.",
    avatarSrc: "/michael-hitchen.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Duncan O'Brien",
    title: "Delivery and Project Manager",
    quote:
      "He is a natural leader and problem solver, and his dedication to process development and continuous improvement has left a lasting impression. I highly recommend Daniel to anyone seeking a leader who combines strategic vision, technical expertise, and a genuine commitment to team success.",
    avatarSrc: "/duncan-obrien.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Viviana Capote",
    title: "Software Engineer",
    quote:
      "Daniel Tucker is by far one of the best project manager's I have had the pleasure to work with. He is energetic, pro-active, and takes the time to understand the needs of the team and works with them to set expectations and manage the project accordingly.",
    avatarSrc: "/viviana-capote.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Shani de Leeuw",
    title: "Project Engineer",
    quote: "When I think of Daniel the phrase \"gets things done\" comes to mind.",
    avatarSrc: "/shani-de-leeuw.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Matthew Roberts",
    title: "Head of Engineering Operations",
    quote:
      "Dan has a natural flare for improving business practices, process and overall performance, as well as the ability to deliver complex projects, bids and business growth.",
    avatarSrc: "/matthew-roberts.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Meagan Hungerford",
    title: "Engineering & Design Specialist",
    quote:
      "Time spent engaged with Dan was always informative, reflective and working with him on problems or talking through ideas ultimately helped shape the professional path that I would later follow.",
    avatarSrc: "/meagan-hungerford.png",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Mike Rigby",
    title: "Engineering Executive",
    quote:
      "Dan has a knack for identifying opportunities to introduce innovation into the workplace and simplifying historically complex activities... Dan takes the initiative to introduce new technologies and smarter ways of working in order to stream line processes, improve reporting, allow for better data interrogation and to reduce program costs through solutions that make it easier for project managers and engineers to focus on delivering quality solutions and outcomes.",
    avatarSrc: "/mike-rigby.jpg",
  },
  {
    staffMemberId: "daniel-tucker",
    name: "Aaron Sirimanotham",
    title: "Digital Projects Manager",
    quote:
      "Above all Daniel always strives for continuous improvement through innovation which sets him apart from others.",
    avatarSrc: "/aaron-sirimanotham.jpg",
  },
];

export function getRecommendationsForTeamMember(staffMemberId: string): Recommendation[] {
  return recommendations.filter(
    (recommendation) => recommendation.staffMemberId === staffMemberId,
  );
}
