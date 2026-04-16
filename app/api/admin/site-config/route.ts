import { NextRequest, NextResponse } from "next/server";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";
import { getSiteConfig, updateSiteConfig } from "@/lib/site-config";
import { SiteConfig } from "@/types/site-config";

function isValidConfig(config: Partial<SiteConfig>): config is SiteConfig {
  return Boolean(
    config.heroCallout &&
      typeof config.heroCallout.enabled === "boolean" &&
      typeof config.heroCallout.title === "string" &&
      typeof config.heroCallout.subtitle === "string" &&
      typeof config.heroCallout.body === "string" &&
      typeof config.heroCallout.ctaLabel === "string" &&
      typeof config.heroCallout.ctaHref === "string",
  );
}

export async function GET() {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const config = await getSiteConfig();
  return NextResponse.json({ config });
}

export async function PUT(req: NextRequest) {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const payload = (await req.json()) as Partial<SiteConfig>;
  if (!isValidConfig(payload)) {
    return NextResponse.json({ error: "Invalid config payload" }, { status: 400 });
  }
  const config = await updateSiteConfig(payload);
  return NextResponse.json({ config });
}
