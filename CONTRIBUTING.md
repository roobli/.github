# Contributing

Work in the repository that owns the change. Noto is AGPL-3.0-only.
`@roobli/canvas` is MIT. Do not send a Noto patch to the canvas kit, or
the other way around, because the licenses and the jobs are different.

Noto and canvas both want Node 22 and pnpm 11. `pnpm verify` is the check
that has to pass before a pull request.

Plugin IDs under `dev.lr00rl.noto.*` are stable on purpose: they are
already stored in people's enablement files. Do not rename them as part
of the org move.
