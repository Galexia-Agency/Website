<style scoped>
  /* An image behind the menu and the page's hero, darkened most at the top so the menu stays readable */
  .hero {
    background-color: rgb(53 47 114);
    background-image: linear-gradient(rgb(0 0 0 / 65%), rgb(0 0 0 / 40%) 10rem), var(--heroImage, none);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
  }
</style>

<template>
  <div class="site-background" :style="{ '--siteBackground': `url(${background})` }">
    <div class="site-width">
      <div v-if="$slots.hero" class="hero" :style="heroImage ? { '--heroImage': `url(${heroImage})` } : null">
        <LayoutSiteHeader />
        <slot name="hero" />
      </div>
      <LayoutSiteHeader v-else />
      <main>
        <slot />
      </main>
      <LayoutSiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cdnImageUrl } from '@joebailey26/nuxt-static-wordpress/images'

// Pages with a hero (filled through the hero slot) can put an image behind it and the menu.
defineProps<{ heroImage?: string }>()

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
