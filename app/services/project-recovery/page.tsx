import type { Metadata } from "next";
import { ProjectRecoveryPage } from "@/components/project-recovery-page";

export const metadata: Metadata = {
  title: "Project recovery",
  description:
    "A targeted intervention to stabilise at-risk projects, restore delivery confidence, and re-establish predictable execution.",
};

export default function Page() {
  return <ProjectRecoveryPage />;
}
