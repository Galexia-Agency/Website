<style lang="scss" scoped>
.website_link {
  font-size: 1.25rem
}
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
.card__inner {
  grid-template-rows: auto auto auto 1fr auto
}
.card img {
  max-width: 100%
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
.portfolioImgContainer {
  position: relative;
  width: 100%;
  min-height: clamp(220px, calc((var(--100vw) / 100) * 25), 350px);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain
}
#portfolio .card:nth-of-type(even) .portfolioImgContainer {
  background-image: url('~/assets/img/iMac.png?format=webp&resize');
  background-image: image-set(
    url('~/assets/img/iMac.png?format=avif&resize') type('image/avif'),
    url('~/assets/img/iMac.png?format=webp&resize') type('image/webp')
  )
}
#portfolio .card:nth-of-type(odd) .portfolioImgContainer {
  background-image: url('~/assets/img/MacBookAir.png?format=webp&resize');
  background-image: image-set(
    url('~/assets/img/MacBookAir.png?format=avif&resize') type('image/avif'),
    url('~/assets/img/MacBookAir.png?format=webp&resize') type('image/webp')
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
  #portfolio {
    grid-auto-columns: 100%;
    max-width: calc(var(--100vw) - 6rem)
  }
  .icons {
    padding-bottom: 30px
  }
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
  #portfolio {
    max-width: calc(var(--100vw) - 2rem)
  }
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
</style>

<template>
  <div class="portfolio-wrapper">
    <div id="portfolio" class="grid grid--column grid--three" @scroll="updateIcons">
      <article v-for="(post, index) in portfolios" :key="index" class="card">
        <div v-if="post.ACFLink" class="card__inner">
          <img
            v-if="post.featuredImage.node.mediaItemUrl"
            :src="post.featuredImage.node.mediaItemUrl.replace('q_auto', 'q_auto,w_500,h_413')"
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      icons: 0
    }
  },
  computed: {
    ...mapState([
      'portfolios'
    ])
  },
  mounted () {
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
          behavior: window.motion
        })
      } else {
        const width = document.querySelector('#portfolio').offsetWidth + 10
        document.querySelector('#portfolio').scrollTo({
          left: width * (i - 1),
          behavior: window.motion
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
