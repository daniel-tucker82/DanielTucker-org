"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [helpText, setHelpText] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          message: helpText,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setHelpText("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden border-b border-[#66FCF1]/10 bg-[#121317]">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/95 via-transparent to-[#66FCF1]/8" />

        <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-8 px-6 py-16 md:px-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#66FCF1]" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#66FCF1]">
                Contact
              </p>
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tighter text-white sm:text-6xl">
              Start the conversation.
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 flex justify-end">
            <div className="w-32 h-32 border border-[#66FCF1]/25 bg-[#0B0C10] p-2">
              <Image
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=512&q=80"
                alt="Technical blueprint icon"
                width={256}
                height={256}
                unoptimized
                className="w-full h-full object-cover grayscale opacity-60 contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="panel-surface rounded-none border border-[#66FCF1]/25 bg-[#121317] p-0">
        <div className="border-b border-[#66FCF1]/20 px-6 py-6 sm:px-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1]">
            Contact Form
          </h2>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 sm:px-8">
            <p className="text-[#C5C6C7] text-lg mb-4">Thanks — your message was sent.</p>
            <p className="text-[#C5C6C7]/80 text-sm mb-6">
              I will get back to you as soon as I can.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="rounded-none border border-[#66FCF1]/60 bg-[#0B0C10] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1] transition-colors hover:border-[#66FCF1] hover:bg-[#66FCF1]/10"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 px-6 py-7 sm:grid-cols-2 sm:px-8 sm:py-8"
          >
            {status === "error" && errorMessage ? (
              <div
                className="sm:col-span-2 rounded-none border border-red-500/50 bg-red-950/30 px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {errorMessage}
              </div>
            ) : null}
            <label className="space-y-2 text-sm">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={200}
                className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2.5 text-[#C5C6C7] outline-none transition-colors placeholder:text-[#C5C6C7]/45 focus:border-[#66FCF1] focus:bg-[#0F1117]"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
                Company
              </span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                maxLength={200}
                className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2.5 text-[#C5C6C7] outline-none transition-colors placeholder:text-[#C5C6C7]/45 focus:border-[#66FCF1] focus:bg-[#0F1117]"
              />
            </label>
            <label className="space-y-2 text-sm sm:col-span-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={320}
                className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2.5 text-[#C5C6C7] outline-none transition-colors placeholder:text-[#C5C6C7]/45 focus:border-[#66FCF1] focus:bg-[#0F1117]"
              />
            </label>
            <label className="space-y-2 text-sm sm:col-span-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#66FCF1]">
                Describe how I might be able to help
              </span>
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={8}
                value={helpText}
                onChange={(event) => setHelpText(event.target.value)}
                placeholder="Share your current challenges, goals, and what support would be most valuable."
                className="w-full rounded-none border border-[#66FCF1]/45 bg-[#0B0C10] px-3 py-2.5 text-[#C5C6C7] outline-none transition-colors placeholder:text-[#C5C6C7]/45 focus:border-[#66FCF1] focus:bg-[#0F1117]"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C5C6C7]/65">
                {helpText.length} / 5000
              </p>
            </label>
            <div className="sm:col-span-2 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-none border border-[#66FCF1] bg-[#0B0C10] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#66FCF1] transition-colors hover:bg-[#66FCF1] hover:text-[#0B0C10] disabled:pointer-events-none disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Contact Daniel"}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
