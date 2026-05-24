import { useShippingPulse } from "../lib/shippingPulse.js";
import { ProjectCard } from "../components/ProjectCard.js";

// Side pane: anchors the projects so they're visible from first paint, no
// matter where the visitor is in the scroll. On desktop the pane sticks to
// the right; on mobile it renders inline right after Hero. Live-shipping
// pulse sits on top so the "she's actively shipping" signal lands early.

export function SidePane() {
  return (
    <aside className="side-pane">
      <VelocityCard />
      <div>
        <h2 className="section-heading">Spare-time builds</h2>
        <div className="mt-4 space-y-3">
          <ProjectCard
            code="CR-01"
            name="shortlive"
            tagline="Shorten a URL, watch clicks flash on a live world map. Sub-second. Outbound webhooks fire to your endpoint, HMAC signed, with backoff and a DLQ."
            tech={["TS", "Express", "Postgres", "Redis", "WebSocket", "Webhooks"]}
            href="https://shortlive.pritika.studio"
          />
          <ProjectCard
            code="CR-12"
            name="pg-inspector"
            tagline="Postgres sandbox: pick one of five industry schemas, ask in English or write SQL, see the execution plan, get AI-drafted index recommendations. Three-layer SQL safety; Azure OpenAI via Managed Identity, no keys."
            tech={["TS", "Express", "React", "Postgres", "react-flow", "Azure OpenAI"]}
            href="https://pg.pritika.studio"
          />
          <ProjectCard
            code="CR-13"
            name="focusroom"
            tagline="Drop a post, watch 20 personas react. Audience simulation with diverse demographics, voice models, and threaded replies streamed via SSE."
            tech={["TS", "Express", "React", "Postgres", "SSE", "Azure OpenAI"]}
            href="https://focusroom.pritika.studio"
          />
          <ProjectCard
            code="CR-14"
            name="controlroom"
            tagline="Live status board running the whole portfolio family: this site, shortlive, and every project after. Deploys, health, commits, incidents streamed via SSE."
            tech={["TS", "Express", "SSE", "Postgres"]}
            href="https://controlroom.pritika.studio"
          />
        </div>
        <p className="mt-4 text-[11.5px] text-muted italic leading-snug">
          Built nights and weekends. Day-job production work is in Experience.
        </p>
      </div>
    </aside>
  );
}

function VelocityCard() {
  const pulse = useShippingPulse();
  if (!pulse) return null;
  const { commitsThisWeek, lastDeploy, liveCount } = pulse;
  return (
    <div className="border border-border bg-card px-5 py-4" aria-label="Live shipping activity">
      <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
        <span className="pulse-dot text-accent" aria-hidden>
          ●
        </span>
        <span>live shipping</span>
      </div>
      <ul className="mt-3 space-y-1.5 font-mono text-[12.5px]">
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
    </div>
  );
}
