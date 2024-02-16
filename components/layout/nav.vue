<style lang="scss" scoped>
.nav-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between
}
.nav-container {
  display: flex;
  gap: 1rem;
  align-items: center
}
.nav-link {
  padding: .5rem;
  font-size: 1.25rem;
  font-family: Assistant, Assistant Fallback, sans-serif;
  letter-spacing: .05rem;
  border-bottom: .15rem solid transparent;
  transition: color .5s, border .5s;
  &:hover {
    color: #FFFFFFAA
  }
  &:hover,
  &.nuxt-link-exact-active {
    border-bottom: .15rem solid var(--secondaryColor)
  }
}
.nav--button {
  margin-left: .5rem;
  color: white;
  background-color: var(--secondaryColor);
  border: none;
  border-radius: .25rem;
  box-shadow: 0 5px 5px rgb(26 35 126 / 8%);
  transition: opacity .5s;
  &:hover {
    color: white;
    opacity: .75
  }
  &:hover,
  &.nuxt-link-exact-active {
    border: none
  }
}
.nav-icon {
  display: none
}
.services-mega-menu-wrapper {
  position: relative;
  .nav-link {
    border: none;
    cursor: pointer;
    &:hover {
      color: white
    }
    &:hover,
    &.nuxt-link-exact-active {
      border: none
    }
  }
  .services-mega-menu {
    position: absolute;
    top: calc(100% + 1rem);
    left: 50%;
    width: max-content;
    background-color: rgb(53 47 114 / 90%);
    border-radius: .5rem;
    transform: translateX(-50%);
    opacity: 0;
    backdrop-filter: blur(5px);
    transition: opacity .25s ease-in-out;
    pointer-events: none;
    &:before {
      position: absolute;
      top: calc(0px - .5rem);
      left: 50%;
      display: block;
      width: 1rem;
      height: 1rem;
      background-color: rgb(53 47 114 / 90%);
      transform: translateX(-50%) rotate(45deg);
      content: ''
    }
    .services-mega-menu-inner {
      display: grid;
      grid-template-columns: 1fr auto;
      column-gap: 4rem;
      .services-mega-menu-main-links,
      .services-mega-menu-checkup-links {
        display: grid;
        height: fit-content;
        row-gap: .75rem
      }
      .nav-sub-link {
        width: fit-content;
        padding-bottom: .25rem;
        color: white;
        font-weight: 300;
        font-size: 1.1rem;
        font-family: Assistant, Assistant Fallback, sans-serif;
        letter-spacing: .025rem;
        border-bottom: .15rem solid transparent;
        transition: color .5s, border .5s;
        &:hover {
          color: #FFFFFFAA
        }
        &:hover,
        &.nuxt-link-exact-active {
          border-bottom: .15rem solid var(--secondaryColor)
        }
      }
      .nav-checkup-link {
        width: fit-content;
        padding: .75rem 1.25rem;
        color: white;
        font-size: 1rem;
        background-color: var(--secondaryColor);
        border: none;
        border-radius: .25rem;
        box-shadow: 0 5px 5px rgb(26 35 126 / 8%);
        transition: opacity .5s;
        &:hover {
          color: white;
          opacity: .75
        }
      }
    }
  }
  &:hover,
  &:focus,
  &:focus-within {
    .services-mega-menu {
      opacity: 1;
      pointer-events: auto
    }
  }
}
@media (max-width: 1070px) {
  .nav-container {
    grid-auto-flow: row
  }
  .js-active {
    transition: margin 1s;
    .nav--icon {
      display: block;
      align-self: center;
      justify-self: end;
      fill: white
    }
    &.nav_open {
      margin-left: -200px;
      overflow: hidden
    }
    .nav-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: var(--100vw);
      width: 200px;
      height: 100vh;

      /* stylelint-disable-next-line declaration-property-value-no-unknown */
      min-height: stretch;
      padding: 1rem;
      background: linear-gradient(
        0deg,
        rgb(83 75 174 / 75%),
        rgb(0 0 81 / 50%)
      );
      transition: left 1s
    }
    &.nav_open .nav-container {
      left: calc(var(--100vw) - 200px)
    }
    &.nav_close .nav-container {
      display: none
    }
  }
}
@media (max-width: 900px) {
  .nav {
    grid-auto-flow: row;
    justify-content: center;
    .js-active & {
      grid-auto-flow: column;
      justify-content: initial
    }
  }
}
@media print {
  nav {
    display: none
  }
}
</style>

<template>
  <nav class="nav">
    <div class="nav-inner layout--max-width">
      <Logo :lg-width="250" :md-width="175" :sm-width="150" />
      <div class="nav-icon">
        <Hamburger type="arrow" color="white" :expanded="navIsExpanded" />
      </div>
      <div class="nav-container">
        <nuxt-link to="/" class="nav-link">
          Home
        </nuxt-link>
        <div class="services-mega-menu-wrapper">
          <span class="nav-link" tabindex="0">
            Services
          </span>
          <div class="services-mega-menu">
            <div class="services-mega-menu-inner layout--max-width">
              <div class="services-mega-menu-main-links">
                <nuxt-link to="/web/" class="nav-sub-link">
                  Bespoke WordPress Websites
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-sub-link">
                  Branding
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-sub-link">
                  Content Creation
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-sub-link">
                  Copywriting
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-sub-link">
                  Search Engine Optimisation
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-sub-link">
                  Social Media Management
                </nuxt-link>
                <nuxt-link to="/hosting/" class="nav-sub-link">
                  Website Hosting
                </nuxt-link>
              </div>
              <div class="services-mega-menu-checkup-links">
                <nuxt-link to="/marketing/" class="nav-checkup-link">
                  Free SEO Checkup
                </nuxt-link>
                <nuxt-link to="/marketing/" class="nav-checkup-link">
                  Free Business Email Checkup
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/blog/" class="nav-link">
          Our Blog
        </nuxt-link>
        <nuxt-link to="/contact/" class="nav-link nav--button">
          Contact Us
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Hamburger from 'vue-hamburger/hamburger.vue'

export default {
  components: {
    Hamburger
  },
  data () {
    return {
      navIsExpanded: false
    }
  },
  watch: {
    $route () {
      document.documentElement.classList.remove('nav_open')
      setTimeout(function () {
        document.documentElement.classList.add('nav_close')
        // eslint-disable-next-line no-undef
        background()
      }, 1000)
    }
  },
  beforeMount () {
    this.navIsExpanded = window.navIsExpanded
    // Handle swiping to close the nav on mobile
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)

    let xDown = null
    let yDown = null

    function getTouches (evt) {
      return evt.touches
    }

    function handleTouchStart (evt) {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    function handleTouchMove (evt) {
      if (!xDown || !yDown) {
        return
      }

      const xUp = evt.touches[0].clientX
      const yUp = evt.touches[0].clientY

      const xDiff = xDown - xUp
      const yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
          document.documentElement.classList.remove('nav_open')
          window.navIsExpanded = null
          setTimeout(function () {
            document.documentElement.classList.add('nav_close')
            window.navIsExpanded = false
          }, 500)
        }
      }
      /* reset values */
      xDown = null
      yDown = null
    }
  }
}
</script>
