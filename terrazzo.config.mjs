import { defineConfig } from '@terrazzo/cli'
import css from '@terrazzo/plugin-css'

/** Every variable is namespaced --jls-* so it can sit inside any page (doop frames, client sites) without collisions. */
const variableName = (token) => `--jls-${token.id.replaceAll('.', '-')}`

/** DTCG gradients carry no angle; the brand gradient is always drawn at 135deg (brandbook, live site). */
const transform = (token) => {
  if (token.$type !== 'gradient') return undefined
  const stops = token.$value.map((stop) => `${stop.color.hex} ${Math.round(stop.position * 100)}%`)
  return `linear-gradient(135deg, ${stops.join(', ')})`
}

export default defineConfig({
  tokens: ['./tokens/jls.resolver.json'],
  outDir: './dist/',
  lint: { rules: { 'core/consistent-naming': 'off' } },
  plugins: [
    css({
      filename: 'tokens.css',
      variableName,
      transform,
      legacyHex: true,
      permutations: [
        {
          input: { theme: 'light' },
          prepare: (contents) => `:root {\n  color-scheme: light;\n${contents}\n}`,
        },
        {
          input: { theme: 'dark' },
          only: { modifiers: ['theme'] },
          prepare: (contents) => `.jls-dark,\n[data-theme='dark'] {\n  color-scheme: dark;\n${contents}\n}`,
        },
      ],
    }),
  ],
})
