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

<script setup>
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
  let xDown = null
  let yDown = null
  document.addEventListener('touchstart', (event) => {
    xDown = event.touches[0].clientX
    yDown = event.touches[0].clientY
  }, { passive: true })
  document.addEventListener('touchmove', (event) => {
    if (xDown === null || yDown === null) {
      return
    }
    const xDiff = xDown - event.touches[0].clientX
    const yDiff = yDown - event.touches[0].clientY
    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff < 0) {
      close()
    }
    xDown = null
    yDown = null
  }, { passive: true })
})
</script>
