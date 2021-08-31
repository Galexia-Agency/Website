import Vue from 'vue'

Vue.directive('infocus', {
  isLiteral: true,
  inserted: (el, binding, vnode) => {
    // eslint-disable-next-line
    let f = () => {
      // eslint-disable-next-line
      let rect = el.getBoundingClientRect()
      // eslint-disable-next-line
      let inView = (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= 0 &&
        rect.bottom <= ((window.innerHeight + 500) || (document.documentElement.clientHeight + 500))
      )
      if (inView) {
        el.classList.add(binding.value)
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
    window.addEventListener('beforeload', f)
    f()
  }
})
