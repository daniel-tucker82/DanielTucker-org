import type { Metadata } from "next";
import { WhoWeWorkWithPage } from "@/components/who-we-work-with-page";

export const metadata: Metadata = {
  title: "Who we work with",
  description:
    "Growth-stage technology businesses and delivery leaders who partner with Aspyre to improve flow, throughput, and operational productivity.",
};

export default function Page() {
  return <WhoWeWorkWithPage />;
}
