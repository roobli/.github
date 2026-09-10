# roobli

Public work from cdcd. Things that outgrew a personal account live here.

## Noto

[Noto](https://github.com/roobli/Noto) is a Markdown editor that edits the
rendered document and writes the file back byte for byte. TypeScript,
Electron, React, ProseMirror. License is AGPL-3.0-only.

## @roobli/canvas

[`@roobli/canvas`](https://github.com/roobli/canvas) is the React kit for a
Noto-style canvas: tables, stats, callouts, the paper palette. Import it
from any React 18+ host. License is MIT, on purpose, so it does not carry
Noto's copyleft.

Noto does not compile a vault `.canvas.tsx` file yet. The package is the
import; hosting that file type is a later sandbox, not a plugin.
