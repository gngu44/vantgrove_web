// Navbar — the site-wide top navigation bar.
// Rendered once in app/layout.tsx so it appears on every page.
// On desktop (md+) the links sit in a row; on mobile they collapse into a
// tap-to-open menu. "use client" is required because the open/close toggle
// needs React state.
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// The page links shown in the nav (desktop row and mobile menu).
// Add/remove an entry here to change the menu across the whole site.
const links = [
  { href: "/labs", label: "Vantgrove Labs" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  // Whether the mobile menu is expanded.
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      {/* h-16 fixes the bar height; items-stretch lets children fill that
          full height (so the desktop hover boxes span top-to-bottom). */}
      <nav className="mx-auto flex h-16 max-w-5xl items-stretch justify-between px-6">
        {/* Logo + wordmark, linking home. Closes the mobile menu if open. */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/vantgrove-logo.png"
            alt="Vantgrove logo"
            width={40}
            height={36}
            priority // load eagerly — it's above the fold on every page
            className="h-9 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Vantgrove
          </span>
        </Link>

        {/* Desktop links — hidden on mobile, shown as a flush row at md+.
            No gap + flex list items = the hover boxes sit edge-to-edge. */}
        <ul className="hidden items-stretch text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href} className="flex">
              {/* h-full makes each link fill the bar's height; on hover it
                  becomes a sharp-cornered green box with white text. */}
              <Link
                href={link.href}
                className="flex h-full items-center px-4 transition-colors hover:bg-brand hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — shown only on mobile (hidden at md+).
            Toggles the menu and swaps between the hamburger and X icons. */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex items-center text-foreground md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown — always in the DOM so it can animate. The grid-rows
          trick rolls it open/closed (0fr → 1fr) like a shutter; the inner
          min-h-0 + overflow-hidden clips the content during the transition. */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 overflow-hidden border-t border-border text-sm font-medium text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 transition-colors hover:bg-brand hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
