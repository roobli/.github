# roobli

Public work from cdcd. Things that outgrew a personal account live here.

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
a Gantt-style timeline is secondary. It is not part of Noto — Noto only
opens task bodies when you ask. License is MIT.

## @roobli/canvas

[`@roobli/canvas`](https://github.com/roobli/canvas) is the React kit for a
Noto-style canvas: tables, stats, callouts, the paper palette. Import it
from any React 18+ host. License is MIT, on purpose, so it does not carry
Noto's copyleft.

Noto does not compile a vault `.canvas.tsx` file yet. The package is the
import; hosting that file type is a later sandbox, not a plugin.

## presence

[presence](https://github.com/roobli/presence) is the public site at
[www.roobli.org](https://www.roobli.org) — curated writing and works,
not a blog firehose.