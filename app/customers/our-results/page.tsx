import type { Metadata } from "next";
import { OurResultsPage } from "@/components/our-results-page";

export const metadata: Metadata = {
  title: "Our results",
  description:
    "Aspyre is building its client results portfolio. Learn how our methodology draws on a long career in delivery improvement — and how early partners will shape the stories on this page.",
};

export default function Page() {
  return <OurResultsPage />;
}
