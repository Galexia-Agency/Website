<style scoped>
  li {
    font-size: 1.5rem;
    color: #1A237E;
    line-height: 2
  }
</style>

<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1>Legal</h1>
      <ul>
        <li>
          <nuxt-link to="/legal/cookie-policy/">
            Cookie Policy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/privacy-policy/">
            Privacy Policy
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/gdpr-statement/">
            GDPR Statement
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/data-processing-agreement/">
            Data Processing Agreement
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/terms-of-service/">
            Terms of Service
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/service-level-agreement/">
            Service Level Agreement
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/legal/acceptable-use-policy/">
            Acceptable Use Policy
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Legal',
      meta: [
        { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'og:title', property: 'og:title', content: 'Legal' },
        { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Legal' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/' }
      ]
    }
  }
}
</script>
