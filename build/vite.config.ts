import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

// This config lives in build/, so resolve project paths from the repo root
// (one level up).
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export default defineConfig({
  root: path.resolve(repoRoot, "src/client"),
  // Static assets (favicon, resume, fonts, og-image) live at /public at the
  // repo root and get copied verbatim into dist/client at build time.
  publicDir: path.resolve(repoRoot, "public"),
  plugins: [react()],
  css: {
    postcss: path.resolve(repoRoot, "build/postcss.config.js"),
  },
  build: {
    outDir: path.resolve(repoRoot, "dist/client"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3013",
      "/health": "http://localhost:3013",
    },
  },
});
