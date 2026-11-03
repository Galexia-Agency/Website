<style scoped>
  .post {
    content-visibility: auto;
    display: grid;
    grid-template-columns: minmax(150px, 400px) 1fr;
    gap: 2rem;
    padding: 2rem 0
  }
  .post:first-of-type {
    padding-top: 0
  }
  .post:last-of-type {
    padding-bottom: 0
  }
  img {
    width: 100%;
    min-width: 100%;
    height: 300px;
    object-fit: cover
  }
  h3 {
    margin: 0;

    /*
    display: grid;
    grid-template-columns: 1fr 6ch
    */
  }
  time {
    justify-self: end;
    width: 100%;
    font-weight: normal;
    font-size: 1.25rem;
    text-align: right
  }
  .post--content {
    width: 100%;
    min-width: 500px
  }

  @media (max-width: 800px) {
    .post {
      grid-template-columns: 1fr
    }
    img {
      height: 200px
    }
    .post--content {
      min-width: initial
    }
    .post--content .text--normal {
      word-break: break-word
    }
  }
</style>

<template>
  <section class="white">
    <div class="maxWidth">
      <article v-for="post in posts" :key="post.slug" v-infocus="'showElement'" class="hidden post">
        <SiteImage
          v-if="post.featuredMediaUrl"
          :src="post.featuredMediaUrl"
          :alt="post.title"
          width="300"
        />
        <div class="post--content">
          <h3>
            <NuxtLink :to="`/blog/${post.slug}/`">
              <span v-html="post.title" />
            </NuxtLink>
          </h3>
          <div class="text--normal" v-html="post.excerpt.raw" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: pages } = await useCmsIndex('blog')
const posts = computed(() => pages.value.flat())

usePageMeta({
  title: 'Blog',
  description: 'Read our latest blog posts and learn about current trends in web design and development.',
  path: '/blog/',
  breadcrumb: [{ name: 'Blog', item: 'https://galexia.agency/blog/' }]
})
</script>
