import { ProjectCard } from "../components/ProjectCard.js";

export function Work() {
  return (
    <section id="work" className="max-w-page mx-auto px-6 py-24 md:py-32 border-t border-border">
      <h2 className="section-heading">What I built in my spare time</h2>
      <div className="mt-12 max-w-content space-y-6">
        <ProjectCard
          code="CR-01"
          name="shortlive"
          tagline="URL shortener with sub-second click analytics. Redis pub/sub fan-out, async fail-soft hot path, webhook automation with HMAC + exponential backoff + DLQ."
          tech={["TypeScript", "Express", "Postgres", "Redis", "WebSocket"]}
          href="https://shortlive.pritika.studio"
        />
        <ProjectCard
          code="CR-12"
          name="controlroom"
          tagline="Live status board for the portfolio. GitHub Actions ingest, SSE-pushed updates, incident banner."
          tech={["TypeScript", "Express", "SSE", "Postgres"]}
          href="https://controlroom.pritika.studio"
        />
      </div>
      <p className="mt-12 max-w-content text-muted italic">
        Multi-hat by default. I write the API, the migration, the SQL plan, the React, the
        Dockerfile, and the deploy.
      </p>
    </section>
  );
}
