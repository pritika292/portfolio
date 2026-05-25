// Brand monogram. A square frame in currentColor with a bold "p" carved
// out — reads at 16px (favicon) and scales cleanly to 256px (apple touch
// icon, OG card). Uses currentColor so it picks up the theme.

export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* outer square frame */}
      <rect x="1" y="1" width="30" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* accent bar — picks up var(--accent) on the page, falls back to currentColor */}
      <rect x="1" y="1" width="4" height="30" fill="var(--accent, currentColor)" />
      {/* lowercase p glyph */}
      <path
        d="M 12 9 L 12 26 M 12 9 L 19 9 Q 23 9 23 13.5 Q 23 18 19 18 L 12 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}
