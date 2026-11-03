<template>
  <div v-html="svg" />
</template>

<script setup lang="ts">
// Illustrations are inlined (v-html) so their CSS classes and animations apply, as the old ?include loader did.
// The markup only goes into the prerendered HTML, never the JS bundle: hydration leaves it in place, and a
// client-side navigation fetches the file from public/svg/.
const props = defineProps<{ name: string }>()

async function load () {
  if (import.meta.server) {
    const svgs = import.meta.glob<string>('~~/public/svg/*.svg', { query: '?raw', import: 'default' })
    const svg = Object.entries(svgs).find(([path]) => path.endsWith(`/public/svg/${props.name}.svg`))?.[1]
    if (svg === undefined) {
      throw new Error(`Unknown SVG: ${props.name}`)
    }

    return await svg()
  }
  if (useNuxtApp().isHydrating) {
    return undefined
  }

  return await $fetch<string>(`/svg/${props.name}.svg`, { responseType: 'text' })
}

const svg = await load()
</script>
