import type { Metadata } from "next";
import { OurStoryPage } from "@/components/our-story-page";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "How Aspyre Consulting was founded and why we help growth-stage technology businesses improve delivery flow and productivity.",
};

export default function Page() {
  return <OurStoryPage />;
}
