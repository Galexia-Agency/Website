<style lang="scss" >
  .header-inner h1 i,
  .header-inner h2 i {
    border-bottom: .25rem solid white
  }
</style>
<style lang="scss" scoped>
.header-inner {
  max-width: var(--narrowSiteWidth);
  padding: 6rem 2rem 7.5rem;
  text-align: center;
  @media (max-width: 500px) {
    padding: 2rem 1rem 4rem
  }
}
h1 {
  color: white;
  + h2 {
    margin-top: 1rem
  }
  + p {
    margin-top: 1.5rem
  }
}
h2 {
  color: #E6E6E6;
  font-size: 1.8rem;
  @media (max-width: 900px) {
    font-size: 1.6rem
  }
  + p {
    margin-top: 1.5rem
  }
}
p {
  max-width: calc(var(--narrowSiteWidth) - 200px);
  margin-right: auto;
  margin-left: auto;
  color: #E6E6E6;
  font-size: 1.125rem;
  + .button {
    margin-top: 1.5rem
  }
}
:any-link:not(.button) {
  color: white;
  font-weight: normal;
  text-decoration: underline
}
</style>
<template>
  <header>
    <div class="header-inner layout--max-width">
      <h1 v-html="title" />
      <h2 v-if="subtitle" v-html="subtitle" />
      <p v-html="desc" />
      <template v-if="link.text">
        <a v-if="link.location.startsWith('#')" :href="link.location" class="button button--ghost" v-html="link.text" />
        <nuxt-link v-else class="button button--ghost" :to="link.location" v-html="link.text" />
      </template>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: Object,
      default () {
        return {
          text: '',
          location: ''
        }
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (document.querySelector('.header--inner h1 i') && !('ontouchstart' in document.documentElement)) {
      this.$Ztextify('.header--inner h1 i', {
        depth: '10px',
        layers: 2,
        direction: 'forwards',
        event: 'pointer',
        eventRotation: '35deg'
      })
    }
  }
}
</script>
