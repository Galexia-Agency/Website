<style scoped>
  .white {
    padding-top: 0
  }
  .white .maxWidth {
    max-width: 780px
  }
  h1 {
    place-self: end left;
    width: 100%;
    margin-bottom: 1rem;
    color: white;
    font-size: 4rem;
    font-size: clamp(3rem, calc((100vw / 100) * 10), 5rem)
  }
  .post--header {
    display: grid;
    min-height: 300px
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: end;
    width: 100%;
    text-align: right
  }
  .post--content {
    line-height: 1.5
  }

  /* Post headings start at H2 under the title, but look one level smaller */
  .post--content :deep(h2) {
    margin: 1em 0 1rem;
    padding: 0;
    font-size: 2rem;
    text-align: inherit
  }
  .post--content :deep(h3) {
    margin-top: 1.33em;
    font-size: 1.75rem
  }
  .post--content :deep(h4) {
    margin-top: 1.67em;
    font-size: 1.5rem
  }

  @media (max-width: 500px) {
    .post--header {
      min-height: 200px
    }
    .post--meta {
      grid-auto-flow: row
    }
    .post--meta p:last-of-type {
      justify-self: start;
      text-align: left
    }
  }
</style>
<style>
  figure {
    max-width: 100%;
    margin: 0
  }
  /* Wide tables scroll sideways rather than pushing the page wider on mobile */
  .wp-block-table {
    overflow-x: auto
  }
  figure img {
    display: block;
    width: 75%;
    height: auto;
    margin: auto
  }
  @media (max-width: 500px) {
    figure img {
      width: 100%
    }
  }
</style>

<template>
  <NuxtLayout name="default" :hero-image="headerImage">
    <template #hero>
      <div class="post--header">
        <h1 class="maxWidth" v-html="post.title" />
      </div>
    </template>
    <div class="post">
      <section class="white">
        <div class="maxWidth">
          <div class="post--content" v-html="post.content" />
          <BlogShare :title="`${post.title} | Blog`" :description="post.excerpt.plain" :path="`/blog/${post.slug}/`" />
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { cdnImageUrl } from '@joebailey26/nuxt-static-wordpress/images'

// Rendered through the layout here so the post's image can sit behind the menu as well as the title
definePageMeta({ layout: false })

const route = useRoute()
const post = await useCmsPost('blog', String(route.params.slug))
const { imageTransformations } = useRuntimeConfig().public
const headerImage = computed(() => (post.value.featuredMediaUrl && imageTransformations ? cdnImageUrl(post.value.featuredMediaUrl, 1920) : post.value.featuredMediaUrl))
const url = computed(() => `https://galexia.agency/blog/${post.value.slug}/`)
// The CMS's Meta description field, when it is set
const seoDescription = computed(() => (typeof post.value.acf.seo_description === 'string' ? post.value.acf.seo_description : ''))

usePageMeta({
  title: () => `${post.value.title} | Blog`,
  description: () => seoDescription.value || post.value.excerpt.plain,
  path: `/blog/${route.params.slug}/`,
  image: () => post.value.featuredMedia || 'https://galexia.agency/icon.png',
  breadcrumb: () => [
    { name: 'Blog', item: 'https://galexia.agency/blog/' },
    { name: post.value.title, item: url.value }
  ]
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: () => JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: post.value.title,
      image: post.value.featuredMedia ? [post.value.featuredMedia] : [],
      datePublished: post.value.date.toISOString(),
      dateModified: (post.value.modified || post.value.date).toISOString(),
      author: post.value.author ? { '@type': 'Person', name: post.value.author } : undefined
    })
  }]
})
</script>
