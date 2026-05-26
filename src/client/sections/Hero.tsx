export function Hero() {
  return (
    <section className="relative">
      <div className="relative pt-12 pb-6 md:pt-16 md:pb-8">
        <h1 className="font-display font-semibold text-[clamp(56px,10vw,108px)] leading-[0.92] tracking-[-0.02em]">
          Pritika
          <br />
          Priyadarshini.
        </h1>
        <p className="mt-6 font-display text-2xl md:text-3xl leading-snug max-w-content">
          I build production systems from zero to one. Fast.
        </p>
        <p className="mt-6 max-w-content leading-relaxed">
          Full-stack / backend engineer with 5 years across{" "}
          <strong className="text-text">Paycom, VMware, and Microsoft</strong>. Built real-time
          platforms serving <strong className="text-text">100k+ users</strong> with React, Node.js,
          TypeScript, Kafka, Redis, MySQL, Kubernetes, and Docker. Comfortable{" "}
          <strong className="text-text">
            owning the full path from API and database design to frontend, deployment, and
            production debugging
          </strong>
          . <strong className="text-text">AI-native workflow</strong> with Claude Code, Copilot CLI,
          MCP servers, and custom agent skills. Open to full-stack, backend, and distributed systems
          roles.
        </p>
        <p className="mt-4 text-muted font-mono text-[13px] tracking-wide">
          Full-stack · Backend · Distributed Systems · AI · San Francisco · Seattle · Austin
        </p>
      </div>
    </section>
  );
}
