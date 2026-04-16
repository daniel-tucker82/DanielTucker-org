"use client";

import { useState } from "react";
import { SiteConfig } from "@/types/site-config";

export function HeroSectionEditor({ initialConfig }: { initialConfig: SiteConfig }) {
  const [config, setConfig] = useState<SiteConfig>(initialConfig);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function saveConfig() {
    setSaving(true);
    setMessage(null);
    const response = await fetch("/api/admin/site-config", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (!response.ok) {
      setSaving(false);
      setMessage("Unable to save Hero Section settings.");
      return;
    }
    setSaving(false);
    setMessage("Hero Section settings saved.");
  }

  return (
    <section className="panel-surface rounded-none p-6">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
        Hero Section Editor
      </h2>

      <div className="mt-5 space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={config.heroCallout.enabled}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                heroCallout: { ...prev.heroCallout, enabled: event.target.checked },
              }))
            }
            className="h-4 w-4 rounded-none border border-[#66FCF1]/45 bg-[#0B0C10]"
          />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C5C6C7]">
            Show Hero Callout Box
          </span>
        </label>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
            Title
          </span>
          <input
            value={config.heroCallout.title}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                heroCallout: { ...prev.heroCallout, title: event.target.value },
              }))
            }
            className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
          />
        </label>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
            Subtitle
          </span>
          <input
            value={config.heroCallout.subtitle}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                heroCallout: { ...prev.heroCallout, subtitle: event.target.value },
              }))
            }
            className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
          />
        </label>

        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
            Body
          </span>
          <textarea
            value={config.heroCallout.body}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                heroCallout: { ...prev.heroCallout, body: event.target.value },
              }))
            }
            className="min-h-24 w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
              Button Text
            </span>
            <input
              value={config.heroCallout.ctaLabel}
              onChange={(event) =>
                setConfig((prev) => ({
                  ...prev,
                  heroCallout: { ...prev.heroCallout, ctaLabel: event.target.value },
                }))
              }
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            />
          </label>

          <label className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
              Button Link Path
            </span>
            <input
              value={config.heroCallout.ctaHref}
              onChange={(event) =>
                setConfig((prev) => ({
                  ...prev,
                  heroCallout: {
                    ...prev.heroCallout,
                    ctaHref: event.target.value.startsWith("/")
                      ? event.target.value
                      : `/${event.target.value}`,
                  },
                }))
              }
              placeholder="/contact"
              className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
            />
            <p className="text-xs text-[#C5C6C7]/80">
              Use internal paths like /contact, /profile, /blog.
            </p>
          </label>
        </div>

        <button
          type="button"
          onClick={() => void saveConfig()}
          disabled={saving}
          className="rounded-none border border-[#66FCF1] bg-[#0B0C10] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Hero Settings"}
        </button>

        {message ? <p className="text-sm text-[#C5C6C7]">{message}</p> : null}
      </div>
    </section>
  );
}
