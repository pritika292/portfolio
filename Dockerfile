# syntax=docker/dockerfile:1.7

# --- Build stage ------------------------------------------------------------
FROM node:24-alpine AS builder
WORKDIR /app

# Install deps using the lockfile only -- no source yet so this layer is reused
# across code-only changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json tsconfig.build.json ./
COPY build ./build
COPY src ./src
COPY public ./public
RUN npm run build

# Drop dev deps. Smaller node_modules to copy to runtime.
RUN npm prune --omit=dev

# --- Runtime stage ----------------------------------------------------------
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# wget is in the busybox shipped with alpine -- used by healthcheck.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

USER node
EXPOSE 3013

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:3013/health >/dev/null || exit 1

CMD ["node", "--enable-source-maps", "dist/server/index.js"]
