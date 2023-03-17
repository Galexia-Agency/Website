<style>
  .header--inner h1 i, .header--inner h2 i {
    border-bottom: .25rem solid white
  }
</style>
<style scoped>
  /* Header */
  .header--inner {
    display: grid;
    gap: 2rem;
    max-width: 780px;
    margin: auto;
    padding: 6rem 2rem 7.5rem;
    text-align: center
  }
  .header--inner * {
    margin: 0
  }
  .header--inner h1 {
    color: white;
    font-size: 2.5rem;
    line-height: 1.225;
    letter-spacing: 1px
  }
  .header--inner h2 {
    padding: 0;
    color: white;
    font-size: 2rem;
    line-height: 1.225;
    opacity: .9
  }
  .header--inner p {
    font-size: 18px;
    line-height: 1.4;
    opacity: .9
  }
  .header--inner :any-link {
    color: white;
    font-weight: normal;
    text-decoration: underline
  }
  .header--inner .button:any-link {
    text-decoration: none
  }
  @media (max-width: 900px) {
    .header--inner p {
      opacity: .95
    }
  }
  @media (max-width: 500px) {
    .header--inner {
      padding: 2rem 1rem 4rem
    }
    .header--inner h1 {
      font-size: 1.75rem;
      line-height: 1.225
    }
    .header--inner h2 {
      font-size: 1.5rem;
      line-height: 1.125
    }
    .header--inner p {
      font-size: 16px;
      line-height: 1.5
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
