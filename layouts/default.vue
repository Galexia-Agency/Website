
<style>

  /* Resets */
  html {
    --delay: 0;

    background: white
  }
  body {
    background-color: white;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: white;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    scroll-behavior: var(--motion);
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../assets/img/SpaceBackgroundBlurred.jpg?webp')
  }
  body.no-webp {
    background-image: url('../assets/img/SpaceBackgroundBlurred.jpg?resize')
  }

  @media (min-width: 1700px) {
    body {
      background-size: 125vw
    }
  }
  ::selection {
    background: #1C2AB1;
    color: white /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: #1C2AB1;
    color: white /* Gecko Browsers */
  }
  * {
    box-sizing: border-box;
    outline-color: #1A237E
  }
  :any-link {
    text-decoration: none;
    color: inherit;
    transition: opacity .25s
  }
  :any-link:focus {
    opacity: .5
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, serif;
    font-weight: 700
  }
  h1 {
    font-size: 3.5rem;
    line-height: 1;
    color: #1A237E
  }
  h2 {
    font-size: 3rem;
    line-height: 1
  }
  h3 {
    font-size: 2rem;
    line-height: 1.125
  }
  h4 {
    font-size: 1.75rem;
    line-height: 1.125
  }
  h5 {
    font-size: 1.5rem;
    line-height: 1.125
  }
  h6 {
    font-size: 1.25rem;
    line-height: 1.225
  }
  .text--normal {
    opacity: .9;
    line-height: 1.6
  }
  button {
    font-family: Open Sans, sans-serif
  }
  main .button:any-link {
    color: white;
    font-weight: normal
  }
  main .button:any-link:hover, main .button :any-link:hover {
    text-decoration: none
  }
  .button {
    border: 0;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    font-family: Open Sans, sans-serif;
    padding: .75rem 1.25rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
    background-color: #1A237E;
    border-radius: .25rem;
    display: inline-block;
    transition: opacity .5s;
    box-shadow:
      0 1.8px .7px rgba(0, 0, 0, .011),
      0 4.3px 1.6px rgba(0, 0, 0, .013),
      0 8.1px 3px rgba(0, 0, 0, .014),
      0 14.5px 5.4px rgba(0, 0, 0, .014),
      0 27.2px 10px rgba(0, 0, 0, .015),
      0 65px 24px rgba(0, 0, 0, .02)
  }
  .button.colorTwo {
    background-color: #534BAE
  }
  .button:hover {
    opacity: .75
  }
  .button:disabled {
    background: linear-gradient(180deg, rgba(83, 75, 174, .15) 0%, rgba(26, 35, 126, .15) 100%);
    color: #777777
  }
  .button:disabled:hover {
    opacity: 1
  }
  .button:disabled, .button:disabled:hover {
    cursor: not-allowed
  }
  .button + .button {
    margin-left: .5rem
  }
  label {
    font-size: .85rem;
    opacity: .85
  }
  input, textarea {
    border-radius: .25rem;
    border: none;
    box-shadow:
      0 1.8px .7px rgba(0, 0, 0, .02),
      0 4.3px 1.6px rgba(0, 0, 0, .02),
      0 8.1px 3px rgba(0, 0, 0, .02),
      0 14.5px 5.4px rgba(0, 0, 0, .02),
      0 27.2px 10px rgba(0, 0, 0, .02),
      0 65px 24px rgba(0, 0, 0, .05);
    background: -moz-linear-gradient(180deg, rgba(83, 75, 174, .15) 0%, rgba(26, 35, 126, .15) 100%);
    background: -webkit-linear-gradient(180deg, rgba(83, 75, 174, .15) 0%, rgba(26, 35, 126, .15) 100%);
    background: linear-gradient(180deg, rgba(83, 75, 174, .15) 0%, rgba(26, 35, 126, .15) 100%);
    font-size: 1rem;
    line-height: 1.75rem;
    font-family: Open Sans, sans-serif
  }
  input:not([type='submit']), textarea {
    padding: .33rem;
    width: 100%
  }
  textarea {
    resize: vertical
  }
  ::placeholder {
    color: #777777
  }

  /* Layout */
  #__nuxt {
    background: rgba(53, 47, 114, .33)
  }
  #__layout > div {
    min-height: 100vh;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
      'header'
      'main'
      'footer'
  }
  main {
    grid-area: main
  }
  main :any-link, main h2, main h3, main h4, main h5, main h6 {
    color: #1A237E;
    font-weight: bold
  }
  main h2 {
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0
  }
  main :any-link:hover {
    text-decoration: underline
  }

  /* Global helpers */
  .maxWidth {
    padding: 2rem;
    max-width: min(1376px, calc(100vw - 4rem));
    margin: auto
  }
  .white {
    background: white;
    color: #212121
  }

  /* Nav */
  nav {
    display: grid;
    grid-auto-flow: column
  }
  .logo--container {
    display: grid;
    align-content: center;
    justify-content: left
  }
  .logo {
    font-size: 3rem
  }
  .logo svg {
    fill: white;
    width: 250px
  }
  .logo svg text {
    font-size: 32px;
    font-family: Assistant-Light, Assistant, sans-serif;
    font-weight: 300;
    letter-spacing: 1.6px
  }
  .nav--container {
    justify-self: end;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    align-content: center
  }
  .nav--link {
    font-size: 1.25rem;
    padding: .5rem;
    transition: color .5s, border .5s;
    border-bottom: .15rem solid transparent;
    font-family: Assistant, sans-serif;
    letter-spacing: .05rem
  }
  .nav--link:hover {
    color: #FFFFFFAA
  }
  .nav--link:hover, .nav--link.nuxt-link-exact-active {
    border-bottom: .15rem solid #534BAE
  }
  .nav--icon {
    display: none
  }

  /* Footer */
  footer {
    grid-area: footer;
    width: 100%;
    background: linear-gradient(0deg, rgba(83, 75, 174, .75), rgba(0, 0, 81, .5))
  }
  footer h4 {
    font-size: 1.33rem
  }
  .footer--copyright {
    border-top: 1px solid white;
    padding: 1.5rem;
    line-height: 1.5rem;
    font-size: .9rem
  }
  .footer--copyrightInner {
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 2rem;
    padding: 0 2rem
  }
  .socialLinks {
    justify-self: end;
    font-size: 24px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    align-content: center
  }
  .socialLinks a {
    color: #FFFFFF99;
    transition: color .5s
  }
  .socialLinks a:hover {
    color: white
  }
  .footer--bottom {
    display: grid;
    grid-template-columns: .75fr .75fr 1fr;
    grid-gap: 1rem
  }
  .footer--bottom h4 {
    margin: 0;
    margin-bottom: 1rem
  }
  .footer--bottom .logo--container {
    grid-column: span 3;
    margin-bottom: 1rem
  }
  .footer--bottom .logo svg {
    width: 150px
  }
  .footer--bottom_sitemap {
    display: grid;
    grid-gap: .5rem
  }
  .footer--bottom_navLink, .footer--bottom_contact a {
    font-family: Assistant, sans-serif;
    font-size: 1.25rem;
    border-bottom: .15rem solid transparent;
    transition: border .5s, opacity .25s;
    width: fit-content
  }
  .footer--bottom_navLink:hover, .footer--bottom_contact a:hover, .footer--bottom_navLink.nuxt-link-exact-active {
    border-bottom: .15rem solid white
  }
  .footer--bottom_contact {
    display: grid
  }
  .footer--bottom_contact h4 {
    margin-bottom: .5rem
  }
  .footer--bottom_contact h4:not(:first-of-type) {
    margin-top: 1rem
  }

  /* Pages */
  section {
    padding: 2rem 0
  }
  .grid {
    display: grid;
    grid-gap: 6rem
  }
  .grid.left {
    grid-template-columns: 1fr .75fr
  }
  .grid.right {
    grid-template-columns: .75fr 1fr
  }
  .grid.column {
    grid-auto-flow: column;
    grid-gap: 2rem;
    padding-bottom: 4rem
  }
  .grid.column.two {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: unset
  }
  .grid.column.three {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: unset
  }
  .grid.column.four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: unset
  }
  .grid h3 {
    margin-top: 0
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
    overflow: visible
  }

  /* Cards */
  .card.white {
    box-shadow:
      0 0 2.2px rgba(0, 0, 0, .02),
      0 0 5.3px rgba(0, 0, 0, .028),
      0 0 10px rgba(0, 0, 0, .035),
      0 0 17.9px rgba(0, 0, 0, .042),
      0 0 33.4px rgba(0, 0, 0, .05),
      0 0 80px rgba(0, 0, 0, .07);
    border-radius: .5rem
  }
  .card.white .card--inner h3 {
    text-align: center
  }
  .card .tags span {
    display: inline-block;
    padding: .25rem;
    margin: 0 .25rem;
    border: 2px solid #1A237E;
    border-radius: .25rem
  }
  .card .tags span:first-of-type {
    margin-left: 0
  }
  .card--inner {
    padding: 2rem 1rem;
    display: grid;
    grid-gap: 1rem
  }
  .card--inner p {
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #212121
  }
  .card--inner * {
    margin: 0
  }

  /* Cookies */
  .cookieControl__ModalContent {
    overflow: auto
  }
  .cookieControl {
    padding: 0
  }
  .cookieControl__Bar {
    font-family: Open Sans, sans-serif
  }
  .cookieControl :any-link {
    color: #1A237E;
    font-weight: bold
  }
  .cookieControl :any-link:hover {
    text-decoration: underline
  }

  /* Legal */
  .legal h1 {
    font-size: 2rem
  }
  .legal h2 {
    font-size: 1.5rem;
    text-align: left;
    padding: 0;
    margin: .83em auto
  }
  .legal h3 {
    font-size: 1.33rem;
    opacity: .75;
    font-weight: normal
  }
  @media print {
    .cookieControl, nav, .footer--bottom, .socialLinks {
      display: none
    }
    .footer--copyrightInner {
      color: #212121
    }
  }

  /* Testimonials */
  .testimonials--container {
    display: grid
  }
  .testimonials {
    justify-self: right;
    width: 100%;
    max-width: 80vw;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .testimonials::-webkit-scrollbar {
    display: none
  }
  .testimonial {
    scroll-snap-align: center;
    scroll-snap-stop: always
  }
  .testimonial p {
    margin: 0;
    font-weight: 300;
    line-height: 1.5;
    opacity: .85
  }
  .testimonial .company {
    font-size: 1.33rem;
    margin-top: .75rem;
    text-align: right
  }
  .testimonials--controls {
    justify-self: end;
    margin-top: 1rem
  }
  .testimonials--controls * {
    display: inline
  }
  .testimonials--controls button {
    margin: 1rem;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1rem
  }
  .testimonials--controls button:disabled {
    cursor: not-allowed;
    opacity: .5
  }

  @media (max-width: 768px) {
    .testimonial .company {
      text-align: center
    }
  }

  /* Hosting SVG */
  .st0 { opacity: .7 }
  .st1 { fill: url(#SVGID_1_) }
  .st2 { fill: #E0E0E0 }
  .st3 {
    opacity: .1;
    enable-background: new
  }
  .st4 { fill: #6C63FF }
  .st5 { fill: #FDB797 }
  .st6 { fill: #333333 }
  .st7 { fill: url(#SVGID_2_) }
  .st8 { fill: #3CACBB }
  .st9 { fill: #23C3B7 }
  .st10 { fill: url(#SVGID_3_) }
  .st11 { fill: #252F3E }
  .st12 { fill: #FF9900 }
  .st13 { fill: url(#SVGID_4_) }
  .st14 { fill: #CAC9C2 }
  .st15 { fill: white }
  .st16 { fill: #5072AA }
  .st17 { fill: #4D6796 }
  .st18 { fill: #CC4232 }
  .st19 { fill: #B23F33 }
  .st20 { fill: #ECB02A }
  .st21 { fill: #C79732 }

  /* Animation */
  .hidden {
    opacity: 0
  }
  @media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
    .hidden-right {
      transform: translate(50px, 0)
    }
    .hidden-left {
      transform: translate(-50px, 0)
    }
  }
  .showElement {
    opacity: 1;
    transform: translate(0, 0);
    transition: all .75s ease-out;
    transition-delay: var(--delay)
  }

  @media (max-width: 1435px) {
    .footer--copyrightInner {
      padding: 0 4rem
    }
  }

  @media (max-width: 1110px) {
    .grid.column.four {
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: row
    }
  }

  @media (max-width: 900px) {
    .text--normal {
      opacity: .95
    }
    .socialLinks a {
      color: white
    }
    .cookieControl__ControlButton {
      bottom: 10px
    }
    .logo svg {
      width: 150px
    }
    #__nuxt {
      width: 100vw
    }
    .grid.column.three, .grid.left, .grid.right, .grid.column.two {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      place-items: center
    }
    .grid.left div.svg {
      grid-row: 1
    }
    .grid svg, .card img {
      justify-self: center;
      max-width: 300px
    }
    .nav--icon {
      display: block;
      fill: white;
      justify-self: end;
      align-self: center
    }
    .nav--container {
      height: 100vh;
      min-height: -webkit-fill-available;
      position: absolute;
      grid-auto-flow: row;
      left: 100vw;
      top: 0;
      bottom: 0;
      width: 200px;
      background: linear-gradient(0deg, rgba(83, 75, 174, .75), rgba(0, 0, 81, .5));
      padding: 2.5rem;
      transition: left 1s
    }
    .nav_open .nav--container {
      left: calc(100vw - 200px)
    }
    .nav_close .nav--container {
      display: none
    }
    html {
      transition: margin 1s
    }
    html.nav_open {
      margin-left: -200px;
      overflow: hidden
    }
    section {
      padding: 1rem
    }
    .grid {
      grid-gap: 4rem
    }
    .footer--bottom {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      padding: 2rem;
      max-width: 600px;
      width: 90%;
      text-align: center
    }
    .footer--bottom a {
      display: inline;
      margin: auto;
      font-size: 1rem
    }
    .footer--bottom .logo--container {
      margin: 0 auto 1rem;
      grid-column: 1
    }
    .footer--bottom_sitemap, .footer--bottom_contact {
      grid-template-columns: 1fr 1fr;
      max-width: 360px;
      width: 100%;
      margin: auto
    }
    .footer--bottom_contact {
      grid-auto-flow: column;
      grid-row-gap: 1rem;
      grid-template-rows: 1fr 1fr
    }
    .footer--bottom_contact h4, .footer--bottom_contact h4:not(:first-of-type), .footer--bottom_contact a {
      margin: 0 auto
    }
    .testimonials {
      margin-top: 1rem
    }
    .footer--copyright {
      padding: .5rem
    }
    .showElement {
      /* stylelint-disable-next-line */
      --delay: 0s!important
    }
  }
  @media (max-width: 600px) {
    .cookieControl__ControlButton {
      bottom: 35px
    }
    .footer--copyrightInner {
      padding: 0 1rem;
      grid-template-columns: 1fr;
      place-items: center;
      grid-gap: 1rem
    }
    .footer--copyrightInner p {
      width: 100%;
      text-align: center
    }
    .socialLinks {
      justify-self: center;
      padding-bottom: 1rem
    }
  }
  @media (max-width: 500px) {
    .grid.column.four {
      grid-template-columns: 1fr
    }
    .grid svg {
      max-width: 200px;
      margin: auto
    }
    .grid {
      grid-gap: 2rem
    }
    .maxWidth {
      padding: 1rem;
      max-width: 100%
    }
    .footer--copyrightInner {
      padding: 0 1rem
    }
    main > div > section:first-of-type {
      padding-top: 2rem
    }
    section {
      padding: 0
    }
    h2 {
      font-size: 2rem;
      line-height: 1.125
    }
    h3 {
      font-size: 1.5rem;
      line-height: 1.225
    }
    .footer--bottom {
      width: 100%
    }
    .testimonials {
      max-width: 90vw
    }
  }
</style>

<template>
  <div :style="'--motion: ' + motion">
    <header>
      <nav class="maxWidth">
        <div class="logo--container">
          <nuxt-link class="logo" to="/">
            <div v-html="require('../assets/svg/logo_v2.svg?include')" />
          </nuxt-link>
        </div>
        <div class="nav--icon">
          <Hamburger type="arrow" color="white" />
        </div>
        <div class="nav--container">
          <nuxt-link to="/" class="nav--link">
            Home
          </nuxt-link>
          <nuxt-link to="/web/" class="nav--link">
            Web
          </nuxt-link>
          <nuxt-link to="/blog/" class="nav--link">
            Blog
          </nuxt-link>
          <nuxt-link to="/careers/" class="nav--link">
            Careers
          </nuxt-link>
          <nuxt-link to="/contact/" class="nav--link">
            Contact
          </nuxt-link>
        </div>
      </nav>
    </header>
    <main>
      <nuxt keep-alive />
    </main>
    <footer>
      <CookieControl>
        <template v-slot:bar>
          <p>
            We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more, please read our <nuxt-link to="/legal/cookie-policy/">
              Cookie Policy
            </nuxt-link>.
          </p>
        </template>
      </CookieControl>
      <div class="footer--bottom_container">
        <div class="footer--bottom maxWidth">
          <div class="logo--container">
            <nuxt-link class="logo" to="/">
              <div v-html="require('../assets/svg/logo_v2.svg?include')" />
            </nuxt-link>
          </div>
          <div>
            <div class="footer--bottom_sitemap">
              <nuxt-link class="footer--bottom_navLink" to="/support/">
                Website Support
              </nuxt-link>
              <nuxt-link class="footer--bottom_navLink" to="/hosting/">
                Hosting
              </nuxt-link>
              <nuxt-link class="footer--bottom_navLink" to="/legal/">
                Legal
              </nuxt-link>
            </div>
          </div>
          <div>
            <div class="footer--bottom_contact">
              <h4>Telephone</h4>
              <a href="tel:+07521 491222">07521 491222</a>
              <h4>Email</h4>
              <a href="mailto:info@galexia.agency">info@galexia.agency</a>
            </div>
          </div>
          <div class="testimonials--container">
            <div class="testimonials">
              <div v-for="(testimonial, index) in posts" :key="index" class="testimonial">
                <div v-html="testimonial.content" />

                <div class="company" v-html="'- ' + testimonial.title" />
              </div>
            </div>
            <div class="testimonials--controls">
              <button aria-label="previous" :disabled="count === 1" @click="left">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
              </button>
              <p><span>{{ count }}</span> / <span>{{ posts.length }}</span></p>
              <button aria-label="next" :disabled="count === posts.length" @click="right">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </button>
            </div>
          </div>
        </div>
        <div class="footer--copyright">
          <div class="footer--copyrightInner maxWidth">
            <p>
              © {{ new Date().getFullYear() }} Galexia Creative Agency Ltd. A company registered in England and Wales. Company No. 12853224.
            </p>
            <div class="socialLinks">
              <a href="https://fb.me/GalexiaAgency" target="_blank" rel="noopener noreferrer" title="Facebook">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="https://www.instagram.com/galexia_agency" target="_blank" rel="noopener noreferrer" title="Instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.twitter.com/galexia_agency" target="_blank" rel="noopener noreferrer" title="Twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="https://www.linkedin.com/company/galexia-agency" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://github.com/orgs/Galexia-Agency/" target="_blank" rel="noopener noreferrer" title="GitHub">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Hamburger from 'vue-hamburger/hamburger.vue'

export default {
  components: {
    Hamburger
  },
  data () {
    return {
      count: 1,
      posts: [],
      blogs: [],
      motion: 'auto',
      background_size: null
    }
  },
  watch: {
    $route () {
      document.documentElement.classList.remove('nav_open')
      const self = this
      setTimeout(function () {
        document.documentElement.classList.add('nav_close')
        self.background()
      }, 1000)
    }
  },
  async beforeMount () {
    if (await this.WebpIsSupported()) {} else {
      document.querySelector('body').classList.add('no-webp')
    }
    this.posts = this.$store.state.testimonials
    this.blogs = this.$store.state.blog
  },
  async mounted () {
    this.motion = await window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    this.background()
    const self = this
    window.addEventListener('resize', function () {
      self.background()
    })
  },
  methods: {
    background () {
      const body = document.body
      const html = document.documentElement
      const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      if (this.background_size < height) {
        document.body.style.backgroundSize = height > ((window.innerWidth * 1.6875) * 1.25) ? height + 'px' : '125vw'
        this.background_size = height
      }
    },
    async WebpIsSupported () {
      // If the browser doesn't have the method createImageBitmap, you can't display webp format
      if (!self.createImageBitmap) {
        return false
      }

      // Base64 representation of a white point image
      const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='

      // Retrieve the Image in Blob Format
      const blob = await fetch(webpData).then(r => r.blob())

      // If the createImageBitmap method succeeds, return true, otherwise false
      return createImageBitmap(blob).then(() => true, () => false)
    },
    left () {
      if (this.count !== 1) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: -width,
          behavior: this.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round((container.scrollLeft / width) + 1)
        }, 300)
      }
    },
    right () {
      if (this.count !== this.posts.length) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: width,
          behavior: this.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round((container.scrollLeft / width) + 1)
        }, 300)
      }
    }
  }
}
</script>
