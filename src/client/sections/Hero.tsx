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
          Fullstack and backend distributed systems engineer. Four years across{" "}
          <strong className="text-text">Paycom, VMware, and Microsoft</strong>, shipping real-time
          platforms that serve <strong className="text-text">100k+ users</strong> with React,
          Node.js, TypeScript, Kubernetes, Kafka, Redis, and MySQL.{" "}
          <strong className="text-text">End-to-end builder who wants high ownership</strong>: the
          API, the SQL plan, the React, the Dockerfile, and the deployment all from one person.{" "}
          <strong className="text-text">AI-native developer workflow</strong>: Claude Code, Copilot
          CLI, MCP servers, and custom agent skills shipped to production. Moves fast, ramps in
          days, ships same week. Open to fullstack, backend, and distributed systems roles at top
          startups.
        </p>
        <p className="mt-4 text-muted font-mono text-[13px] tracking-wide">
          Full-stack · Backend · Distributed Systems · AI · San Francisco · Seattle · Austin
        </p>
      </div>
    </section>
  );
}
