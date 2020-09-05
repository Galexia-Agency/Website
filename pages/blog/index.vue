<style scoped>
  .post {
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
    width: 100%
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
      <div v-for="(post, index) in posts" :key="index" class="post">
        <div style="display: none">
          {{ post = JSON.parse(JSON.stringify(post).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
        </div>
        <img
          :src="post.featuredImage.mediaItemUrl"
          :alt="post.title"
          loading="lazy"
          width="300px"
          height="auto"
        >
        <div class="post--content">
          <h3>
            <nuxt-link :to="'/blog/' + post.slug + '/'">
              {{ post.title }}
            </nuxt-link>
            <time>
              {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
            </time>
          </h3>
          <p>Author: <b>{{ post.author.name }}</b></p>
          <!--eslint-disable-next-line-->
          <div v-html="post.excerpt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogQuery from '~/apollo/queries/categories/blog.gql'

export default {
  async asyncData ({ app }) {
    const response = await app.apolloProvider.defaultClient.query({
      query: blogQuery
    })
    return {
      posts: response.data.posts.nodes
    }
  },
  data () {
    return {
      posts: [],
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Blog'
    this.$parent.$parent.metaHelper.description = 'Read our latest blog posts and learn about current trends in web development and marketing.'
    this.$parent.$parent.metaHelper.url = 'blog/'
  }
}
</script>
