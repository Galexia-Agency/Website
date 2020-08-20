export default {
  target: 'static',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Galexia - Creative Agency specialising in Web Development and Marketing',
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description' },
      { name: 'apple-mobile-web-app-title', content: 'Galexia' },
      { name: 'application-name', content: 'Galexia' },
      { name: 'msapplication-TileColor', content: '#7c72ef' },
      { name: 'msapplication-TileImage', content: 'https://galexia.agency/mstile-144x144.png?v=dLXLEPEjpj' },
      { name: 'theme-color', content: '#ffffff' },

      // Twitter Card data
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@galexia_agency' }, /// ///////////////////////////////
      { hid: 'twitter:title', name: 'twitter:title', template: chunk => `${chunk} | Galexia` },
      { hid: 'twitter:description', name: 'twitter:description' },
      { hid: 'twitter:image', name: 'twitter:image' },

      // Open Graph data
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Galexia | Creative Agency' },
      { hid: 'og:description', property: 'og:description' },
      { hid: 'og:title', property: 'og:title', template: chunk => `${chunk} | Galexia` },
      { hid: 'og:image', property: 'og:image' },
      { property: 'og:url', content: 'https://galexia.agency' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://galexia.agency/apple-touch-icon-60x60.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://galexia.agency/apple-touch-icon-76x76.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://galexia.agency/apple-touch-icon-120x120.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://galexia.agency/apple-touch-icon-152x152.png?v=dLXLEPEjpj' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://galexia.agency/apple-touch-icon-180x180.png?v=dLXLEPEjpj' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://galexia.agency/favicon-192x192.png?v=dLXLEPEjpj' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://galexia.agency/favicon-32x32.png?v=dLXLEPEjpj' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://galexia.agency/favicon-16x16.png?v=dLXLEPEjpj' },
      { rel: 'shortcut icon', href: 'https://galexia.agency/favicon.ico?v=dLXLEPEjpj' },
      { rel: 'mask-icon', href: 'https://galexia.agency/safari-pinned-tab.svg?v=dLXLEPEjpj', color: '#534bae' },
      { rel: 'preconnect', href: 'https://blog.galexia.agency' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&family=Montserrat:ital,wght@0,600;0,700;1,600;1,700&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap' },
      { rel: 'stylesheet', media: 'print', onload: 'this.media="all"', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&family=Montserrat:ital,wght@0,600;0,700;1,600;1,700&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap' }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript'],
    noscript: [
      { innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&family=Montserrat:ital,wght@0,600;0,700;1,600;1,700&family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" />' }
    ],
    script: [
      {
        innerHTML: `{ 
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Galexia",
          "legalName" : "Galexia Ltd",
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
    { src: '~/plugins/fontAwesome.js' }
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
    'vue-social-sharing/nuxt',
    '@nuxtjs/apollo',
    ['nuxt-cookie-control', {
      colors: {
        barTextColor: '#212121',
        barBackground: '#FFF',
        barButtonColor: '#FFF',
        barButtonHoverBackground: '#1C2AB1',
        barButtonBackground: '#1a237e',
        modalOverlay: '#212121',
        modalButtonBackground: '#1a237e',
        modalButtonHoverBackground: '#1C2AB1',
        checkboxActiveBackground: '#1a237e',
        checkboxInactiveBackground: '#1a237e50',
        checkboxDisabledBackground: '#1a237e99',
        checkboxActiveCircleBackground: '#FFFFFF',
        controlButtonIconColor: '#1a237e',
        controlButtonIconHoverColor: '#fff',
        controlButtonHoverBackground: '#1a237e'
      }
    }],
    '@aceforth/nuxt-optimized-images',
    ['@nuxtjs/pwa', { meta: false, workbox: { offlineAnalytics: true } }],
    '@nuxtjs/sitemap'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://blog.galexia.agency/graphql'
      }
    }
  },
  cookies: {
    necessary: [
      {
        name: 'Default Cookies',
        description: 'Used for cookie control (cannot be disabled).',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analytics',
        description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-140457046-4',
        async: true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          function gtag () {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'UA-140457046-4')
        },
        declined: () => {}
      }
    ]
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 70
    },
    pngquant: {
      stripe: true
    },
    webp: {
      quality: 70
    }
  },
  generate: {
    fallback: true
  },
  pwa: {
    workbox: {
      offlinePage: '/404.html',
      cacheNames: {
        CACHE: 'pwabuilder-precache'
      }
    },
    manifest: {
      scope: '../',
      name: 'Galexia | Creative Agency',
      shortName: 'Galexia',
      theme_color: '#1a237e',
      background_color: '#ffffff',
      display: 'standalone',
      lang: 'en-GB',
      icons: [
        {
          src: '/android-chrome-36x36.png?v=dLXLEPEjpj',
          sizes: '36x36',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-48x48.png?v=dLXLEPEjpj',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-72x72.png?v=dLXLEPEjpj',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-96x96.png?v=dLXLEPEjpj',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-144x144.png?v=dLXLEPEjpj',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-192x192.png?v=dLXLEPEjpj',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-256x256.png?v=dLXLEPEjpj',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-384x384.png?v=dLXLEPEjpj',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/android-chrome-512x512.png?v=dLXLEPEjpj',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    icon: false
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
    extend: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'vue-svg-loader'
        ]
      })
      return config
    }
  }
}
