import type { ReactNode } from "react";

type RoleCardProps = {
  company: string;
  location: string;
  title: string;
  dates: string;
  children: ReactNode;
};

// Generic experience card. Used by all 5 role cards in Experience.
// Header layout: company display + location right-aligned; title and dates
// in mono on the second row. Body is just children -- each role card
// renders its own list of bullets with embedded Chip rows.
export function RoleCard({ company, location, title, dates, children }: RoleCardProps) {
  return (
    <article className="role-card">
      <header className="role-card__header">
        <div className="role-card__heading">
          <span className="role-card__stripe" aria-hidden />
          <h3 className="role-card__company font-display">{company}</h3>
        </div>
        <div className="role-card__location font-mono">{location}</div>
        <div className="role-card__meta font-mono">
          {title} <span aria-hidden>·</span> {dates}
        </div>
      </header>
      <ul className="role-card__bullets">{children}</ul>
    </article>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return <li className="role-card__bullet">{children}</li>;
}
