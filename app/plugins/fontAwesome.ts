import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt, faChevronLeft, faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineNuxtPlugin } from '#imports'

// The stylesheet is bundled above, so server-rendered icons are sized before hydration.
config.autoAddCss = false

library.add(faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faWhatsapp, faShareAlt, faChevronLeft, faChevronRight, faQuestion, faCheckCircle, faTimesCircle)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

declare module 'vue' {
  interface GlobalComponents {
    // eslint-disable-next-line @typescript-eslint/naming-convention -- the component's registered name
    FontAwesomeIcon: typeof FontAwesomeIcon
  }
}
