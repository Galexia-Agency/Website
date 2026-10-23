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
        <h1>Careers</h1>
        <div class="svg" v-html="inlineSvg('careers')" />
        <p>We're not currently hiring, however, if you think you'd be a great fit for our team drop us a line at <a href="mailto:careers@galexia.agency">careers@galexia.agency</a>.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
usePageMeta({
  title: 'Careers',
  description: 'We\'re not currently hiring, however, if you think you\'d be a great fit for our team drop us a line at careers@galexia.agency.',
  path: '/careers/',
  breadcrumb: [{ name: 'Careers', item: 'https://galexia.agency/careers/' }],
  noindex: true
})
</script>
