<template>
  <a v-if="post.ACFLink" class="card" :href="post.ACFLink.link" target="_blank">
    <div class="card--inner">
      <img :src="post.featuredImage.mediaItemUrl" width="100%" height="auto" loading="lazy">
      <!--eslint-disable-next-line-->
      <h3 v-html="post.title" />
      <div class="tags">
        <span v-for="(tag, index) in post.tags.nodes" :key="index">
          {{ tag.name }}
        </span>
      </div>
      <!--eslint-disable-next-line-->
      <p v-html="post.content" />
    </div>
  </a>
</template>

<script>
import portfolioQuery from '~/apollo/queries/posts/portfolio.gql'

export default {
  name: 'Portfolio',
  props: ['portfolio_id'],
  data () {
    return {
      post: {}
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: portfolioQuery,
      variables () {
        return { id: this.portfolio_id }
      }
    }
  }
}
</script>
