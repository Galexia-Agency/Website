<template>
  <a v-if="post.ACFLink" class="card" :href="post.ACFLink.link" target="_blank" rel="noopener">
    <div class="card--inner">
      <img :src="post.featuredImage.mediaItemUrl" width="100%" height="auto" loading="lazy" :alt="post.title">
      <!--eslint-disable-next-line-->
      <h3 v-html="post.title" />
      <div class="tags">
        <span v-for="(tag, index) in post.tags.nodes" :key="index">
          {{ tag.name }}
        </span>
      </div>
      <!--eslint-disable-next-line-->
      <div v-html="post.content" />
    </div>
  </a>
</template>

<script>
import portfolioQuery from '~/apollo/queries/posts/portfolio.gql'

export default {
  name: 'Portfolio',
  props: {
    // eslint-disable-next-line
    portfolio_id: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      post: {}
    }
  },
  apollo: {
    post: {
      query: portfolioQuery,
      variables () {
        return { id: this.portfolio_id }
      }
    }
  }
}
</script>
