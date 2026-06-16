import Link from "next/link";
import Image from "next/image";

const focusAreas = [
  {
    title: "Advisory",
    description:
      "Helping leaders navigate growth, transformation, and execution.",
    href: "/about",
  },
  {
    title: "Lab",
    description:
      "Building and testing new ideas through hands-on experimentation.",
    href: "/labs",
  },
  {
    title: "Insights",
    description:
      "Sharing lessons from technology, investing, operations, entrepreneurship, and innovation.",
    href: "/insights",
  },
];

type FeaturedProject = {
  name: string;
  problem: string;
  solution: string;
  team: string;
  status: string;
  learnings: string;
};

// Set this when the flagship project is ready to feature.
const featuredProject: FeaturedProject | null = null;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/bamboo-banner.jpg"
          alt="Bamboo grove"
          width={1920}
          height={760}
          priority
          className="h-[440px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-6">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building enduring value.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              Vantgrove is a platform for strategic advisory, venture creation,
              and practical innovation. We help leaders, organizations, and
              emerging talent to turn ideas into lasting impact.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Let&apos;s connect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three focus areas */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {focusAreas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-brand"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {area.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{area.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand transition-colors group-hover:text-brand-dark">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured project */}
      <section className="border-t border-border bg-brand-soft/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Featured Project
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            From Vantgrove Labs
          </h2>

          {featuredProject ? (
            <div className="mt-10 space-y-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                {featuredProject.name}
              </h3>
              {(
                [
                  ["The Problem", featuredProject.problem],
                  ["The Solution", featuredProject.solution],
                  ["The Team", featuredProject.team],
                  ["Current Status & Progress", featuredProject.status],
                  ["Key Learnings & Outcomes", featuredProject.learnings],
                ] as const
              ).map(([label, body]) => (
                <div key={label}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="mt-2 text-lg leading-8 text-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 max-w-2xl">
              <p className="text-lg leading-8 text-muted">
                Our current flagship project will be featured here soon —
                including the problem being addressed, our proposed solution,
                the team, current status and progress, and key learnings and
                outcomes. This section will grow into the centerpiece of the
                site as our work matures.
              </p>
              <Link
                href="/labs"
                className="mt-6 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Explore Vantgrove Labs →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
