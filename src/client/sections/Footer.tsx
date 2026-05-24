const EMAIL = "pritikaapriyadarshini@gmail.com";
const GITHUB = "https://github.com/pritika292";
const LINKEDIN = "https://linkedin.com/in/pritika-priyadarshini";

type IconLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
};

function IconLink({ href, label, external, children }: IconLinkProps) {
  const external_props = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
  return (
    <a href={href} aria-label={label} className="footer-link" {...external_props}>
      <span className="footer-link__icon" aria-hidden>
        {children}
      </span>
      <span className="footer-link__label">{label}</span>
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-page mx-auto px-6 py-16 md:py-20 border-t border-border">
      <div className="max-w-content">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <IconLink href={GITHUB} label="GitHub" external>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.1.79-.25.79-.55 0-.27-.01-.99-.02-1.94-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.77 1.07.77 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.8.55C20.71 21.4 24 17.09 24 12 24 5.65 18.85.5 12.5.5z" />
            </svg>
          </IconLink>
          <IconLink href={LINKEDIN} label="LinkedIn" external>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm-1.78 13.02h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </IconLink>
          <IconLink href={`mailto:${EMAIL}`} label="Email">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </IconLink>
          <IconLink href="/pritika_resume.pdf" label="Résumé">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="11" x2="12" y2="17" />
              <polyline points="9 14 12 17 15 14" />
            </svg>
          </IconLink>
        </nav>
        <p className="mt-8 font-mono text-[12px] text-muted">
          built with TS · React · Vite · Tailwind · Express · Caddy · Azure
        </p>
        <p className="mt-2 font-mono text-[11px] text-muted">© {year} Pritika Priyadarshini</p>
      </div>
    </footer>
  );
}
