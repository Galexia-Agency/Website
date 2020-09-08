<style>
  .header--inner h1 i {
    border-bottom: .25rem solid white
  }
</style>
<style scoped>
  /* Header */
  .header--inner {
    padding: 6rem 2rem 7.5rem 2rem;
    max-width: 780px;
    margin: auto;
    text-align: center;
    display: grid;
    grid-gap: 2rem
  }
  .header--inner * {
    margin: 0
  }
  .header--inner h1 {
    font-size: 2.5rem;
    line-height: 1.225;
    color: white
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
  @media (max-width: 900px) {
    .header--inner p {
      opacity: .95
    }
  }
  @media (max-width: 500px) {
    .header--inner {
      padding: 2rem 1rem 4rem 1rem
    }
    .header--inner h1 {
      font-size: 1.75rem;
      line-height: 1.225
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
      <!-- eslint-disable-next-line -->
      <h1 v-html="title" />
      <!-- eslint-disable-next-line -->
      <p v-html="desc" />
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
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
