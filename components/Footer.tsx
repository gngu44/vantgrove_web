import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} Vantgrove. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link
            href="mailto:hello@vantgrove.com"
            className="transition-colors hover:text-zinc-900"
          >
            hello@vantgrove.com
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-zinc-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
