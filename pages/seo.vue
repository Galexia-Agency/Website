<style scoped>
  /* Page */
  h1 {
    text-align: center
  }
  .grid.maxWidth {
    padding-bottom: 0
  }
  section:last-of-type {
    padding-bottom: 4rem
  }
  .grid.column.two .card:first-of-type {
    justify-self: end
  }
  .grid.column.two .card:last-of-type {
    justify-self: start
  }
  .card {
    max-width: 450px;
    width: 100%
  }
  .card h4 {
    text-align: center
  }
  .card--inner {
    grid-gap: 2rem
  }
  li {
    line-height: 1.5
  }
  li b, li strong {
    color: var(--primaryColor)
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  img {
    margin: 0 auto 1rem;
    display: block;
    max-width: 100%;
    height: auto
  }
  .overflow {
    max-width: 90%
  }

  @media (max-width: 900px) {
    .card {
      max-width: 600px
    }
    .grid.column.two .card:first-of-type, .grid.column.two .card:last-of-type {
      justify-self: center
    }
  }
</style>

<template>
  <div class="hosting white">
    <section class="maxWidth">
      <div id="top">
        <h1>Search Engine Optimisation</h1>
        <img src="../assets/img/searchconsole.png" width="520" height="294" alt="Google Search Console Screenshot">
        <p class="desc">
          Your website is your online store-front. Unfortunately, you can't attract customers by having a pretty shop window that they see whilst walking down the street. You have to rank highly in Search Engine Results Pages (SERPs). Only then will people find your website and learn more about you. We can help with getting you higher up in the SERPs, thus increasing traffic to your site, and potential revenue.
        </p>
        <div class="toggle">
          <h4 id="monthly">
            Monthly/Yearly
          </h4>
          <label class="switch">
            <input v-model="yearly" type="checkbox" aria-labelledby="monthly">
            <span class="slider round" />
          </label>
        </div>
      </div>
      <div class="grid column three">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              Basic SEO
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="one">
                  £500/year <span>(SAVE £100)</span>
                </h3>
                <h3 v-else key="two">
                  £50/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                <strong>5</strong> Targetted Keywords
              </li>
              <li>
                Up to <strong>5</strong> new pages/posts/products title and description optimisation
              </li>
              <li>
                <strong>Basic</strong> SEO Monthly Report covering Average CTR and Position, and Total Impressions and Clicks
              </li>
              <li>
                Monitoring of up to <strong>10</strong> Keywords
              </li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .25s">
          <div class="card--inner">
            <h4 class="title">
              Standard SEO
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="one">
                  £1000/year <span>(SAVE £200)</span>
                </h3>
                <h3 v-else key="two">
                  £100/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                <strong>10</strong> Targetted Keywords
              </li>
              <li>
                Up to <strong>10</strong> new pages/posts/products title and description optimisation
              </li>
              <li>
                <strong>In-Depth</strong> SEO Monthly Report covering site performance, and site health
              </li>
              <li>
                Technical SEO including Schema markup, OG tags, link structure, and redirects
              </li>
              <li>
                Monitoring of up to <strong>25</strong> Keywords
              </li>
              <li>
                Mobile/Responsive site optimisation
              </li>
              <li>
                Continuing to fix <strong>basic</strong> crawlabilty issues such as pages marked as noindex
              </li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .5s">
          <div class="card--inner">
            <h4 class="title">
              Advanced SEO
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="three">
                  £2200/year <span>(SAVE £200)</span>
                </h3>
                <h3 v-else key="four">
                  £200/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                <strong>25</strong> Targetted Keywords
              </li>
              <li>
                Up to <strong>25</strong> new pages/posts/products title and description optimisation
              </li>
              <li>
                Advice on new content structure and purpose in relation to goals
              </li>
              <li>
                <strong>In-Depth</strong> SEO Monthly Report covering site performance, site health, and competitor analysis
              </li>
              <li>
                Technical SEO including Schema markup, OG tags, link structure, and redirects
              </li>
              <li>
                Monitoring up to <strong>100</strong> Keywords
              </li>
              <li>
                Mobile/Responsive site optimisation
              </li>
              <li>
                Continuing to fix <strong>all</strong> crawlabilty issues as identified in Google Search Console
              </li>
              <li>
                Technical fault finding and resolution in relation to SEO
              </li>
              <li>
                Conversion Rate Optimisation
              </li>
              <li>
                Google My Business and Bing Places for Business monitoring and optimisation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yearly: false
    }
  },
  head () {
    return {
      title: 'SEO',
      meta: [
        { hid: 'description', name: 'description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'og:title', property: 'og:title', content: 'SEO' },
        { hid: 'og:description', property: 'og:description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'SEO' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/seo/' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "SEO",
              "item": "https://galexia.agency/seo/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
