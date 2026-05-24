import type { MouseEvent, ReactNode } from "react";

type Props = {
  id: string;
  name: string;
  logo: ReactNode;
  latestTitle: string;
  dates: string;
  // Human-formatted duration ("2y 6m") rendered next to dates.
  duration?: string;
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
//
// preventDefault on click stops Safari/Chrome's occasional auto-scroll
// behavior when an aria-controls target grows. The aria-controls attribute
// itself was dropped: the body sits as a sibling immediately after the
// button so screen readers find it via DOM order anyway.
export function CompanyRow({
  name,
  logo,
  latestTitle,
  dates,
  duration,
  location,
  summary,
  isOpen,
  onToggle,
  children,
}: Props) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onToggle();
  }
  return (
    <li className={`company-row ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="company-row__head"
        aria-expanded={isOpen}
        onClick={handleClick}
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
          <span>
            {dates}
            {duration !== undefined && <span className="company-row__duration"> ({duration})</span>}
          </span>
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
      <div className="company-row__body" aria-hidden={!isOpen}>
        <div className="company-row__body-inner">{children}</div>
      </div>
    </li>
  );
}

export function SubRole({
  title,
  dates,
  duration,
  location,
  children,
}: {
  title: string;
  dates: string;
  duration?: string;
  location: string;
  children: ReactNode;
}) {
  return (
    <div className="sub-role">
      <header className="sub-role__header font-mono">
        <span className="text-text">{title}</span>
        <span className="text-muted">
          {" "}
          · {dates}
          {duration !== undefined ? ` (${duration})` : ""} · {location}
        </span>
      </header>
      <ul className="sub-role__bullets">{children}</ul>
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return <li className="sub-role__bullet">{children}</li>;
}
