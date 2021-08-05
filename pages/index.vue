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
    scrollbar-width: none;  /* Firefox */
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
    border: 3px solid var(--primaryColor);
    border-radius: 7.5px;
    cursor: pointer
  }
  .icon.current {
    background-color: var(--primaryColor)
  }

  @media (max-width: 900px) {
    #portfolio {
      grid-auto-columns: 100%
    }
    .icons {
      padding-bottom: 30px
    }
    .grid svg, .card img {
      max-width: 100%
    }
  }
  @media (max-width: 500px) {
    #portfolio {
      max-width: 100vw
    }
  }
  .portfolioImgContainer {
    min-height: 350px;
    width: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative
  }
  #portfolio .card:nth-of-type(even) .portfolioImgContainer {
    background-image: url('../assets/img/iMac.png?webp')
  }
  #portfolio .card:nth-of-type(odd) .portfolioImgContainer {
    background-image: url('../assets/img/MacBookAir.png?webp')
  }
  .portfolioImgContainer img {
    position: absolute
  }
  #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
    top: 22.5px;
    left: 20px;
    right: 20px;
    width: calc(100% - 40px);
    height: 62%;
    object-fit: cover;
    object-position: top
  }
  #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
    top: 19%;
    left: 11%;
    right: 11%;
    width: calc(100% - 22%);
    height: 58.5%;
    object-fit: cover;
    object-position: top
  }
</style>

<template>
  <div>
    <Header
      title="Let us focus on your content so you can focus on your <i>business</i>"
      desc="We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practices and technologies so that we can pass on these benefits to you. What’s more, you don’t have to worry about anything, we take care of the whole process so you can carry on running your business."
      :link="{location: '/contact/', text: 'Get in touch'}"
    />
    <section class="white">
      <h2 class="maxWidth">
        Our three step process to increasing your revenue
      </h2>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>We start with a conversation</h3>
          <p class="text--normal">
            We find the best way to start a project is to have an informal, no-obligations chat about your requirements. Some of our clients come to us with a large project plan spanning many months, with a detailed idea about what they want. Some other clients only know the idea, and not the implementation. We’re happy with both.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/discussion.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/project.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>You run your business. We run the project</h3>
          <p class="text--normal">
            We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your project on track, working to strict deadlines, so you don’t have to worry.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p class="text--normal">
            We love to keep in touch with our clients, even after the initial project has finished. We’re happy to offer continued maintenance plans on our websites. We even have a community where past clients can discuss and share their websites.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/launch.svg?include')" />
      </div>
    </section>
    <section class="white">
      <h2 class="maxWidth">
        We let our work speak for itself
      </h2>
      <div id="portfolio" class="grid column three maxWidth">
        <article v-for="(post, index) in portfolios" :key="index" class="card">
          <div v-if="post.ACFLink" class="card--inner">
            <div class="portfolioImgContainer">
              <img
                :src="`https://screenshot.galexia.agency/${encodeURIComponent(post.ACFLink.link)}/large/_123`"
                width="100%"
                height="auto"
                :alt="post.title"
                loading="lazy"
              >
            </div>
            <a :href="post.ACFLink.link" target="_blank" rel="noopener">
              <h3 v-html="post.title" />
            </a>
            <div class="tags">
              <span v-for="(tag, i) in post.tags.nodes" :key="i">
                {{ tag.name }}
              </span>
            </div>
            <div v-html="post.content" />
            <div>
              <a :href="post.ACFLink.link" target="_blank" rel="noopener" class="website_link">
                View the website
              </a>
            </div>
          </div>
        </article>
      </div>
      <div class="icons">
        <div v-for="i in icons" :key="i.id" class="icon" :class="{ current: i == 1}" @click="portfolioScroll($event, i)" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/header'

export default {
  components: {
    Header
  },
  data () {
    return {
      icons: 0
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
  },
  computed: {
    ...mapState([
      'portfolios'
    ])
  },
  mounted () {
    // eslint-disable-next-line
    if ('ontouchstart' in document.documentElement) {} else {
      this.$Ztextify('.header--inner h1 i', {
        depth: '10px',
        layers: 2,
        direction: 'forwards',
        event: 'pointer',
        eventRotation: '35deg'
      })
    }
    this.portfolioLength()
    const self = this
    window.addEventListener('resize', () => {
      self.portfolioLength()
    })
  },
  methods: {
    portfolioScroll (event, i) {
      document.querySelectorAll('.icon').forEach((e) => {
        e.classList.remove('current')
      })
      event.target.classList.add('current')
      if (window.innerWidth > 900) {
        const width = document.querySelector('#portfolio article').offsetWidth
        document.querySelector('#portfolio').scrollTo({
          left: width * (i - 1),
          behavior: this.$parent.$parent.motion
        })
      } else {
        const width = document.querySelector('#portfolio').offsetWidth + 10
        document.querySelector('#portfolio').scrollTo({
          left: width * (i - 1),
          behavior: this.$parent.$parent.motion
        })
      }
    },
    portfolioLength () {
      if (window) {
        if (window.innerWidth > 900) {
          this.icons = Math.ceil(this.portfolios.length - 2)
        } else {
          this.icons = Math.ceil(this.portfolios.length)
        }
      }
    }
  }
}
</script>
