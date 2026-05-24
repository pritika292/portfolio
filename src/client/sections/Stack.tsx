import { Chip } from "../components/Chip.js";

type Column = { heading: string; items: string[] };

const COLUMNS: Column[] = [
  {
    heading: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "JavaScript", "PHP", "Shell"],
  },
  {
    heading: "Backend / API",
    items: ["Node.js", "Express", "REST", "GraphQL", "Flask", "MVC"],
  },
  {
    heading: "Data",
    items: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "MongoDB", "Kafka"],
  },
  {
    heading: "Distsys / Infra",
    items: ["Docker", "Kubernetes", "WebSockets", "Socket.io", "Queues", "OIDC"],
  },
  {
    heading: "AI",
    items: [
      "LLM agents",
      "MCP",
      "Agent skills",
      "Claude Code",
      "Copilot CLI",
      "Codex",
      "Embeddings",
      "Vector search",
      "Prompt engineering",
    ],
  },
  {
    heading: "Frontend",
    items: ["React", "Redux Toolkit", "TypeScript", "Vite", "Tailwind", "HTML/CSS"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="max-w-page mx-auto px-6 py-24 md:py-32 border-t border-border">
      <h2 className="section-heading">Stack</h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
              {col.heading}
            </h3>
            <div className="mt-3 -ml-1">
              {col.items.map((it) => (
                <Chip key={it}>{it}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
