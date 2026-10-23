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

<script setup>
import { cdnImageUrl } from '@joebailey26/nuxt-static-wordpress/images'

// An image from public/ (or the CMS), resized and converted to AVIF/WebP by Cloudflare Image Transformations
// on production builds. Elsewhere /cdn-cgi/image does not exist, so the original is served.
const props = defineProps({
  src: { type: String, required: true },
  // The largest width the image is shown at, in CSS pixels; 2x is requested for high-density screens.
  width: { type: [Number, String], required: true },
  height: { type: [Number, String], default: undefined },
  alt: { type: String, default: '' },
  sizes: { type: String, default: undefined },
  loading: { type: String, default: 'lazy' },
  fetchpriority: { type: String, default: 'auto' },
  // Extra transformation options, e.g. 'fit=contain,height=413'
  options: { type: String, default: '' }
})

const { imageTransformations } = useRuntimeConfig().public
const transformable = computed(() => imageTransformations && !/\.(svg|gif|ico)$/i.test(props.src))
const optionString = computed(() => ['format=auto,quality=80', props.options.includes('fit=') ? '' : 'fit=scale-down', props.options].filter(Boolean).join(','))
const source = computed(() => (transformable.value ? cdnImageUrl(props.src, Number(props.width), '', optionString.value) : props.src))
const srcset = computed(() => (transformable.value ? `${source.value} 1x, ${cdnImageUrl(props.src, Number(props.width) * 2, '', optionString.value)} 2x` : undefined))
</script>
