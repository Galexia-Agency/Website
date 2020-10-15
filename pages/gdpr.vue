<template>
  <section class="white">
    <div class="maxWidth">
      <h1>GDPR Statement</h1>
      <p>Last updated: <b>7 July 2020</b>.</p>
      <p>We are a Data Controller of your information.</p>
      <p>
        Galexia Creative Agency Ltd legal basis for collecting and using the personal information described in the <nuxt-link to="/privacy-policy/">
          Privacy Policy
        </nuxt-link> depends on the Personal Information we collect and the specific context in which we collect the information:
      </p>
      <ul>
        <li>Galexia Creative Agency Ltd needs to perform a contract with you</li>
        <li>You have given Galexia Creative Agency Ltd permission to do so</li>
        <li>Processing your personal information is in Galexia Creative Agency Ltd legitimate interests</li>
        <li>Galexia Creative Agency Ltd needs to comply with the law</li>
        <li>
          Galexia Creative Agency Ltd will retain your personal information only for as long as is necessary for the purposes set out in the <nuxt-link to="/privacy-policy/">
            Privacy Policy
          </nuxt-link>. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
        </li>
      </ul>
      <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us at <a href="mailto:info@galexia.agency">info@galexia.agency</a> or through our contact form.</p>
      <p>In certain circumstances, you have the following data protection rights:</p>
      <ul>
        <li>The right to access, update or to delete the information we have on you.</li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'GDPR Statement',
      meta: [
        { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'og:title', property: 'og:title', content: 'GDPR Statement' },
        { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'GDPR Statement' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/gdpr/' }
      ]
    }
  }
}
</script>
