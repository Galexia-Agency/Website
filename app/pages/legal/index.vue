<style scoped>
  li {
    color: var(--primaryColor);
    font-size: 1.5rem;
    line-height: 2
  }
</style>

<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1>Legal</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug" class="post">
          <NuxtLink :to="`/legal/${post.slug}/`">
            <span v-html="post.title" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: pages } = await useCmsIndex('legal')
const posts = computed(() => pages.value.flat())

usePageMeta({
  title: 'Legal',
  description: 'Galexia Creative Agency Ltd’s Legal Index',
  path: '/legal/',
  breadcrumb: [{ name: 'Legal', item: 'https://galexia.agency/legal/' }]
})
</script>
