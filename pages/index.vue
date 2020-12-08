<style scoped>
  #portfolio {
    grid-auto-flow: column;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    grid-auto-columns: 33%;
    grid-template-columns: initial;
    grid-column-gap: 10px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none  /* Firefox */
  }
  #portfolio::-webkit-scrollbar {
    display: none
  }
  #portfolio a {
    scroll-snap-align: center;
    scroll-snap-stop: always
  }
  .card {
    display: grid
  }
  .card--inner {
    grid-template-rows: auto auto auto 1fr auto
  }
  .website_link {
    font-size: 1.25rem
  }
  .icons {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
    width: auto;
    margin: -60px auto auto;
    justify-items: center;
    align-items: center;
    justify-content: center;
    position: sticky;
    grid-column: 1;
    grid-auto-columns: 30px;
    grid-auto-rows: 30px
  }
  .icon {
    width: 15px;
    height: 15px;
    border: 3px solid #1A237E;
    border-radius: 7.5px;
    cursor: pointer
  }
  .icon.current {
    background-color: #1A237E
  }

  @media (max-width: 900px) {
    #portfolio {
      grid-auto-columns: 100%;
      grid-auto-flow: row
    }
    #portfolio div:nth-of-type(n+4), .icons {
      display: none
    }
  }
  @media (max-width: 500px) {
    .card:nth-of-type(3), .card:nth-of-type(4) {
      display: none
    }
  }
</style>

<template>
  <div>
    <Header
      title="Let us focus on your content so you can focus on your <i>business</i>"
      desc="We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practices and technologies so that we can pass on these benefits to you. What’s more, you don’t have to worry about anything, we take care of the whole process so you can carry on running your business."
    />
    <section class="white">
      <h2 class="maxWidth">
        Our three step process to increasing your revenue
      </h2>
      <div class="grid left maxWidth">
        <div>
          <h3>We start with a conversation</h3>
          <p class="text--normal">
            We find the best way to start a project is to have an informal, no-obligations chat about your requirements. Some of our clients come to us with a large project plan spanning many months, with a detailed idea about what they want. Some other clients only know the idea, and not the implementation. We’re happy with both.
          </p>
        </div>

        <div class="svg" v-html="require('../assets/svg/discussion.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div class="svg" v-html="require('../assets/svg/project.svg?include')" />
        <div>
          <h3>You run your business. We run the project</h3>
          <p class="text--normal">
            We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your project on track, working to strict deadlines, so you don’t have to worry.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p class="text--normal">
            We love to keep in touch with our clients, even after the initial project has finished. We’re happy to offer continued maintenance plans on our websites. We even have a community where past clients can discuss and share their websites.
          </p>
        </div>

        <div class="svg" v-html="require('../assets/svg/launch.svg?include')" />
      </div>
    </section>
    <section class="white">
      <h2 class="maxWidth">
        We let our work speak for itself
      </h2>
      <div id="portfolio" class="grid column three maxWidth">
        <div v-for="(post, index) in posts" :key="index" class="card">
          <div class="card--inner">
            <img :src="post.featuredImage.node.mediaItemUrl" width="100%" height="auto" :alt="post.title">
            <a v-if="post.ACFLink" :href="post.ACFLink.link" target="_blank" rel="noopener">

              <h3 v-html="post.title" />
            </a>
            <div class="tags">
              <span v-for="(tag, i) in post.tags.nodes" :key="i">
                {{ tag.name }}
              </span>
            </div>

            <div v-html="post.content" />
            <div>
              <a v-if="post.ACFLink" :href="post.ACFLink.link" target="_blank" rel="noopener" class="website_link">
                View the website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="icons">
        <div v-for="i in Math.ceil(posts.length - 2)" :key="i.id" class="icon" :class="{ current: i == 1}" @click="portfolioScroll($event, i)" />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/header'

import portfolioQuery from '~/apollo/queries/categories/portfolio.gql'
import portfolioPostQuery from '~/apollo/queries/posts/portfolio.gql'

export default {
  components: {
    Header
  },
  async asyncData ({ app }) {
    const dataOne = await app.apolloProvider.defaultClient.query({
      query: portfolioQuery
    })
    const arr = []
    for (const i in dataOne.data.posts.nodes) {
      const response = await app.apolloProvider.defaultClient.query({
        query: portfolioPostQuery,
        variables: {
          id: dataOne.data.posts.nodes[i].id
        }
      })
      arr.push(response.data.post)
    }
    return {
      posts: arr
    }
  },
  mounted () {
    if ('ontouchstart' in document.documentElement) {} else {
      // eslint-disable-next-line
      const ztxt = new Ztextify('.header--inner h1 i', {
        depth: '10px',
        layers: 2,
        direction: 'forwards',
        event: 'pointer',
        eventRotation: '35deg'
      })
    }
  },
  methods: {
    portfolioScroll (event, i) {
      document.querySelectorAll('.icon').forEach((e) => {
        e.classList.remove('current')
      })
      event.target.classList.add('current')
      const width = document.querySelector('#portfolio a').offsetWidth
      document.querySelector('#portfolio').scrollTo({
        left: width * (i - 1),
        behavior: this.$parent.$parent.motion
      })
    }
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow.' },
        { hid: 'og:title', property: 'og:title', content: 'Home' },
        { hid: 'og:description', property: 'og:description', content: 'We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Home' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/' }
      ]
    }
  }
}
</script>
