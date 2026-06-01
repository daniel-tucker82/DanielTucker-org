import type { Metadata } from "next";
import { FourWeekIntensiveProgramPage } from "@/components/four-week-intensive-program-page";

export const metadata: Metadata = {
  title: "4-week intensive program",
  description:
    "A focused 28-day engagement to diagnose bottlenecks, implement high-leverage improvements, and deliver a validated improvement roadmap.",
};

export default function Page() {
  return <FourWeekIntensiveProgramPage />;
}
