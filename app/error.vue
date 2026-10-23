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
  <NuxtLayout>
    <div class="section white grid">
      <div class="error maxWidth grid">
        <div v-if="statusCode === 404">
          <div class="svg" v-html="inlineSvg('not-found')" />
          <h1>
            404 - Page not found
          </h1>
        </div>
        <div v-else>
          <div class="svg" v-html="inlineSvg('error')" />
          <h1>
            {{ statusCode }} - An error occurred
          </h1>
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

const statusCode = computed(() => props.error?.status || props.error?.statusCode || 500)
const message = computed(() => props.error?.message || 'Error')

useHead({
  title: message
})
</script>
