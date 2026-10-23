import { titleSuffix } from './app/utils/site.js'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  modules: ['@joebailey26/nuxt-static-wordpress'],
  // Loads the CMS feed at build time; also sets runtimeConfig.public.imageTransformations and writes sitemap.xml.
  cms: {
    siteUrl: 'https://galexia.agency',
    sitemap: {
      // Pages that were left out of the Netlify sitemap
      exclude: ['/client/', '/locations/', '/indev/', '/lead-questionnaire/', '/seo/', '/marketing/', '/careers/']
    }
  },
  runtimeConfig: {
    public: {
      turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || ''
    }
  },
  app: {
    head: {
      titleTemplate: `%s | ${titleSuffix}`,
      htmlAttrs: {
        lang: 'en-GB'
      },
      meta: [
        { name: 'application-name', content: 'Galexia' },
        { name: 'theme-color', content: '#1a237e' },
        { name: 'msapplication-TileColor', content: '#7c72ef' },
        { name: 'msapplication-TileImage', content: 'https://galexia.agency/mstile-144x144.png?v=dLXLEPEjpj' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'Galexia Creative Agency Ltd' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Galexia Creative Agency Ltd' },
        { property: 'fb:app_id', content: '249903496015229' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@galexia_agency' }
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
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
      noscript: [
        { innerHTML: '<link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />' },
        { innerHTML: '<img src="https://analytics.galexia.agency/matomo.php?idsite=1&amp;rec=1" style="border:0;" alt="" />' }
      ],
      script: [
        // Marks the page as scripted, with the mobile nav closed, before it paints (as app.html did).
        // The nav toggles these classes itself, so they are not managed through htmlAttrs.
        { innerHTML: 'document.documentElement.classList.add(\'js-active\', \'nav_close\')' },
        {
          src: '/js/scrollbar-width.js',
          tagPosition: 'bodyClose'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'Galexia',
            legalName: 'Galexia Creative Agency Ltd',
            foundingDate: '2020',
            founder: { '@type': 'Person', name: 'Joe Bailey' },
            contactPoint: { '@type': 'ContactPoint', contactType: 'Enquiries', email: 'info@galexia.agency' },
            logo: 'https://galexia.agency/icon.png',
            url: 'https://galexia.agency',
            sameAs: [
              'https://www.linkedin.com/company/galexia-agency',
              'https://www.twitter.com/galexia_agency',
              'https://www.instagram.com/galexia_agency',
              'https://fb.me/GalexiaAgency',
              'https://github.com/orgs/Galexia-Agency/'
            ]
          })
        },
        { src: 'https://assets.calendly.com/assets/external/widget.js', async: true },
        // Cloudflare Web Analytics
        {
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          defer: true,
          'data-cf-beacon': '{"token": "38b68c01b4d8407cb8c20f56d6974b4e"}'
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
            })();`
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
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
  build: {
    // Bundled into the server build so it shares the plugin's icon library instead of loading a second copy.
    transpile: ['@fortawesome/vue-fontawesome']
  },
  nitro: {
    // Cloudflare's build environment makes Nitro pick a Workers preset. The site is fully static,
    // and the forms worker lives in worker/, so always emit plain static output.
    preset: 'static',
    prerender: {
      // Blog and legal posts are added by @joebailey26/nuxt-static-wordpress; the hidden locations index links the location pages.
      crawlLinks: true,
      routes: ['/', '/locations/'],
      failOnError: true,
      // On Windows, concurrent renders of a page and its payload can collide renaming the same cache file (EPERM).
      concurrency: process.platform === 'win32' ? 1 : undefined
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // The stylesheets still use @import for shared mixins in some pages.
          silenceDeprecations: ['import']
        }
      }
    }
  }
})
