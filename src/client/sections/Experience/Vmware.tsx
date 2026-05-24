import { SubRole, Bullet } from "../../components/CompanyRow.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function VmwareContent() {
  return (
    <>
      <SubRole title="Software Engineer" dates="Jul 2020 - Jul 2022" location="Bangalore, India">
        <Bullet>
          Built <strong>Python automation for the vSphere suite</strong> and integrated it with an
          internal language-agnostic framework. Regression coverage expanded and build issues
          surfaced earlier in the release cycle.
          <ChipRow>
            <Chip>Python</Chip>
            <Chip>vSphere</Chip>
            <Chip>test automation</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Leveraged <strong>Linux shell</strong> scripting and VMware&apos;s{" "}
          <strong>PowerCLI</strong> libraries for functional verification of licenses and features
          across multiple releases.
          <ChipRow>
            <Chip>Shell</Chip>
            <Chip>PowerCLI</Chip>
            <Chip>release engineering</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Built automation workflows for <strong>NSX-T</strong> using REST APIs in{" "}
          <strong>Java</strong>. Identified about <strong>50% of bugs</strong> on the NSX platform.
          <ChipRow>
            <Chip>Java</Chip>
            <Chip>REST</Chip>
            <Chip>NSX-T</Chip>
          </ChipRow>
        </Bullet>
      </SubRole>
      <SubRole title="Software Engineer Intern" dates="Jan - Jul 2020" location="Bangalore, India">
        <Bullet>
          Developed an internal tool in <strong>Python and Shell</strong> to dynamically generate
          and execute test suites for custom upgrade and patch workloads. Status tracking and
          run-completion notifications saved hours of manual work.
          <ChipRow>
            <Chip>Python</Chip>
            <Chip>Shell</Chip>
            <Chip>test automation</Chip>
          </ChipRow>
        </Bullet>
      </SubRole>
    </>
  );
}
