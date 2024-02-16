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
.contact__grid {
  gap: 2rem
}
</style>

<template>
  <div>
    <LayoutHeader
      title="Get in Touch"
      desc="We’d love to help you on your next big website project.<br>We understand what it means to dream big, and then achieve that dream."
    />
    <section class="white section-padding section-padding--100">
      <div class="layout--max-width">
        <div class="contact__grid grid grid--left">
          <form method="post" name="contactForm" netlify class="form" @submit.prevent="onSubmit">
            <input
              type="hidden"
              name="form-name"
              value="contactForm"
            >
            <label>
              First Name:
              <input
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
            <label class="form__full-width-input">
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
            <label class="form__full-width-input">
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
            <label class="form__full-width-input">
              How did you hear about us?
              <select
                v-model="form.howDidYouHearAboutUs"
                name="howDidYouHearAboutUs"
                required
                @change="checkform('contactForm', form)"
              >
                <option value="" disabled selected>Please choose from the dropdown</option>
                <option value="Galexia came up during a search">Galexia came up during a search</option>
                <option value="I saw Galexia on Facebook">I saw Galexia on Facebook</option>
                <option value="I saw Galexia on another social platform">I saw Galexia on another social platform</option>
                <option value="Someone recommended Galexia to me">Someone recommended Galexia to me</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label v-if="form.howDidYouHearAboutUs === 'Someone recommended Galexia to me'">
              If you'd like to, let us know who recommended Galexia to you:
              <input
                v-model="form.whoRecommended"
                name="whoRecommended"
                type="text"
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <label v-if="form.howDidYouHearAboutUs === 'Other'">
              If you can, let us know how you heard about us:
              <input
                v-model="form.howDidYouHearAboutUsDetails"
                name="howDidYouHearAboutUsDetails"
                type="text"
                @keyup="checkform('contactForm', form)"
              >
            </label>
            <div class="form__full-width-input">
              <input
                type="submit"
                name="submit"
                class="button button--secondary submit"
                value="Submit"
                disabled
              >
            </div>
            <p v-if="!submitted">
            &nbsp;
            </p>
            <transition name="contact__message">
              <p v-if="submitted" class="form__full-width-input contact__message" v-text="submitted" />
            </transition>
          </form>
          <div v-html="require('~/assets/svg/contact.svg?include')" />
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
      title: 'Get in Touch',
      meta: [
        { hid: 'description', name: 'description', content: 'We\'d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.' },
        { hid: 'og:title', property: 'og:title', content: 'Get in Touch' },
        { hid: 'og:description', property: 'og:description', content: 'We\'d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Get in Touch' },
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
        this.$nextTick(() => {
          this.checkform('contactForm', this.form)
        })
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
