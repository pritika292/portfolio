import express, { type Express } from "express";
import helmet from "helmet";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const CLIENT_DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../client");

export function createApp(): Express {
  const app = express();

  app.disable("x-powered-by");

  // Caddy fronts the site and terminates TLS. HSTS + upgrade-insecure-requests
  // are turned on here because the public hostname is HTTPS-only via Caddy.
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "img-src": ["'self'", "data:"],
          // The connect-src includes the controlroom subdomain so the
          // shipping-pulse hook can fetch live activity numbers.
          "connect-src": ["'self'", "https://controlroom.pritika.studio"],
          "script-src": ["'self'"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "font-src": ["'self'"],
        },
      },
      strictTransportSecurity: { maxAge: 31536000, includeSubDomains: true, preload: false },
    }),
  );

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "portfolio" });
  });

  // Serve the built SPA when it exists (production / post-build).
  const indexHtml = path.join(CLIENT_DIST, "index.html");
  const hasClient = existsSync(indexHtml);
  if (hasClient) {
    app.use(
      "/assets",
      express.static(path.join(CLIENT_DIST, "assets"), { immutable: true, maxAge: "1y" }),
    );
    // Static files in /public are emitted to dist/client at build time
    // (favicon, pritika_resume.pdf, og-image.png, fonts).
    app.use(express.static(CLIENT_DIST, { index: false }));
    // SPA fallback — single-page site, so any GET serves index.html.
    app.get("/", (_req, res) => {
      res.sendFile(indexHtml);
    });
  }

  return app;
}
