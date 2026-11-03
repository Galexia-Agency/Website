<template>
  <picture>
    <img
      :src="source"
      :srcset="srcset"
      :sizes="sizes"
      :width="width"
      :height="height"
      :alt="alt"
      :loading="loading"
      :fetchpriority="fetchpriority"
      decoding="async"
    >
  </picture>
</template>

<script setup lang="ts">
import { cdnImageUrl, imageWidths } from '@joebailey26/nuxt-static-wordpress/images'

// An image from public/ (or the CMS), resized and converted to AVIF/WebP by Cloudflare Image Transformations
// on production builds. Elsewhere /cdn-cgi/image does not exist, so the original is served.
const props = withDefaults(defineProps<{
  src: string
  // The largest width the image is shown at, in CSS pixels; 2x is requested for high-density screens.
  width: number | string
  height?: number | string
  alt?: string
  // The width the image is drawn at (as in <img sizes>); a width-based srcset is generated so the browser
  // picks a size that's sharp at every breakpoint, up to 2x the width.
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
  // Extra transformation options, e.g. 'fit=contain,height=413'
  options?: string
}>(), {
  height: undefined,
  alt: '',
  sizes: undefined,
  loading: 'lazy',
  fetchpriority: 'auto',
  options: ''
})

const { imageTransformations } = useRuntimeConfig().public
const transformable = computed(() => imageTransformations && !/\.(svg|gif|ico)$/i.test(props.src))
const optionString = computed(() => ['format=auto,quality=80', props.options.includes('fit=') ? '' : 'fit=scale-down', props.options].filter(Boolean).join(','))
const source = computed(() => (transformable.value ? cdnImageUrl(props.src, Number(props.width), '', optionString.value) : props.src))
const srcset = computed(() => {
  if (!transformable.value) {
    return undefined
  }
  const width = Number(props.width)
  if (!props.sizes) {
    return `${source.value} 1x, ${cdnImageUrl(props.src, width * 2, '', optionString.value)} 2x`
  }
  const widths = [...new Set([...imageWidths.filter(w => w < width * 2), width, width * 2])].sort((a, b) => a - b)
  return widths.map(w => `${cdnImageUrl(props.src, w, '', optionString.value)} ${w}w`).join(', ')
})
</script>
