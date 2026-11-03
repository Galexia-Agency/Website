<template>
  <header>
    <nav class="maxWidth">
      <div class="logo--container">
        <NuxtLink class="logo" to="/" aria-label="Galexia home">
          <div v-html="inlineSvg('logo_v2')" />
        </NuxtLink>
      </div>
      <div class="nav--icon">
        <LayoutHamburger color="white" :expanded="expanded" @toggle="toggle" />
      </div>
      <div id="navigation" class="nav--container">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="nav--link">
          {{ link.text }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { to: '/', text: 'Home' },
  { to: '/web/', text: 'Design & Development' },
  { to: '/hosting/', text: 'Hosting' },
  { to: '/marketing/', text: 'Marketing' },
  { to: '/blog/', text: 'Blog' },
  { to: '/support/', text: 'Support' },
  { to: '/contact/', text: 'Contact' }
]

const { expanded, toggle, close } = useNav()
const route = useRoute()
watch(() => route.fullPath, close)

// Swiping right closes the mobile nav.
onMounted(() => {
  let xDown: number | null = null
  let yDown: number | null = null
  document.addEventListener('touchstart', (event) => {
    xDown = event.touches[0]?.clientX ?? null
    yDown = event.touches[0]?.clientY ?? null
  }, { passive: true })
  document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0]
    if (xDown === null || yDown === null || !touch) {
      return
    }
    const xDiff = xDown - touch.clientX
    const yDiff = yDown - touch.clientY
    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff < 0) {
      close()
    }
    xDown = null
    yDown = null
  }, { passive: true })
})
</script>
