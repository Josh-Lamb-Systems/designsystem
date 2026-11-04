#!/usr/bin/env node
/**
 * Assembles dist/ after `tz build` has written dist/tokens.css:
 *   dist/jls.css          one-link bundle: fonts + tokens + base layer
 *   dist/fonts/, logos/   static assets
 *   dist/templates/       templates; email templates get every var(--jls-*) inlined
 *   dist/tokens/          the DTCG source, for tools that read tokens directly
 *   DESIGN.md             front matter regenerated from the tokens; prose left untouched
 *
 * `--check` regenerates nothing and fails if DESIGN.md's front matter is stale (CI).
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const dist = path.join(root, 'dist')
const checkOnly = process.argv.includes('--check')

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8')
const write = (p, text) => {
  fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true })
  fs.writeFileSync(path.join(root, p), text)
}
const copyDir = (from, to) => fs.cpSync(path.join(root, from), path.join(root, to), { recursive: true })

/* ---- resolve the light theme from the built CSS, so every output shares one source ---- */

function lightValues(css) {
  const block = css.match(/:root\s*\{([\s\S]*?)\n\}/)?.[1]
  if (!block) throw new Error('dist/tokens.css has no :root block; run `tz build` first')
  const raw = new Map()
  for (const [, name, value] of block.matchAll(/(--jls-[\w-]+):\s*([^;]+);/g)) raw.set(name, value.trim())
  const resolve = (value, depth = 0) => {
    if (depth > 20) throw new Error(`token alias loop near ${value}`)
    return value.replace(/var\((--jls-[\w-]+)\)/g, (_, name) => {
      if (!raw.has(name)) throw new Error(`unknown token ${name}`)
      return resolve(raw.get(name), depth + 1)
    })
  }
  return new Map([...raw].map(([name, value]) => [name, resolve(value)]))
}

const tokensCss = fs.readFileSync(path.join(dist, 'tokens.css'), 'utf8')
const light = lightValues(tokensCss)
const v = (name) => {
  const value = light.get(`--jls-${name}`)
  if (value === undefined) throw new Error(`missing token --jls-${name}`)
  return value
}

/* ---- DESIGN.md front matter ---- */

const firstFamily = (stack) => stack.split(',')[0].replaceAll('"', '').trim()
const typography = (id) => ({
  fontFamily: firstFamily(v(`typography-${id}-font-family`)),
  fontSize: v(`typography-${id}-font-size`),
  fontWeight: Number(v(`typography-${id}-font-weight`)),
  lineHeight: Number(v(`typography-${id}-line-height`)),
  letterSpacing: v(`typography-${id}-letter-spacing`),
})

function frontMatter() {
  const colorNames = [
    'bg', 'bg-alt', 'surface', 'text', 'text-soft', 'text-faint', 'border', 'border-strong',
    'accent', 'accent-hover', 'accent-text', 'accent-soft', 'on-accent', 'focus',
    'inverse-bg', 'inverse-text', 'inverse-text-soft', 'inverse-text-faint', 'inverse-accent-text', 'inverse-border',
    'success', 'success-soft', 'warning', 'warning-soft', 'danger', 'danger-soft',
  ]
  const lines = [
    '---',
    'version: alpha',
    'name: Josh Lamb Systems',
    'description: >-',
    '  Brand system for Josh Lamb Systems, an AI-native systems partner for small businesses.',
    '  Generated from tokens/*.tokens.json by `npm run build`; edit the tokens, not this block.',
    'colors:',
    `  primary: "${v('palette-blue-500')}"`,
    `  secondary: "${v('palette-blue-400')}"`,
    ...colorNames.map((n) => `  ${n}: "${v(`color-${n}`)}"`),
    'typography:',
  ]
  for (const id of ['display', 'h1', 'h2', 'h3', 'h4', 'lead', 'body', 'small', 'eyebrow', 'button']) {
    const t = typography(id)
    lines.push(`  ${id}:`)
    lines.push(`    fontFamily: ${t.fontFamily}`)
    lines.push(`    fontSize: ${t.fontSize}`)
    lines.push(`    fontWeight: ${t.fontWeight}`)
    lines.push(`    lineHeight: ${t.lineHeight}`)
    lines.push(`    letterSpacing: ${t.letterSpacing}`)
  }
  lines.push('rounded:')
  for (const n of ['sm', 'md', 'lg', 'pill']) lines.push(`  ${n}: ${v(`radius-${n}`)}`)
  lines.push('spacing:')
  for (const n of ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']) lines.push(`  ${n}: ${v(`space-${n}`)}`)
  lines.push(
    'components:',
    '  page:',
    '    backgroundColor: "{colors.bg}"',
    '    textColor: "{colors.text}"',
    '    typography: "{typography.body}"',
    '  section-alt:',
    '    backgroundColor: "{colors.bg-alt}"',
    '    textColor: "{colors.text-soft}"',
    '  caption:',
    '    textColor: "{colors.text-faint}"',
    '    typography: "{typography.small}"',
    '  section-inverse:',
    '    backgroundColor: "{colors.inverse-bg}"',
    '    textColor: "{colors.inverse-text}"',
    '  section-inverse-body:',
    '    backgroundColor: "{colors.inverse-bg}"',
    '    textColor: "{colors.inverse-text-soft}"',
    '  section-inverse-caption:',
    '    backgroundColor: "{colors.inverse-bg}"',
    '    textColor: "{colors.inverse-text-faint}"',
    '  section-inverse-divider:',
    '    backgroundColor: "{colors.inverse-border}"',
    '    height: 1px',
    '  section-inverse-link:',
    '    backgroundColor: "{colors.inverse-bg}"',
    '    textColor: "{colors.inverse-accent-text}"',
    '  divider:',
    '    backgroundColor: "{colors.border}"',
    '    height: 1px',
    '  focus-ring:',
    '    backgroundColor: "{colors.focus}"',
    '    width: 2px',
    '  button-primary:',
    '    backgroundColor: "{colors.accent}"',
    '    textColor: "{colors.on-accent}"',
    '    typography: "{typography.button}"',
    '    rounded: "{rounded.md}"',
    '    padding: 14px 28px',
    '  button-primary-hover:',
    '    backgroundColor: "{colors.accent-hover}"',
    '  button-secondary:',
    '    backgroundColor: "{colors.surface}"',
    '    textColor: "{colors.text}"',
    '    typography: "{typography.button}"',
    '    rounded: "{rounded.md}"',
    '    padding: 14px 28px',
    '  card:',
    '    backgroundColor: "{colors.surface}"',
    '    textColor: "{colors.text-soft}"',
    '    rounded: "{rounded.lg}"',
    '    padding: 32px',
    '  tag:',
    '    backgroundColor: "{colors.accent-soft}"',
    '    textColor: "{colors.accent-text}"',
    '    typography: "{typography.eyebrow}"',
    '    rounded: "{rounded.pill}"',
    '    padding: 4px 10px',
    '  tag-quick-win:',
    '    backgroundColor: "{colors.success-soft}"',
    '    textColor: "{colors.success}"',
    '    typography: "{typography.eyebrow}"',
    '    rounded: "{rounded.pill}"',
    '  tag-medium-term:',
    '    backgroundColor: "{colors.warning-soft}"',
    '    textColor: "{colors.warning}"',
    '    typography: "{typography.eyebrow}"',
    '    rounded: "{rounded.pill}"',
    '  alert-danger:',
    '    backgroundColor: "{colors.danger-soft}"',
    '    textColor: "{colors.danger}"',
    '    rounded: "{rounded.md}"',
    '    padding: 12px 16px',
    '  button-primary-pressed:',
    '    backgroundColor: "{colors.primary}"',
    '    textColor: "{colors.on-accent}"',
    '  input:',
    '    backgroundColor: "{colors.surface}"',
    '    textColor: "{colors.text}"',
    '    typography: "{typography.body}"',
    '    rounded: "{rounded.md}"',
    '    padding: 12px 14px',
    '---',
  )
  return lines.join('\n') + '\n'
}

const designMd = read('DESIGN.md')
const body = designMd.replace(/^---\n[\s\S]*?\n---\n/, '')
const nextDesignMd = frontMatter() + body
if (checkOnly) {
  if (nextDesignMd !== designMd) {
    console.error('DESIGN.md front matter is out of date with the tokens. Run `npm run build` and commit the result.')
    process.exit(1)
  }
  console.log('DESIGN.md front matter matches the tokens.')
  process.exit(0)
}
write('DESIGN.md', nextDesignMd)

/* ---- static assets and the one-link bundle ---- */

copyDir('fonts', 'dist/fonts')
copyDir('logos', 'dist/logos')
copyDir('tokens', 'dist/tokens')
fs.copyFileSync(path.join(root, 'src/base.css'), path.join(dist, 'base.css'))
fs.copyFileSync(path.join(root, 'DESIGN.md'), path.join(dist, 'DESIGN.md'))

const fontsCss = read('fonts/fonts.css').replaceAll('url("./', 'url("./fonts/')
write(
  'dist/jls.css',
  [
    '/* Josh Lamb Systems design system: fonts + tokens + base layer. Generated by `npm run build`; do not edit. */',
    fontsCss,
    tokensCss,
    read('src/base.css'),
  ].join('\n'),
)

/* ---- templates ---- */

/** Email clients ignore custom properties and external CSS, so emails ship with literal values.
 *  rem becomes px too: Outlook desktop and several webmail clients drop rem sizes. */
const remToPx = (value) => value.replace(/(-?\d*\.?\d+)rem\b/g, (_, n) => `${Math.round(Number(n) * 16 * 100) / 100}px`)
const inlineTokens = (html) =>
  html.replace(/var\((--jls-[\w-]+)\)/g, (_, name) => {
    if (!light.has(name)) throw new Error(`email template uses unknown token ${name}`)
    if (name.startsWith('--jls-typography-') && !/-(font-family|font-size|font-weight|line-height|letter-spacing)$/.test(name))
      throw new Error(`email template uses composite ${name}; use its individual sub-values instead`)
    if (name.startsWith('--jls-gradient-')) throw new Error(`email template uses ${name}; many email clients drop gradients`)
    return remToPx(light.get(name)).replaceAll('"', "'")
  })

for (const file of fs.readdirSync(path.join(root, 'templates'))) {
  const html = read(`templates/${file}`)
  const out = html.includes('data-jls-inline-tokens') ? inlineTokens(html) : html
  write(`dist/templates/${file}`, out)
}
fs.copyFileSync(path.join(root, 'src/index.html'), path.join(dist, 'index.html'))

console.log(`dist/ assembled: ${light.size} light-theme tokens, ${fs.readdirSync(path.join(root, 'templates')).length} templates.`)
