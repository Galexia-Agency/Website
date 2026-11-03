import type { Directive } from 'vue'
import { defineNuxtPlugin } from '#imports'

// The element keeps its scroll listener so it can be removed on unmount.
type InfocusElement = HTMLElement & { _infocus?: () => void }

// v-infocus="'className'" adds the class once the element scrolls within 800px of the viewport.
const infocus: Directive<InfocusElement, string> = {
  mounted (el, binding) {
    const check = () => {
      const rect = el.getBoundingClientRect()
      const inView = rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 800
      if (inView) {
        el.classList.add(binding.value)
        window.removeEventListener('scroll', check)
      }
    }
    el._infocus = check
    window.addEventListener('scroll', check, { passive: true })
    check()
  },
  unmounted (el) {
    if (el._infocus) {
      window.removeEventListener('scroll', el._infocus)
    }
  },
  // Server rendering leaves the class off; the client adds it.
  getSSRProps () {
    return {}
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('infocus', infocus)
})

declare module 'vue' {
  interface GlobalDirectives {
    vInfocus: typeof infocus
  }
}
