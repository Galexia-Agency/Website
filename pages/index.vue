<style scoped>
  #portfolio {
    grid-auto-columns: 33%;
    grid-auto-flow: column;
    grid-template-columns: initial;
    width: 100%;
    max-width: calc(var(--100vw) - 4.25rem);
    padding-right: 0;
    padding-left: 0;
    overflow-x: scroll;
    column-gap: 10px;
    -webkit-overflow-scrolling: touch;
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
    position: sticky;
    display: grid;
    grid-auto-rows: 30px;
    grid-auto-columns: 30px;
    grid-auto-flow: column;
    grid-column: 1;
    gap: 5px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: auto;
    margin: -60px auto auto
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
      grid-auto-columns: 100%;
      max-width: calc(var(--100vw) - 6rem)
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
      max-width: calc(var(--100vw) - 2rem)
    }
  }
  .portfolioImgContainer {
    position: relative;
    width: 100%;
    min-height: clamp(220px, calc((var(--100vw) / 100) * 25), 350px);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain
  }
  #portfolio .card:nth-of-type(even) .portfolioImgContainer {
    background-image: url('../assets/img/iMac.png?format=webp&resize');
    background-image: image-set(
      url('../assets/img/iMac.png?format=avif&resize') type('image/avif'),
      url('../assets/img/iMac.png?format=webp&resize') type('image/webp')
    )
  }
  #portfolio .card:nth-of-type(odd) .portfolioImgContainer {
    background-image: url('../assets/img/MacBookAir.png?format=webp&resize');
    background-image: image-set(
      url('../assets/img/MacBookAir.png?format=avif&resize') type('image/avif'),
      url('../assets/img/MacBookAir.png?format=webp&resize') type('image/webp')
    )
  }
  .portfolioImgContainer img {
    position: absolute
  }
  #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
    top: 3.25%;
    left: 4.5%;
    width: 91%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 345/200
  }
  #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
    top: 2.75%;
    left: 11.25%;
    width: calc(100% - 22.5%);
    object-fit: cover;
    object-position: top;
    aspect-ratio: 310/200
  }
  @media (max-width: 900px) {
    #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
      top: 5.5%;
      left: calc((var(--100vw) - 342px) / 2);
      max-width: 247.5px;
      aspect-ratio: 350/200
    }
    #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
      top: 6%;
      left: calc((var(--100vw) - 390px) / 2);
      max-width: 290px;
      aspect-ratio: 320/200
    }
  }
  @media (max-width: 500px) {
    #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
      left: calc((var(--100vw) - 278px) / 2)
    }
    #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
      left: calc((var(--100vw) - 322px) / 2)
    }
    .icons {
      display: flex;
      gap: 0;
      justify-content: space-between;
      padding-right: 5px;
      padding-left: 5px
    }
  }
  @media (max-width: 402px) {
    #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
      left: 11%
    }
  }
  @supports not (aspect-ratio: 1 / 1) {
    #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
      height: clamp(59%, calc((100vw / 100) * 15.2), 64%)
    }
    #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
      height: clamp(55%, calc((100vw / 100) * 14.5), 60%)
    }
    @media (max-width: 900px) {
      #portfolio .card:nth-of-type(even) .portfolioImgContainer img {
        height: 63%
      }
      #portfolio .card:nth-of-type(odd) .portfolioImgContainer img {
        height: clamp(61%, calc((100vw / 100) * 43), 82%)
      }
    }
  }
</style>

<template>
  <div>
    <Header
      title="Let us focus on your online presence so you can focus on your <i>business</i>"
      desc="We are a creative agency built from the ground up to help start-ups grow. Aiming to accelerate your business, we provide a multitude of creative services from bespoke WordPress websites to Social Media Management. We know first-hand running a start-up can be a stressful experience so we aim to take some of that stress away by providing a best-in-class project management for the services we offer and that your business vitaly needs."
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
            We find the best way to engage a start-up is to have an informal, no-obligations chat about your business. Some of businesses come to us with a detailed idea about what they want with a very strict budget, whilst others are super passionate about their idea, but haven't started researching how to digitally market it.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/discussion.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/project.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>You run your business. We run the website project</h3>
          <p class="text--normal">
            We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your website project on track, working to strict deadlines, so you don’t have to worry.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p class="text--normal">
            We love to keep in touch with our clients, even after the initial website project has finished. We’re happy to offer continued maintenance plans on our websites. We even have a community where past clients can discuss and share their websites.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/launch.svg?include')" />
      </div>
    </section>
    <section class="white">
      <div class="maxWidth">
        <h2>
          We let our work speak for itself
        </h2>
        <div id="portfolio" class="grid column three" @scroll="updateIcons">
          <article v-for="(post, index) in $parent.$parent.portfolios" :key="index" class="card">
            <div v-if="post.ACFLink" class="card--inner">
              <img
                v-if="post.featuredImage.node.mediaItemUrl"
                :src="post.featuredImage.node.mediaItemUrl.replace('q_auto', 'q_auto,w_500,h_413,c_fit')"
                width="100%"
                height="auto"
                :alt="post.title"
              >
              <div v-else class="portfolioImgContainer">
                <img
                  :src="'data:image/jpeg;charset=utf-8;base64,' + post.imgThumb"
                  width="100%"
                  height="auto"
                  :alt="post.title"
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
          <div v-for="i in icons" :key="i.id" class="icon" :class="{ current: i == 1}" @click="portfolioScroll(i)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
    portfolioScroll (i) {
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
          this.icons = Math.ceil(this.$parent.$parent.portfolios.length - 2)
        } else {
          this.icons = Math.ceil(this.$parent.$parent.portfolios.length)
        }
      }
    },
    updateIcons () {
      const icons = document.querySelectorAll('.icon')
      const scroll = document.querySelector('#portfolio').scrollLeft
      let width
      icons.forEach((e) => {
        e.classList.remove('current')
      })
      if (window.innerWidth > 900) {
        width = document.querySelector('#portfolio article').offsetWidth
      } else {
        width = document.querySelector('#portfolio').offsetWidth + 10
      }
      icons[Math.round(scroll / width)].classList.add('current')
    }
  }
}
</script>
