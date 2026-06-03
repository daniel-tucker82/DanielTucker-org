import type { Metadata } from "next";
import { CapabilityStatementPage } from "@/components/capability-statement-page";

export const metadata: Metadata = {
  title: "Capability statement",
  description:
    "Aspyre Pty Ltd capability statement 2026 — operational velocity for tech SMBs, productivity optimisation, and delivery excellence.",
};

export default function Page() {
  return <CapabilityStatementPage />;
}
