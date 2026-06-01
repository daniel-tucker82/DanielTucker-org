import type { Metadata } from "next";
import { OptimizingProductivityPage } from "@/components/optimizing-productivity-page";

export const metadata: Metadata = {
  title: "Optimizing Productivity",
  description:
    "A practical engagement to increase throughput, reduce operational friction, and improve delivery flow across your teams.",
};

export default function Page() {
  return <OptimizingProductivityPage />;
}
