<style scoped>
  time {
    font-weight: bold
  }
</style>

<template>
  <section class="white legal">
    <div v-if="legal" class="maxWidth">
      <h1 v-html="legal.title" />
      <p>
        Last updated: <time>{{ new Date(legal.modified).getDate() + " " + monthArr[new Date(legal.modified).getMonth()] + " " + new Date(legal.modified).getFullYear().toString() }}</time>.
      </p>

      <div v-html="legal.content" />
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      monthArr: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  head () {
    if (this.legal) {
      return {
        title: this.legal.title + ' | Legal',
        meta: [
          { hid: 'description', name: 'description', content: 'Galexia Creative Agency Ltd\'s ' + this.legal.title },
          { hid: 'og:title', property: 'og:title', content: this.legal.title + ' | Legal' },
          { hid: 'og:description', property: 'og:description', content: 'Galexia Creative Agency Ltd\'s ' + this.legal.title },
          { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.legal.title + ' | Legal' },
          { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s ' + this.legal.title },
          { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/' + this.legal.slug + '/' }
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [
          {
            innerHTML: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 2,
                "name": "Legal",
                "item": "https://galexia.agency/legal/"
              }]
            }`,
            type: 'application/ld+json'
          },
          {
            innerHTML: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 3,
                "name": "${this.legal.title}",
                "item": "https://galexia.agency/legal/${this.legal.slug}/"
              }]
            }`,
            type: 'application/ld+json'
          }
        ]
      }
    }
  },
  computed: {
    legal () {
      return this.$parent.$parent.legals.find(legal => legal.slug === this.$route.params.slug)
    }
  }
}
</script>
