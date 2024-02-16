<style lang="scss">
.logo-link {
  display: block;
  width: fit-content
}
.logo svg {
  width: var(--lgWidth);
  user-select: none;
  fill: white;
  @media (max-width: 1300px) {
    width: var(--mdWidth)
  }
  @media (max-width: 900px) {
    width: var(--smWidth)
  }
}
</style>

<template>
  <div class="logo-container" :style="`--lgWidth: ${lgWidth}px; --mdWidth: ${computedMdWidth}px; --smWidth: ${computedSmWidth}px;`">
    <nuxt-link class="logo-link" to="/">
      <div class="logo" v-html="require('~/assets/svg/logo_v2.svg?include')" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    lgWidth: {
      required: true,
      type: Number
    },
    mdWidth: {
      default: 0,
      type: Number
    },
    smWidth: {
      default: 0,
      type: Number
    }
  },
  computed: {
    computedMdWidth () {
      return this.mdWidth ? this.mdWidth : this.lgWidth
    },
    computedSmWidth () {
      return this.smWidth ? this.smWidth : this.lgWidth
    }
  }
}
</script>
