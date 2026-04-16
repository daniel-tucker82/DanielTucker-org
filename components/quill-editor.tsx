"use client";

import Quill from "quill";
import { useEffect, useRef } from "react";

type QuillEditorProps = {
  value: string;
  onChange: (nextValue: string) => void;
};

export function QuillEditor({ value, onChange }: QuillEditorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!rootRef.current || quillRef.current) return;
    const quill = new Quill(rootRef.current, {
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
    });
    quill.clipboard.dangerouslyPasteHTML(value || "<p></p>");
    quill.on("text-change", () => onChange(quill.root.innerHTML));
    quillRef.current = quill;
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
