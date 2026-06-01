import {
  profileExperienceSections,
  type ProfileSection,
} from "@/lib/page-content/profile-sections";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  /** Intrinsic dimensions for layout (avoids crop with object-fit). */
  imageWidth: number;
  imageHeight: number;
  intro: string;
  experienceIntro: string;
  experience: ProfileSection[];
  /** LinkedIn-style recommendations carousel — only Daniel has content today. */
  showRecommendations?: boolean;
  isPlaceholder?: boolean;
};

const placeholderExperience: ProfileSection[] = [
  {
    heading: "Role opening",
    lead: "We are building out the team behind Aspyre Consulting.",
    body: "When a new consultant joins, their background, focus areas, and experience will appear here in the same format as other team members.",
  },
];

function joiningSoonPlaceholder(id: string, label: string, role: string): TeamMember {
  return {
    id,
    name: label,
    role,
    imageSrc: "/team-member-placeholder.svg",
    imageAlt: "Placeholder team member",
    imageWidth: 400,
    imageHeight: 500,
    intro:
      "This card previews how additional team profiles will appear once new consultants join Aspyre.",
    experienceIntro: "Profile and experience details will be added when this role is filled.",
    experience: placeholderExperience,
    isPlaceholder: true,
  };
}

/** Full roster including dev-only placeholders. */
export const allTeamMembers: TeamMember[] = [
  {
    id: "daniel-tucker",
    name: "Daniel Tucker",
    role: "Founder, Aspyre Consulting",
    imageSrc: "/Profile%20Image%202a.jpg",
    imageAlt: "Daniel Tucker",
    imageWidth: 1848,
    imageHeight: 2511,
    intro:
      "Operational systems consultant helping growth-stage businesses scale productively — without radical process overhauls or cultural rewrites.",
    experienceIntro:
      "A career spanning defence, consulting, and technology leadership.",
    experience: profileExperienceSections,
    showRecommendations: true,
  },
  joiningSoonPlaceholder("team-placeholder-1", "Joining soon", "Consultant (placeholder)"),
  joiningSoonPlaceholder("team-placeholder-2", "Joining soon", "Delivery lead (placeholder)"),
  joiningSoonPlaceholder("team-placeholder-3", "Joining soon", "Operations (placeholder)"),
  joiningSoonPlaceholder("team-placeholder-4", "Joining soon", "Program manager (placeholder)"),
  joiningSoonPlaceholder("team-placeholder-5", "Joining soon", "Advisor (placeholder)"),
];

function shouldShowPlaceholderTeamMembers(): boolean {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.NEXT_PUBLIC_SHOW_TEAM_PLACEHOLDERS === "true"
  );
}

/** Members rendered on /about/our-team (real members only in production). */
export function getVisibleTeamMembers(): TeamMember[] {
  if (shouldShowPlaceholderTeamMembers()) {
    return allTeamMembers;
  }
  return allTeamMembers.filter((member) => !member.isPlaceholder);
}

export const teamMembers = getVisibleTeamMembers();
