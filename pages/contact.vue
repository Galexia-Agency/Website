<style>
  .rocket.animate {
    position: relative;
    -webkit-animation: move 6000ms 1 normal ease-in-out;
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
      -webkit-animation: none;
      animation: none
    }
  }
</style>
<style scoped>
  h1 {
    text-align: center
  }
  .grid {
    grid-gap: 2rem
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    z-index: 1
  }
</style>

<template>
  <div id="contact">
    <section class="white">
      <div class="maxWidth">
        <h1>Get in Touch</h1>
        <p>
          We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.
        </p>
        <div class="grid left">
          <client-only>
            <form method="post" name="contact_form" netlify @submit.prevent="onSubmit">
              <input
                type="hidden"
                name="form-name"
                value="contact_form"
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
                  @keyup="checkform"
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
                  @keyup="checkform"
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
                  @keyup="checkform"
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
                <p v-show="submitted" class="message">
                  {{ submitted }}
                </p>
              </transition>
            </form>
          </client-only>
          <div class="SVGContainer" v-html="require('../assets/svg/contact.svg?include')" />
        </div>
        <form method="post" name="contact_form" netlify style="display: none">
          <input name="fname" type="text">
          <input name="lname" type="text">
          <input name="email" type="email">
          <input name="telephone" type="tel">
          <input name="subject" type="text">
          <textarea name="message" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      submitted: false,
      form: {
        fname: '',
        lname: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      }
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
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    async onSubmit () {
      document.querySelector('.rocket').classList.add('animate')
      const self = this
      try {
        await axios.post(
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
