"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-outline-variant/30 bg-surface-container-low p-4 text-on-surface transition-all placeholder:text-on-surface-variant/50 focus:border-primary-fixed focus:outline-none teal-glow";

const labelClass = "font-label-sm text-label-sm uppercase text-on-surface-variant";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
          message,
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
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4">
        <p className="font-body-lg text-body-lg text-on-surface">Thanks — your message was sent.</p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          I will get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-lg border border-primary-fixed/40 px-5 py-2.5 font-body-md text-body-md text-primary-fixed transition-colors hover:bg-primary-fixed/10"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {status === "error" && errorMessage ? (
        <div
          className="rounded-lg border border-error/40 bg-error-container/20 px-4 py-3 font-body-md text-body-md text-on-error-container"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass} htmlFor="contact-name">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={200}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass} htmlFor="contact-company">
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            maxLength={200}
            className={inputClass}
            placeholder="Company (optional)"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className={labelClass} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={320}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div className="space-y-2">
        <label className={labelClass} htmlFor="contact-message">
          How I might be able to help
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Share your current challenges, goals, and what support would be most valuable."
        />
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          {message.length} / 5000
        </p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-primary-fixed py-4 text-lg font-bold text-on-primary transition-all hover:brightness-110 disabled:opacity-50 teal-gradient-bg"
      >
        {status === "sending" ? "Sending…" : "Contact Daniel"}
      </button>
    </form>
  );
}
