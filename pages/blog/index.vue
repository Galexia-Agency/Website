<style scoped>
  .post {
    display: grid;
    grid-template-columns: minmax(200px, 400px) 1fr;
    grid-gap: 2rem;
    place-items: center;
    padding: 2rem 0
  }
  img {
    width: 100%
  }
  h3 {
    margin: 0
  }
  time {
    float: right;
    font-size: 1.25rem;
    font-weight: normal
  }
  .post--content {
    min-width: 500px
  }

  @media (max-width: 800px) {
    .post {
      grid-template-columns: 1fr
    }
    img {
      display: none
    }
    .post--content {
      min-width: initial
    }
  }
</style>

<template>
  <section class="white">
    <div class="maxWidth">
      <client-only>
        <div v-for="(post, index) in posts.nodes" :key="index" class="post">
          <div style="display: none">
            {{ post = JSON.parse(JSON.stringify(post).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
          </div>
          <img :src="post.featuredImage.mediaItemUrl" :alt="post.title" loading="lazy" width="300px" height="auto">
          <div class="post--content">
            <h3>
              <nuxt-link :to="'/blog/' + post.slug">
                {{ post.title }}
              </nuxt-link>
              <time>
                {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
              </time>
            </h3>
            <p>Author: <b>{{ post.author.name }}</b></p>
            <!--eslint-disable-next-line-->
            <p v-html="post.excerpt" />
          </div>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import blogQuery from '~/apollo/queries/categories/blog.gql'

export default {
  data () {
    return {
      posts: [],
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: blogQuery
    }
  },
  mounted () {
    this.$parent.$parent.page = {
      display: false
    }
    this.$parent.$parent.metaHelper.title = 'Blog'
    this.$parent.$parent.metaHelper.description = 'Read our latest blog posts and learn about current trends in web development and marketing.'
  }
}
</script>
