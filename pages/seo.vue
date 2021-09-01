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
      <div class="grid column two">
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
                GDPR Compliant Google Analytics Set Up
              </li>
              <li>
                Google Search Console Set Up
              </li>
              <li>
                Up to <strong>10</strong> new pages/posts/products title and description optimisation
              </li>
              <li>
                <strong>10</strong> Targetted Keywords
              </li>
              <li>
                Monitoring up to <strong>25</strong> Keywords
              </li>
              <li>
                Clear milestone roadmap for your SEO goals
              </li>
              <li>
                Advice on new content structure and purpose in relation to goals
              </li>
              <li>
                Google My Business and Bing Places for Business monitoring and optimisation
              </li>
              <li>
                1 High Quality ~750 word blog post
              </li>
              <li>
                <strong>In-Depth</strong> Monthly SEO Report covering site performance, site health, and competitor analysis
              </li>
              <li>
                Technical SEO
                <ul>
                  <li>
                    Schema markup
                  <li>
                  <li>
                    Meta tags
                  </li>
                  <li>
                    Search Engine Friendly Sitemap Creation
                  </li>
                  <li>
                    Robots.txt Creation
                  </li>
                  <li>
                    Link structure
                  </li>
                  <li>
                    URL Format
                  </li>
                  <li>
                    Website redirects
                  </li>
                  <li>
                    Mobile/Responsive site optimisation
                  </li>
                  <li>
                    Continuing to fix <strong>basic</strong> crawlabilty issues as identified in Google Search Console
                  </li>
                  <li>
                    Technical fault finding and resolution in relation to SEO
                  </li>
                </ul>
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
                GDPR Compliant Google Analytics Set Up
              </li>
              <li>
                Google Search Console Set Up
              </li>
              <li>
                Up to <strong>25</strong> new pages/posts/products title, description, <strong>and image</strong> optimisation
              </li>
              <li>
                <strong>25</strong> Targetted Keywords
              </li>
              <li>
                Monitoring up to <strong>100</strong> Keywords
              </li>
              <li>
                Clear milestone roadmap for your SEO goals
              </li>
              <li>
                Advice on new content structure and purpose in relation to goals
              </li>
              <li>
                Google My Business and Bing Places for Business monitoring and optimisation
              </li>
              <li>
                1 High Quality ~750 word blog post
              </li>
              <li>
                <strong>In-Depth</strong> Monthly SEO Report covering site performance, site health, and competitor analysis
              </li>
              <li>
                Technical SEO
                <ul>
                  <li>
                    <a href="https://galexia.agency/hosting/">
                      <strong>Free</strong> WordPress Maintenance Plan
                    </a>
                  </li>
                  <li>
                    Schema markup
                  <li>
                  <li>
                    Meta tags
                  </li>
                  <li>
                    Search Engine Friendly Sitemap Creation
                  </li>
                  <li>
                    Robots.txt Creation
                  </li>
                  <li>
                    Link structure
                  </li>
                  <li>
                    URL Format
                  </li>
                  <li>
                    Website redirects
                  </li>
                  <li>
                    Mobile/Responsive site optimisation
                  </li>
                  <li>
                    Continuing to fix <strong>basic</strong> crawlabilty issues as identified in Google Search Console
                  </li>
                  <li>
                    Technical fault finding and resolution in relation to SEO
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid column two">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              Flexible Package
            </h4>
            <div class="price">
              <h3>
                Price tailored to you
              </h3>
            </div>
            <p>
              A flexible SEO package for small businesses needs, built to fit your budget
            </p>
            <p>
              Flexible monthly action plans give you the ability to scale your website presence at your own pace, while still accomplishing your SEO goals. 
            </p>
            <p>
              To help you get a better idea of how monthly SEO services work, one month the focus might be on Image SEO optimization, whereas the next month the focus might be on improving backlinks.
            </p>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              High Quality ~750 word Blog Post
            </h4>
            <div class="price">
              <h3>
                £50
              </h3>
            </div>
            <p>
              We'll spend the time getting aquinted with your business, and conduct thorough competitor and keyword research giving you a blog post that helps position your website at the top of the SERPs.
            </p>
            <p>
              We're happy to work with you whether you have a tight brief or don't know where to begin. We can bring ideas to the table, or stay within strict keyword, and demographic limits.
            </p>
            <p>
              Need a longer, or shorter, post? Just let us know and we can tailor our prices to you.
            </p>
          </div>
        </div>
      </div>
      <!--
      <h2>
        Free SEO Audit
      </h2>
      <p class="desc">
        If you're struggling to know where to start on your SEO journey, why not sign up for our free SEO Health Check. Just fill in your email address and website, and we'll get back to you with a personalised action plan for you and your Business.
      </p>
      <client-only>
        <form method="post" name="contact_form" netlify @submit.prevent="onSubmit">
          <label>
            First Name:
            <input
              id="fname"
              v-model="form.fname"
              name="fname"
              type="text"
              placeholder="Joe"
              required
              autocomplete="given-name"
              @keyup="checkform"
            >
          </label>
          <label>
            Last Name:
            <input
              id="lname"
              v-model="form.lname"
              name="lname"
              type="text"
              placeholder="Bloggs"
              required
              autocomplete="family-name"
              @keyup="checkform"
            >
          </label>
          <label>
            Email:
            <input
              id="mail"
              v-model="form.email"
              name="email"
              type="email"
              placeholder="joe@bloggs.com"
              required
              autocomplete="email"
              @keyup="checkform"
            >
          </label>
          <label>
            Website:
            <input
              id="website"
              v-model="form.website"
              name="website"
              type="url"
              placeholder="https://galexia.agency"
              required
              autocomplete="url"
              inputmode="text"
              @keyup="checkform"
            >
          </label>
          <div id="submitcontainer">
            <input
              id="submit"
              type="submit"
              name="submit"
              class="button colorTwo"
              value="submit"
              disabled
            >
          </div>
          <p v-show="!submitted">
          &nbsp;
          </p>
          <transition name="fade">
            <p v-show="submitted" class="message">
              {{ submitted }}
            </p>
          </transition>
        </form>
      </client-only>
      -->
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yearly: false,
      submitted: false,
      form: {
        fname: '',
        lname: '',
        email: '',
        website: '',
      }
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
  },
  mounted () {
    // eslint-disable-next-line
    if (process.client) {
      if (localStorage.getItem('form')) {
        this.form = JSON.parse(localStorage.getItem('form'))
      } else {
        this.form = {
          fname: '',
          lname: '',
          email: '',
          telephone: '',
          subject: '',
          message: ''
        }
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    onSubmit () {
      document.querySelector('.rocket').classList.add('animate')
      const self = this
      try {
        axios.post(
          '/',
          self.encode({
            'form-name': 'contact_form',
            ...self.form
          }),
          { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        localStorage.setItem('form', '')
        this.form = {
          fname: '',
          lname: '',
          email: '',
          telephone: '',
          subject: '',
          message: ''
        }
        this.submitted = 'Message sent successfully! We\'ll be in touch within 2-3 working days'
      } catch (e) {
        this.submitted = e.toString() + ' Please try again.'
      }
    },
    checkform () {
      localStorage.setItem('form', JSON.stringify(this.form))
      const f = document.forms.contact_form.elements
      let cansubmit = true

      for (let i = 0; i < f.length - 2; i++) {
        if (f[i].value.length === 0) {
          cansubmit = false
        }
      }
      if (document.querySelector('#message')) {
        if (document.querySelector('#message').value === '') {
          cansubmit = false
        }
      }

      if (document.querySelector('#submit')) {
        document.querySelector('#submit').disabled = !cansubmit
      }
    }
  }
}
</script>
