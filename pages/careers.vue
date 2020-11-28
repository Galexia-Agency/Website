<style scoped>
  #careers {
    text-align: center
  }
  .svg {
    width: 400px;
    height: auto;
    margin: 2rem auto
  }
  p {
    font-size: 2rem
  }
  .maxWidth {
    max-width: 780px
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.5rem
    }
    .svg {
      width: 75%
    }
  }
</style>
<template>
  <div id="careers">
    <section class="white">
      <div class="maxWidth">
        <div class="svg" v-html="require('../assets/svg/careers.svg?include')" />
        <p>We're not currently hiring, however, if you think you'd be a great fit for our team drop us a line at <a href="mailto:careers@galexia.agency">careers@galexia.agency</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Careers',
      meta: [
        { hid: 'description', name: 'description', content: 'We\'re not currently hiring, however, if you think you\'d be a great fit for our team drop us a line at careers@galexia.agency.' },
        { hid: 'og:title', property: 'og:title', content: 'Careers' },
        { hid: 'og:description', property: 'og:description', content: 'We\'re not currently hiring, however, if you think you\'d be a great fit for our team drop us a line at careers@galexia.agency.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Careers' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We\'re not currently hiring, however, if you think you\'d be a great fit for our team drop us a line at careers@galexia.agency.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/careers/' }
      ]
    }
  }
}
</script>
