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
  :deep(img) {
    width: 100%;
    min-width: 100%;
    height: 300px;
    object-fit: cover
  }
  h3 {
    margin: 0 0 1rem;

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
  .blog-pagination {
    margin-top: 3rem
  }
  .blog-pagination :deep(.pagination__button) {
    color: var(--primaryColor);
    font-size: 1rem
  }
  .blog-pagination :deep(.pagination__button:hover) {
    opacity: .75
  }
  .blog-pagination :deep(.pagination__button:disabled),
  .blog-pagination :deep(.pagination__break-view) {
    color: #777777;
    opacity: 1
  }

  @media (max-width: 800px) {
    .post {
      grid-template-columns: 1fr
    }
    :deep(img) {
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
      <article v-for="post in paginatedPosts" :key="post.slug" v-infocus="'showElement'" class="hidden post">
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
      <GalexiaPagination
        class="blog-pagination"
        :page-count="pageCount"
        :current-page="currentPage"
        :go-to-page="goToPage"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import GalexiaPagination from 'nuxt-component-pagination/index.vue'

const route = useRoute()
const router = useRouter()
const { data: pages } = await useCmsIndex('blog')

const pageCount = computed(() => pages.value.length)
const currentPage = computed(() => {
  const p = route.params.page
  const page = Array.isArray(p) ? p[0] : p

  return page ? parseInt(page) : 1
})
const paginatedPosts = computed(() => pages.value[currentPage.value - 1])

if (!(currentPage.value >= 1 && currentPage.value <= Math.max(pageCount.value, 1))) {
  throw createError({ status: 404, message: 'Page not found', fatal: true })
}

function pagePath (page: number) {
  return page > 1 ? `/blog/page/${page}/` : '/blog/'
}

function goToPage (page: number) {
  router.push({ path: pagePath(page) })
}

usePageMeta({
  title: 'Blog',
  description: 'Read our latest blog posts and learn about current trends in web design and development.',
  path: pagePath(currentPage.value),
  breadcrumb: [{ name: 'Blog', item: 'https://galexia.agency/blog/' }]
})
</script>
