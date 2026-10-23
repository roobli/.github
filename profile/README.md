# roobli

Open-source tools from RoobLi, and the writing at [www.roobli.org](https://www.roobli.org).

## Noto

[Noto](https://github.com/roobli/Noto): **edit the page, keep the file.** A
Markdown editor that edits the rendered document and writes the file back
byte for byte. TypeScript, Electron, React, ProseMirror. License is
AGPL-3.0-only.

The current release is `v0.0.3` (17 October 2026), the first outside alpha,
with builds for macOS, Windows and Linux. The builds are not signed yet: macOS
builds are not notarized and the Windows installer is not code-signed.

Downloads, guides, and where it is going:
[roobli.github.io/Noto.docs](https://roobli.github.io/Noto.docs/), including
the [direction](https://roobli.github.io/Noto.docs/direction/) it is built to.
The site's source is [Noto.docs](https://github.com/roobli/Noto.docs); every
page is checked to round-trip byte for byte through `@roobli/md`.

Plugins start from
[noto-plugin-template](https://github.com/roobli/noto-plugin-template): a
manifest and a renderer or service entry point against Noto's plugin API.
Plugins ship inside the app for now and are added to Noto by pull request.

## @roobli/md

[`@roobli/md`](https://github.com/roobli/md) is the Markdown engine under
Noto: block spans with exact byte offsets, cheap reparse, and a save that
leaves untouched blocks as they were. License is MIT, so hosts other than Noto
can use it. It is not on npm yet; install it from a git tag.

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

- 2026-10-22 · [Eight CA keys that fit in one byte](https://www.roobli.org/essays/emudhra-weak-keys)
- 2026-10-17 · [TLS Companion](https://www.roobli.org/projects/tls-companion)
- 2026-10-15 · [ccli](https://www.roobli.org/projects/ccli)
- 2026-09-28 · [A kernel that is correct](https://www.roobli.org/series/kernels-from-zero/01-a-correct-kernel)
- 2026-09-28 · [An unchecked todo](https://www.roobli.org/essays/an-unchecked-todo)

Posts, short and dated ([timeline](https://www.roobli.org/posts/)):

- 2026-10-22 · [Ten projects, shown working](https://www.roobli.org/posts/2026-10-22-projects)
- 2026-09-30 · [苹果的 container：一个容器一台虚拟机](https://www.roobli.org/posts/2026-09-30-apple-container)
- 2026-09-29 · [A fruit fly’s wiring diagram has been hooked up to Doom](https://www.roobli.org/posts/2026-09-29-doomfly)
<!-- recent:end -->
