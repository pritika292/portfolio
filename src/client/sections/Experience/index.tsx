import { useState } from "react";
import { CompanyRow } from "../../components/CompanyRow.js";
import { PaycomLogo, VmwareLogo, MicrosoftLogo } from "./logos.js";
import { PaycomContent } from "./Paycom.js";
import { VmwareContent } from "./Vmware.js";
import { MicrosoftContent } from "./Microsoft.js";

type CompanyId = "paycom" | "vmware" | "microsoft";

export function Experience() {
  const [openId, setOpenId] = useState<CompanyId | null>(null);
  const toggle = (id: CompanyId) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section id="experience" className="max-w-page mx-auto px-6 py-24 md:py-32">
      <h2 className="section-heading">Experience</h2>
      <ul className="mt-10 max-w-content border-t border-border">
        <CompanyRow
          id="paycom"
          name="PAYCOM"
          logo={<PaycomLogo />}
          latestTitle="Software Engineer"
          dates="Jun 2024 - Present"
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
          location="Hyderabad, India"
          summary="Built a C# clustering algorithm and a ReactJS pipeline persisting Docker test results to Azure DevOps."
          isOpen={openId === "microsoft"}
          onToggle={() => toggle("microsoft")}
        >
          <MicrosoftContent />
        </CompanyRow>
      </ul>
      <p className="mt-12 max-w-content text-[14px] text-muted italic leading-relaxed">
        University of Texas at Dallas, MS Computer Science, 3.88 GPA (2022 to 2024). Manipal
        Institute of Technology, BTech Computer Science, 9.02 / 10 (2016 to 2020).
      </p>
    </section>
  );
}
