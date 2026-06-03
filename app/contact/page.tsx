import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aspyre Consulting.",
};

export default function Page() {
  return <ContactPage />;
}
