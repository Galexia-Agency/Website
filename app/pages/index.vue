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
  .drag-scroll--enabled {
    cursor: grab
  }
  .drag-scroll--scrolling {
    cursor: grabbing;
    user-select: none;
    scroll-snap-type: none
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
    .grid svg, .card :deep(img) {
      max-width: 100%
    }
  }
  @media (max-width: 500px) {
    #portfolio {
      max-width: calc(var(--100vw) - 2rem)
    }
  }
  @media (max-width: 500px) {
    .icons {
      display: flex;
      gap: 0;
      justify-content: space-between;
      padding-right: 5px;
      padding-left: 5px
    }
  }
</style>

<template>
  <div>
    <PageHeader
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
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('discussion')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('project')" />
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
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('launch')" />
      </div>
    </section>
    <section class="white">
      <div class="maxWidth">
        <h2>
          We let our work speak for itself
        </h2>
        <div
          id="portfolio"
          ref="portfolio"
          class="grid column three"
          :class="{ 'drag-scroll--enabled': dragEnabled, 'drag-scroll--scrolling': dragging }"
          @scroll="updateIcons"
          @mousedown="mouseDownHandler"
          @click.capture="clickHandler"
        >
          <article v-for="post in portfolio" :key="post.slug" class="card">
            <div v-if="post.acf.link" class="card--inner">
              <SiteImage
                v-if="post.featuredMediaUrl"
                :src="post.featuredMediaUrl"
                width="500"
                options="height=413"
                :alt="post.title"
              />
              <a :href="post.acf.link" target="_blank" rel="noopener">
                <h3 v-html="post.title" />
              </a>
              <div class="tags">
                <span v-for="tag in post.tags" :key="tag">
                  {{ tag }}
                </span>
              </div>
              <div v-html="post.content" />
              <div>
                <a :href="post.acf.link" target="_blank" rel="noopener" class="website_link">
                  View the website
                </a>
              </div>
            </div>
          </article>
        </div>
        <div class="icons">
          <div v-for="i in icons" :key="i" class="icon" :class="{ current: i === current }" @click="portfolioScroll(i)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { CmsPostSummaryWithContent } from '@joebailey26/nuxt-static-wordpress'

usePageMeta({
  title: 'Home',
  description: 'We are a creative agency specialising in website design and development. We’re a fairly new company built from the ground up to help you grow.',
  path: '/'
})

// A portfolio post with its Website URL field set
type PortfolioPost = CmsPostSummaryWithContent & { acf: { link: string } }

// Portfolio posts without a website link are not shown, as before.
const { data: pages } = await useCmsIndex('portfolio', { content: true })
const portfolio = computed(() => pages.value.flat().filter((post): post is PortfolioPost => typeof post.acf.link === 'string' && post.acf.link !== ''))

const portfolioEl = useTemplateRef<HTMLElement>('portfolio')
const icons = ref(0)
const current = ref(1)
const behavior = (): ScrollBehavior => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth')
// Wide screens show three cards and scroll by one card; narrow screens scroll by the whole carousel.
const step = (carousel: HTMLElement) => (window.innerWidth > 900 ? carousel.querySelector('article')?.offsetWidth ?? 0 : carousel.offsetWidth + 10)

function portfolioScroll (i: number) {
  portfolioEl.value?.scrollTo({ left: step(portfolioEl.value) * (i - 1), behavior: behavior() })
}

function portfolioLength () {
  icons.value = window.innerWidth > 900 ? Math.max(portfolio.value.length - 2, 0) : portfolio.value.length
}

function updateIcons () {
  if (portfolioEl.value) {
    current.value = Math.round(portfolioEl.value.scrollLeft / step(portfolioEl.value)) + 1
  }
}

const dragEnabled = ref(false)
const dragging = ref(false)
// Whether the current drag moved far enough that releasing it shouldn't count as a click
let dragged = false
const position = { left: 0, x: 0 }

function dragScrollWatcher () {
  // Touch screens already swipe natively; only drag when the cards actually overflow
  dragEnabled.value = !('ontouchstart' in window) && !!portfolioEl.value && portfolioEl.value.scrollWidth > portfolioEl.value.clientWidth
  if (!dragEnabled.value) {
    mouseUpHandler()
  }
}

function mouseDownHandler (e: MouseEvent) {
  if (!dragEnabled.value || !portfolioEl.value || e.button !== 0) {
    return
  }
  // Stops the browser dragging images and links natively
  e.preventDefault()
  dragging.value = true
  dragged = false
  position.left = portfolioEl.value.scrollLeft
  position.x = e.clientX
  // Listen on the window so releasing outside the carousel still ends the drag
  window.addEventListener('mousemove', mouseMoveHandler)
  window.addEventListener('mouseup', mouseUpHandler)
}

function mouseMoveHandler (e: MouseEvent) {
  if (!portfolioEl.value) {
    return
  }
  const dx = e.clientX - position.x
  if (Math.abs(dx) > 5) {
    dragged = true
  }
  portfolioEl.value.scrollLeft = position.left - dx
}

function mouseUpHandler () {
  window.removeEventListener('mousemove', mouseMoveHandler)
  window.removeEventListener('mouseup', mouseUpHandler)
  dragging.value = false
}

function clickHandler (e: MouseEvent) {
  // Releasing a drag over a link shouldn't open it
  if (dragged) {
    e.preventDefault()
    e.stopPropagation()
    dragged = false
  }
}

onMounted(() => {
  if (!('ontouchstart' in document.documentElement)) {
    useNuxtApp().$Ztextify('.header--inner h1 i', {
      depth: '10px',
      layers: 2,
      direction: 'forwards',
      event: 'pointer',
      eventRotation: '35deg'
    })
  }
  portfolioLength()
  window.addEventListener('resize', portfolioLength)
  dragScrollWatcher()
  window.addEventListener('resize', dragScrollWatcher)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', portfolioLength)
  window.removeEventListener('resize', dragScrollWatcher)
  mouseUpHandler()
})
</script>
