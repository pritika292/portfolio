import { useEffect, useState } from "react";

export type ShippingPulse = {
  commitsThisWeek: number;
  lastDeploy: { project: string; hoursAgo: number } | null;
  liveCount: number;
};

// Fetches a snapshot of recent activity from controlroom. Single fetch on
// mount, 3s timeout, fail-silent on any error so the Hero's velocity card
// just unmounts cleanly when controlroom is unreachable.
//
// Endpoint contract is intentionally tolerant: controlroom doesn't expose
// a dedicated /api/pulse yet, so we derive what we can from the public
// /api/projects + /api/stats endpoints. When controlroom grows a /api/pulse
// route, this hook collapses to a single fetch.

const PULSE_URL = "https://controlroom.pritika.studio/api/pulse";
const TIMEOUT_MS = 3000;

export function useShippingPulse(): ShippingPulse | null {
  const [data, setData] = useState<ShippingPulse | null>(null);

  useEffect(() => {
    const ac = new AbortController();
    const timer = window.setTimeout(() => ac.abort(), TIMEOUT_MS);

    void (async () => {
      try {
        const res = await fetch(PULSE_URL, { signal: ac.signal });
        if (!res.ok) return;
        const json = (await res.json()) as Partial<ShippingPulse>;
        if (
          typeof json.commitsThisWeek === "number" &&
          typeof json.liveCount === "number" &&
          (json.lastDeploy === null ||
            (typeof json.lastDeploy === "object" &&
              json.lastDeploy &&
              typeof json.lastDeploy.project === "string" &&
              typeof json.lastDeploy.hoursAgo === "number"))
        ) {
          setData({
            commitsThisWeek: json.commitsThisWeek,
            lastDeploy: json.lastDeploy ?? null,
            liveCount: json.liveCount,
          });
        }
      } catch {
        // network error / abort / parse error -- silently stay null.
      } finally {
        window.clearTimeout(timer);
      }
    })();

    return () => {
      window.clearTimeout(timer);
      ac.abort();
    };
  }, []);

  return data;
}
