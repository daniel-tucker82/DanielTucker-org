import type { Metadata } from "next";
import { OurTeamPage } from "@/components/our-team-page";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet Daniel Tucker and learn about the experience behind Aspyre Consulting.",
};

export default function Page() {
  return <OurTeamPage />;
}
