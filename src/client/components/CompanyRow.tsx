import type { ReactNode } from "react";

type Props = {
  id: string;
  name: string;
  logo: ReactNode;
  latestTitle: string;
  dates: string;
  location: string;
  summary: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

// One accordion row in the Experience section. Header is a button (so it's
// keyboard accessible) showing logo + company + most-recent title/dates/loc.
// A one-line summary sits below, always visible. The expanded body uses the
// modern grid-template-rows 0fr -> 1fr animation so heights stay intrinsic
// and no JS measurement is needed.
export function CompanyRow({
  id,
  name,
  logo,
  latestTitle,
  dates,
  location,
  summary,
  isOpen,
  onToggle,
  children,
}: Props) {
  return (
    <li className={`company-row ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="company-row__head"
        aria-expanded={isOpen}
        aria-controls={`${id}-body`}
        onClick={onToggle}
      >
        <span className="company-row__logo" aria-hidden>
          {logo}
        </span>
        <span className="company-row__name font-display">{name}</span>
        <span className="company-row__meta font-mono">
          <span className="company-row__title">{latestTitle}</span>
          <span aria-hidden className="company-row__sep">
            ·
          </span>
          <span>{dates}</span>
          <span aria-hidden className="company-row__sep">
            ·
          </span>
          <span>{location}</span>
        </span>
        <span className="company-row__arrow" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <p className="company-row__summary">{summary}</p>
      <div
        id={`${id}-body`}
        className="company-row__body"
        role="region"
        aria-label={`${name} details`}
      >
        <div className="company-row__body-inner">{children}</div>
      </div>
    </li>
  );
}

export function SubRole({
  title,
  dates,
  location,
  children,
}: {
  title: string;
  dates: string;
  location: string;
  children: ReactNode;
}) {
  return (
    <div className="sub-role">
      <header className="sub-role__header font-mono">
        <span className="text-text">{title}</span>
        <span className="text-muted">
          {" "}
          · {dates} · {location}
        </span>
      </header>
      <ul className="sub-role__bullets">{children}</ul>
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return <li className="sub-role__bullet">{children}</li>;
}
