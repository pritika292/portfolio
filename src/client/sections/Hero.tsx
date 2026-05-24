export function Hero() {
  return (
    <section className="relative">
      <div className="hero-mesh" aria-hidden />
      <div className="relative pt-12 pb-16 md:pt-16 md:pb-20">
        <h1 className="font-display font-semibold text-[clamp(48px,8vw,88px)] leading-[0.95] tracking-tight">
          Pritika
          <br />
          Priyadarshini.
        </h1>
        <p className="mt-6 font-display text-2xl md:text-3xl leading-snug max-w-content">
          I build production systems from zero to one. Fast.
        </p>
        <p className="mt-6 max-w-content leading-relaxed">
          Fullstack and backend distributed systems engineer. Five years across{" "}
          <strong className="text-text">Paycom, VMware, and Microsoft</strong>, shipping real-time
          platforms that serve <strong className="text-text">100k+ users</strong> with Kubernetes,
          Kafka, Redis, and MySQL. I move fast, wear every hat from API to SQL plan to Dockerfile to
          deploy, and ramp up in days. Open to senior backend and distsys roles at top startups in
          San Francisco.
        </p>
        <p className="mt-4 text-muted">Backend and distributed systems · San Francisco</p>
      </div>
    </section>
  );
}
