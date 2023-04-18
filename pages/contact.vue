<style>
  .rocket.animate {
    position: relative;
    animation: move 6000ms 1 normal ease-in-out
  }
  @keyframes move {
    from {
      transform: translate(0, 0)
    }
    to {
      transform: translate(0, -4000px)
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .rocket.animate {
      animation: none
    }
  }
</style>
<style scoped>
  h1 {
    text-align: center
  }
  .grid {
    gap: 2rem
  }
  p {
    z-index: 1;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    text-align: center
  }
</style>

<template>
  <div id="contact">
    <section class="white">
      <div class="maxWidth">
        <h1>Get in Touch</h1>
        <p>
          We’d love to help you on your next big website project. We understand what it means to dream big, and then achieve that dream.
        </p>
        <div class="grid left">
          <form method="post" name="contactForm" netlify @submit.prevent="onSubmit">
            <input
              type="hidden"
              name="form-name"
              value="contactForm"
            >
            <label>
              First Name:
              <input
                id="firstName"
                v-model="form.firstName"
                name="firstName"
                type="text"
                placeholder="Joe"
                required
                autocomplete="given-name"
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <label>
              Last Name:
              <input
                id="lastName"
                v-model="form.lastName"
                name="lastName"
                type="text"
                placeholder="Bloggs"
                required
                autocomplete="family-name"
                @keyup="checkform('contactForm', form)"
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
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <label>
              Telephone:
              <input
                id="telephone"
                v-model="form.telephone"
                name="telephone"
                type="tel"
                placeholder="+447569836548"
                required
                autocomplete="tel"
                inputmode="tel"
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <label id="subject">
              Subject:
              <input
                v-model="form.subject"
                name="subject"
                type="text"
                placeholder="I need a site..."
                required
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <label id="message">
              Message:
              <textarea
                v-model="form.message"
                name="message"
                placeholder="I have a really outdated website and after reading about your past clients I'd like to request a quote"
                required
                rows="3"
                @keyup="checkform('contactForm', form)"
              />
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
              <p v-show="submitted" class="message" v-text="submitted" />
            </transition>
          </form>
          <div class="SVGContainer" v-html="require('../assets/svg/contact.svg?include')" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submitted: false,
      form: {}
    }
  },
  head () {
    return {
      title: 'Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'We\'d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.' },
        { hid: 'og:title', property: 'og:title', content: 'Contact' },
        { hid: 'og:description', property: 'og:description', content: 'We\'d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Contact' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We\'d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/contact/' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: '{"@context": "https://schema.org","@type": "BreadcrumbList","itemListElement": [{"@type": "ListItem","position": 2,"name": "Contact","item": "https://galexia.agency/contact/"}]}',
          type: 'application/ld+json'
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (process.client) {
      if (localStorage.getItem('contactForm')) {
        this.form = JSON.parse(localStorage.getItem('contactForm'))
      } else {
        this.form = {}
      }
    }
  },
  methods: {
    async onSubmit () {
      document.querySelector('.rocket').classList.add('animate')
      try {
        await this.submit(this.form, 'contactForm')
        localStorage.setItem('contactForm', '')
        this.form = {}
        this.submitted = 'Message sent successfully! We\'ll be in touch within 2-3 working days'
      } catch (e) {
        this.submitted = e.toString() + ' Please try again.'
      }
    }
  }
}
</script>
