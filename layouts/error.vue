<style scoped lang="scss">
  .error {
    align-content: center;
    min-height: 600px;
    text-align: center
  }
  .error .svg {
    width: 85%;
    max-width: 350px;
    margin: auto
  }
  .error h1 {
    margin-top: 5rem;
    font-size: 2.25rem;
    font-size: clamp(1.75rem, calc(var(--100vw) / 100) + 1rem, 3rem)
  }
</style>

<template>
  <div class="section white grid">
    <div class="error maxWidth grid">
      <div v-if="error.statusCode === 404">
        <div class="svg" v-html="require('../assets/svg/not-found.svg?include')" />
        <h1>
          404 - Page not found
        </h1>
      </div>
      <div v-else>
        <div class="svg" v-html="require('../assets/svg/error.svg?include')" />
        <h1>
          {{ error.statusCode }} - An error occurred
        </h1>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message
    }
  }
}
</script>
