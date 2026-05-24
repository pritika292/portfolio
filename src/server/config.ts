const portStr = process.env.PORT ?? "3013";
const PORT = Number.parseInt(portStr, 10);
if (!Number.isFinite(PORT) || PORT <= 0) {
  throw new Error(`Invalid PORT env var: ${portStr}`);
}

export const config = {
  PORT,
  NODE_ENV: process.env.NODE_ENV ?? "development",
} as const;
