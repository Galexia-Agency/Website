<style>
  .header--inner h1 i,
  .header--inner h2 i {
    border-bottom: .25rem solid white
  }
</style>
<style scoped>
  /* Header */
  .header--inner {
    display: grid;
    gap: 2rem;
    max-width: 880px;
    margin: auto;
    padding: 6rem 2rem 7.5rem;
    text-align: center
  }
  .header--inner * {
    margin: 0
  }
  .header--inner h1 {
    color: white
  }
  .header--inner h2 {
    padding: 0;
    color: rgb(255 255 255 / 90%)
  }
  .header--inner p {
    color: rgb(255 255 255 / 90%);
    font-size: 1.125rem;
    line-height: 1.4
  }
  .header--inner :any-link:not(.button) {
    color: white;
    font-weight: normal;
    text-decoration: underline
  }
  @media (max-width: 900px) {
    .header--inner p {
      color: rgb(255 255 255 / 95%);
      font-size: 1rem;
      line-height: 1.5
    }
  }
  @media (max-width: 500px) {
    .header--inner {
      padding: 2rem 1rem 4rem
    }
  }
</style>
<template>
  <header>
    <div class="header--inner maxWidth">
      <h1 v-html="title" />
      <h2 v-if="subtitle" v-html="subtitle" />
      <p v-html="desc" />
      <div v-if="link.text">
        <nuxt-link class="button" :to="link.location" v-html="link.text" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
  }
}
</script>
