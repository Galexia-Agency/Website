<style scoped>
  code {
    font-size: 1.25rem
  }
</style>

<template>
  <div id="email_checkup">
    <Header
      title="Free Business Email Checkup"
      desc="If you aren't sure on what the following key terms mean, or if you don't know whether you have them implemented on your domain/website, let us offer you a free checkup. Just drop your name, email address, and website into the form below, and we'll let you know whether you comply with SPF, DKIM, DMARC, and BIMI within 2-3 working days."
    />
    <div class="white">
      <section class="maxWidth">
        <div class="grid right">
          <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/spf.svg?include')" />
          <div v-infocus="'showElement'" class="hidden hidden-right">
            <h3>
              SPF
            </h3>
            <code>
              v=spf1 include:_spf.google.com ~all
            </code>
            <p class="text--normal">
              The Sender Policy Framework (SPF) is a way to make sure an email message was sent from an authorized sender in order to prevent spam. In order for the record to be valid and not mark your legitimate sent emails as spam, you'll need to add all email services that you use to send mail.
            </p>
          </div>
        </div>
        <div class="grid left">
          <div v-infocus="'showElement'" class="hidden hidden-left">
            <h3>
              DKIM
            </h3>
            <code>
              v=DKIM1; k=rsa; p=MIIBIjANBgkqhki...
            </code>
            <p class="text--normal">
              DomainKeys Identified Mail (DKIM) is a DNS standard to help prevent spoofing on outgoing messages sent from your domain. Email spoofing is when email content is changed to make the message appear from someone or somewhere other than the actual source.
            </p>
          </div>
          <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/dkim.svg?include')" />
        </div>
        <div class="grid right">
          <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('../assets/svg/dmarc.svg?include')" />
          <div v-infocus="'showElement'" class="hidden hidden-right">
            <h3>
              DMARC
            </h3>
            <code>
              v=DMARC1; p=reject; rua=mailto:dmarc-reports@example.com
            </code>
            <p class="text--normal">
              Domain-based Message Authentication, Reporting, and Conformance (DMARC) helps businesses prevent hackers and other attackers from spoofing their organization and domain. DMARC also lets you request reports from email servers that get messages from your organization or domain. These reports have information to help you identify possible authentication issues and malicious activity for messages sent from your domain. DMARC is essentially an enforcer of DKIM and SPF with a reporting functionality.
            </p>
          </div>
        </div>
        <div class="grid left">
          <div v-infocus="'showElement'" class="hidden hidden-left">
            <h3>
              BIMI
            </h3>
            <code>
              v=BIMI1; l=https://example.com/logo.svg; a=self;
            </code>
            <p class="text--normal">
              Brand Indicators for Message Identification (BIMI) is a new standard that can help an email recipient to know that it is you. Without BIMI, your email recipients have no assurance that the emails they get are from you. As a result, sometimes they leave such emails unopened, as they fear fraudsters may be trying to con them. BIMI is a new standard that enables you to include your company's logo alongside the emails you send. That way, your brand stands out among other emails, and your customers are sure that the emails are legitimate.
            </p>
          </div>
          <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('../assets/svg/bimi.svg?include')" />
        </div>
      </section>
      <section class="maxWidth">
        <h2>
          Free Business Email Checkup
        </h2>
        <form
          id="email_checkup_form"
          class="narrow"
          method="post"
          name="email_checkup_form"
          netlify
          @submit.prevent="onSubmit"
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
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/header'

export default {
  components: {
    Header
  },
  data () {
    return {
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
      title: 'Email Checkup',
      meta: [
        { hid: 'description', name: 'description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'og:title', property: 'og:title', content: 'Email Checkup' },
        { hid: 'og:description', property: 'og:description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Email Checkup' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Your website is your online store-front. We can help with getting your website higher up in the SERPs, thus increasing traffic to your site, and potential revenue.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/email-checkup/' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          /* eslint-disable-next-line */
          innerHTML: '{"@context": "https://schema.org","@type": "BreadcrumbList","itemListElement": [{"@type": "ListItem","position": 2,"name": "Email Checkup","item": "https://galexia.agency/email-checkup/"}]}',
          type: 'application/ld+json'
        }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (process.client) {
      if (localStorage.getItem('email-form')) {
        this.form = JSON.parse(localStorage.getItem('email-form'))
      } else {
        this.form = {
          fname: '',
          lname: '',
          email: '',
          website: ''
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
    onSubmit () {
      const self = this
      try {
        axios.post(
          '/',
          self.encode({
            'form-name': 'email_checkup_form',
            ...self.form
          }),
          { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        localStorage.setItem('email-form', '')
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
      localStorage.setItem('email-form', JSON.stringify(this.form))
      const f = document.forms.email_checkup_form.elements
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
