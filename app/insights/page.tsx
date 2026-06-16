const topics = [
  "Technology",
  "Artificial Intelligence",
  "Entrepreneurship",
  "Investing",
  "Leadership",
  "Operations",
  "Innovation",
];

type Article = {
  title: string;
  excerpt: string;
  href: string;
  topic: string;
  date: string;
};

// Add entries here as insights are published.
const articles: Article[] = [];

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        Insights
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Observations, articles, and lessons learned across technology,
        artificial intelligence, entrepreneurship, investing, leadership,
        operations, and innovation.
      </p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <li
            key={topic}
            className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-dark"
          >
            {topic}
          </li>
        ))}
      </ul>

      {articles.length === 0 ? (
        <div className="mt-14 rounded-lg border border-border px-8 py-14 text-center">
          <p className="text-lg font-medium text-foreground">
            Our first insights are on the way.
          </p>
          <p className="mt-2 text-muted">
            Check back soon, or reach out at{" "}
            <a
              href="mailto:hello@vantgrove.com"
              className="font-medium text-brand transition-colors hover:text-brand-dark"
            >
              hello@vantgrove.com
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-brand"
            >
              <p className="text-sm font-medium text-brand">{article.topic}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {article.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{article.excerpt}</p>
              <p className="mt-4 text-sm text-muted">{article.date}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
