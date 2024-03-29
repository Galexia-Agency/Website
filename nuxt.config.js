export default {
  target: 'static',
  router: {
    trailingSlash: true
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Galexia Creative Agency Ltd | Web Design and Development',
    meta: [
      { name: 'application-name', content: 'Galexia' },
      { name: 'msapplication-TileColor', content: '#7c72ef' },
      { name: 'msapplication-TileImage', content: 'https://galexia.agency/mstile-144x144.png?v=dLXLEPEjpj' },

      // Twitter Card data
      { hid: 'twitter:title', name: 'twitter:title', template: (chunk) => `${chunk} | Galexia Creative Agency Ltd | Web Design and Development` },
      { hid: 'twitter:description', name: 'twitter:description' },

      // Open Graph data
      { hid: 'og:description', property: 'og:description' },
      { hid: 'og:title', property: 'og:title', template: (chunk) => `${chunk} | Galexia Creative Agency Ltd | Web Design and Development` },
      { hid: 'og:image', property: 'og:image' },
      { property: 'fb:app_id', content: '249903496015229' }
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://galexia.agency/apple-touch-icon-60x60.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://galexia.agency/apple-touch-icon-76x76.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://galexia.agency/apple-touch-icon-120x120.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://galexia.agency/apple-touch-icon-152x152.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://galexia.agency/apple-touch-icon-180x180.png?v=dLXLEPEjpj' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://galexia.agency/favicon-32x32.png?v=dLXLEPEjpj' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://galexia.agency/favicon-16x16.png?v=dLXLEPEjpj' },
      { rel: 'mask-icon', href: 'https://galexia.agency/safari-pinned-tab.svg?v=dLXLEPEjpj', color: '#534bae' },
      { rel: 'preload', as: 'style', href: 'https://assets.calendly.com/assets/external/widget.css' },
      { rel: 'stylesheet', media: 'print', onload: 'this.media="all"', href: 'https://assets.calendly.com/assets/external/widget.css' }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    noscript: [
      { innerHTML: '<link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />' },
      { innerHTML: '<img src="https://analytics.galexia.agency/matomo.php?idsite=1&amp;rec=1" style="border:0;" alt="" />' }
    ],
    script: [
      {
        src: '/js/scrollbar-width.js',
        body: true
      },
      {
        innerHTML: `{ 
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Galexia",
          "legalName" : "Galexia Creative Agency Ltd",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Joe Bailey"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Enquiries",
            "email": "info@galexia.agency"
          },
          "logo": "https://galexia.agency/icon.png",
          "url": "https://galexia.agency",
          "sameAs": [
            "https://www.linkedin.com/company/galexia-agency",
            "https://www.twitter.com/galexia_agency",
            "https://www.instagram.com/galexia_agency",
            "https://fb.me/GalexiaAgency",
            "https://github.com/orgs/Galexia-Agency/"
          ]
        }`,
        type: 'application/ld+json'
      },
      {
        innerHTML: `{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://galexia.agency"
          }]
        }`,
        type: 'application/ld+json'
      },
      {
        src: 'https://assets.calendly.com/assets/external/widget.js', type: 'text/javascript', async: true
      },
      {
        innerHTML: `
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setDoNotTrack", true]);
          _paq.push(["disableCookies"]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://analytics.galexia.agency/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();`,
        type: 'text/javascript'
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
  css: [
    '@fontsource/assistant/300.css',
    '@fontsource/assistant/400.css',
    '@fontsource/montserrat/600.css',
    '@fontsource/montserrat/700.css',
    '@fontsource/montserrat/600-italic.css',
    '@fontsource/montserrat/700-italic.css',
    '@fontsource/open-sans/400.css',
    '@fontsource/open-sans/600.css',
    '@fontsource/open-sans/400-italic.css',
    '@fontsource/open-sans/600-italic.css',
    '~/assets/css/transition.css',
    '~/assets/scss/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/animation.js',
    '~/plugins/fontAwesome.js',
    '~/plugins/ztext.client.js',
    '~plugins/mixins/forms',
    '~plugins/galexia/components/image.js'
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
    '~/modules/only-once.js',
    'vue-social-sharing/nuxt',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/pwa'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 70
    },
    pngquant: {
      stripe: true
    },
    webp: {
      quality: 70
    },
    svgo: {
      plugins: [
        { reusePaths: true },
        { removeOffCanvasPaths: true },
        { removeScriptElement: true },
        {
          cleanupIDs: {
            minify: false
          }
        }
      ]
    }
  },
  generate: {
    fallback: true
  },
  pwa: {
    workbox: false,
    manifest: {
      name: 'Galexia Creative Agency Ltd',
      shortName: 'Galexia',
      background_color: '#ffffff',
      display: 'browser',
      lang: 'en-GB'
    },
    meta: {
      name: 'Galexia Creative Agency Ltd',
      mobileAppIOS: true,
      theme_color: '#1a237e',
      lang: 'en-GB',
      ogHost: 'https://galexia.agency',
      twitterCard: 'summary_large_image',
      twitterSite: '@galexia_agency'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  }
}
