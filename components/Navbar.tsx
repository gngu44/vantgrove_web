// Navbar — the site-wide top navigation bar.
// Rendered once in app/layout.tsx so it appears on every page.
import Link from "next/link";
import Image from "next/image";

// The page links shown on the right side of the nav.
// Add/remove an entry here to change the menu across the whole site.
const links = [
  { href: "/labs", label: "Vantgrove Labs" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    // <header> draws the bottom hairline that separates the bar from the page.
    <header className="border-b border-border">
      {/* h-16 fixes the bar height; items-stretch lets children fill that
          full height (so the hover boxes can span top-to-bottom). */}
      <nav className="mx-auto flex h-16 max-w-5xl items-stretch justify-between px-6">
        {/* Logo + wordmark, linking home. items-center keeps it vertically
            centered rather than stretched. */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Link list. No gap + flex list items = the hover boxes sit flush,
            edge-to-edge. */}
        <ul className="flex items-stretch text-sm font-medium text-muted">
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
      </nav>
    </header>
  );
}
