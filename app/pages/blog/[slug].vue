<style scoped>
  .white {
    padding-top: 0
  }
  .white .maxWidth {
    max-width: 780px
  }
  h1 {
    z-index: 2;
    grid-row: 1;
    grid-column: 1;
    align-self: end;
    justify-self: left;
    width: 100%;
    margin-bottom: 1rem;
    color: white;
    font-size: 4rem;
    font-size: clamp(3rem, calc((100vw / 100) * 10), 5rem)
  }
  .post--header {
    position: relative;
    display: grid;
    min-height: 400px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    place-items: center
  }
  .background_opacity {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 40%)
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
  .post--footer:not(.nativeShare) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 140px);
    gap: .5rem;
    justify-content: start
  }
  .post--footer a {
    margin: 0;
    color: white;
    font-size: 1rem;
    text-align: center
  }
  .post--footer h4 {
    grid-column: 1/-1;
    width: fit-content;
    margin-bottom: 0
  }
  .post--footer.nativeShare h4 {
    width: 100%;
    margin: 1.33em 0 1em;
    text-align: center;
    place-self: center
  }

  @media (max-width: 690px) {
    .post--footer {
      justify-content: center
    }
  }
  @media (max-width: 500px) {
    .post--header {
      min-height: 300px
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
  <div class="post">
    <div class="post--header" :style="headerImage ? { backgroundImage: `url(${headerImage})` } : null">
      <div class="background_opacity" />
      <h1 class="maxWidth" v-html="post.title" />
    </div>
    <section class="white">
      <div class="maxWidth">
        <div class="post--content" v-html="post.content" />
        <BlogShare :title="`${post.title} | Blog`" :description="post.excerpt.plain" :path="`/blog/${post.slug}/`" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { cdnImageUrl } from '@joebailey26/nuxt-static-wordpress/images'

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
