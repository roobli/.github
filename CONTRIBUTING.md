# Contributing

Thank you for helping. Everything in roobli is public, so a clear issue, a
small pull request and an accurate document are all contributions.

## Where a change belongs

Work in the repository that owns the change. The licenses differ on purpose,
so a patch for one does not move to another.

| Repository | What it is | License | The check that must pass |
| --- | --- | --- | --- |
| [Noto](https://github.com/roobli/Noto) | The desktop editor | AGPL-3.0-only | `pnpm verify` |
| [md](https://github.com/roobli/md) | `@roobli/md`, Noto's Markdown engine | MIT | `pnpm verify` |
| [Noto.docs](https://github.com/roobli/Noto.docs) | The product and documentation site | not yet set | `pnpm check:roundtrip && pnpm docs:build` |
| [canvas](https://github.com/roobli/canvas) | `@roobli/canvas`, an experimental React kit | MIT | `pnpm verify` |
| [noto-plugin-template](https://github.com/roobli/noto-plugin-template) | A scaffold for Noto plugins | MIT | — |
| [holt](https://github.com/roobli/holt) | A file-backed task ledger, separate from Noto | MIT | `pnpm typecheck && pnpm test` |

Node 22 and pnpm 11 everywhere. Noto's README explains the one extra setup
step its Electron binary needs.

## Before you start

- Read [Direction](https://roobli.github.io/Noto.docs/direction/) for what
  Noto is and is not trying to be. A feature that serves writing and reading
  Markdown files is welcome; one from the list of things Noto will not build
  needs a conversation first, in an issue.
- For anything larger than a fix, open an issue that describes the problem
  before writing the code.

## A good pull request

- One change, with the reason in the description.
- The repository's check passes locally.
- Tests for behaviour, and a regression test for a bug.
- Documentation changed in the same pull request when behaviour changes:
  the repository's `docs/`, its README, or the docs site.
- Screenshots for anything you can see.

## Never

- Private material. No personal notes, note titles, folder names, local paths,
  hostnames or credentials in code, tests, fixtures, screenshots or
  documents. Fixtures are synthetic. Screenshots use a demo folder.
- Renaming plugin IDs under `dev.lr00rl.noto.*`. They are stored in people's
  enablement files, so they are stable on purpose.
- Typora code, markup, assets, strings or themes. Typora is a behaviour
  reference only.

## Security

Report vulnerabilities privately, as described in [SECURITY.md](SECURITY.md),
not in a public issue.
