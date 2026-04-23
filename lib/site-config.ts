import { get, put } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import { getBlogBlobAccess } from "@/lib/blog-blob-access";
import { SiteConfig } from "@/types/site-config";

// Vercel serverless filesystem is read-only except /tmp.
const dataDir =
  process.env.VERCEL === "1"
    ? path.join("/tmp", "danieltucker-data")
    : path.join(process.cwd(), "data");
const configFile = path.join(dataDir, "site-config.json");
const configBlobPath =
  process.env.SITE_CONFIG_BLOB_PATH?.trim() || "site/site-config.json";

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

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN?.trim() || "";
}

function normalizeConfig(parsed: Partial<SiteConfig> | null | undefined): SiteConfig {
  return {
    heroCallout: {
      enabled: parsed?.heroCallout?.enabled ?? defaultConfig.heroCallout.enabled,
      title: parsed?.heroCallout?.title ?? defaultConfig.heroCallout.title,
      subtitle: parsed?.heroCallout?.subtitle ?? defaultConfig.heroCallout.subtitle,
      body: parsed?.heroCallout?.body ?? defaultConfig.heroCallout.body,
      ctaLabel: parsed?.heroCallout?.ctaLabel ?? defaultConfig.heroCallout.ctaLabel,
      ctaHref: parsed?.heroCallout?.ctaHref ?? defaultConfig.heroCallout.ctaHref,
    },
  };
}

async function readConfigFromBlob(): Promise<SiteConfig | null> {
  const token = getBlobToken();
  if (!token) {
    return null;
  }

  try {
    const blob = await get(configBlobPath, {
      access: getBlogBlobAccess(),
      token,
      useCache: false,
    });

    if (!blob || !blob.stream) {
      return defaultConfig;
    }

    const text = await new Response(blob.stream).text();
    if (!text.trim()) {
      return defaultConfig;
    }

    const parsed = JSON.parse(text) as Partial<SiteConfig>;
    return normalizeConfig(parsed);
  } catch (err) {
    const message = err instanceof Error ? err.message.toLowerCase() : "";
    if (message.includes("404")) {
      return defaultConfig;
    }
    throw err;
  }
}

async function writeConfigToBlob(next: SiteConfig): Promise<boolean> {
  const token = getBlobToken();
  if (!token) {
    return false;
  }

  await put(configBlobPath, JSON.stringify(next, null, 2), {
    access: getBlogBlobAccess(),
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  return true;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const fromBlob = await readConfigFromBlob();
  if (fromBlob) {
    return fromBlob;
  }

  await ensureConfigFile();
  const raw = await fs.readFile(configFile, "utf8");
  const parsed = JSON.parse(raw) as Partial<SiteConfig>;
  return normalizeConfig(parsed);
}

export async function updateSiteConfig(next: SiteConfig): Promise<SiteConfig> {
  const wroteToBlob = await writeConfigToBlob(next);
  if (wroteToBlob) {
    return next;
  }

  await ensureConfigFile();
  await fs.writeFile(configFile, JSON.stringify(next, null, 2), "utf8");
  return next;
}
