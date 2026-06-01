import type { Metadata } from "next";
import { FaqPage } from "@/components/faq-page";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with Aspyre Consulting, our 4-week program, and engagement prerequisites.",
};

export default function Page() {
  return <FaqPage />;
}
