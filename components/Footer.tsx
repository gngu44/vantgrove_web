// Footer — the site-wide footer.
// Rendered once in app/layout.tsx; mt-auto pushes it to the bottom of the
// page even when content is short.
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      {/* Stacks vertically on mobile, spreads into a row on small+ screens. */}
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        {/* Copyright year is computed at render time, so it stays current. */}
        <p>&copy; {new Date().getFullYear()} Vantgrove. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {/* mailto: opens the visitor's email client to hello@vantgrove.com */}
          <Link
            href="mailto:hello@vantgrove.com"
            className="transition-colors hover:text-brand"
          >
            hello@vantgrove.com
          </Link>
          <Link href="/contact" className="transition-colors hover:text-brand">
            Contact
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-brand">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
