import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { SiteLayout } from "@/components/site-layout";
import { getClerkProviderProps } from "@/lib/clerk-domains";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "danieltucker.org | Operational Systems",
  description:
    "Technical-brutalist consultancy website for project recovery, strategic alignment, and operational velocity.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const host = (await headers()).get("host") ?? "";
  const clerkProps = getClerkProviderProps(host);

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ClerkProvider {...clerkProps}>
          <SiteLayout>{children}</SiteLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
