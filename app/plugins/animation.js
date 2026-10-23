import { defineNuxtPlugin } from '#imports'

// v-infocus="'className'" adds the class once the element scrolls within 800px of the viewport.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('infocus', {
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
      window.removeEventListener('scroll', el._infocus)
    },
    // Server rendering leaves the class off; the client adds it.
    getSSRProps () {
      return {}
    }
  })
})
