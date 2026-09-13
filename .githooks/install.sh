#!/usr/bin/env bash
#
# Manual installer: wires .githooks as the git hooks directory for this repo.
# (npm install also runs this via the "prepare" script in package.json.)
#
# The pre-commit hook is a fast deterministic verifier (no LLM call): the AI
# agent updates doc/progress-indicator.md per AGENTS.md; this hook only
# checks that the doc was touched when code changes are committed.
#
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"

if [ ! -f "$REPO_ROOT/.githooks/pre-commit" ]; then
  echo "error: $REPO_ROOT/.githooks/pre-commit not found" >&2
  exit 1
fi

git config core.hooksPath .githooks
chmod +x "$REPO_ROOT/.githooks/pre-commit"

echo "[progress-indicator] git hooks installed (core.hooksPath=.githooks)."
