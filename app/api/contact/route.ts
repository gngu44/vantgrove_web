// API route for the contact form (endpoint: POST /api/contact).
// Receives the form submission, validates it, and emails it via Resend.
// This runs on the server — the Resend API key never reaches the browser.
import { NextResponse } from "next/server";

// Where contact submissions are delivered.
const TO_EMAIL = "hello@vantgrove.com";
// The "from" address. Until vantgrove.com is verified in Resend, this test
// sender works (but only delivers to your own Resend account email).
// After verifying the domain, change to e.g. "Vantgrove <hello@vantgrove.com>".
const FROM_EMAIL = "Vantgrove Contact <onboarding@resend.dev>";

// Minimal email format check (something@something.something).
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  // 1. Parse the JSON body; reject if it's malformed.
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 2. Pull out and trim the fields sent by the form.
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const organization = String(data.organization ?? "").trim();
  const message = String(data.message ?? "").trim();

  // 3. Validate: required fields present and a sane email address.
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // 4. The API key is read from an environment variable (set in .env.local
  //    for local dev and in Vercel's settings for production). Never hardcode
  //    it. If it's missing, fail clearly instead of silently dropping the message.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 500 },
    );
  }

  // 5. Hand the message off to Resend's email API. reply_to is set to the
  //    sender so replying from your inbox goes straight back to them.
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  // 6. If Resend rejected the send, log the detail and return a friendly error.
  if (!res.ok) {
    const body = await res.text();
    console.error("Resend error:", res.status, body);
    return NextResponse.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }

  // 7. Success — the form component shows its confirmation message.
  return NextResponse.json({ ok: true });
}
