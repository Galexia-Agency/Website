<template>
  <div>
    <!-- Hidden links so prerendering finds every location page -->
    <NuxtLink v-for="location in locations" :key="location" :to="`/locations/${location}/`" />
  </div>
</template>

<script setup lang="ts">
import { locations } from '~/utils/locations'

useHead({
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>
