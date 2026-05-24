// Simple inline SVG marks for the two universities. Same trick as the
// company logos: avoid the licensing rabbit hole, just produce a small
// distinctive square per school.

export function UtdLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect width="22" height="22" rx="3" fill="#C75B12" />
      <text
        x="11"
        y="15"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#ffffff"
      >
        UTD
      </text>
    </svg>
  );
}

export function ManipalLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect width="22" height="22" rx="3" fill="#0B5394" />
      <text
        x="11"
        y="16"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#ffffff"
      >
        M
      </text>
    </svg>
  );
}
