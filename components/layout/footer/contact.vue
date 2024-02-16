<style lang="scss" scoped>
.footer-contact-title {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.33rem;
  &:not(:first-of-type),
  .footer-contact-sitemap & {
    margin-top: 1rem
  }
}
.footer-contact-sitemap-links {
  display: grid;
  gap: .25rem
}
.footer-nav-link {
  width: fit-content;
  font-size: 1.25rem;
  font-family: Assistant, Assistant Fallback, sans-serif;
  border-bottom: .15rem solid transparent;
  transition: border .5s, opacity .25s;
  &:hover,
  &.nuxt-link-exact-active {
    border-bottom: .15rem solid white
  }
}
@media (max-width: 900px) {
  .footer-contact {
    display: grid;
    grid-template-columns: 1fr 1fr
  }
  .footer-contact-title {
    margin-right: auto;
    margin-left: auto;
    .footer-contact-sitemap & {
      margin-top: 0
    }
  }
  .footer-nav-link {
    margin: 0 auto
  }
}
@media (max-width: 600px) {
  .footer-contact {
    display: contents
  }
}
</style>

<template>
  <div class="footer-contact">
    <div class="footer-contact-methods">
      <h4 class="footer-contact-title">
        Telephone
      </h4>
      <a
        href="javascript:void(0)"
        onclick="Calendly.initPopupWidget({url: 'https://calendly.com/galexia/phone-call'});return false;"
        class="footer-nav-link"
      >07521 491222</a>
      <h4 class="footer-contact-title">
        Email
      </h4>
      <a href="mailto:info@galexia.agency" class="footer-nav-link">info@galexia.agency</a>
    </div>
    <div class="footer-contact-sitemap">
      <h4 class="footer-contact-title">
        Quick Links
      </h4>
      <div class="footer-contact-sitemap-links">
        <nuxt-link class="footer-nav-link" to="/our-team/">
          Our Team
        </nuxt-link>
        <nuxt-link class="footer-nav-link" to="/legal/">
          Legal
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
