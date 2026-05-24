import { Chip } from "./Chip.js";

type ProjectCardProps = {
  code: string;
  name: string;
  tagline: string;
  tech: string[];
  href: string;
};

// Project card -- compact shape sized for the side pane so 4 stack within
// the sticky viewport without scrolling. Hover behavior is owned by the
// .project-card class in index.css (name slides, arrow translates, border
// shifts to accent).
export function ProjectCard({ code, name, tagline, tech, href }: ProjectCardProps) {
  return (
    <a
      className="project-card fr-glass fr-lift"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${tagline}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="min-w-0 flex items-baseline gap-2">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
            {code}
          </span>
          <h3 className="project-name font-display text-[17px] font-semibold leading-none">
            {name}
          </h3>
        </div>
        <span className="project-arrow text-muted text-[15px] leading-none" aria-hidden>
          ↗
        </span>
      </div>
      <p className="mt-2 text-[13px] leading-snug">{tagline}</p>
      <div className="mt-2 -ml-1">
        {tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </a>
  );
}
