import type { ReactNode } from "react";

// Inline tech chip. Used ~50+ times across Experience and Stack sections,
// so styling lives in index.css under the .chip class -- one source of
// truth for the underline animation on hover/focus.

type ChipProps = {
  children: ReactNode;
  href?: string;
};

export function Chip({ children, href }: ChipProps) {
  if (href) {
    return (
      <a className="chip" href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <span className="chip">{children}</span>;
}

export function ChipRow({ children }: { children: ReactNode }) {
  return <span className="block mt-2">{children}</span>;
}
