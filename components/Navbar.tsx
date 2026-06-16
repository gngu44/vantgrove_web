import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/labs", label: "Vantgrove Labs" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/vantgrove-logo.png"
            alt="Vantgrove logo"
            width={40}
            height={36}
            priority
            className="h-9 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Vantgrove
          </span>
        </Link>
        <ul className="flex items-center gap-8 text-sm font-medium text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-brand"
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
