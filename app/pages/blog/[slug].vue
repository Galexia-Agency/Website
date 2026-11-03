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

  /*
  Chat bubbles from the Chatterbox block. The plugin put its stylesheet in the post itself, which
  WordPress strips on import, so the rules the posts use live here instead.
  */
  .wp-block-chatterbox-chat ul {
    margin: 0;
    padding: 0 .75rem;
    list-style: none
  }
  .slds-chat-listitem {
    display: flex;
    margin-top: .75rem
  }
  .slds-chat-listitem_outbound {
    justify-content: flex-end
  }
  .slds-chat-listitem_inbound + .slds-chat-listitem_inbound,
  .slds-chat-listitem_outbound + .slds-chat-listitem_outbound {
    margin-top: .25rem
  }
  .slds-chat-message {
    display: flex
  }
  .slds-chat-message__body {
    display: flex;
    flex-direction: column
  }
  .slds-chat-message__text {
    display: inline-block;
    max-width: 26.25rem;
    min-height: 2rem;
    padding: .5rem;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    white-space: pre-line;
    word-break: break-word;
    overflow-wrap: break-word
  }
  .slds-chat-message__text_inbound {
    margin-right: auto;
    color: #080707;
    background-color: #F2F2F3;
    border-radius: .5rem .5rem .5rem 0
  }
  .slds-chat-message__text_outbound {
    margin-left: auto;
    color: white;
    background-color: #005FB2;
    border-radius: .5rem .5rem 0
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
