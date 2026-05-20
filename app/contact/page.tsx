import type { Metadata } from "next";
import { StitchContactPage } from "@/components/stitch-contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Daniel Tucker at Aspyre Consulting.",
};

export default function Page() {
  return <StitchContactPage />;
}
