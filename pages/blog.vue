<style>
  .header--inner {
    display: none
  }
</style>

<template>
  <section class="white">
    <client-only>
      <div v-for="(post, index) in posts.nodes" :key="index" class="maxWidth">
        <div style="display: none">
          {{ post = JSON.parse(JSON.stringify(post).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
        </div>
        <img :src="post.featuredImage.mediaItemUrl" :alt="post.title" loading="lazy">
        <h1>{{ post.title }}</h1>
        <p>{{ post.author.name }}</p>
        <!--eslint-disable-next-line-->
        <p v-html="post.excerpt" />
      </div>
    </client-only>
  </section>
</template>

<script>
import blogQuery from '~/apollo/queries/categories/blog.gql'

export default {
  data () {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: blogQuery
    }
  }
}
</script>
