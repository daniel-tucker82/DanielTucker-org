"use client";

import type Quill from "quill";
import { useEffect, useRef } from "react";

type QuillEditorProps = {
  value: string;
  onChange: (nextValue: string) => void;
};

export function QuillEditor({ value, onChange }: QuillEditorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  // Quill touches `document` at module-init time, so we must only load it
  // in the browser (inside `useEffect`).
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!rootRef.current || quillRef.current) return;

    let cancelled = false;
    (async () => {
      const mod = (await import("quill")) as typeof import("quill");
      const QuillCtor = (mod.default ?? mod) as unknown as new (
        container: Element,
        options: unknown,
      ) => Quill;
      if (cancelled || !rootRef.current) return;

      const quill = new QuillCtor(rootRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            ["link", "image"],
            [{ align: [] }, { color: [] }, { background: [] }],
            ["clean"],
          ],
        },
      } as unknown);

      quill.clipboard.dangerouslyPasteHTML(value || "<p></p>");
      quill.on("text-change", () => onChange(quill.root.innerHTML));
      quillRef.current = quill;
    })();

    return () => {
      cancelled = true;
    };
  }, [onChange, value]);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;
    if (quill.root.innerHTML !== value) {
      const selection = quill.getSelection();
      quill.clipboard.dangerouslyPasteHTML(value || "<p></p>");
      if (selection) quill.setSelection(selection);
    }
  }, [value]);

  return (
    <div className="overflow-hidden rounded-none border border-[#66FCF1]/45 bg-[#0B0C10]">
      <div ref={rootRef} className="min-h-[260px] text-[#C5C6C7]" />
    </div>
  );
}
