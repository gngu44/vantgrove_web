// About page (route: "/about").
// Static prose describing Vantgrove, plus a list of how the firm works and a
// closing callout.

// The four ways Vantgrove works with leadership teams, rendered as a bullet
// list further down.
const focusAreas = [
  "Clarify strategic direction and capital allocation priorities",
  "Strengthen operating foundations for scalable growth",
  "Enhance market positioning and revenue effectiveness",
  "Reinforce principled governance and leadership discipline",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Overview
      </h1>

      {/* Intro paragraphs. space-y-6 adds vertical gaps between them. */}
      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        <p>
          At Vantgrove we partner with boards, founders, and senior operating
          leaders to translate ambition into disciplined, enduring value
          creation — aligning strategy, governance, and execution.
        </p>
        <p>
          Drawing on more than four decades of experience across multiple technology 
          cycles — from the introduction of the PC to today's AI revolution — we help 
          organizations navigate complexity and convert strategic intent into practical 
          operating frameworks. We support companies navigating growth inflection 
          points, operational realignment, market expansion, and leadership transition 
          — with a consistent focus on long-term performance and capital stewardship.
        </p>
        <p>
          Like a grove of bamboo, resilient organizations combine strength with
          adaptability. They remain steady under pressure yet flexible enough to
          respond to changing conditions. At Vantgrove we believe performance
          and stewardship are inseparable — and that institutions built to
          endure require both.
        </p>
        <p>
          We explore emerging opportunities through Vantgrove Labs, an innovation 
          initiative focused on practical applications of artificial intelligence, 
          intelligent systems, and technology-enabled solutions. Through hands-on 
          collaboration, research, and prototyping, we bridge ideas and execution 
          while helping develop the next generation of technical and 
          entrepreneurial talent.
        </p>
      </div>

      {/* "How we work" list with custom green dot markers instead of default
          bullets. */}
      <h2 className="mt-14 text-xl font-semibold tracking-tight text-foreground">
        We work alongside leadership teams to:
      </h2>
      <ul className="mt-6 space-y-4">
        {focusAreas.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-8 text-muted">
            {/* The green dot. aria-hidden because it's decorative. */}
            <span
              aria-hidden
              className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-brand"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Closing takeaway, set apart as a callout with a green left border and
          soft-green background. */}
      <p className="mt-12 border-l-2 border-brand bg-brand-soft px-6 py-5 text-lg font-medium leading-8 text-foreground">
        We partner best with leaders committed to building institutions that
        endure.
      </p>
    </section>
  );
}
