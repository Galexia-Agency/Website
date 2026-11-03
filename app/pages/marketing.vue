<style scoped>
  .card:hover {
    color: inherit;
    background-color: inherit
  }
  .card:hover h3 {
    color: var(--primaryColor)
  }
  .card {
    display: grid;
    grid-template-rows: max-content 250px 1fr
  }
  .card .svg {
    width: 75%;
    height: auto;
    margin: auto
  }
  .card h3 {
    margin-bottom: 1.5rem;
    text-align: center
  }

  /* The old image component took width="100%" height="auto"; SiteImage needs a pixel width for resizing */
  .svg :deep(img) {
    width: 100%;
    height: auto
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
    <PageHeader
      title="Marketing solutions to help your business go from zero to <i>hero</i>"
      desc="However you wish to pursue your business marketing is vital in finding and retaining customers. We mould a marketing strategy around your business. Our team of professionals will recommend the solution that gives you the most return on investment. We try and understand your target audience and adapt the marketing strategy, putting your clients first. If you’re a clothing brand targeting teens then social media marketing will be best for you. Similarly, if you’re a home-improvements business, PPC advertising might be more suitable."
      :link="{location: '/contact/', text: 'Find out more'}"
    />
    <section class="white">
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('search')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>SEO</h3>
          <p class="text--normal">
            Your website is your online store-front. Unfortunately, you can't attract customers by having a pretty shop window that they see whilst walking down the street. You have to rank highly in Search Engine Results Pages (SERPs). Only then will people find your website and learn more about you. We can help with getting you higher up in the SERPs, thus increasing traffic to your site, and potential revenue.
          </p>
          <NuxtLink class="button" to="/seo/">
            Ready to rank higher?
          </NuxtLink>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Advertising</h3>
          <p class="text--normal">
            Advertising can offer great return on investment. We are versed in many advertising platforms such as Google Ads and Facebook. Pay-per-click advertising can be a great way to jump-start a business, but we recommend investing in longer term solutions such as building a great social presence and optimising your site for search engines. As with our other services with consistently monitor the performance of the campaign in order to make it as cost-effective as possible for you.
          </p>
          <NuxtLink class="button" to="/contact/">
            Get started advertising
          </NuxtLink>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('advertising')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('social')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>Social Media</h3>
          <p class="text--normal">
            Utilizing social media marketing correctly can be a great tool for increasing the reach of your business thus attracting more leads. These leads can turn into customers and generate more profit for you, helping you reinvest in marketing strategies in turn getting more clients and expanding your business. We deliver engaging content to your users and monitor you social media performance, constantly tailoring our approach in order to achieve the best retention.
          </p>
          <NuxtLink class="button" to="/contact/">
            Spread the word
          </NuxtLink>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Emails / Newsletters</h3>
          <p class="text--normal">
            Creating an email list can be a great way to engage with potential customers. What do you do with all those emails? Why not have us deliver a tailored newsletter campaign to your email list encouraging them to engage with your brand and keeping them up-to-date on your current activities. If a customer trusts a brand, they’re more likely to use it in the future. We take great care in adhering to all local laws regarding emails including GDPR. Did you also know we're Mailchimp certified, making us better equipped to help you.
          </p>
          <NuxtLink class="button" to="/contact/">
            Create a campaign
          </NuxtLink>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg">
          <SiteImage
            src="/img/mailchimp_certified.jpg"
            width="1000"
            alt="Mailchimp Certified"
          />
        </div>
      </div>
    </section>
    <section class="white">
      <h2>Content Creation</h2>
      <div class="grid column maxWidth four">
        <div v-infocus="'showElement'" class="card hidden">
          <h3>Photography</h3>
          <div class="svg" v-html="inlineSvg('photography')" />
          <p class="text--normal">
            Photos can make or break a brand. Having good photos are vital to all kinds of content marketing, including social media, and websites. We have a team of photographers versed in everything from events to products.
          </p>
        </div>
        <div
          v-infocus="'showElement'"
          class="card hidden"
          style="--delay: .25s"
        >
          <h3>Videography</h3>
          <div class="svg" v-html="inlineSvg('videography')" />
          <p class="text--normal">
            We love watching great content. It’s a great way to engage with customers in the modern age. We pride ourselves in creating short clips for Instagram, longer clips for YouTube and everything in-between.
          </p>
        </div>
        <div
          v-infocus="'showElement'"
          class="card hidden"
          style="--delay: .5s"
        >
          <h3>Copy-writing</h3>
          <div class="svg" v-html="inlineSvg('writing')" />
          <p class="text--normal">
            Some people learn visually, some by reading. It’s best to have a mixture of both. Not to mention that good quality blogs are by far one of the best ways to improve search presence.
          </p>
        </div>
        <div
          v-infocus="'showElement'"
          class="card hidden"
          style="--delay: .75s"
        >
          <h3>Graphic Design</h3>

          <div class="svg" v-html="inlineSvg('design')" />
          <p class="text--normal">
            Design is everywhere: social media, websites, business cards, pamphlets, adverts. Our expert team can help your business stand out with tailor made graphics.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'Marketing',
  description: 'However you wish to pursue your business marketing is vital in finding and retaining customers.',
  path: '/marketing/',
  breadcrumb: [{ name: 'Marketing', item: 'https://galexia.agency/marketing/' }]
})

onMounted(() => {
  if (!('ontouchstart' in document.documentElement)) {
    const { $Ztextify } = useNuxtApp()
    $Ztextify('.header--inner h1 i', {
      depth: '10px',
      layers: 2,
      direction: 'forwards',
      event: 'pointer',
      eventRotation: '35deg'
    })
  }
})
</script>
