// Rewrites the block between the recent markers in a README from the site's
// two feeds: the latest essays and notes, then the latest posts. Exits 0
// whether or not anything changed; the workflow commits only a real diff.
//   node .github/scripts/recent.mjs profile/README.md
import { readFile, writeFile } from "node:fs/promises"

const SITE = "https://www.roobli.org"
const START = "<!-- recent:start -->"
const END = "<!-- recent:end -->"

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")

const field = (item, name) => {
  const m = item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))
  return m ? decode(m[1]).trim() : ""
}

async function items(url, limit) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => {
    const date = new Date(field(item, "pubDate"))
    let title = field(item, "title").replace(/\s+/g, " ")
    if (title.length > 90) title = title.slice(0, 89).trimEnd() + "…"
    return {
      title: title.replace(/([\\[\]])/g, "\\$1"),
      link: field(item, "link"),
      date: Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10),
    }
  })
}

const line = ({ title, link, date }) => `- ${date ? `${date} · ` : ""}[${title}](${link})`

const file = process.argv[2]
if (!file) throw new Error("usage: recent.mjs <README path>")
const [writing, posts] = await Promise.all([
  items(`${SITE}/index.xml`, 5),
  items(`${SITE}/posts/index.xml`, 3),
])
const block = [
  START,
  "Essays and notes:",
  "",
  ...writing.map(line),
  "",
  `Posts, short and dated ([timeline](${SITE}/posts/)):`,
  "",
  ...posts.map(line),
  END,
].join("\n")

const readme = await readFile(file, "utf8")
const from = readme.indexOf(START)
const to = readme.indexOf(END)
if (from < 0 || to < from) throw new Error(`${file}: recent markers missing`)
const next = readme.slice(0, from) + block + readme.slice(to + END.length)
if (next !== readme) await writeFile(file, next)
console.log(next === readme ? "unchanged" : "updated")
