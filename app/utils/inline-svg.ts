// Illustrations are inlined (v-html) so their CSS classes and animations apply, as the old ?include loader did.
const svgs = import.meta.glob<string>('~/assets/svg/*.svg', { query: '?raw', import: 'default', eager: true })

export function inlineSvg (name: string) {
  const svg = svgs[`/assets/svg/${name}.svg`]
  if (svg === undefined) {
    throw new Error(`Unknown SVG: ${name}`)
  }

  return svg
}
