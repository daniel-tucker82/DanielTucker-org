"use client";

import { useEffect } from "react";

type StitchTemplateScriptsProps = {
  scripts: string[];
};

/**
 * Runs inline scripts extracted from Stitch HTML exports (preview / prototyping).
 * Prefer converting interactivity to React before shipping production pages.
 */
export function StitchTemplateScripts({ scripts }: StitchTemplateScriptsProps) {
  useEffect(() => {
    for (const body of scripts) {
      try {
        // eslint-disable-next-line no-new-func -- runs legacy template scripts in preview only
        const run = new Function(body);
        run();
      } catch (error) {
        console.warn("[stitch-template] script failed:", error);
      }
    }
  }, [scripts]);

  return null;
}
