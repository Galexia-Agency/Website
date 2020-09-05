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
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/careers.svg?include')" class="svg" />
        <p>We're not currently hiring, however, if you think you'd be a great fit for our team drop us a line at <a href="mailto:careers@galexia.agency">careers@galexia.agency</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Careers'
    this.$parent.$parent.metaHelper.description = 'We\'re not currently hiring, however, if you think you\'d be a great fit for our team drop us a line at careers@galexia.agency.'
    this.$parent.$parent.metaHelper.url = 'careers/'
  }
}
</script>
