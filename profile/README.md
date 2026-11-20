# roobli

Open-source tools from RoobLi, and the writing at [www.roobli.org](https://www.roobli.org).

## Noto

[Noto](https://github.com/roobli/Noto): **edit the page, keep the file.** A
Markdown editor that edits the rendered document and writes the file back
byte for byte. TypeScript, Electron, React, ProseMirror. License is
AGPL-3.0-only.

The current release is `v0.1.1` (19 November 2026), with builds for macOS,
Windows and Linux. The builds are not signed yet: macOS builds are not
notarized and the Windows installer is not code-signed.

Downloads, guides, and where it is going:
[roobli.github.io/Noto.docs](https://roobli.github.io/Noto.docs/), including
the [direction](https://roobli.github.io/Noto.docs/direction/) it is built to.
The site's source is [Noto.docs](https://github.com/roobli/Noto.docs); every
page is checked to round-trip byte for byte through `@roobli/md`.

Plugins start from
[noto-plugin-template](https://github.com/roobli/noto-plugin-template): a
manifest and a renderer or service entry point against Noto's plugin API.
Plugin Center installs plugins from a folder, from a GitHub repository or from
the marketplace at [noto-plugins](https://github.com/roobli/noto-plugins),
and runs them sandboxed unless you trust one fully.

## @roobli/md

[`@roobli/md`](https://github.com/roobli/md) is the Markdown engine under
Noto: block spans with exact byte offsets, cheap reparse, and a save that
leaves untouched blocks as they were. License is AGPL-3.0-only from `v0.1.25`,
as Noto's is; `v0.1.24` and earlier stay MIT, so a host that needs MIT pins
`#v0.1.24`. It is not on npm yet; install it from a git tag.

## @roobli/vault

[`@roobli/vault`](https://github.com/roobli/vault) turns a folder of Markdown
notes into memory that a person and their agents share, without changing what
the notes are: one link resolver, an index that can always be rebuilt, git
history as the record of writes and `.noto/events/` as the record of reads,
scoped access with notes no agent may see, recall within a budget, and changes
an agent proposes that a person accepts. Agents reach it through the
`noto-vault` command line or its MCP server. No runtime dependencies; Node
22.13 or later. License is AGPL-3.0-only, as Noto's is. It is new and not on
npm.

## holt

[holt](https://github.com/roobli/holt) is a personal task-stack companion:
vault-adjacent and file-backed (one markdown file per task, plus an
append-only history log). The primary view is an ordered vertical stack;
a Gantt-style timeline is secondary. It is not part of Noto: Noto only
opens task bodies when you ask. License is MIT.

## @roobli/canvas

[`@roobli/canvas`](https://github.com/roobli/canvas) is an experimental React
kit for a Noto-style canvas: tables, stats, callouts, the paper palette.
Import it from any React 18+ host. License is MIT, on purpose, so it does not
carry Noto's copyleft.

It is frozen until Noto can host canvas documents. Noto does not compile a
vault `.canvas.tsx` file yet; hosting that file type is a later sandbox, not a
plugin.

## The site

[www.roobli.org](https://www.roobli.org) has essays with sources, series
written in parts, [projects](https://www.roobli.org/projects/) with a log of
what changed, and a [timeline](https://www.roobli.org/posts/) of short dated
posts.

## Recent writing

<!-- recent:start -->
Essays and notes:

- 2026-11-20 · [Shift+Enter gets lost between Kitty and tmux](https://www.roobli.org/notes/kitty-tmux-shift-enter)
- 2026-11-20 · [Why OpenAI runs Spark](https://www.roobli.org/essays/why-openai-runs-spark)
- 2026-11-08 · [pi-browser-harness](https://www.roobli.org/projects/pi-browser-harness)
- 2026-11-05 · [vault](https://www.roobli.org/projects/vault)
- 2026-10-24 · [Pin the key you will still hold next year](https://www.roobli.org/essays/certificate-pinning)

Posts, short and dated ([timeline](https://www.roobli.org/posts/)):

- 2026-11-20 · [Three new projects, and Noto reaches 0.1](https://www.roobli.org/posts/2026-11-20-three-new-projects)
- 2026-10-22 · [Ten projects, shown working](https://www.roobli.org/posts/2026-10-22-projects)
- 2026-09-30 · [苹果的 container：一个容器一台虚拟机](https://www.roobli.org/posts/2026-09-30-apple-container)
<!-- recent:end -->
