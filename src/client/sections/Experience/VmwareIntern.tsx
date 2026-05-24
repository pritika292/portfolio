import { RoleCard, Bullet } from "../../components/RoleCard.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function VmwareIntern() {
  return (
    <RoleCard
      company="VMware"
      location="Bangalore, India"
      title="Software Engineer Intern"
      dates="Jan — Jul 2020"
    >
      <Bullet>
        Developed an internal tool in <strong>Python + Shell</strong> to dynamically generate and
        execute test suites for custom upgrade/patch workloads — status tracking and run-completion
        notifications saved hours of manual work.
        <ChipRow>
          <Chip>Python</Chip>
          <Chip>Shell</Chip>
          <Chip>test automation</Chip>
        </ChipRow>
      </Bullet>
    </RoleCard>
  );
}
