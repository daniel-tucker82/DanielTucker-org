import type { Metadata } from "next";
import { OurApproachPage } from "@/components/our-approach-page";

export const metadata: Metadata = {
  title: "Our approach",
  description: "Pragmatic principles for operational transformation and sustainable delivery.",
};

export default function Page() {
  return <OurApproachPage />;
}
