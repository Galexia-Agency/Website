<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1>GDPR Statement</h1>
      <p>Last updated: <strong>15 October 2020</strong>.</p>
      <h2>Overview</h2>
      <p>The General Data Protection Regulation (GDPR) is the most significant legislative change in European data protection laws since the EU Data Protection Directive (Directive 95/46/EC), introduced in 1995. The GDPR became enforceable on May 25, 2018, strengthens the security and protection of personal data in the EU and serves as a single piece of legislation for all of the EU. It replaced the EU Data Protection Directive and all the local laws relating to it.</p>
      <p>Galexia Creative Agency Ltd supports the GDPR and all Galexia Creative Agency Ltd services comply with its provisions. Not only is the GDPR an important step in protecting the fundamental right of privacy for European citizens, it has raised the bar for data protection, security and compliance in the industry.</p>
      <h2>Statement</h2>
      <p>
        Galexia Creative Agency Ltd's legal basis for collecting and using the personal information described in the <nuxt-link to="/legal/privacy-policy/">
          Privacy Policy
        </nuxt-link> depends on the Personal Information we collect and the specific context in which we collect the information:
      </p>
      <ul>
        <li>Galexia Creative Agency Ltd needs to perform a contract with you</li>
        <li>You have given Galexia Creative Agency Ltd permission to do so</li>
        <li>Processing your personal information is in Galexia Creative Agency Ltd legitimate interests</li>
        <li>Galexia Creative Agency Ltd needs to comply with the law</li>
        <li>
          Galexia Creative Agency Ltd will retain your personal information only for as long as is necessary for the purposes set out in the <nuxt-link to="/legal/privacy-policy/">
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
      <p>This statement is effective as of <strong>2 September 2020</strong>.</p>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'GDPR Statement | Legal',
      meta: [
        { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'og:title', property: 'og:title', content: 'GDPR Statement | Legal' },
        { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'GDPR Statement | Legal' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s GDPR Statement' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/gdpr-statement/' }
      ]
    }
  }
}
</script>
