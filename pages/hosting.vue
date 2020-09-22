<style scoped>
  /* Toggle */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #CCCCCC;
    -webkit-transition: .4s;
    transition: .4s
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s
  }
  input:checked + .slider {
    background-color: #1A237E
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #1A237E
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px)
  }
  .slider.round {
    border-radius: 34px
  }
  .slider.round:before {
    border-radius: 50%
  }

  /* Page */
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
  li b {
    color: #1A237E
  }
  .title {
    font-size: 1.25rem
  }
  .desc {
    font-size: 1.2rem;
    line-height: 1.33;
    opacity: .9;
    max-width: 780px;
    text-align: center;
    margin: auto
  }
  .price {
    transition: .4s
  }
  .terms {
    font-size: .9rem;
    padding-left: 22px
  }
  #top {
    position: relative
  }
  .toggle {
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: grid;
    place-items: end
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

  @media (max-width: 900px) {
    .card {
      max-width: 600px
    }
    .grid.column.two .card:first-of-type, .grid.column.two .card:last-of-type {
      justify-self: center
    }
    .hosting--background {
      background-size: 75%
    }
    #top {
      display: grid
    }
    .toggle {
      position: relative;
      grid-row: 1;
      place-items: center;
      place-self: center;
      right: 0;
      top: 0
    }
    .desc {
      opacity: .95
    }
  }
</style>

<template>
  <div class="hosting white">
    <section>
      <div id="top" class="maxWidth">
        <h2>Ultra-fast Hosting</h2>
        <img src="../assets/img/lighthouse.jpg" width="520" height="294" alt="Lighthouse Test">
        <p class="desc">
          Your website needs a home and we're happy to house it whether we built it or not. Below is an outline of our pricing for different plans. We're able to offer free Jamstack hosting thanks to <a href="https://netlify.com">Netlify</a>. If you want results like these then be sure to choose us for all your hosting and website needs.
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
      <div class="grid column maxWidth three">
        <div class="card white">
          <div class="card--inner">
            <h4 class="title">
              Jamstack Hosting
            </h4>
            <h3>
              FREE*
            </h3>
            <ul>
              <li v-tooltip="'Includes all of the code used to run your site as well as content such as photos and videos'">
                <b>Near limitless storage</b>
              </li>
              <li v-tooltip="'How much data is transferred to your users when they visit your site'">
                <b>Near limitless network transfer</b>
              </li>
              <li v-tooltip="'How many users visit your site in a month'">
                <b>No monthly visitor cap</b>
              </li>
              <li v-tooltip="'Your website will be available for viewers almost all of the time. There may be very minor outages'">
                99.9% Uptime SLA with performance monitoring
              </li>
              <li v-tooltip="'Numerous benefits over HTTP/1.1 including the ability to download multiple files at the same time'">
                HTTP/2
              </li>
              <li v-tooltip="'Latest compression algorithm reducing the size of the website, improving load time'">
                Brotli Compression
              </li>
              <li v-tooltip="'Improves load time which means happier users and better SEO'">
                Site caching and optimization
              </li>
              <li v-tooltip="'Caches your website around the globe to improve load time'">
                Content Delivery Network (<abbr>CDN</abbr>)
              </li>
              <li v-tooltip="'Google Search Console improves your control over how Google indexes your site. It also alerts you to any issues that may be affecting your website in search results'">
                Google Search Console and SEO monitoring
              </li>
            </ul>
            <p class="terms">
              <b>* Free with any WordPress hosting plan otherwise £5/month</b>
            </p>
          </div>
        </div>
        <div class="card white">
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
              <li v-tooltip="'Includes all of the code used to run your site as well as content such as photos and videos'">
                <b>5GB SSD storage</b>
              </li>
              <li v-tooltip="'How much data is transferred to your users when they visit your site'">
                <b>5GB transfer</b>
              </li>
              <li v-tooltip="'How many users visit your site in a month'">
                <b>5k monthly visitor cap</b>
              </li>
              <li v-tooltip="'You will need to purchase seperate hosting plans for each site you own'">
                1 WordPress install
              </li>
              <li v-tooltip="'Your website will be available for viewers almost all of the time. There may be very minor outages'">
                98% Uptime SLA with performance monitoring
              </li>
              <li v-tooltip="'Latest version of PHP, the language WordPress uses'">
                PHP 7.4
              </li>
              <li v-tooltip="'Cutting edge version of HTTP which uses QUIC as it\'s engine'">
                HTTP/3
              </li>
              <li v-tooltip="'Latest compression algorithm reducing the size of the website, improving load time'">
                Brotli Compression
              </li>
              <li v-tooltip="'Caches your website around the globe to improve load time'">
                Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare
              </li>
              <li><b>WordPress Maintenance (See below)</b></li>
            </ul>
          </div>
        </div>
        <div class="card white">
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
              <li v-tooltip="'Includes all of the code used to run your site as well as content such as photos and videos'">
                <b>Near limitless SSD storage</b>
              </li>
              <li v-tooltip="'How much data is transferred to your users when they visit your site'">
                <b>Near limitless network transfer</b>
              </li>
              <li v-tooltip="'How many users visit your site in a month'">
                <b>No monthly visitor cap</b>
              </li>
              <li v-tooltip="'You will need to purchase seperate hosting plans for each site you own'">
                1 WordPress install
              </li>
              <li v-tooltip="'Your website will be available for viewers almost all of the time. There may be very minor outages'">
                98% Uptime SLA with performance monitoring
              </li>
              <li v-tooltip="'Latest version of PHP, the language WordPress uses'">
                PHP 7.4
              </li>
              <li v-tooltip="'Cutting edge version of HTTP which uses QUIC as it\'s engine'">
                HTTP/3
              </li>
              <li v-tooltip="'Latest compression algorithm reducing the size of the website, improving load time'">
                Brotli Compression
              </li>
              <li v-tooltip="'Caches your website around the globe to improve load time'">
                Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare
              </li>
              <li><b>WordPress Maintenance (See below)</b></li>
              <li><b>WordPress Backups (See below)</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>WordPress Help</h2>
      <p class="desc">
        WordPress is a complex program and needs constant management to function properly. Let us take care of the hassle by backing up, securing, and optimising your WordPress install.
      </p>
      <div class="grid column maxWidth three">
        <div class="card white">
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
                  <li v-tooltip="'Type of attack designed to overwhelm a server and cause it to shut down, making your website unavailable'">
                    Distributed Denial of Service (<abbr>DDoS</abbr>) attack Protection
                  </li>
                  <li v-tooltip="'A type of attack designed to gain your login credentials by guessing all variations'">
                    Brute Force Protection
                  </li>
                  <li v-tooltip="'WordPress can be vulnerable to Malware. We put preventative measures in place but also have scans to tell us if a site has been infected'">
                    Automatic Malware Scans
                  </li>
                  <li v-tooltip="'A firewall stops malicious users from accessing a site'">
                    Web Application Firewall
                  </li>
                </ul>
              </li>
              <li v-tooltip="'Improves load time which means happier users and better SEO'">
                Site caching and optimization
              </li>
              <li v-tooltip="'Keeping everything up-to-date ensures security issues are fixed and your site is running as fast as possible'">
                WordPress Core, Plugin, and Theme updates
              </li>
              <li v-tooltip="'Google Search Console improves your control over how Google indexes your site. It also alerts you to any issues that may be affecting your website in search results'">
                Google Search Console and SEO monitoring
              </li>
            </ul>
          </div>
        </div>
        <div class="card white">
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
        <div class="card white">
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
    <section>
      <h2>Domains</h2>
      <p class="desc" style="margin-bottom: 1rem">
        <b>1 Free Wildcard SSL Certificate included</b>
      </p>
      <p class="desc">
        We continually monitor the market to find the best deals so that we can pass on these savings to you. This will be updated in your yearly domain invoice.
      </p>
      <div class="grid column maxWidth three">
        <div class="card white">
          <div class="card--inner">
            <h4 class="title">
              .com
            </h4>
            <div class="price">
              <h3>
                £7.50/year
              </h3>
            </div>
          </div>
        </div>
        <div class="card white">
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
        <div class="card white">
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
    <section>
      <h2>Emails</h2>
      <p class="desc">
        We offer a range of email services provided by both G-Suite and Microsoft 365.
      </p>
      <div class="grid column maxWidth three">
        <div class="card white">
          <div class="card--inner">
            <h4 class="title">
              G-Suite
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="eight">
                  £72/year
                </h3>
                <h3 v-else>
                  £6/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>
                Gmail
              </li>
              <li>
                Meet
              </li>
              <li>
                Chat
              </li>
              <li>
                Calendar
              </li>
              <li>
                Drive <b>30 GB</b> cloud storage
              </li>
              <li>
                Docs
              </li>
              <li>
                Sheets
              </li>
              <li>
                Slides
              </li>
              <li>
                Forms
              </li>
              <li>
                Sites
              </li>
              <li>
                Keep
              </li>
              <li>
                Currents
              </li>
            </ul>
          </div>
        </div>
        <div class="card white">
          <div class="card--inner">
            <h4 class="title">
              Microsoft 365 Basic
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="eleven">
                  £72/year <span>(SAVE £12)</span>
                </h3>
                <h3 v-else>
                  £7/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>Outlook Online</li>
              <li>Word Online</li>
              <li>Excel Online</li>
              <li>PowerPoint Online</li>
              <li>Exchange</li>
              <li>OneDrive <b>1 TB</b> Cloud Storage</li>
              <li>SharePoint</li>
              <li>Teams</li>
            </ul>
          </div>
        </div>
        <div class="card white">
          <div class="card--inner">
            <h4 class="title">
              Microsoft 365 Standard
            </h4>
            <div class="price">
              <transition name="fade" appear mode="out-in">
                <h3 v-if="yearly" key="twelve">
                  £168/year <span>(SAVE £24)</span>
                </h3>
                <h3 v-else>
                  £16/month
                </h3>
              </transition>
            </div>
            <ul>
              <li>Outlook</li>
              <li>Word</li>
              <li>Excel</li>
              <li>PowerPoint</li>
              <li>Publisher</li>
              <li>Access</li>
              <li>Exchange</li>
              <li>OneDrive <b>1 TB</b> Cloud Storage</li>
              <li>SharePoint</li>
              <li>Teams</li>
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
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Hosting'
    this.$parent.$parent.metaHelper.description = 'Your website needs a home and we\'re happy to house it whether we built it or not.'
    this.$parent.$parent.metaHelper.url = 'https://galexia.agency/hosting/'
  }
}
</script>
