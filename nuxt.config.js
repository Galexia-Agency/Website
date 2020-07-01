export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Galexia',
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description' },
      { name: 'apple-mobile-web-app-title', content: 'Galexia' },
      { name: 'application-name', content: 'Galexia' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },

      // Twitter Card data
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'tiwtter:site', content: '@' }, //////////////////////////////////
      { hid: 'twitter:title', name: 'twitter:title', template: chunk => `${chunk} | Galexia` },
      { hid: 'twitter:description', name: 'twitter:description' },
      { hid: 'twitter:image', name: 'twitter:image' },

      // Open Graph data
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Galexia' },
      { hid: 'og:description', property: 'og:description' },
      { hid: 'og:title', property: 'og:title', template: chunk => `${chunk} | Galexia` },
      { hid: 'og:image', property: 'og:image' },
      { property: 'og:url', content: 'https://galexia.agency' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://galexia.agency/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://galexia.agency/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '194x194', href: 'https://galexia.agency/favicon-194x194.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://galexia.agency/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://galexia.agency/favicon-16x16.png' },
      { rel: 'mask-icon', href: 'https://galexia.agency/safari-pinned-tab.svg', color: '#282828' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Assistant&family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&family=Montserrat:ital,wght@0,600;0,700;1,600;1,700&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap' }
    ],
    script: [
      {
        inner: `{ 
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Galexia",
          "legalName" : "Galexia Ltd",
          "foundingDate": "2020",
          "founders": [
            {
            "@type": "Person",
            "name": "Joe Bailey"
          }, ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Enquiries",
            "email": "info@galexia.agency"
          },
          "url": "https://galexia.agency",
          "sameAs": [
            "https://www.linkedin.com/company/64930698",
            "https://www.twitter.com/",
            "https://www.instagram.com/",
            "https://www.facebook.com/"
          ]
        }`,
        type: 'application/ld+json'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/inlineSvg.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    '@aceforth/nuxt-optimized-images',
    ['@nuxtjs/pwa', { meta: false }],
    '@nuxtjs/sitemap'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://blog.galexia.agency/graphql'
      }
    }
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  pwa: {
    manifest: {
      name: 'Galexia | Creative Agency',
      shortName: 'Galexia',
      orientation: 'portrait',
      theme_color: '#1a237e',
      lang: 'en-GB'
    }
  },
  sitemap: {
    hostname: 'https://galexia.agency',
    gzip: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
