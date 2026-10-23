<style scoped>
  time {
    font-weight: 600
  }
</style>

<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1 v-html="post.title" />
      <p>
        Last updated: <time :datetime="updated.toISOString()">{{ updated.getDate() }} {{ months[updated.getMonth()] }} {{ updated.getFullYear() }}</time>.
      </p>

      <div v-html="post.content" />
    </div>
  </section>
</template>

<script setup>
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const route = useRoute()
const post = await useCmsPost('legal', route.params.slug, { notFound: 'Page not found' })
const updated = computed(() => post.value.modified || post.value.date)

usePageMeta({
  title: () => `${post.value.title} | Legal`,
  description: () => `Galexia Creative Agency Ltd’s ${post.value.title}`,
  path: `/legal/${route.params.slug}/`,
  breadcrumb: () => [
    { name: 'Legal', item: 'https://galexia.agency/legal/' },
    { name: post.value.title, item: `https://galexia.agency/legal/${post.value.slug}/` }
  ]
})
</script>
