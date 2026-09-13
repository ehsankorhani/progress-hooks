# Agent Instructions

General guidance for AI coding agents (OMP/Pi, Claude Code, Codex, Gemini, ...)
working in this repository.

## Progress document — keep it up to date (required)

`doc/progress-indicator.md` is the living progress tracker for this project
(phase sections, sample backlog table T1–T7, mermaid gantt + flowchart).

**Whenever you complete work in this repo — before you finish your turn or
commit — update it so it reflects the work just done:**

- Read the current document first; edit it **in place**, preserving its
  structure, tone, and existing mermaid diagrams.
- Implemented a backlog task (T1–T7)? Move it to the appropriate phase section
  as done ✅, and update the gantt bars and flowchart nodes accordingly.
- Built something not in the backlog? Add an entry to the phase section, the
  backlog table, and the diagrams.
- Planned work changed? Adjust the "Next phases" section and planned gantt
  bars instead of leaving stale plans.
- Keep it accurate and concise; do not rewrite the document from scratch and
  do not remove information that is still accurate.

**Scope of commits:** when your change affects code or docs, include the
corresponding `doc/progress-indicator.md` update in the same commit. The
pre-commit hook enforces this with a fast deterministic check: code changes
without a doc update abort the commit.

**Skips:** doc-only commits, changes to `.githooks/` itself, and
`git commit --no-verify` bypass the check when it is genuinely in the way.
