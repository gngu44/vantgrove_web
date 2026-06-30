// Vantgrove Labs page (route: "/labs").
// Introduces the Labs space, lists current projects (or an empty state), and
// describes the kinds of content that will live here.

// The categories of content Labs will hold, shown as a card grid near the
// bottom so visitors understand the section's scope.
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

// Shape of a Labs project.
type Project = {
  name: string;
  summary: string;
  status: string;
};

// No projects yet. Add entries here to replace the empty state with a grid
// of project cards.
const projects: Project[] = [];

export default function LabsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Vantgrove Labs
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        A home for collaborative projects, experiments, 
        prototypes, and future ventures — where we 
        explore, build, and test promising ideas.
      </p>

      {/* Current projects: empty state until the projects array has entries. */}
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
        // One card per project (1 column on mobile, 2 on small+ screens).
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

      {/* "Inside Vantgrove Labs": the content categories as a 3-column grid. */}
      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-foreground">
        Inside Vantgrove Labs
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contentAreas.map((area) => (
          <div key={area.title} className="rounded-lg border border-border p-6">
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
