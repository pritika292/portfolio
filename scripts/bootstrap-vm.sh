#!/usr/bin/env bash
# Run on the VM (via az vm run-command, called from deploy/vm-bootstrap.sh)
# before docker compose up. Materializes the project-scoped env file from
# the shared infra env. Idempotent — safe to run on every deploy.

set -euo pipefail

INFRA_ENV="/opt/pritika/_infra/.env"
PROJECT_ENV="/opt/pritika/_infra/portfolio.env"

log() { printf "[bootstrap-vm] %s\n" "$*"; }

if [ ! -f "$INFRA_ENV" ]; then
  echo "ERROR: $INFRA_ENV not found -- run setup-vm.sh first." >&2
  exit 1
fi

# Portfolio has no DB and no third-party secrets. The only thing it needs
# from the shared infra env right now is nothing -- but we write a project
# env file anyway so future additions (e.g. analytics token) land in one
# obvious spot.
umask 077
cat > "$PROJECT_ENV" <<EOF
NODE_ENV=production
PORT=3013
LOG_LEVEL=info
EOF
log "Wrote $PROJECT_ENV (mode 600)"
log "Bootstrap complete"
