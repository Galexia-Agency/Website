
<style>
  /* Resets */
  html {
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
    scroll-behavior: smooth;
    background-image: url('../assets/img/SpaceBackgroundBlurred.jpg');
    background-size: cover;
    background-repeat: no-repeat
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
    color: inherit
  }
  :any-link:focus {
    opacity: .5
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, serif;
    font-weight: 700
  }
  h1 {
    font-size: 3rem;
    color: #1A237E
  }
  button {
    font-family: Open Sans, sans-serif
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
    transition: .5s;
    box-shadow:
      0 1.8px .7px rgba(0, 0, 0, .011),
      0 4.3px 1.6px rgba(0, 0, 0, .013),
      0 8.1px 3px rgba(0, 0, 0, .014),
      0 14.5px 5.4px rgba(0, 0, 0, .014),
      0 27.2px 10px rgba(0, 0, 0, .015),
      0 65px 24px rgba(0, 0, 0, .02)
  }
  .button:hover {
    background-color: #1C2AB1
  }
  .button.colorTwo {
    background-color: #534BAE
  }
  .button.colorTwo:hover {
    background-color: #7C72EF
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
  main :any-link:hover {
    text-decoration: underline
  }

  /* Global helpers */
  .maxWidth {
    padding: 2rem;
    max-width: 1376px;
    margin: auto
  }
  .white {
    background: white;
    color: #212121
  }

  /* Header */
  header {
    background: rgba(53, 47, 114, .33)
  }
  .header--inner {
    padding: 6rem 2rem 7.5rem 2rem;
    max-width: 780px;
    margin: auto;
    text-align: center;
    display: grid;
    grid-gap: 2rem
  }
  .header--inner * {
    margin: 0
  }
  .header--inner p {
    font-size: 18px
  }
  .header--inner h1 {
    font-size: 2.5rem;
    color: white
  }
  .header--inner h1 i {
    border-bottom: .25rem solid white
  }

  /* Nav */
  nav {
    display: grid;
    grid-auto-flow: column
  }
  .logo--container {
    display: grid;
    align-content: center
  }
  .logo {
    font-size: 3rem;
    display: inline-grid
  }
  .logo svg {
    fill: white;
    width: 200px
  }
  .logo svg .cls-3 {
    stroke: white
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
    transition: .5s;
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
    line-height: .9rem;
    font-size: .9rem
  }
  .footer--bottom {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: .75fr .75fr 1fr;
    grid-gap: 1rem
  }
  .footer--bottom h4 {
    margin: 0;
    margin-bottom: 1rem
  }
  .footer--bottom_sitemap {
    display: grid;
    grid-gap: .5rem
  }
  .footer--bottom_navLink, .footer--bottom_contact a {
    font-family: Assistant, sans-serif;
    font-size: 1.25rem;
    border-bottom: .15rem solid transparent;
    transition: .5s;
    width: fit-content
  }
  .footer--bottom_navLink:hover, .footer--bottom_contact a:hover {
    border-bottom: .15rem solid white
  }
  .footer--bottom_contact {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: .5rem
  }
  .footer--bottom_contact * {
    margin: 0;
    height: fit-content
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
  .grid.column.three {
    grid-template-columns: 1fr 1fr 1fr
  }
  .grid.column.four {
    grid-template-columns: 1fr 1fr 1fr 1fr
  }
  h2 {
    text-align: center;
    font-size: 3rem;
    margin: 0 auto;
    padding: 2rem 0
  }
  h3 {
    font-size: 2rem
  }
  svg {
    display: block;
    width: 100%;
    height: auto
  }
  :any-link.card {
    display: block;
    transition: .5s
  }
  :any-link.card * {
    margin: 0
  }
  :any-link.card .tags span {
    display: inline-block;
    padding: .25rem;
    margin: 0 .25rem;
    border: 2px solid #1A237E;
    border-radius: .25rem
  }
  :any-link.card:hover {
    text-decoration: none;
    background-color: #1A237E;
    color: white
  }
  :any-link.card:hover h3 {
    color: white
  }
  :any-link.card:hover .tags span {
    border: 2px solid white
  }
  :any-link.card:hover .card--inner p {
    color: white
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
    color: black
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

  @media (max-width: 1110px) {
    .grid.column.four {
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: row
    }
  }

  @media (max-width: 900px) {
    .logo svg {
      width: 150px
    }
    #__nuxt {
      width: 100vw
    }
    .grid.column.three, .grid.left, .grid.right {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      place-items: center
    }
    .grid.left svg {
      grid-row: 1
    }
    .grid svg, .card img {
      justify-self: center;
      max-width: 300px
    }
    .nav--icon {
      display: block;
      fill: white;
      height: 40px;
      width: 40px;
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
      transition: 1s
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
      text-align: center
    }
    .footer--bottom a {
      display: block;
      width: 100%;
      margin: auto;
      font-size: 1rem
    }
    .footer--copyright {
      padding: .5rem
    }
  }
  @media (max-width: 500px) {
    .grid.column.four {
      grid-template-columns: 1fr
    }
    .grid svg {
      max-width: 200px
    }
    .grid {
      grid-gap: 2rem
    }
    .maxWidth {
      padding: 1rem
    }
    main > div > section:first-of-type {
      padding-top: 2rem
    }
    section {
      padding: 0
    }
    .header--inner {
      padding: 2rem 1rem 4rem 1rem
    }
    .header--inner h1 {
      font-size: 1.75rem
    }
    .header--inner p {
      font-size: 16px
    }
    h2 {
      font-size: 2rem
    }
    h3 {
      font-size: 1.5rem
    }
  }
</style>

<template>
  <div>
    <header>
      <nav class="maxWidth">
        <div class="logo--container">
          <nuxt-link class="logo" to="/">
            <LogoSVG />
          </nuxt-link>
        </div>
        <div class="nav--icon">
          <MenuSVG @click="nav" />
        </div>
        <div class="nav--container">
          <nuxt-link to="/" class="nav--link">
            Home
          </nuxt-link>
          <nuxt-link to="/web" class="nav--link">
            Web
          </nuxt-link>
          <nuxt-link to="/marketing" class="nav--link">
            Marketing
          </nuxt-link>
          <nuxt-link to="/blog" class="nav--link">
            Blog
          </nuxt-link>
          <nuxt-link to="/careers" class="nav--link">
            Careers
          </nuxt-link>
          <nuxt-link to="/contact" class="nav--link">
            Contact
          </nuxt-link>
        </div>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <CookieControl>
        <template v-slot:bar>
          <p>
            We use cookies and other tracking technologies to improve your browsing experience on our site, analyze site traffic, and understand where our audience is coming from. To find out more, please read our <nuxt-link to="/Cookie-Policy">
              Cookie Policy
            </nuxt-link>.
          </p>
        </template>
      </CookieControl>
      <div class="footer--bottom_container">
        <div class="footer--bottom maxWidth">
          <div class="footer--bottom_sitemap">
            <h4>Galexia</h4>
            <a class="footer--bottom_navLink" href="#">
              Client Login (Coming Soon)
            </a>
            <nuxt-link class="footer--bottom_navLink" to="/Privacy-Policy">
              Privacy Policy
            </nuxt-link>
            <nuxt-link class="footer--bottom_navLink" to="/Cookie-Policy">
              Cookie Policy
            </nuxt-link>
            <nuxt-link class="footer--bottom_navLink" to="/Terms">
              Terms of Service
            </nuxt-link>
            <nuxt-link class="footer--bottom_navLink" to="/GDPR">
              GDPR Statement
            </nuxt-link>
          </div>
          <div class="footer--bottom_contact">
            <h4>Telephone</h4>
            <a href="tel:+447477737535">07477737535</a>
            <h4>Email</h4>
            <a href="mailto:info@galexia.agency">info@galexia.agency</a>
          </div>
          <Testimonials />
        </div>
        <div class="footer--copyright">
          <p class="maxWidth">
            © {{ new Date().getFullYear() }} Galexia Ltd<span style="display: none">. Company No: 123456789.</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Testimonials from '../components/testimonials'

// eslint-disable-next-line
import LogoSVG from '-!vue-svg-loader!../assets/svg/logo.svg'
// eslint-disable-next-line
import MenuSVG from '-!vue-svg-loader!../assets/svg/menu.svg'

export default {
  components: {
    Testimonials,
    LogoSVG,
    MenuSVG
  },
  data () {
    return {
      metaHelper: {
        title: 'Home',
        description: 'We are a creative agency specialising in website design development and marketing. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practises and technologies so that we can pass on these benefits to you.',
        image: 'https://galexia.agency/android-chrome-192x192.png'
      }
    }
  },
  watch: {
    $route () {
      document.documentElement.classList.remove('nav_open')
      setTimeout(function () {
        document.documentElement.classList.add('nav_close')
      }, 1000)
    }
  },
  mounted () {
    document.documentElement.classList.add('nav_close')
  },
  methods: {
    nav () {
      if (document.documentElement.classList.contains('nav_open')) {
        document.documentElement.classList.remove('nav_open')
        setTimeout(function () {
          document.documentElement.classList.add('nav_close')
        }, 1000)
      } else {
        document.documentElement.classList.remove('nav_close')
        setTimeout(function () {
          document.documentElement.classList.add('nav_open')
        }, 1)
      }
    }
  },
  head () {
    return {
      title: this.metaHelper.title,
      meta: [
        { hid: 'description', name: 'description', content: this.metaHelper.description },
        { hid: 'og:title', name: 'og:title', content: this.metaHelper.title },
        { hid: 'og:description', name: 'og:description', content: this.metaHelper.description },
        { hid: 'og:image', name: 'og:image', content: this.metaHelper.img },
        { hid: 'twitter:title', name: 'twitter:title', content: this.metaHelper.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.metaHelper.description },
        { hid: 'twitter:img', name: 'twitter:img', content: this.metaHelper.image }
      ]
    }
  }
}
</script>
