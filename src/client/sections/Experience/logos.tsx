// Small inline SVG marks for the three companies. Not the literal corporate
// logos (avoid the licensing rabbit hole) but distinctive enough that a
// recruiter glancing at the row knows which company.

export function PaycomLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect width="22" height="22" rx="3" fill="#7AC143" />
      <text
        x="11"
        y="16"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#ffffff"
      >
        P
      </text>
    </svg>
  );
}

export function VmwareLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect width="22" height="22" rx="3" fill="#1F2937" />
      <text
        x="11"
        y="15"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#7AC143"
      >
        vm
      </text>
    </svg>
  );
}

export function MicrosoftLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect x="1" y="1" width="9" height="9" fill="#F25022" />
      <rect x="12" y="1" width="9" height="9" fill="#7FBA00" />
      <rect x="1" y="12" width="9" height="9" fill="#00A4EF" />
      <rect x="12" y="12" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}
