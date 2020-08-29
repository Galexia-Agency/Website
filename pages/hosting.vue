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
  .hosting--background {
    background-image: url('../assets/svg/hosting_background.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: bottom right
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
  li b {
    color: #1A237E
  }
  .title {
    font-size: 1.25rem
  }
  .desc {
    max-width: 600px;
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
  }
</style>

<template>
  <div class="hosting white">
    <div class="hosting--background">
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
                <li><b>Near limitless storage</b></li>
                <li><b>Near limitless network transfer</b></li>
                <li><b>No monthly visitor cap</b></li>
                <li>Free SSL Certificate</li>
                <li>99.9% Uptime SLA with performance monitoring</li>
                <li>Site caching and optimization</li>
                <li>Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare</li>
                <li>Google Search Console and SEO monitoring</li>
              </ul>
              <p class="terms">
                <b>* Free with any WordPress hosting plan</b>
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
                <li><b>5GB storage</b></li>
                <li><b>5GB transfer</b></li>
                <li><b>5k monthly visitor cap</b></li>
                <li>1 WordPress install</li>
                <li>Free SSL Certificate</li>
                <li>99.9% Uptime SLA with performance monitoring</li>
                <li>Maintenance Package</li>
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
                    £150/year <span>(SAVE £30)</span>
                  </h3>
                  <h3 v-else key="four">
                    £15/month
                  </h3>
                </transition>
              </div>
              <ul>
                <li><b>Near limitless storage</b></li>
                <li><b>Near limitless network transfer</b></li>
                <li><b>No monthly visitor cap</b></li>
                <li>1 WordPress install</li>
                <li>Free SSL Certificate</li>
                <li>99.9% Uptime SLA with performance monitoring</li>
                <li>Maintenance Package</li>
                <li><b>Backup Package</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>WordPress Maintenance and Backups</h2>
        <p class="desc">
          WordPress is a complex program and needs constant management to function properly. Let us take care of the hassle by backing up, securing, and optimising your WordPress install.
        </p>
        <div class="grid column maxWidth two">
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
                <li>24/7 WordPress Security</li>
                <li>Site caching and optimization</li>
                <li>Content Delivery Network (<abbr>CDN</abbr>) powered by CloudFlare</li>
                <li>WordPress Core, Plugin, and theme updates</li>
                <li>Google Search Console and SEO monitoring</li>
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
                <li>Weekly backups</li>
                <li>Backups located on external server for optimum security</li>
                <li>Free restore service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Domains</h2>
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
    </div>
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
    this.$parent.$parent.metaHelper.description = 'Is your website down? Are you running into random errors? Are you struggling dealing with your hosting company? We can help. We provide affordable support to help you get your website back on track. We put your business first. We know that a website is often the first port of call for customers and if your website\'s down or not perfomring properly this can leave many customers unhappy. We\'ll drop everything and help you resolve any issues as quickly as possible.'
  }
}
</script>
