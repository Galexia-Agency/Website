<style scoped>
  #portfolio {
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
    cursor: grab
  }
  #portfolio:active {
    cursor: grabbing
  }
  #portfolio::-webkit-scrollbar {
    display: none
  }
  #portfolio a {
    scroll-snap-align: center;
    scroll-snap-stop: always
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
  @media (max-width: 500px) {
    .card:nth-of-type(3), .card:nth-of-type(4) {
      display: none
    }
  }
</style>

<template>
  <div>
    <section class="white">
      <h2 class="maxWidth">
        Our Process
      </h2>
      <div class="grid left maxWidth">
        <div>
          <h3>We start with a conversation</h3>
          <p>We find the best way to start a project is to have an informal, no-obligations chat about your requirements. Some of our clients come to us with a large project plan spanning many months, with a detailed idea about what they want. Some other clients only know the idea, and not the implementation. We’re happy with both.</p>
        </div>
        <inline-svg :src="require('../assets/svg/discussion.svg')" />
      </div>
      <div class="grid right maxWidth">
        <inline-svg :src="require('../assets/svg/project.svg')" />
        <div>
          <h3>You run your business. We run the project</h3>
          <p>We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your project on track, working to strict deadlines, so you don’t have to worry. If you do prefer a more hands-on approach we have a proprietary project management system where you can log in and monitor our progress, send us any further details, or ask any questions.</p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p>We love to keep in touch with our clients, even after the initial project has finished. We’re happy to offer continued maintenance plans on our websites or monitoring on marketing strategies. We even have a community where past clients can discuss and share their websites.</p>
        </div>
        <inline-svg :src="require('../assets/svg/launch.svg')" />
      </div>
    </section>
    <section class="white">
      <h2 class="maxWidth">
        We let our work speak for itself
      </h2>
      <div id="portfolio" class="grid column three maxWidth">
        <div v-for="(post, index) in posts.nodes" :key="index">
          <Portfolio :portfolio_id="post.id" />
        </div>
      </div>
      <div class="icons">
        <div v-for="i in Math.ceil(posts.nodes.length / 3)" :key="i.id" class="icon" :class="{ current: i == 1}" @click="portfolioScroll($event, i)" />
      </div>
    </section>
  </div>
</template>

<script>
import Portfolio from '../components/portfolio'
import portfolioQuery from '~/apollo/queries/categories/portfolio.gql'

export default {
  components: {
    Portfolio
  },
  data () {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: portfolioQuery
    }
  },
  mounted () {
    this.$parent.$parent.page = {
      display: true,
      title: 'Let us focus on your content so you can focus on your <i>business</i>',
      subTitle: '',
      desc: 'We are a creative agency specialising in website design, development and marketing. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practises and technologies so that we can pass on these benefits to you. What’s more, you don’t have to worry about anything, we take care of the whole process so you can carry on running your business.'
    }
    this.$parent.$parent.metaHelper.title = 'Home'
    this.$parent.$parent.metaHelper.description = 'We are a creative agency specialising in website design development and marketing. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practises and technologies so that we can pass on these benefits to you.'
  },
  methods: {
    portfolioScroll (event, i) {
      document.querySelectorAll('.icon').forEach((e) => {
        e.classList.remove('current')
      })
      event.target.classList.add('current')
      const y = (i * 3) - 3
      const width = document.querySelector('#portfolio a').offsetWidth
      document.querySelector('#portfolio').scrollTo({
        left: width * y,
        behavior: 'smooth'
      })
    }
  }
}
</script>
