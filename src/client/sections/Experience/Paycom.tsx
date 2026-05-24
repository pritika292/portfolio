import { SubRole, Bullet } from "../../components/CompanyRow.js";
import { Chip, ChipRow } from "../../components/Chip.js";

export function PaycomContent() {
  return (
    <>
      <SubRole title="Software Engineer" dates="Jun 2024 - Present" location="San Francisco, CA">
        <Bullet>
          Built and scaled a Kubernetes-based employee communication platform used by{" "}
          <strong>100k+ employees</strong>, owning features end-to-end across system design, REST
          APIs, MySQL data models, React/TypeScript dashboards, rollout, production support, and DRI
          work during on-call rotations.
          <ChipRow>
            <Chip>Kubernetes</Chip>
            <Chip>Node.js</Chip>
            <Chip>TypeScript</Chip>
            <Chip>MySQL</Chip>
            <Chip>React</Chip>
            <Chip>Redux Toolkit</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Created developer tooling using <strong>GitLab MCP</strong> and well-defined{" "}
          <strong>agent skills</strong> to read failed pipeline events, PR changes, build logs, and
          test output; classifies failures as code, tests, config, or infra; auto-fixes minor code
          changes and flags infra issues affecting multiple PRs.
          <ChipRow>
            <Chip>GitLab MCP</Chip>
            <Chip>Agent skills</Chip>
            <Chip>LLM tool-use</Chip>
            <Chip>TypeScript</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Built <strong>remediation agents</strong> for common CI failures that generate small PR
          patches, rerun validation, and comment with root cause, fix summary, and next steps.
          Engineers stay final approvers.
          <ChipRow>
            <Chip>LLM agents</Chip>
            <Chip>Webhooks</Chip>
            <Chip>GitLab API</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Integrated Redis cache and a Kafka-based event-driven service powering real-time messaging
          dashboards and conversation updates. Database load dropped about <strong>40%</strong> and
          peak-time responsiveness improved.
          <ChipRow>
            <Chip>Redis</Chip>
            <Chip>Kafka</Chip>
            <Chip>MySQL</Chip>
            <Chip>event-driven</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Optimized MySQL schema and query performance for complex nested communication data. Data
          retrieval speed up by <strong>~50%</strong> via indexing and query rewrites.
          <ChipRow>
            <Chip>MySQL</Chip>
            <Chip>query optimization</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Built a scalable lookup service replacing expensive multi-table joins with batch-updated
          employee-group mappings. Query cost cut by <strong>~60%</strong> across multiple core
          modules.
          <ChipRow>
            <Chip>MySQL</Chip>
            <Chip>caching</Chip>
            <Chip>async batch</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Designed and implemented <strong>long-running async queue-based</strong> jobs for bulk
          updates and scheduled communications, offloading heavy work out of the user-facing request
          flow.
          <ChipRow>
            <Chip>queues</Chip>
            <Chip>async backends</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Developed REST APIs and microservices within an MVC framework with OOP design patterns and
          reusable service layers.
          <ChipRow>
            <Chip>REST</Chip>
            <Chip>microservices</Chip>
            <Chip>MVC</Chip>
            <Chip>OOP</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          On-call DRI: debug production issues via internal dashboards and <strong>Splunk</strong>{" "}
          queries, drive root cause across teams, ship timely fixes.
          <ChipRow>
            <Chip>Splunk</Chip>
            <Chip>production debugging</Chip>
            <Chip>on-call</Chip>
          </ChipRow>
        </Bullet>
      </SubRole>
      <SubRole title="Software Engineer Intern" dates="May - Aug 2023" location="Irving, TX">
        <Bullet>
          Built a <strong>real-time chat</strong> feature connecting{" "}
          <strong>37,000+ clients</strong> with their specialists. Designed MySQL data models for
          secure message storage, thread management, and history tracking.
          <ChipRow>
            <Chip>MySQL</Chip>
            <Chip>Node.js</Chip>
            <Chip>Socket.io</Chip>
            <Chip>React</Chip>
          </ChipRow>
        </Bullet>
        <Bullet>
          Implemented REST APIs in <strong>Node.js, Express, TypeScript</strong>; Socket.io for
          instant messaging; ReactJS frontend.
          <ChipRow>
            <Chip>Node.js</Chip>
            <Chip>Express</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Socket.io</Chip>
            <Chip>React</Chip>
          </ChipRow>
        </Bullet>
      </SubRole>
    </>
  );
}
