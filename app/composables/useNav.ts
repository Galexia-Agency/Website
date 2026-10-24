import { ref } from '#imports'

// The mobile nav is driven by nav_open / nav_close on <html>, which the stylesheets animate between.
const expanded = ref(false)

export function useNav () {
  const root = () => document.documentElement
  const close = () => {
    if (!root().classList.contains('nav_open')) {
      return
    }
    root().classList.remove('nav_open')
    setTimeout(() => {
      root().classList.add('nav_close')
      expanded.value = false
    }, 500)
  }
  const open = () => {
    root().classList.remove('nav_close')
    setTimeout(() => {
      root().classList.add('nav_open')
      expanded.value = true
    }, 1)
  }
  const toggle = () => (root().classList.contains('nav_open') ? close() : open())

  return { expanded, open, close, toggle }
}
