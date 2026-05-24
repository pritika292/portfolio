import { useShippingPulse } from "../lib/shippingPulse.js";

export function Hero() {
  return (
    <section className="relative">
      <div className="hero-mesh" aria-hidden />
      <div className="max-w-page mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <h1 className="font-display font-semibold text-[clamp(56px,9vw,104px)] leading-[0.95] tracking-tight">
              Pritika
              <br />
              Priyadarshini.
            </h1>
            <p className="mt-8 font-display text-2xl md:text-3xl leading-snug max-w-content">
              I build production systems from zero to one — fast.
            </p>
            <p className="mt-4 text-muted">Backend &amp; distributed systems · San Francisco</p>
          </div>
          <VelocityCard />
        </div>
        <a
          href="#experience"
          className="mt-16 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] uppercase text-muted hover:text-accent transition-colors"
        >
          <span>experience</span>
          <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}

function VelocityCard() {
  const pulse = useShippingPulse();
  if (!pulse) return null;
  const { commitsThisWeek, lastDeploy, liveCount } = pulse;
  return (
    <aside
      className="border border-border bg-card px-6 py-5 min-w-[240px]"
      aria-label="Live shipping activity"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
        <span className="pulse-dot text-accent" aria-hidden>
          ●
        </span>
        <span>live shipping</span>
      </div>
      <ul className="mt-4 space-y-2 font-mono text-[13px]">
        <li>
          <span className="text-text">{commitsThisWeek}</span>{" "}
          <span className="text-muted">commits this week</span>
        </li>
        {lastDeploy && (
          <li className="text-muted">
            last deploy · <span className="text-text">{lastDeploy.project}</span> ·{" "}
            <span className="text-text">{lastDeploy.hoursAgo}h ago</span>
          </li>
        )}
        <li>
          <span className="text-text">{liveCount}</span>{" "}
          <span className="text-muted">projects live</span>
        </li>
      </ul>
    </aside>
  );
}
