import { NextRequest, NextResponse } from "next/server";
import {
  isContactMailConfigured,
  sendContactEmail,
  validateContactPayload,
} from "@/lib/contact-mail";

export async function POST(req: NextRequest) {
  if (!isContactMailConfigured()) {
    return NextResponse.json(
      { error: "Contact email is not configured on the server." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = validateContactPayload(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    await sendContactEmail(parsed);
  } catch (err) {
    console.error("contact mail send failed", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
