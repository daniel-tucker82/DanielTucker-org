import type { Metadata } from "next";
import { StitchBlogPage } from "@/components/stitch-blog-page";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lessons learned, approaches taken, and insights on operational systems and delivery.",
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <StitchBlogPage />;
}
