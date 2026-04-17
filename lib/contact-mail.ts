import nodemailer from "nodemailer";

const LIMITS = {
  name: 200,
  company: 200,
  email: 320,
  message: 5000,
} as const;

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripNewlinesForHeader(value: string, max: number): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function getMailConfig() {
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || user;
  if (!user || !pass || !to) return null;
  return { host, port, user, pass, to };
}

export function isContactMailConfigured(): boolean {
  return getMailConfig() !== null;
}

export function validateContactPayload(body: unknown): ContactPayload | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request body." };
  }
  const o = body as Record<string, unknown>;
  const name = String(o.name ?? "").trim();
  const company = String(o.company ?? "").trim();
  const email = String(o.email ?? "").trim();
  const message = String(o.message ?? "").trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }
  if (
    name.length > LIMITS.name ||
    company.length > LIMITS.company ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return { error: "One or more fields are too long." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Invalid email address." };
  }
  return { name, company, email, message };
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const cfg = getMailConfig();
  if (!cfg) {
    throw new Error("Mail is not configured.");
  }

  const transport = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const { name, company, email, message } = payload;
  const subject = stripNewlinesForHeader(`[danieltucker.org] Contact: ${name}`, 200);

  const text = [
    `Name: ${name}`,
    `Company: ${company || "(not provided)"}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const html = `
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Company:</strong> ${escapeHtml(company || "(not provided)")}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<hr style="border:none;border-top:1px solid #ccc;margin:16px 0" />
<pre style="font-family:inherit;white-space:pre-wrap;margin:0">${escapeHtml(message)}</pre>
`.trim();

  await transport.sendMail({
    from: `"danieltucker.org contact" <${cfg.user}>`,
    to: cfg.to,
    replyTo: email,
    subject,
    text,
    html,
  });
}
