import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

/** @type {import('tailwindcss').Config} */
export default {
  // Theme is toggled via data-theme on <html>; the CSS-vars in index.css
  // own the actual color values. Tailwind utility names below are aliases
  // to those vars so JSX can stay clean.
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [path.join(repoRoot, "src/client/**/*.{ts,tsx,html}")],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Geist",
          "ui-sans-serif",
          "-apple-system",
          "SF Pro Text",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        sans: ["ui-sans-serif", "-apple-system", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card-bg)",
      },
      maxWidth: {
        content: "720px",
        // Matches .page-grid's max-width in index.css so the header /
        // footer wordmarks line up exactly with the left/right edges of
        // the body content on wide viewports (#54).
        page: "1280px",
      },
    },
  },
  plugins: [],
};
