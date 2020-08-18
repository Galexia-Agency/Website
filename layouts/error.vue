<style scoped>
  .error {
    text-align: center;
    min-height: 600px;
    align-content: center
  }
  .error svg {
    max-width: 350px;
    width: 85%;
    margin: auto
  }
  .error h1 {
    margin-top: 5rem;
    font-size: clamp(1.75rem, 1vw + 1rem, 3rem)
  }
</style>

<template>
  <div class="section white grid">
    <div class="error maxWidth grid">
      <div v-if="error.statusCode === 404">
        <NotFoundSVG />
        <h1>
          404 - Page not found
        </h1>
      </div>
      <div v-else>
        <ErrorSVG />
        <h1>
          {{ error.statusCode }} - An error occurred
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import NotFoundSVG from '-!vue-svg-loader!../assets/svg/not-found.svg'
// eslint-disable-next-line
import ErrorSVG from '-!vue-svg-loader!../assets/svg/error.svg'

export default {
  name: 'NuxtError',
  components: {
    NotFoundSVG,
    ErrorSVG
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message
    }
  },
  head () {
    return {
      title: this.message
    }
  }
}
</script>
