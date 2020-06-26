
<style>
  /* Resets */
  body {
    background-color: white;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: white;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    scroll-behavior: smooth
  }
  #__layout {
    background-image: url('../assets/img/SpaceBackgroundBlurred.jpg');
    background-size: cover;
    background-repeat: no-repeat
  }
  * {
    box-sizing: border-box;
    outline-color: #1A237E
  }
  :any-link {
    text-decoration: none;
    color: inherit
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, serif;
    font-weight: 700
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
    padding: .33rem
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
    background: linear-gradient(0deg, rgba(83, 75, 174, .5), rgba(0, 0, 81, .35))
  }
  .header--inner {
    padding: 6rem 0 7.5rem 0;
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
    font-size: 2.5rem
  }
  .header--inner h1 i {
    border-bottom: .25rem solid white
  }

  /* Nav */
  nav {
    display: grid;
    grid-auto-flow: column
  }
  .logo {
    font-size: 3rem
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
    grid-auto-flow: column
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
    margin: 2rem auto
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
    margin: .25rem 0;
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
  .card--inner {
    padding: 2rem 1rem;
    display: grid;
    grid-gap: 1rem
  }
</style>

<template>
  <div>
    <header>
      <nav class="maxWidth">
        <nuxt-link class="logo" to="/">
          Galexia
        </nuxt-link>
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
      <div v-if="page.display" class="header--inner maxWidth">
        <!-- eslint-disable-next-line -->
        <h1 v-if="page.title" v-html="page.title" />
        <!-- eslint-disable-next-line -->
        <h2 v-if="page.subTitle" v-html="page.subTitle" />
        <!-- eslint-disable-next-line -->
        <p v-if="page.desc" v-html="page.desc" />
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <div class="footer--bottom_container">
        <div class="footer--bottom maxWidth">
          <div class="footer--bottom_sitemap">
            <h4>Galexia</h4>
            <a class="footer--bottom_navLink" href="https://client.galexia.agency">
              Client Login
            </a>
            <nuxt-link class="footer--bottom_navLink" to="/Privacy-Policy">
              Privacy Policy
            </nuxt-link>
            <nuxt-link class="footer--bottom_navLink" to="/Cookie-Policy">
              Cookie Policy
            </nuxt-link>
            <nuxt-link class="footer--bottom_navLink" to="/Terms">
              Terms & Conditions
            </nuxt-link>
          </div>
          <div class="footer--bottom_contact">
            <h4>Telephone</h4>
            <a href="tel:01763221838">01763221838</a>
            <h4>Email</h4>
            <a href="mailto:info@galexia.agency">info@galexia.agency</a>
          </div>
          <Testimonials />
        </div>
        <div class="footer--copyright">
          <p class="maxWidth">
            © {{ new Date().getFullYear() }} Galexia. Company No: 123456789.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Testimonials from '../components/testimonials'

export default {
  components: {
    Testimonials
  },
  data () {
    return {
      page: {
        display: true,
        title: '',
        subTitle: '',
        desc: ''
      }
    }
  }
}
</script>
