<style scoped>
  time {
    font-weight: bold
  }
</style>

<template>
  <section class="white legal">
    <div v-if="post.title" class="maxWidth">
      <h1 v-html="post.title" />
      <p>
        Last updated: <time>{{ new Date(post.modified).getDate() + " " + monthArr[new Date(post.modified).getMonth()] + " " + new Date(post.modified).getFullYear().toString() }}</time>.
      </p>

      <div v-html="post.content" />
    </div>
  </section>
</template>

<script>
import query from '~/apollo/queries/posts/legal.gql'

export default {
  async asyncData ({ app, route }) {
    const response = await app.apolloProvider.defaultClient.query({
      query,
      variables: {
        id: route.params.id
      }
    })
    return {
      post: response.data.post
    }
  },
  data () {
    return {
      post: {},
      monthArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  head () {
    return {
      title: this.post.title + ' | Legal',
      meta: [
        { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s ' + this.post.title },
        { hid: 'og:title', property: 'og:title', content: this.post.title + ' | Legal' },
        { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s ' + this.post.title },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title + ' | Legal' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s ' + this.post.title },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/' + this.post.slug + '/' }
      ]
    }
  }
}
</script>
