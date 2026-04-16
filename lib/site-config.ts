import { promises as fs } from "fs";
import path from "path";
import { SiteConfig } from "@/types/site-config";

const dataDir = path.join(process.cwd(), "data");
const configFile = path.join(dataDir, "site-config.json");

const defaultConfig: SiteConfig = {
  heroCallout: {
    enabled: true,
    title: "3 spaces available",
    subtitle: "Zero-risk, 4-week pilot engagement",
    body: "Let me unblock your project, increase your productivity and/or enhance your operations and, at the end of the 4 weeks, you choose what to pay me based on what you think my contribution was worth.",
    ctaLabel: "Contact Daniel",
    ctaHref: "/contact",
  },
};

async function ensureConfigFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(configFile);
  } catch {
    await fs.writeFile(configFile, JSON.stringify(defaultConfig, null, 2), "utf8");
  }
}

export async function getSiteConfig(): Promise<SiteConfig> {
  await ensureConfigFile();
  const raw = await fs.readFile(configFile, "utf8");
  const parsed = JSON.parse(raw) as Partial<SiteConfig>;
  return {
    heroCallout: {
      enabled: parsed.heroCallout?.enabled ?? defaultConfig.heroCallout.enabled,
      title: parsed.heroCallout?.title ?? defaultConfig.heroCallout.title,
      subtitle: parsed.heroCallout?.subtitle ?? defaultConfig.heroCallout.subtitle,
      body: parsed.heroCallout?.body ?? defaultConfig.heroCallout.body,
      ctaLabel: parsed.heroCallout?.ctaLabel ?? defaultConfig.heroCallout.ctaLabel,
      ctaHref: parsed.heroCallout?.ctaHref ?? defaultConfig.heroCallout.ctaHref,
    },
  };
}

export async function updateSiteConfig(next: SiteConfig): Promise<SiteConfig> {
  await ensureConfigFile();
  await fs.writeFile(configFile, JSON.stringify(next, null, 2), "utf8");
  return next;
}
