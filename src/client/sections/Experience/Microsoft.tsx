import { SubRole, Bullet } from "../../components/CompanyRow.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function MicrosoftContent() {
  return (
    <SubRole title="Software Engineer Intern" dates="May - Jul 2019" location="Hyderabad, India">
      <Bullet>
        Built a pipeline flow persisting test results from Docker-running applications to{" "}
        <strong>Azure DevOps</strong> via ReactJS.
        <ChipRow>
          <Chip>Docker</Chip>
          <Chip>Azure DevOps</Chip>
          <Chip>React</Chip>
        </ChipRow>
      </Bullet>
      <Bullet>
        Implemented a <strong>clustering algorithm in C#</strong> to group related test failures,
        published to Azure DevOps.
        <ChipRow>
          <Chip>C#</Chip>
          <Chip>clustering</Chip>
          <Chip>Azure DevOps</Chip>
        </ChipRow>
      </Bullet>
    </SubRole>
  );
}
