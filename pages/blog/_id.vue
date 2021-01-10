<style scoped>
  .white {
    padding-top: 0
  }
  .white .maxWidth {
    max-width: 780px
  }
  h1 {
    z-index: 2;
    color: white;
    justify-self: left;
    align-self: end;
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 4rem;
    font-size: clamp(3rem, 10vw, 5rem)
  }
  .post--header {
    height: 400px;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
  }
  .background_opacity {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4)
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: end;
    text-align: right;
    width: 100%
  }
  .post--content {
    line-height: 1.5
  }
  .post--footer {
    display: grid;
    grid-gap: .5rem;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, 140px)
  }
  .post--footer a {
    text-align: center;
    width: 140px;
    color: white;
    font-size: 1rem;
    margin: 0
  }
  .post--footer h4 {
    grid-column: 1/-1;
    margin-bottom: 0;
    width: fit-content
  }
  .post--footer.nativeShare h4 {
    place-self: center;
    text-align: center;
    margin: 1.33em 0 1em;
    width: 100%
  }

  @media (max-width: 690px) {
    .post--footer {
      justify-content: center
    }
  }
  @media (max-width: 500px) {
    .post--header {
      height: 300px
    }
    .post--meta {
      grid-auto-flow: row
    }
    .post--meta p:last-of-type {
      justify-self: start;
      text-align: left
    }
  }
</style>
<style>
  figure {
    margin: 0;
    max-width: 100%
  }
  figure img {
    width: 75%;
    height: auto;
    display: block;
    margin: auto
  }
  @media (max-width: 500px) {
    figure img {
      width: 100%
    }
  }
</style>

<template>
  <div v-if="post.title" class="post">
    <div class="post--header" :style="'background-image:url(' + post.featuredImage.node.mediaItemUrl + ')'">
      <div class="background_opacity" />

      <h1 class="maxWidth" v-html="post.title" />
    </div>
    <section class="white">
      <div class="maxWidth">
        <div class="post--meta">
          <p>Author: <strong>{{ post.author.node.name }}</strong></p>
          <p>
            Published on:
            <strong>
              <time>
                {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
              </time>
            </strong>
          </p>
        </div>

        <div class="post--content" v-html="post.content" />
        <div v-if="!share" class="post--footer">
          <h4>Share:</h4>
          <ShareNetwork
            v-for="social in socials"
            :key="social"
            :network="social"
            :url="'https://galexia.agency' + $router.currentRoute.path"
            :title="post.title + ' | Galexia Creative Agency Ltd | Web Design and Development'"
            :description="post.excerpt"
            :media="post.featuredImage.mediaItemUrl"
            class="button"
          >
            <font-awesome-icon :icon="['fab', social.toLowerCase()]" /> {{ social }}
          </ShareNetwork>
        </div>
        <div v-else class="post--footer nativeShare">
          <h4 class="button">
            <font-awesome-icon :icon="['fas', 'share-alt']" /> <a href="javascript:void(0)" @click="nativeShare">Share this blog post</a>
          </h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/posts/blog.gql'

export default {
  async asyncData ({ app, route }) {
    const response = await app.apolloProvider.defaultClient.query({
      query: postQuery,
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
      socials: ['Facebook', 'LinkedIn', 'Twitter', 'WhatsApp'],
      post: {},
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  computed: {
    share () {
      try {
        return process.client ? navigator.share() : false
      } catch {
        return false
      }
    }
  },
  methods: {
    nativeShare () {
      navigator.share({
        title: this.post.title + ' | Blog',
        text: this.post.excerpt.replace('<p>', '').replace('</p>', '').replace('[&hellip;]', '').replace('\n', ''),
        url: 'https://galexia.agency' + this.$router.currentRoute.path
      })
    }
  },
  head () {
    return {
      title: this.post.title.replace('&#8217;', '\'') + ' | Blog',
      meta: [
        { hid: 'description', name: 'description', content: this.post.seo.metaDesc || this.post.excerpt },
        { hid: 'og:title', property: 'og:title', content: this.post.title.replace('&#8217;', '\'') + ' | Blog' },
        { hid: 'og:description', property: 'og:description', content: this.post.seo.metaDesc || this.post.excerpt },
        { hid: 'og:image', property: 'og:image', content: this.post.featuredImage.mediaItemUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title.replace('&#8217;', '\'') + ' | Blog' },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.seo.metaDesc || this.post.excerpt },
        { hid: 'twitter:img', name: 'twitter:img', content: this.post.featuredImage.mediaItemUrl }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/blog/' + this.post.slug + '/' }
      ]
    }
  }
}
</script>
