import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt, faChevronLeft, faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faWhatsapp, faShareAlt, faChevronLeft, faChevronRight, faQuestion, faCheckCircle, faTimesCircle)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
