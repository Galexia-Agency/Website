<style scoped>
  code {
    font-size: 1.25rem
  }
</style>

<template>
  <div id="email_checkup">
    <LayoutHeader
      title="Free Business Email Checkup"
      desc="If you aren't sure on what the following key terms mean, or if you don't know whether you have them implemented on your domain/website, let us offer you a free checkup. Just drop your name, email address, and website into the form below, and we'll let you know whether you comply with SPF, DKIM, DMARC, and BIMI within 2-3 working days."
      :link="{location: '#checkup', text: 'Get my free checkup'}"
    />
    <section class="white">
      <div class="grid grid--right layout--max-width">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('~/assets/svg/spf.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>
            SPF
          </h3>
          <code>
            v=spf1 include:_spf.google.com ~/all
          </code>
          <p class="text--normal">
            The Sender Policy Framework (SPF) is a way to make sure an email message was sent from an authorized sender in order to prevent spam. In order for the record to be valid and not mark your legitimate sent emails as spam, you'll need to add all email services that you use to send mail.
          </p>
        </div>
      </div>
      <div class="grid grid--left layout--max-width">
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
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('~/assets/svg/dkim.svg?include')" />
      </div>
      <div class="grid right layout--max-width">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('~/assets/svg/dmarc.svg?include')" />
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
      <div class="grid left layout--max-width">
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
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('~/assets/svg/bimi.svg?include')" />
      </div>
    </section>
    <section id="checkup" class="white">
      <div class="layout--max-width">
        <h2>
          Free Business Email Checkup
        </h2>
        <form
          id="emailCheckupForm"
          class="form form--narrow"
          method="post"
          name="emailCheckupForm"
          netlify
          @submit.prevent="onSubmit"
        >
          <input
            type="hidden"
            name="form-name"
            value="email_checkup_form"
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
              @keyup="checkform('emailCheckupForm', form)"
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
              @keyup="checkform('emailCheckupForm', form)"
            >
          </label>
          <label>
            Email:
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              placeholder="joe@bloggs.com"
              required
              autocomplete="email"
              @keyup="checkform('emailCheckupForm', form)"
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
              @keyup="checkform('emailCheckupForm', form)"
            >
          </label>
          <label>
            How did you hear about us?
            <select
              id="how-did-you-hear-about-us"
              v-model="form.howDidYouHearAboutUs"
              name="howDidYouHearAboutUs"
              required
              @change="checkform('emailCheckupForm', form)"
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
              id="whoRecommended"
              v-model="form.whoRecommended"
              name="whoRecommended"
              type="text"
              @keyup="checkform('emailCheckupForm', form)"
            >
          </label>
          <label v-if="form.howDidYouHearAboutUs === 'Other'">
            If you can, let us know how you heard about us:
            <input
              id="howDidYouHearAboutUsDetails"
              v-model="form.howDidYouHearAboutUsDetails"
              name="howDidYouHearAboutUsDetails"
              type="text"
              @keyup="checkform('emailCheckupForm', form)"
            >
          </label>
          <div class="form__full-width-input">
            <input
              type="submit"
              name="submit"
              class="button button--secondary submit"
              value="submit"
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
      if (localStorage.getItem('emailCheckupForm')) {
        this.form = JSON.parse(localStorage.getItem('emailCheckupForm'))
        this.checkform('emailCheckupForm', this.form)
      } else {
        this.form = {}
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.submit(this.form, 'emailCheckupForm')
        localStorage.setItem('emailCheckupForm', '')
        this.form = {}
        this.submitted = 'Message sent successfully! We\'ll be in touch within 2-3 working days'
      } catch (e) {
        this.submitted = e.toString() + ' Please try again.'
      }
    }
  }
}
</script>
