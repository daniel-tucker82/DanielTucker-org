"use client";

import { useEffect, useRef } from "react";

type RichTextEditorProps = {
  value: string;
  onChange: (nextValue: string) => void;
};

const controls: Array<{ label: string; command: string; value?: string }> = [
  { label: "H2", command: "formatBlock", value: "h2" },
  { label: "H3", command: "formatBlock", value: "h3" },
  { label: "B", command: "bold" },
  { label: "I", command: "italic" },
  { label: "UL", command: "insertUnorderedList" },
  { label: "OL", command: "insertOrderedList" },
];

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    if (editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const run = (command: string, commandValue?: string) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, commandValue);
    onChange(editorRef.current.innerHTML);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {controls.map((control) => (
          <button
            key={`${control.command}-${control.label}`}
            type="button"
            onClick={() => run(control.command, control.value)}
            className="rounded-none border border-[#66FCF1]/45 px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white"
          >
            {control.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            const href = window.prompt("Enter link URL");
            if (href) run("createLink", href);
          }}
          className="rounded-none border border-[#66FCF1]/45 px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-white"
        >
          Link
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        className="min-h-48 w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2 text-[#C5C6C7] outline-none focus:border-[#66FCF1]"
      />
    </div>
  );
}
