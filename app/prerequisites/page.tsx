import type { Metadata } from "next";
import { PrerequisitesPage } from "@/components/prerequisites-page";

export const metadata: Metadata = {
  title: "Engagement prerequisites",
  description:
    "What Aspyre needs from your organisation before a 4-week intensive engagement can deliver maximum value.",
};

export default function Page() {
  return <PrerequisitesPage />;
}
