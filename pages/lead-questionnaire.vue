<template>
  <div class="typeform-widget" data-url="https://form.typeform.com/to/OGff6UOz" style="width: 100%; height: 90vh" />
</template>

<script>
export default {
  created () {
    this.cookie(false)
  },
  beforeDestroy () {
    this.cookie(true)
  },
  methods: {
    cookie (display) {
      if (process.client) {
        require('../assets/js/typeform')
        let css
        if (display === true) {
          css = `
            .cookieControl {
              display: block
            }
          `
        } else {
          css = `
            .cookieControl {
              display: none
            }
          `
        }
        const head = document.head
        const style = document.createElement('style')
        head.appendChild(style)
        style.type = 'text/css'
        style.appendChild(document.createTextNode(css))
      }
    }
  },
  head () {
    return {
      title: 'Lead Questionnaire',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/lead-questionnaire/' }
      ]
    }
  }
}
</script>
