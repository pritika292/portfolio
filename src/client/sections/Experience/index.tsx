import { useMemo, useState } from "react";
import { CompanyRow } from "../../components/CompanyRow.js";
import { PaycomLogo, VmwareLogo, MicrosoftLogo } from "./logos.js";
import { PaycomContent } from "./Paycom.js";
import { VmwareContent } from "./Vmware.js";
import { MicrosoftContent } from "./Microsoft.js";
import { formatDuration, monthsBetween, nowYM, type DateYM } from "../../lib/duration.js";

type CompanyId = "paycom" | "vmware" | "microsoft";

interface CompanySpec {
  id: CompanyId;
  start: DateYM;
  // Leave end undefined for "Present" — the duration updates as time passes.
  end?: DateYM;
}

// Source of truth for role durations. The visible date strings stay
// hardcoded in JSX below so the layout doesn't depend on this; this list
// only powers the (Xy Ym) duration chip and the total at the heading.
const COMPANIES: CompanySpec[] = [
  { id: "paycom", start: { year: 2024, month: 6 } },
  { id: "vmware", start: { year: 2020, month: 7 }, end: { year: 2022, month: 7 } },
  { id: "microsoft", start: { year: 2019, month: 5 }, end: { year: 2019, month: 7 } },
];

export function Experience() {
  const [openId, setOpenId] = useState<CompanyId | null>(null);
  const toggle = (id: CompanyId) => setOpenId((cur) => (cur === id ? null : id));

  const { durations, total } = useMemo(() => {
    const now = nowYM();
    const d: Record<CompanyId, string> = { paycom: "", vmware: "", microsoft: "" };
    let totalMonths = 0;
    for (const c of COMPANIES) {
      const months = monthsBetween(c.start, c.end ?? now);
      d[c.id] = formatDuration(months);
      totalMonths += months;
    }
    return { durations: d, total: formatDuration(totalMonths) };
  }, []);

  return (
    <section id="experience" className="pt-8 pb-12 md:pt-10 md:pb-16">
      <h2 className="section-heading">
        Experience
        <span className="section-heading__meta font-mono"> · {total} total</span>
      </h2>
      <ul className="mt-10 border-t border-border list-none p-0">
        <CompanyRow
          id="paycom"
          name="PAYCOM"
          logo={<PaycomLogo />}
          latestTitle="Software Engineer"
          dates="Jun 2024 - Present"
          duration={durations.paycom}
          location="San Francisco, CA"
          summary="Built real-time messaging at 100k+ employee scale with Kubernetes, MySQL, Redis, and Kafka. Shipped agentic CI tooling on GitLab MCP."
          isOpen={openId === "paycom"}
          onToggle={() => toggle("paycom")}
        >
          <PaycomContent />
        </CompanyRow>
        <CompanyRow
          id="vmware"
          name="VMWARE"
          logo={<VmwareLogo />}
          latestTitle="Software Engineer"
          dates="Jul 2020 - Jul 2022"
          duration={durations.vmware}
          location="Bangalore, India"
          summary="Two years of platform infrastructure: Python automation for vSphere, Java REST tests on NSX-T finding half the platform bugs, PowerCLI release engineering."
          isOpen={openId === "vmware"}
          onToggle={() => toggle("vmware")}
        >
          <VmwareContent />
        </CompanyRow>
        <CompanyRow
          id="microsoft"
          name="MICROSOFT"
          logo={<MicrosoftLogo />}
          latestTitle="Software Engineer Intern"
          dates="May - Jul 2019"
          duration={durations.microsoft}
          location="Hyderabad, India"
          summary="Built a C# clustering algorithm and a ReactJS pipeline persisting Docker test results to Azure DevOps."
          isOpen={openId === "microsoft"}
          onToggle={() => toggle("microsoft")}
        >
          <MicrosoftContent />
        </CompanyRow>
      </ul>
    </section>
  );
}
