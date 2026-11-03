<template>
  <footer>
    <div class="footer--bottom_container">
      <div class="footer--bottom maxWidth">
        <div class="logo--container">
          <NuxtLink class="logo" to="/" aria-label="Galexia home">
            <div v-html="inlineSvg('logo_v2')" />
          </NuxtLink>
        </div>
        <div class="footer--bottom_contact">
          <h4>Telephone</h4>
          <a href="" @click.prevent="callUs">07521 491222</a>
          <h4>Email</h4>
          <a href="mailto:info@galexia.agency">info@galexia.agency</a>
          <h4>Quick Links</h4>
          <div class="footer--bottom_sitemap">
            <NuxtLink class="footer--bottom_navLink" to="/our-team/">
              Our Team
            </NuxtLink>
            <NuxtLink class="footer--bottom_navLink" to="/legal/">
              Legal
            </NuxtLink>
          </div>
        </div>
        <LayoutTestimonials />
      </div>
      <div class="footer--copyright">
        <div class="footer--copyrightInner maxWidth">
          <p>
            © {{ year }} Galexia Creative Agency Ltd. A
            company registered in England and Wales. Company No. 12853224.
          </p>
          <div class="socialLinks">
            <a href="https://www.policybee.co.uk/" target="_blank">
              <SiteImage src="/img/White_Badge_PolicyBee.png" width="75" height="75" alt="Insured through PolicyBee" />
            </a>
            <a href="https://digitalagencynetwork.com/agencies/cambridge" target="_blank" class="DAN">
              <img
                style="width: 160px; height: auto"
                src="https://digitalagencynetwork.com/wp-content/themes/danglobal/assets/images/badges/dark.svg"
                alt="Cambridge digital agency network member badge dark"
              >
            </a>
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :title="social.title"
            >
              <FontAwesomeIcon :icon="['fab', social.icon]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const socials = [
  { href: 'https://fb.me/GalexiaAgency', title: 'Facebook', icon: 'facebook' },
  { href: 'https://www.instagram.com/galexia_agency', title: 'Instagram', icon: 'instagram' },
  { href: 'https://www.twitter.com/galexia_agency', title: 'Twitter', icon: 'twitter' },
  { href: 'https://www.linkedin.com/company/galexia-agency', title: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/orgs/Galexia-Agency/', title: 'GitHub', icon: 'github' }
]

// The Calendly widget script is loaded in the page head.
function callUs () {
  window.Calendly?.initPopupWidget({ url: 'https://calendly.com/galexia/phone-call' })
}
</script>
