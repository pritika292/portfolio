import { RoleCard, Bullet } from "../../components/RoleCard.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function VmwareSwe() {
  return (
    <RoleCard
      company="VMware"
      location="Bangalore, India"
      title="Software Engineer"
      dates="Jul 2020 — Jul 2022"
    >
      <Bullet>
        Built <strong>Python automation for the vSphere suite</strong>, integrated with an internal
        language-agnostic framework — expanded regression coverage and surfaced build issues earlier
        in the release cycle.
        <ChipRow>
          <Chip>Python</Chip>
          <Chip>vSphere</Chip>
          <Chip>test automation</Chip>
        </ChipRow>
      </Bullet>
      <Bullet>
        Leveraged <strong>Linux shell</strong> scripting and VMware&apos;s <strong>PowerCLI</strong>{" "}
        libraries for functional verification of licenses and features across multiple releases.
        <ChipRow>
          <Chip>Shell</Chip>
          <Chip>PowerCLI</Chip>
          <Chip>release engineering</Chip>
        </ChipRow>
      </Bullet>
      <Bullet>
        Built automation workflows for <strong>NSX-T</strong> using REST APIs in{" "}
        <strong>Java</strong> — identified <strong>~50% of bugs</strong> on the NSX platform.
        <ChipRow>
          <Chip>Java</Chip>
          <Chip>REST</Chip>
          <Chip>NSX-T</Chip>
        </ChipRow>
      </Bullet>
    </RoleCard>
  );
}
