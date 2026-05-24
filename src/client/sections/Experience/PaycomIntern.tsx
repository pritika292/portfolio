import { RoleCard, Bullet } from "../../components/RoleCard.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function PaycomIntern() {
  return (
    <RoleCard
      company="Paycom"
      location="Irving, TX"
      title="Software Engineer Intern"
      dates="May — Aug 2023"
    >
      <Bullet>
        Built a <strong>real-time chat</strong> feature connecting <strong>37,000+ clients</strong>{" "}
        with their specialists. Designed MySQL data models for secure message storage, thread
        management, and history tracking.
        <ChipRow>
          <Chip>MySQL</Chip>
          <Chip>Node.js</Chip>
          <Chip>Socket.io</Chip>
          <Chip>React</Chip>
        </ChipRow>
      </Bullet>
      <Bullet>
        Implemented REST APIs in <strong>Node.js + Express + TypeScript</strong>; Socket.io for
        instant messaging; ReactJS frontend.
        <ChipRow>
          <Chip>Node.js</Chip>
          <Chip>Express</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Socket.io</Chip>
          <Chip>React</Chip>
        </ChipRow>
      </Bullet>
    </RoleCard>
  );
}
