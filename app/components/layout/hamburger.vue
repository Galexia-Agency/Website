<style scoped>
/* Hamburgers by Jonathan Suh (https://jonsuh.com/hamburgers), MIT. Only the arrow style is used. */
.hamburger {
  display: inline-block;
  margin: 0;
  overflow: visible;
  color: inherit;
  font: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: .15s;
  transition-property: opacity, filter
}
.hamburger:hover {
  opacity: .7
}
.hamburger.is-active:hover {
  opacity: .7
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:before,
.hamburger.is-active .hamburger-inner:after {
  background: inherit
}
.hamburger-box {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px
}
.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -2px
}
.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after {
  position: absolute;
  width: 40px;
  height: 3px;
  background: inherit;
  border-radius: 3px;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition-property: transform
}
.hamburger-inner:before, .hamburger-inner:after {
  display: block;
  content: ''
}
.hamburger-inner:before {
  top: -10px
}
.hamburger-inner:after {
  bottom: -10px
}

/* Arrow */
.hamburger--arrow.is-active .hamburger-inner:before {
  transform: translate3d(-9px, 0, 0) rotate(-45deg) scale(.7, 1)
}
.hamburger--arrow.is-active .hamburger-inner:after {
  transform: translate3d(-9px, 0, 0) rotate(45deg) scale(.7, 1)
}
</style>

<template>
  <button
    :class="['hamburger', 'hamburger--arrow', { 'is-active': expanded }]"
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    :aria-expanded="expanded"
    @click="$emit('toggle')"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" :style="{ background: color }" />
    </span>
  </button>
</template>

<script setup>
defineProps({
  color: { type: String, default: 'white' },
  expanded: { type: Boolean, default: false }
})
defineEmits(['toggle'])
</script>
