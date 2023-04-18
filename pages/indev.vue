<style>
  .indev {
    gap: 0;
    align-content: center;
    min-height: 600px;
    text-align: center
  }
  .indev .svg {
    width: 85%;
    max-width: 350px;
    margin: auto
  }
  .indev h1, .indev h2 {
    font-size: 2.25rem;
    font-size: clamp(1.75rem, calc(var(--100vw) / 100) + 1rem, 3rem)
  }
  .indev h3 {
    font-size: 1.75rem;
    font-size: clamp(1.25rem, calc(var(--100vw) / 100) + 1rem, 2.5rem)
  }
  .indev h1, .indev h2, .indev h3 {
    margin: 1.5rem 0;
    padding: 0
  }
  .indev h2 {
    margin-top: 5rem
  }
</style>

<template>
  <div class="section white grid">
    <div class="indev maxWidth grid">
      <div class="svg" v-html="require('../assets/svg/error.svg?include')" />
      <h2>Great things are coming...</h2>
      <h3>This project is in development with</h3>
      <h1>Galexia Creative Agency Ltd</h1>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'This project is in development with Galexia Creative Agency Ltd'
    }
  }
}
</script>
