import { Chip } from "../components/Chip.js";

type Column = { heading: string; items: string[] };

// Mirrors the TECHNICAL SKILLS section of the resume verbatim. If the
// resume changes, this list is the public-facing reflection.
const COLUMNS: Column[] = [
  {
    heading: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "PHP"],
  },
  {
    heading: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST",
      "GraphQL",
      "gRPC",
      "Protobuf",
      "Kafka",
      "WebSockets",
      "SSE",
    ],
  },
  {
    heading: "Frontend",
    items: ["React", "Redux Toolkit", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    heading: "AI / LLM",
    items: [
      "LLM agents",
      "MCP",
      "function calling",
      "RAG",
      "pgvector",
      "prompt shields",
      "Copilot CLI",
      "Claude Code",
    ],
  },
  {
    heading: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    heading: "Cloud / Infra",
    items: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "IAM",
      "Lambda",
      "S3",
      "SQS",
      "SNS",
    ],
  },
  {
    heading: "Testing / Tools",
    items: [
      "PyTest",
      "Vitest",
      "Playwright",
      "pre-commit",
      "gitleaks",
      "Splunk",
      "Git",
      "Jira",
      "Confluence",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-16 md:py-24 border-t border-border">
      <h2 className="section-heading">Stack</h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
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
