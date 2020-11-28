<style>
  .location {
    text-transform: capitalize
  }
  svg {
    margin: auto
  }
</style>
<style scoped>
  .card {
    display: grid;
    grid-template-rows: 11ex 250px 1fr
  }
  .card:hover {
    background-color: inherit;
    color: inherit
  }
  .card:hover h3 {
    color: #1A237E
  }
  .card .svg {
    margin: auto;
    height: auto;
    width: 75%
  }
  .card p {
    margin: 0
  }
  .card h3 {
    text-align: center;
    margin: 0
  }

  @media (max-width: 768px) {
    .card {
      grid-template-rows: auto auto auto;
      grid-gap: 2rem
    }
    .card .svg {
      max-width: 300px
    }
  }
</style>

<template>
  <div>
    <Header
      :title="'Hey, businesses of <span class=\'location\'>' + this.$route.params.id + '</span>!'"
      subtitle="Let us focus on your content so you can focus on your <i>business</i>"
      :desc="'We are a creative agency based in Royston but with ties to <span class=\'location\'>' + this.$route.params.id + '</span>, specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practices and technologies so that we can pass on these benefits to you. What’s more, you don’t have to worry about anything, we take care of the whole process so you can carry on running your business.'"
    />
    <section class="white">
      <h2 class="maxWidth">
        Our three step process to increasing your revenue
      </h2>
      <div class="grid left maxWidth">
        <div>
          <h3>We start with a conversation</h3>
          <p class="text--normal">
            We find the best way to start a project is to have an informal, no-obligations chat about your requirements. We're local to <span class="location">{{ $route.params.id }}</span> so can arrange a face-to-face meeting, or we can conduct it online. Some of our clients come to us with a large project plan spanning many months, with a detailed idea about what they want. Some other clients only know the idea, and not the implementation. We’re happy with both.
          </p>
        </div>

        <div class="svg" v-html="require('../../assets/svg/discussion.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div class="svg" v-html="require('../../assets/svg/project.svg?include')" />
        <div>
          <h3>You run your business. We run the project</h3>
          <p class="text--normal">
            We understand life often feels like it’s moving in the fast lane, especially in <span class="location">{{ $route.params.id }}</span>, that’s why we’re versed in project management. We keep your project on track, working to strict deadlines, so you don’t have to worry.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p class="text--normal">
            We love to keep in touch with our clients, even after the initial project has finished. We’re happy to offer continued maintenance plans on our websites. We even have a community where past clients based in <span class="location">{{ $route.params.id }}</span> can discuss and share their websites.
          </p>
        </div>

        <div class="svg" v-html="require('../../assets/svg/launch.svg?include')" />
      </div>
    </section>
    <!--
    <section class="white" style="padding-top: 0">
      <h2 class="maxWidth">
        Services to help you succeed
      </h2>
      <div class="grid column three maxWidth">
        <div class="card">
          <h3>Web Design & Development</h3>
          <div v-html="require('../../assets/svg/web-design-dev.svg?include')" class="svg" />
          <p>Having a strong web presence is vital in modern times. A website is often the first port of call for your customers. Having an outdated or broken website can leave your customers feeling frustrated and taking their business elsewhere. We pride ourselves in using the latest technologies, giving your customers a pleasant time on your site, turning them into repeat vistors.</p>
        </div>
        <div class="card">
          <h3>Marketing</h3>
          <div v-html="require('../../assets/svg/marketing.svg?include')" class="svg" />
          <p><span class="location">{{ $route.params.id }}</span> is a competitive area. You need a bullet-proof marketing plan to succeed and grow. We can help with planning and implenetation of any marketing strategy including social media, newsletters, and Search Engine Optimisation. Investing in a good marketing strategy can lead to a long-term revenue increase month-on-month.</p>
        </div>
        <div class="card">
          <h3>Content Creation</h3>
          <div v-html="require('../../assets/svg/content-creation.svg?include')" class="svg" />
          <p>Often, you may need content for your business. It may come in the form of a professional blog post, or video. Content creation goes hand in hand with our marketing and web services, so it makes sense for us to provide this as well. We have a team of professionals local to <span class="location">{{ $route.params.id }}</span> that can help with any content creation demands.</p>
        </div>
      </div>
    </section>
    -->
  </div>
</template>

<script>
import Header from '../../components/header'

export default {
  components: {
    Header
  },
  methods: {
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  head () {
    return {
      title: 'Creative Agency in ' + this.capitalize(this.$route.params.id),
      meta: [
        { hid: 'description', name: 'description', content: 'We are a creative agency based in Royston but with ties to ' + this.capitalize(this.$route.params.id) + ' specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We work in ' + this.$route.params.id + ' and surrounding areas.' },
        { hid: 'og:title', property: 'og:title', content: 'Creative Agency in ' + this.capitalize(this.$route.params.id) },
        { hid: 'og:description', property: 'og:description', content: 'We are a creative agency based in Royston but with ties to ' + this.capitalize(this.$route.params.id) + ' specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We work in ' + this.$route.params.id + ' and surrounding areas.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Creative Agency in ' + this.capitalize(this.$route.params.id) },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We are a creative agency based in Royston but with ties to ' + this.capitalize(this.$route.params.id) + ' specialising in website design and development. We’re a fairly new company built from the ground up to help you grow. We work in ' + this.$route.params.id + ' and surrounding areas.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/locations/' + this.$route.params.id + '/' }
      ]
    }
  }
}
</script>
