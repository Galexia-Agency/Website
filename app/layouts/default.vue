<template>
  <div class="site-background" :style="{ '--siteBackground': `url(${background})` }">
    <div class="site-width">
      <LayoutSiteHeader />
      <main>
        <slot />
      </main>
      <LayoutSiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cdnImageUrl } from '@joebailey26/nuxt-static-wordpress/images'

// The blurred space background, converted to AVIF/WebP by Cloudflare on production builds.
const original = '/img/SpaceBackgroundBlurred.jpg'
const background = useRuntimeConfig().public.imageTransformations ? cdnImageUrl(original, 2400, '', 'format=auto,quality=70') : original
useHead({
  link: [{ rel: 'preload', as: 'image', href: background, fetchpriority: 'high' }]
})

// The background is sized to the page (at least 4500px tall), as app.html did.
function sizeBackground () {
  const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
  document.body.style.setProperty('--backgroundSize', `${Math.max(height, 4500)}px`)
}

const route = useRoute()
onMounted(() => {
  // Smooth scrolling, unless the visitor prefers reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.style.setProperty('--motion', 'smooth')
  }
  sizeBackground()
  window.addEventListener('resize', sizeBackground)
})
watch(() => route.fullPath, () => setTimeout(sizeBackground, 1000))
</script>
