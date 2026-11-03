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
        <template v-for="link in links" :key="link.text">
          <div
            v-if="link.children"
            ref="dropdowns"
            class="nav--dropdown"
            :class="{ 'nav--dropdown_open': openDropdown === link.text }"
          >
            <button
              type="button"
              class="nav--link nav--dropdown_toggle"
              :class="{ 'nav--link_active': link.children.some((child) => route.path.startsWith(child.to)) }"
              :aria-expanded="openDropdown === link.text"
              :aria-controls="`nav-${link.text.toLowerCase()}`"
              @click="toggleDropdown(link.text)"
            >
              {{ link.text }}
            </button>
            <div :id="`nav-${link.text.toLowerCase()}`" class="nav--submenu">
              <NuxtLink v-for="child in link.children" :key="child.to" :to="child.to" class="nav--link">
                {{ child.text }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink v-else :to="link.to" class="nav--link">
            {{ link.text }}
          </NuxtLink>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavLink {
  text: string
  to?: string
  children?: { to: string, text: string }[]
}

const links: NavLink[] = [
  { to: '/', text: 'Home' },
  {
    text: 'Services',
    children: [
      { to: '/web/', text: 'Design & Development' },
      { to: '/hosting/', text: 'Hosting' },
      { to: '/marketing/', text: 'Marketing' },
      { to: '/email-checkup/', text: 'Email Checkup' },
      { to: '/support/', text: 'Support' }
    ]
  },
  { to: '/blog/', text: 'Blog' },
  { to: '/contact/', text: 'Contact' }
]

const { expanded, toggle, close } = useNav()
const route = useRoute()

// Dropdowns also open on hover on desktop; this tracks the ones opened by click, tap or keyboard.
const openDropdown = ref<string | null>(null)
const dropdowns = ref<HTMLElement[]>([])
function toggleDropdown (text: string) {
  openDropdown.value = openDropdown.value === text ? null : text
}
function closeDropdown () {
  openDropdown.value = null
}

watch(() => route.fullPath, () => {
  close()
  closeDropdown()
})

function onDocumentClick (event: MouseEvent) {
  if (!dropdowns.value.some((dropdown) => dropdown.contains(event.target as Node))) {
    closeDropdown()
  }
}
function onKeydown (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
  // Swiping right closes the mobile nav.
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
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>
