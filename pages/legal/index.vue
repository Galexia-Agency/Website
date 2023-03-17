<style scoped>
  li {
    color: var(--primaryColor);
    font-size: 1.5rem;
    line-height: 2
  }
</style>

<template>
  <section class="white legal">
    <div class="maxWidth">
      <h1>Legal</h1>
      <ul>
        <li v-for="(legalPost, index) in $parent.$parent.legal" :key="index" class="post">
          <div style="display: none">
            {{ legalPost = JSON.parse(JSON.stringify(legalPost).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
          </div>

          <nuxt-link :to="'/legal/' + legalPost.slug + '/'" v-html="legalPost.title" />
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
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Legal' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Galexia Creative Agency Ltd\'s Legal Index' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/legal/' }
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
        }
      ]
    }
  }
}
</script>
