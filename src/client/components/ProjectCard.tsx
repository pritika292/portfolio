import { Chip } from "./Chip.js";

type ProjectCardProps = {
  code: string;
  name: string;
  tagline: string;
  tech: string[];
  href: string;
};

// Project card -- full content width, whole surface clickable. Hover
// behavior is owned by the .project-card class in index.css (name slides,
// arrow translates, border shifts to accent).
export function ProjectCard({ code, name, tagline, tech, href }: ProjectCardProps) {
  return (
    <a
      className="project-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} -- ${tagline}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-muted">{code}</div>
          <h3 className="project-name font-display text-2xl font-semibold mt-1">{name}</h3>
        </div>
        <span className="project-arrow text-muted text-xl leading-none" aria-hidden>
          ↗
        </span>
      </div>
      <p className="mt-3 text-text">{tagline}</p>
      <div className="mt-3">
        {tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </a>
  );
}
