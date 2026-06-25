// ContactForm — the interactive form on the Contact page.
// "use client" marks this as a Client Component: it runs in the browser so it
// can hold state and handle submit events (Server Components can't).
"use client";

import { useState } from "react";

// The four states the form moves through, used to drive the UI below.
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>(""); // message shown on failure

  // Runs when the form is submitted. Posts the field values to the
  // /api/contact route, which emails them to hello@vantgrove.com.
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's default full-page reload
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    // Collect all named fields into a plain { name, email, ... } object.
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // A non-2xx response means the server rejected it; surface its message.
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      form.reset(); // clear the fields
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  // On success, replace the whole form with a confirmation message.
  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-brand-soft px-6 py-8">
        <p className="text-lg font-medium text-foreground">
          Thank you — your message has been sent.
        </p>
        <p className="mt-2 text-muted">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  // noValidate disables the browser's built-in popups so the server is the
  // single source of validation. Each input's `name` becomes a key in `data`.
  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-border px-3 py-2 text-foreground outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-border px-3 py-2 text-foreground outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-foreground"
        >
          Organization{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="mt-2 w-full rounded-md border border-border px-3 py-2 text-foreground outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-border px-3 py-2 text-foreground outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>

      {/* Error message, shown only when a submit attempt failed. */}
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      {/* Disabled while submitting to prevent duplicate sends; label reflects
          the in-flight state. */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
