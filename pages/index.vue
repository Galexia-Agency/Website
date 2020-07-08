<style scoped>
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
      <div class="grid column three maxWidth">
        <client-only>
          <div v-for="(post, index) in posts.nodes" :key="index">
            <Portfolio :portfolio_id="post.id" />
          </div>
        </client-only>
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
  }
}
</script>
