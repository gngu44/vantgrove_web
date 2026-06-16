const contentAreas = [
  {
    title: "Current Projects",
    description: "Active experiments and prototypes we're building and testing.",
  },
  {
    title: "Team Members",
    description: "The people collaborating on Vantgrove Labs work.",
  },
  {
    title: "Project Updates",
    description: "Progress notes and milestones as our work evolves.",
  },
  {
    title: "Technical Write-ups",
    description: "Deeper looks at how we build and the choices behind it.",
  },
  {
    title: "Lessons Learned",
    description: "Honest takeaways from what worked and what didn't.",
  },
  {
    title: "Future Ideas",
    description: "Directions and ventures we're exploring next.",
  },
];

type Project = {
  name: string;
  summary: string;
  status: string;
};

// Add projects here as they get underway.
const projects: Project[] = [];

export default function LabsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Vantgrove Labs
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        A home for collaborative projects, experiments, prototypes, and future
        ventures — where we build and test new ideas through hands-on
        experimentation.
      </p>

      {/* Current projects */}
      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-foreground">
        Current Projects
      </h2>
      {projects.length === 0 ? (
        <div className="mt-6 rounded-lg border border-border px-8 py-14 text-center">
          <p className="text-lg font-medium text-foreground">
            Our first projects are underway.
          </p>
          <p className="mt-2 text-muted">
            Active experiments and prototypes will be featured here soon.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-border p-6"
            >
              <p className="text-sm font-medium text-brand">{project.status}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 leading-7 text-muted">{project.summary}</p>
            </div>
          ))}
        </div>
      )}

      {/* What lives here */}
      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-foreground">
        What you&apos;ll find here
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contentAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-lg border border-border p-6"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {area.title}
            </h3>
            <p className="mt-2 leading-7 text-muted">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
