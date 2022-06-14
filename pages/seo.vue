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
        <img src="../assets/img/searchconsole.png?format=webp&resize&size=520" width="520" height="294" alt="Google Search Console Screenshot">
        <p class="desc">
          Your website is your online store-front. Unfortunately, you can't attract customers by having a pretty shop window that they see whilst walking down the street. You have to rank highly in Search Engine Results Pages (SERPs). Only then will people find your website and learn more about you. We can help with getting you higher up in the SERPs, thus increasing traffic to your site, and potential revenue.
        </p>
      </div>
      <div class="scroll-wrapper">
        <div class="shadow shadow-left" />
        <div class="shadow shadow-right" />
        <div class="mobile-table">
          <table class="comparison">
            <colgroup>
              <col width="33.33%">
              <col width="33.33%">
              <col width="33.33%">
            </colgroup>
            <thead>
              <tr>
                <td>
                  <h3>
                    SEO
                  </h3>
                </td>
                <td>
                  <h4 class="title">
                    Starter
                  </h4>
                  <h3>
                    £150/month
                  </h3>
                </td>
                <td>
                  <h4 class="title">
                    Advanced
                  </h4>
                  <h3>
                    £250/month
                  </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  GDPR Compliant Analytics Set Up
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Analytics are an important tool in improving website performance. By nature, they track users, we'll help set the tool up in a legal and ethical way.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Google Search Console Set Up
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Another important tool to monitor performance of your website in Google's SERPs.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Bing Webmaster Tools Set Up
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Another important tool to monitor performance of your website in Bing's SERPs.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Pages/Posts/Products title &amp; description optimisation
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>We'll analyse the text on your page and change the format to suit your targetted keywords.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  Up to 10
                </td>
                <td>
                  Up to 25 (with images)
                </td>
              </tr>
              <tr>
                <td>
                  Targetted Keywords
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>These are the keywords that you are targetting your website to rank for in the SERPs.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  Up to 10
                </td>
                <td>
                  Up to 25
                </td>
              </tr>
              <tr>
                <td>
                  Keyword Monitoring
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>This is the number of keywords we'll monitor so that you can make an informed decision on your targetted keywords.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  Up to 25
                </td>
                <td>
                  Up to 100
                </td>
              </tr>
              <tr>
                <td>
                  Advice on new content structure and purpose in relation to goals
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>We'll advise on a content strategy to get you higher up in the SERPs. Content is key in the modern era of SEO and planning when you publish new content can have a positive effect on your ranking position.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Google My Business and Bing Places for Business monitoring and optimisation
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Both of these tools allow your company to be listed on maps, and have a card on the SERPs.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  1 High Quality ~750 word blog post
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'times-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  In-Depth Monthly SEO Report covering site performance, site health, and competitor analysis
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>You need a tangible way to manage your Return On Investment which is why we'll send you a report at the end of each month detailing the work carried out and the performance of your SEO strategy.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr class="no-background">
                <td>
                  <h4 style="margin: .5em -.5rem 0" class="title">
                    Technical SEO
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://galexia.agency/hosting/">
                    WordPress Maintenance Plan
                  </a>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'times-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Schema.org markup
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Schemar.org markup is a recognised notation format to help computers read and understand your content. It can help to create Rich Snippets in Google.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Meta Tags
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Meta Tags are a recognised way of allowing computers to understand your content and display it in a better way. One such way is having custom images on links to your website posted on Facebook.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Search Engine Friendly Sitemap Creation
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>A Sitemap is a list of all of your websites pages/posts/products that Search Engines can scan to index your website quicker.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Robots.txt Creation
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>A robots.txt file tells Search Engine's what pages should and shouldn't be indexed. Disallowing certain pages such as those behind login screens can help Search Engines to focus on more important content on your site.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Link structure
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>The format of your links greatly influences how Search Engines index your site. As a crawler goes through your site it will follow or not follow links to other pages.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  URL Format
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Search Engines prefer dashes to spaces, HTTPS to HTTP and a www. subdomain may cause duplicate content.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Website Redirects
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>As you update content on your site, pages may be deleted or changed, but you still want any links to those pages going to the right place.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Mobile/Responsive Site Optimisation
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Over 50% of web traffic is mobile, so it's important to have a mobile responsive site. As part of the SEO package we will make minor updates for you, however, it may be neccessary to have a completely revamped site.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
                <td>
                  <font-awesome-icon :icon="['far', 'check-circle']" />
                </td>
              </tr>
              <tr>
                <td>
                  Fix crawlabilty issues as identified in Google Search Console
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>Google Search Console occasionally picks up various errors on your website, most of which can be fixed quickly and easily.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  basic
                </td>
                <td>
                  all
                </td>
              </tr>
              <tr>
                <td>
                  Technical fault finding &amp; resolution in relation to SEO
                  <v-popover placement="top">
                    <font-awesome-icon icon="question" />
                    <template slot="popover">
                      <span>We will fix various website issues if they are directly impacting your website's position in the SERPs.</span>
                    </template>
                  </v-popover>
                </td>
                <td>
                  basic
                </td>
                <td>
                  all
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="maxWidth">
      <div class="grid column three">
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              Flexible SEO Package
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
                £75/each
              </h3>
            </div>
            <p>
              We'll spend the time getting acquainted with your business, and conduct thorough competitor and keyword research giving you a blog post that helps position your website at the top of the SERPs.
            </p>
            <p>
              We're happy to work with you whether you have a tight brief or don't know where to begin. We can bring ideas to the table, or stay within strict keyword, and demographic limits.
            </p>
            <p>
              Need a longer, or shorter, post? Just let us know and we can tailor our prices to you.
            </p>
          </div>
        </div>
        <div v-infocus="'showElement'" class="card white hidden">
          <div class="card--inner">
            <h4 class="title">
              Social Media Management
            </h4>
            <div class="price">
              <h3>
                <span class="small">From</span> £400/month
              </h3>
            </div>
            <p>
              Let's face it, doing 'socialmedia' is time consuming and can be a little daunting if it's not your thing.
            </p>
            <p>
              That's where we come in! We create the content, curate your profiles to fit with your branding and post everything too. You will get final say on anything posted too!
            </p>
            <p>
              You also get a FULL analysis report every month with a FREE Content debrief so we can see what's working and what we can improve.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="maxWidth">
      <h2>
        Free SEO Audit
      </h2>
      <p class="desc">
        If you're struggling to know where to start on your SEO journey, why not sign up for our free SEO Health Check. Just fill in your name, email address, and website, and we'll get back to you with a personalised action plan for you and your business.
      </p>
      <client-only>
        <form
          id="seo_form"
          class="narrow"
          method="post"
          name="seo_form"
          netlify
          @submit.prevent="onSubmit"
        >
          <input
            type="hidden"
            name="form-name"
            value="seo_form"
          >
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
      <form method="post" name="seo_form" netlify style="display: none">
        <input name="fname" type="text">
        <input name="lname" type="text">
        <input name="email" type="email">
        <input name="website" type="url">
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      yearly: false,
      submitted: false,
      form: {
        fname: '',
        lname: '',
        email: '',
        website: ''
      }
    }
  },
  head () {
    return {
      title: 'SEO',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
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
          innerHTML: '{"@context": "https://schema.org","@type": "BreadcrumbList","itemListElement": [{"@type": "ListItem","position": 2,"name": "SEO","item": "https://galexia.agency/seo/"}]}',
          type: 'application/ld+json'
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (process.client) {
      if (localStorage.getItem('seo-form')) {
        this.form = JSON.parse(localStorage.getItem('seo-form'))
      } else {
        this.form = {
          fname: '',
          lname: '',
          email: '',
          website: ''
        }
      }
    }
    const wrapper = document.querySelectorAll('.scroll-wrapper')
    if (wrapper) {
      wrapper.forEach((e) => {
        const content = e.querySelector('.mobile-table')
        const shadowTop = e.querySelector('.shadow-left')
        const shadowBottom = e.querySelector('.shadow-right')
        const contentScrollWidth = content.scrollWidth - e.offsetWidth
        content.addEventListener('scroll', function () {
          const currentScroll = this.scrollLeft / (contentScrollWidth)
          shadowTop.style.opacity = currentScroll
          shadowBottom.style.opacity = 1 - currentScroll
        })
      })
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    onSubmit () {
      const self = this
      try {
        axios.post(
          '/?t=' + Math.floor(Date.now() / 1000),
          self.encode({
            'form-name': 'seo_form',
            ...self.form
          }),
          { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        localStorage.setItem('seo-form', '')
        this.form = {
          fname: '',
          lname: '',
          email: '',
          website: ''
        }
        this.submitted = 'Message sent successfully! We\'ll be in touch within 2-3 working days'
      } catch (e) {
        this.submitted = e.toString() + ' Please try again.'
      }
    },
    checkform () {
      localStorage.setItem('seo-form', JSON.stringify(this.form))
      const f = document.forms.seo_form.elements
      let cansubmit = true

      for (let i = 0; i < f.length - 2; i++) {
        if (f[i].value.length === 0) {
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
