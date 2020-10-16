<style scoped>
  li {
    font-size: 1.5rem;
    color: #1A237E;
    line-height: 2
  }
</style>

<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1>Legal</h1>
      <ul>
        <li v-for="(post, index) in posts" :key="index" class="post">
          <div style="display: none">
            {{ post = JSON.parse(JSON.stringify(post).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
          </div>
          <!--eslint-disable-next-line-->
          <nuxt-link :to="'/legal/' + post.slug + '/'" v-html="post.title" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import query from '~/apollo/queries/categories/legal.gql'

export default {
  async asyncData ({ app }) {
    const response = await app.apolloProvider.defaultClient.query({
      query
    })
    return {
      posts: response.data.posts.nodes
    }
  },
  head () {
    return {
      title: 'Legal',
      meta: [
        { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'og:title', property: 'og:title', content: 'Legal' },
        { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Legal' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/' }
      ]
    }
  }
}
</script>
