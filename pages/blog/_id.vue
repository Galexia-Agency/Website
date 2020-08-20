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
    background-position: center;
    background-image: url('../../assets/img/faux-code.jpg?webp')
  }
  body.no-webp .post--header {
    background-image: url('../../assets/img/faux-code.jpg?resize')
  }
  .background_opacity {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .33)
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: right
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
    margin-bottom: 0
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
      justify-self: start
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
    <div class="post--header">
      <div class="background_opacity" />
      <h1 class="maxWidth">
        {{ post.title }}
      </h1>
    </div>
    <section class="white">
      <div class="maxWidth">
        <div class="post--meta">
          <p>Author: <b>{{ post.author.name }}</b></p>
          <p>
            Published on:
            <b>
              <time>
                {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
              </time>
            </b>
          </p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="post.content" class="post--content"/>
        <div v-if="!share" class="post--footer">
          <h4>Share:</h4>
          <ShareNetwork
            v-for="social in socials"
            :key="social"
            :network="social"
            :url="'https://galexia.agency' + $router.currentRoute.path"
            :title="post.title + ' | Galexia - Creative Agency specialising in Web Development and Marketing'"
            :description="post.excerpt"
            :media="post.featuredImage.mediaItemUrl"
            class="button"
          >
            <font-awesome-icon :icon="['fab', social.toLowerCase()]" /> {{ social }}
          </ShareNetwork>
        </div>
        <div v-else class="post--footer">
          <h4 style="text-align: center" @click="nativeShare">
            Share this blog post
          </h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/posts/post.gql'

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
        console.log(process.client)
        console.log(navigator.canShare())
        return process.client ? navigator.canShare() : false
      } catch {
        return false
      }
    }
  },
  mounted () {
    this.$parent.$parent.page = {
      display: false
    }
  },
  updated () {
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.excerpt
    this.$parent.$parent.metaHelper.image = this.post.featuredImage.mediaItemUrl
  },
  methods: {
    nativeShare () {
      navigator.share({
        title: this.post.title + ' | Galexia - Creative Agency specialising in Web Development and Marketing',
        text: this.post.excerpt,
        url: 'https://galexia.agency' + this.$router.currentRoute.path
      })
    }
  }
}
</script>
