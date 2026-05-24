const EMAIL = "pritikaapriyadarshini@gmail.com";
const GITHUB = "https://github.com/pritika292";
const LINKEDIN = "https://linkedin.com/in/pritika-priyadarshini";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-page mx-auto px-6 py-16 md:py-24 border-t border-border">
      <div className="max-w-content space-y-6">
        <div className="text-text">
          <a className="inline-link" href={GITHUB} target="_blank" rel="noopener noreferrer">
            github.com/pritika292
          </a>
          <span aria-hidden className="text-muted mx-2">
            ·
          </span>
          <a className="inline-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/pritika-priyadarshini
          </a>
          <span aria-hidden className="text-muted mx-2">
            ·
          </span>
          <a className="inline-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span aria-hidden className="text-muted mx-2">
            ·
          </span>
          <a className="inline-link" href="/resume.pdf">
            résumé (PDF)
          </a>
        </div>
        <p className="font-mono text-[12px] text-muted">
          built with TS · React · Vite · Tailwind · Express · Caddy · Azure
        </p>
        <p className="font-mono text-[11px] text-muted">© {year} Pritika Priyadarshini</p>
      </div>
    </footer>
  );
}
