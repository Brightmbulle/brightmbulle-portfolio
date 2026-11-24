// Copies only the files the live site needs into dist/, which is what
// Cloudflare Pages uploads. Repo tooling and original design files
// (full-size SVG/PNG/JPG sources) stay in the repo but never go online.
import { cpSync, rmSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const OUT = 'dist'
const ROOT_FILES = ['index.html', '404.html', '_headers']
const ASSET_DIRS = ['assets/css', 'assets/js', 'assets/fonts', 'assets/img', 'assets/pdf']

// Source images the page never loads (it uses the .webp versions).
const SKIP_EXT = new Set(['.svg', '.png', '.jpg', '.jpeg'])
const KEEP = new Set(['assets/img/profile-cutout.png']) // PNG fallback for the hero portrait

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT)

for (const file of ROOT_FILES) cpSync(file, join(OUT, file))

let count = ROOT_FILES.length, bytes = 0
for (const dir of ASSET_DIRS) {
    for (const name of readdirSync(dir)) {
        const path = `${dir}/${name}`
        const skip = dir === 'assets/img' && SKIP_EXT.has(extname(name).toLowerCase()) && !KEEP.has(path)
        if (skip) continue
        cpSync(path, join(OUT, path))
        count++
        bytes += statSync(path).size
    }
}

console.log(`Built ${OUT}/: ${count} files, ${(bytes / 1024).toFixed(0)} KB of assets`)
