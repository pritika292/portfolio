#!/usr/bin/env bash
# Pre-push security baseline. Run before every push. Replaces the CI gate
# that v1.1 will eventually land.
#
# Three layers:
#   1. pre-commit hooks (gitleaks + shellcheck + file hygiene + large-files)
#   2. manual regex scan for the API-key shapes gitleaks sometimes misses
#   3. npm audit at high+ severity
#
# Exits non-zero on any failure so this can be wired into a git pre-push
# hook later without changes.

set -euo pipefail

cd "$(dirname "$0")/.."

log()  { printf '[audit] %s\n' "$*"; }
fail() { printf '[audit] FAIL: %s\n' "$*" >&2; exit 1; }

log "running pre-commit hooks (gitleaks, shellcheck, file hygiene)"
pre-commit run --all-files

log "scanning git-tracked files for common API-key shapes"
# AKIA prefix = AWS, sk-[A-Za-z0-9]{20,} = OpenAI / Anthropic, ghp_ / github_pat_ = GitHub PAT
if git ls-files | xargs grep -InE 'AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}' 2>/dev/null; then
  fail "potential API key in tracked files (see grep output above)"
fi

log "running npm audit at high+ severity"
mise exec -- npm audit --omit=dev --audit-level=high

log "all checks passed"
