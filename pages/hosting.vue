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
        <h1>Ultra-fast Hosting</h1>
        <img src="../assets/img/lighthouse.jpg" width="520" height="294" alt="Lighthouse Test">
        <p class="desc">
          Your website needs a home and we're happy to house it regardless of who built it. Below is an outline of our pricing for different plans. We're able to offer free Jamstack hosting thanks to <a href="https://netlify.com">Netlify</a>. If you want results like these then be sure to choose us for all your hosting and website needs.
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
              Jamstack Hosting
            </h4>
            <h3>
              FREE*
            </h3>
            <ul>
              <li>
                <strong>Near limitless storage</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Includes all of the code used to run your site as well as content such as photos and videos</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>Near limitless network transfer</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How much data is transferred to your users when they visit your site</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>No monthly visitor cap</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How many users visit your site in a month</span>
                  </template>
                </v-popover>
              </li>
              <li>
                HTTP/2
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Numerous benefits over HTTP/1.1 including the ability to download multiple files at the same time</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Brotli Compression
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Latest compression algorithm reducing the size of the website, improving load time</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Site caching and optimization
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Improves load time which means happier users and better SEO</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Content Delivery Network (<abbr>CDN</abbr>)
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Caches your website around the globe to improve load time</span>
                  </template>
                </v-popover>
              </li>
            </ul>
            <p class="terms">
              <strong>* Free with any WordPress hosting plan otherwise £5/month</strong>
            </p>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .25s">
          <div class="card--inner">
            <h4 class="title">
              Starter WordPress Hosting
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="one">
                  £100/year <span>(SAVE £20)</span>
                </h3>
                <h3 v-else key="two">
                  £10/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                <strong>5GB SSD storage</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Includes all of the code used to run your site as well as content such as photos and videos</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>5GB network transfer</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How much data is transferred to your users when they visit your site</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>5k monthly visitor cap</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How many users visit your site in a month</span>
                  </template>
                </v-popover>
              </li>
              <li>
                1 WordPress install
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>You will need to purchase seperate hosting plans for each site you own</span>
                  </template>
                </v-popover>
              </li>
              <li>
                98% Uptime <nuxt-link to="/legal/service-level-agreement">
                  SLA
                </nuxt-link> with performance monitoring
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Your website will be available for viewers almost all of the time. There may be very minor outages</span>
                  </template>
                </v-popover>
              </li>
              <li>
                PHP 7.4
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Latest version of PHP, the language WordPress uses</span>
                  </template>
                </v-popover>
              </li>
              <li>
                HTTP/3
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Cutting edge version of HTTP which uses QUIC as it's engine</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Brotli Compression
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Latest compression algorithm reducing the size of the website, improving load time</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Caches your website around the globe to improve load time</span>
                  </template>
                </v-popover>
              </li>
              <li><strong>WordPress Maintenance (See below)</strong></li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .5s">
          <div class="card--inner">
            <h4 class="title">
              Advanced WordPress Hosting
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="three">
                  £150/year <span>(SAVE £60)</span>
                </h3>
                <h3 v-else key="four">
                  £15/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                <strong>Near limitless SSD storage</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Includes all of the code used to run your site as well as content such as photos and videos</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>Near limitless network transfer</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How much data is transferred to your users when they visit your site</span>
                  </template>
                </v-popover>
              </li>
              <li>
                <strong>No monthly visitor cap</strong>
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>How many users visit your site in a month</span>
                  </template>
                </v-popover>
              </li>
              <li>
                1 WordPress install
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>You will need to purchase seperate hosting plans for each site you own</span>
                  </template>
                </v-popover>
              </li>
              <li>
                98% Uptime <nuxt-link to="/legal/service-level-agreement">
                  SLA
                </nuxt-link> with performance monitoring
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Your website will be available for viewers almost all of the time. There may be very minor outages</span>
                  </template>
                </v-popover>
              </li>
              <li>
                PHP 7.4
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Latest version of PHP, the language WordPress uses</span>
                  </template>
                </v-popover>
              </li>
              <li>
                HTTP/3
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Cutting edge version of HTTP which uses QUIC as it's engine</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Brotli Compression
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Latest compression algorithm reducing the size of the website, improving load time</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Caches your website around the globe to improve load time</span>
                  </template>
                </v-popover>
              </li>
              <li><strong>WordPress Maintenance (See below)</strong></li>
              <li><strong>WordPress Backups (See below)</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="maxWidth">
      <h2>WordPress Help</h2>
      <p class="desc">
        WordPress is a complex program and needs constant management to function properly. Let us take care of the hassle by backing up, securing, and optimising your WordPress install.
      </p>
      <div class="grid column three">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              Maintenance
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="five">
                  £50/year <span>(SAVE £10)</span>
                </h3>
                <h3 v-else key="six">
                  £5/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                24/7 WordPress Security
                <ul>
                  <li>
                    Distributed Denial of Service (<abbr>DDoS</abbr>) attack Protection
                    <v-popover placement="top">
                      <font-awesome-icon icon="question" />
                      <template slot="popover">
                        <span>Type of attack designed to overwhelm a server and cause it to shut down, making your website unavailable</span>
                      </template>
                    </v-popover>
                  </li>
                  <li>
                    Brute Force Protection
                    <v-popover placement="top">
                      <font-awesome-icon icon="question" />
                      <template slot="popover">
                        <span>A type of attack designed to gain your login credentials by guessing all variations</span>
                      </template>
                    </v-popover>
                  </li>
                  <li>
                    Automatic Malware Scans
                    <v-popover placement="top">
                      <font-awesome-icon icon="question" />
                      <template slot="popover">
                        <span>WordPress can be vulnerable to Malware. We put preventative measures in place but also have scans to tell us if a site has been infected</span>
                      </template>
                    </v-popover>
                  </li>
                  <li>
                    Web Application Firewall
                    <v-popover placement="top">
                      <font-awesome-icon icon="question" />
                      <template slot="popover">
                        <span>A firewall stops malicious users from accessing a site</span>
                      </template>
                    </v-popover>
                  </li>
                </ul>
              </li>
              <li>
                Site caching and optimization
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Improves load time which means happier users and better SEO</span>
                  </template>
                </v-popover>
              </li>
              <li class="overflow">
                WordPress Core, Plugin, and Theme updates
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>Keeping everything up-to-date ensures security issues are fixed and your site is running as fast as possible</span>
                  </template>
                </v-popover>
              </li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .25s">
          <div class="card--inner">
            <h4 class="title">
              Backups
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="seven">
                  £50/year <span>(SAVE £10)</span>
                </h3>
                <h3 v-else>
                  £5/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>Weekly automatic backups</li>
              <li>Stored on external server for optimum security</li>
              <li>Encrypted for security</li>
              <li>Free restore service</li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .5s">
          <div class="card--inner">
            <h4 class="title">
              Hosting Transfer
            </h4>
            <div class="price">
              <h3>
                £150
              </h3>
            </div>
            <ul>
              <li>Transfer of WordPress site to new hosting</li>
              <li>Minimal downtime</li>
              <li>Completed within 48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="maxWidth">
      <h2>Domains</h2>
      <p class="desc" style="margin-bottom: 1rem">
        <strong>1 Free Wildcard SSL Certificate included</strong>
      </p>
      <p class="desc">
        We continually monitor the market to find the best deals so that we can pass on these savings to you. This will be updated in your yearly domain invoice.
      </p>
      <div class="grid column three">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              .com
            </h4>
            <div class="price">
              <h3>
                £10/year
              </h3>
            </div>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .25s">
          <div class="card--inner">
            <h4 class="title">
              .co.uk
            </h4>
            <div class="price">
              <h3>
                £7.50/year
              </h3>
            </div>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .5s">
          <div class="card--inner">
            <h4 class="title">
              All other domains
            </h4>
            <div class="price">
              <h3>
                £POA
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="maxWidth">
      <h2>Emails</h2>
      <p class="desc">
        We are able to offer up to 10 forwarding addresses for free with the purchase of any hosting plan.
      </p>
      <div class="grid column three">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              1 G-Suite User
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="eight">
                  £80/year <span>(SAVE £10)</span>
                </h3>
                <h3 v-else>
                  £7.50/month
                </h3>
              </transition>
            </div>
            <ul>
              <li class="overflow">
                What is a user?
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>A user is defined as one personalised email address (you@yourcompany). Group email aliases such as sales@yourcompany and support@yourcompany are included in pricing and don't count as additional users.</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Gmail Business Email
              </li>
              <li>
                Meet Video and voice conferencing
              </li>
              <li>
                Chat Team messaging
              </li>
              <li>
                Calendar Shared calendars
              </li>
              <li>
                Drive <strong>30 GB</strong> cloud storage
              </li>
              <li>
                Docs, Sheets, Slides, Forms, Sites, Keep
              </li>
            </ul>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden" style="--delay: .5s">
          <div class="card--inner">
            <h4 class="title">
              1 G-Suite Advanced User
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="eight">
                  £150/year <span>(SAVE £30)</span>
                </h3>
                <h3 v-else>
                  £15/month
                </h3>
              </transition>
            </div>
            <ul>
              <li class="overflow">
                What is a user?
                <v-popover placement="top">
                  <font-awesome-icon icon="question" />
                  <template slot="popover">
                    <span>A user is defined as one personalised email address (you@yourcompany). Group email aliases such as sales@yourcompany and support@yourcompany are included in pricing and don't count as additional users.</span>
                  </template>
                </v-popover>
              </li>
              <li>
                Gmail Business Email
              </li>
              <li>
                Meet Video and voice conferencing
              </li>
              <li>
                Chat Team messaging
              </li>
              <li>
                Calendar Shared calendars
              </li>
              <li>
                Drive <strong>1 TB</strong> cloud storage
              </li>
              <li>
                Docs, Sheets, Slides, Forms, Sites, Keep
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
      yearly: true
    }
  },
  head () {
    return {
      title: 'Hosting',
      meta: [
        { hid: 'description', name: 'description', content: 'Your website needs a home and we\'re happy to house it whether we built it or not.' },
        { hid: 'og:title', property: 'og:title', content: 'Hosting' },
        { hid: 'og:description', property: 'og:description', content: 'Your website needs a home and we\'re happy to house it whether we built it or not.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Hosting' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Your website needs a home and we\'re happy to house it whether we built it or not.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/hosting/' }
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
              "name": "Hosting",
              "item": "https://galexia.agency/hosting/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
