#!/usr/bin/env bash
set -euo pipefail
REPO="/root/.openclaw/workspace"
cd "$REPO"

git add -u
shopt -s nullglob
for f in AGENTS.md USER.md SOUL.md TOOLS.md IDENTITY.md HEARTBEAT.md MEMORY.md memory/*.md; do
  [ -f "$f" ] && git add "$f"
done
shopt -u nullglob

if ! git diff --cached --quiet; then
  git commit -m "auto-backup: $(date -u +'%Y-%m-%dT%H:%M:%SZ')" >/dev/null
fi

git push local-backup HEAD:refs/heads/main >/dev/null
# Mirror to GitHub private repo (non-fatal if blocked by GitHub push protection)
if ! git push origin HEAD:refs/heads/main >/dev/null 2>&1; then
  echo "[warn] push to origin blocked/failed; local-backup still successful" >&2
fi
