<style scoped>
  .card:hover {
    background-color: inherit;
    color: inherit
  }
  .card:hover h3 {
    color: #1A237E
  }
  .card {
    display: grid;
    grid-template-rows: max-content 250px 1fr
  }
  .card .svg {
    margin: auto;
    height: auto;
    width: 75%
  }
  .card h3 {
    margin-bottom: 1.5rem;
    text-align: center
  }

  @media (max-width: 768px) {
    .card {
      grid-template-rows: auto auto auto
    }
    .card .svg {
      max-width: 300px
    }
  }
  @media (max-width: 580px) {
    .grid.column.maxWidth.four {
      grid-template-columns: auto
    }
  }
</style>

<template>
  <div id="web">
    <Header
      title="Marketing solutions to help your business go from zero to <i>hero</i>"
      desc="However you wish to pursue your business marketing is vital in finding and retaining customers. We mould a marketing strategy around your business. Our team of professionals will recommend the solution that gives you the most return on investment. We try and understand your target audience and adapt the marketing strategy, putting your clients first. If you’re a clothing brand targeting teens then social media marketing will be best for you. Similarly, if you’re a home-improvements business, PPC advertising might be more suitable."
    />
    <section class="white">
      <div class="grid left maxWidth">
        <div>
          <h3>Advertising</h3>
          <p>Advertising can offer great return on investment. We are versed in many advertising platforms such as Google Ads and Facebook. Pay-per-click advertising can be a great way to jump-start a business, but we recommend investing in longer term solutions such as building a great social presence and optimising your site for search engines. As with our other services with consistently monitor the performance of the campaign in order to make it as cost-effective as possible for you.</p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/advertising.svg?include')" class="svg" />
      </div>
      <div class="grid right maxWidth">
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/social.svg?include')" class="svg" />
        <div>
          <h3>Social Media</h3>
          <p>Utilizing social media marketing correctly can be a great tool for increasing the reach of your business thus attracting more leads. These leads can turn into customers and generate more profit for you, helping you reinvest in marketing strategies in turn getting more clients and expanding your business. We deliver engaging content to your users and monitor you social media performance, constantly tailoring our approach in order to achieve the best retention.</p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Emails / Newsletters</h3>
          <p>Creating an email list can be a great way to engage with potential customers. What do you do with all those emails? Why not have us deliver a tailored newsletter campaign to your email list encouraging them to engage with your brand and keeping them up-to-date on your current activities. If a customer trusts a brand, they’re more likely to use it in the future. We take great care in adhering to all local laws regarding emails including GDPR.</p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/email.svg?include')" class="svg" />
      </div>
    </section>
    <section class="white">
      <h2>Content Creation</h2>
      <div class="grid column maxWidth four">
        <div class="card">
          <h3>Photography</h3>
          <!--eslint-disable-next-line-->
          <div v-html="require('../assets/svg/photography.svg?include')" class="svg" />
          <p>Photos can make or break a brand. Having good photos are vital to all kinds of content marketing, including social media, and websites. We have a team of photographers versed in everything from events to products.</p>
        </div>
        <div class="card">
          <h3>Videography</h3>
          <!--eslint-disable-next-line-->
          <div v-html="require('../assets/svg/videography.svg?include')" class="svg" />
          <p>We love watching great content. It’s a great way to engage with customers in the modern age. We pride ourselves in creating short clips for Instagram, longer clips for YouTube and everything in-between.</p>
        </div>
        <div class="card">
          <h3>Copy-writing</h3>
          <!--eslint-disable-next-line-->
          <div v-html="require('../assets/svg/writing.svg?include')" class="svg" />
          <p>Some people learn visually, some by reading. It’s best to have a mixture of both. Not to mention that good quality blogs are by far one of the best ways to improve search presence.</p>
        </div>
        <div class="card">
          <h3>Graphic Design</h3>
          <!--eslint-disable-next-line-->
          <div v-html="require('../assets/svg/design.svg?include')" class="svg" />
          <p>Design is everywhere: social media, websites, business cards, pamphlets, adverts. Our expert team can help your business stand out with tailor made graphics.</p>
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
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Marketing'
    this.$parent.$parent.metaHelper.description = 'However you wish to pursue your business marketing is vital in finding and retaining customers.'
    this.$parent.$parent.metaHelper.url = 'https://galexia.agency/marketing/'
  },
  mounted () {
    // eslint-disable-next-line
    const ztxt = new Ztextify('.header--inner h1 i', {
      depth: '10px',
      layers: 2,
      direction: 'forwards',
      event: 'pointer',
      eventRotation: '35deg'
    })
  }
}
</script>
