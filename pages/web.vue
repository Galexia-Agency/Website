<template>
  <div id="web">
    <Header
      title="Contemporary Web Design and Development"
      desc="We're in the business of building fast, secure, scalable sites. How do we do that you ask? We use the Jamstack. It stands for Javascript, APIs and Markup. You can find out more about it at <a href='https://jamstack.org'>Jamstack.org</a> but that’s why you pay us; to take care of learning all about the latest and greatest standards in the world of the web so that you can focus on what you do best."
      :link="{location: '/hosting/', text: 'Check out our custom hosting'}"
    />
    <section class="white">
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Why us?</h3>
          <p class="text--normal">
            Simply put, many agencies can’t afford to learn and implement the latest and greatest technologies. They’re too busy supporting legacy systems and technologies to fully utilize the Jamstack and other developments within the web industry.
          </p>
          <p class="text--normal">
            We’re a relatively new company, built from the ground up on the promise of delivering fast, secure, and scalable sites. We can build you a shiny new website or help update your current one.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/why_us.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/wordpress.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>WordPress</h3>
          <p class="text--normal">
            We think WordPress is great. In fact, we use it for many of our internal projects. There are over 50,000 plugins for all sorts of requirements. It’s open-source and maintained by a great community. It’s easy for your staff or content producers to edit the site with the intuitive backend. …But it’s not Jamstack. It’s slow; each page has to be rendered by a server, set up by some tech guru, because of this, a site with 100,000 monthly visits can cost around £300 a year to host. It’s insecure; ever seen those articles about the latest WordPress plugin security vulnerabilities? We give you the best of both worlds. The WordPress backend you know and love, with the Jamstack front-end that’s fast, secure, and scalable.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Custom Solutions</h3>
          <p class="text--normal">
            We’re versed in project management, user experience, and all the web frameworks and languages necessary to take your next big thing public. Give us a call on <a href="tel:+447477737535">07477737535</a>.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/custom.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/old.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>Love our ethos but have an older site?</h3>
          <p class="text--normal">
            We’ve often had clients come to us who use a different platform than advertised on our site. That’s okay, we can update your site to use the Jamstack, or continue to use your current site, and create another layer on top, which is fast, secure, and scalable.
          </p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Hosting and Domains</h3>
          <p class="text--normal">
            Hosting and domains are a headache to many. GoDaddy or AWS? 1&1 or Google Cloud? We pride ourselves in having experience with all major hosting providers, and the smaller ones too. We can help you set up a new business, register your domains, and choose the best hosting provider, or show you options for transferring your existing plan over. We’ll let you in on a little secret though, we use <a href="https://netlify.com">Netlify</a> for nearly all of our builds, they’re fast, secure, and completely free!
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/hosting.svg?include')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/search.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>SEO</h3>
          <p class="text--normal">
            Remember that Jamstack thing we talked about? That’s great for SEO too. Search engine algorithms have slowly been moving away from keywords and backlinks. Search engines are now focussed on website speed and high-quality content, things the Jamstack is great for. If you choose us to build your website you can rest assured we take care of SEO. In turn, generating more traffic to your website, and more leads.
          </p>
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
  head () {
    return {
      title: 'Web',
      meta: [
        { hid: 'description', name: 'description', content: 'We\'re in the business of building fast, secure, scalable sites. How do we do that you ask? We use the Jamstack. It stands for Javascript, APIs and Markup.' },
        { hid: 'og:title', property: 'og:title', content: 'Web' },
        { hid: 'og:description', property: 'og:description', content: 'We\'re in the business of building fast, secure, scalable sites. How do we do that you ask? We use the Jamstack. It stands for Javascript, APIs and Markup.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Web' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We\'re in the business of building fast, secure, scalable sites. How do we do that you ask? We use the Jamstack. It stands for Javascript, APIs and Markup.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/web/' }
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
              "name": "Web",
              "item": "https://galexia.agency/web/"
            }]`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
