# roobli

Open-source tools from RoobLi, and the writing at [www.roobli.org](https://www.roobli.org).

## Noto

[Noto](https://github.com/roobli/Noto): **edit the page, keep the file.** A
Markdown editor that edits the rendered document and writes the file back
byte for byte. TypeScript,
Electron, React, ProseMirror. License is AGPL-3.0-only.

Downloads, guides, and where it is going:
[roobli.github.io/Noto.docs](https://roobli.github.io/Noto.docs/), including
the [direction](https://roobli.github.io/Noto.docs/direction/) it is built to.

## @roobli/md

[`@roobli/md`](https://github.com/roobli/md) is the Markdown engine under
Noto: block spans with exact byte offsets, cheap reparse, and a save that
leaves untouched blocks as they were. License is MIT, so hosts other than Noto
can use it.

## holt

[holt](https://github.com/roobli/holt) is a personal task-stack companion:
vault-adjacent and file-backed (one markdown file per task, plus an
append-only history log). The primary view is an ordered vertical stack;
a Gantt-style timeline is secondary. It is not part of Noto: Noto only
opens task bodies when you ask. License is MIT.

## @roobli/canvas

[`@roobli/canvas`](https://github.com/roobli/canvas) is the React kit for a
Noto-style canvas: tables, stats, callouts, the paper palette. Import it
from any React 18+ host. License is MIT, on purpose, so it does not carry
Noto's copyleft.

Noto does not compile a vault `.canvas.tsx` file yet. The package is the
import; hosting that file type is a later sandbox, not a plugin.

## presence

[presence](https://github.com/roobli/presence) is the source of
[www.roobli.org](https://www.roobli.org): essays with sources, series
written in parts, projects with a log of what changed, and a timeline of
short dated posts.

## Recent writing

<!-- recent:start -->
Essays and notes:

- 2026-09-28 · [A kernel that is correct](https://www.roobli.org/series/kernels-from-zero/01-a-correct-kernel)
- 2026-09-28 · [An unchecked todo](https://www.roobli.org/essays/an-unchecked-todo)
- 2026-09-28 · [Coalescing: what 32 threads ask of memory](https://www.roobli.org/series/kernels-from-zero/02-coalescing)
- 2026-09-28 · [Every old URL still works](https://www.roobli.org/notes/every-old-url-still-works)
- 2026-09-28 · [Reading time is counted, not guessed](https://www.roobli.org/notes/reading-time-is-counted)

Posts, short and dated ([timeline](https://www.roobli.org/posts/)):

- 2026-09-30 · [苹果的 container：一个容器一台虚拟机](https://www.roobli.org/posts/2026-09-30-apple-container)
- 2026-09-29 · [A fruit fly’s wiring diagram has been hooked up to Doom](https://www.roobli.org/posts/2026-09-29-doomfly)
<!-- recent:end -->
