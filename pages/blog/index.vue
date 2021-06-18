<style scoped>
  .post {
    content-visibility: auto;
    display: grid;
    grid-template-columns: minmax(150px, 400px) 1fr;
    grid-gap: 2rem;
    place-items: center;
    padding: 2rem 0
  }
  .post:first-of-type {
    padding-top: 0
  }
  .post:last-of-type {
    padding-bottom: 0
  }
  img {
    min-width: 100%;
    width: 100%;
    height: 300px;
    object-fit: cover
  }
  h3 {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 6ch
  }
  time {
    justify-self: end;
    font-size: 1.25rem;
    font-weight: normal;
    width: 100%;
    text-align: right
  }
  .post--content {
    min-width: 500px;
    width: 100%
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
  }
</style>

<template>
  <section class="white">
    <div class="maxWidth">
      <article v-for="(post, index) in blog" :key="index" v-infocus="'showElement'" class="hidden post">
        <div style="display: none">
          {{ post = JSON.parse(JSON.stringify(post).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
        </div>
        <img
          :src="post.featuredImage.node.mediaItemUrl"
          :alt="post.title"
          loading="lazy"
          decoding="async"
          width="300px"
          height="auto"
        >
        <div class="post--content">
          <h3>
            <nuxt-link :to="'/blog/' + post.slug + '/'" v-html="post.title" />
            <time>
              {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
            </time>
          </h3>
          <p>Author: <strong>{{ post.author.node.name }}</strong></p>

          <div class="text--normal" v-html="post.excerpt" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  computed: {
    ...mapState([
      'blog'
    ])
  },
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'Read our latest blog posts and learn about current trends in web design and development.' },
        { hid: 'og:title', property: 'og:title', content: 'Blog' },
        { hid: 'og:description', property: 'og:description', content: 'Read our latest blog posts and learn about current trends in web design and development.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Blog' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Read our latest blog posts and learn about current trends in web design and development.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/blog/' }
      ]
    }
  }
}
</script>
