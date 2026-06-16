import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Let&apos;s Connect
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        <p>We&apos;re always interested in thoughtful conversations.</p>
        <p>
          Whether you&apos;re building something new, navigating change, or
          exploring a potential collaboration, we&apos;d welcome hearing from
          you.
        </p>
      </div>

      <div className="mt-12 space-y-8 border-t border-border pt-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Primary Contact
          </p>
          <a
            href="mailto:hello@vantgrove.com"
            className="mt-2 inline-block text-lg font-medium text-brand transition-colors hover:text-brand-dark"
          >
            hello@vantgrove.com
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/company/vantgrove/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-brand transition-colors hover:text-brand-dark"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5 flex-none"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Vantgrove on LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Send a message
        </h2>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
