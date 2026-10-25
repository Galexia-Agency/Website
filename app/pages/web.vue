<style lang="scss">
.brands-using-wordpress img {
  width: 100%;
  opacity: .5;
  filter: grayscale(1)
}
</style>

<template>
  <div id="web">
    <PageHeader
      title="Web Design and Development"
      desc="We're in the business of building fast, secure, scalable sites. We specialize in WordPress as it aligns with our ethos as a company. You can find out more about it at <a href='https://wordpress.org'>WordPress.org</a> but that’s why you pay us; to take care of learning all about the latest and greatest standards in the world of the web so that you can focus on what you do best."
      :link="{location: '/hosting/', text: 'Check out our custom hosting'}"
    />
    <section class="white">
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Why us?</h3>
          <p class="text--normal">
            Simply put, many agencies can’t afford to learn and implement the latest and greatest technologies. They’re too busy supporting legacy systems and technologies to fully utilize modern developments within WordPress and the web industry.
          </p>
          <p class="text--normal">
            We’re a relatively new company, built from the ground up on the promise of delivering fast, secure, and scalable sites. We can build you a shiny new website or help update your current one.
          </p>
          <NuxtLink class="button" to="/contact/">
            Get in touch
          </NuxtLink>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('why_us')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('wordpress')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>WordPress</h3>
          <p class="text--normal">
            We think WordPress is great. In fact, we use it for many of our internal projects. There are over 50,000 plugins for all sorts of requirements. It’s open-source and maintained by a great community. It’s easy for your staff or content producers to edit the site with the intuitive backend. There are some caveats to WordPress such as each page has to be rendered by a server, however, we utilize full page caching to drastically speed up TTFB. You may see some about the latest WordPress plugin security vulnerabilities, we have a server as secure as the Phantom Zone, custom tweaks to WordPress to lock your site down, and we run daily security scans on your website for peace of mind.
          </p>
          <NuxtLink class="button" to="/contact/">
            Start building
          </NuxtLink>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Custom Solutions</h3>
          <p class="text--normal">
            We’re versed in project management, user experience, and all the web frameworks and languages necessary to take your next big thing public.
          </p>
          <NuxtLink class="button" to="/contact/">
            Give us a call
          </NuxtLink>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('custom')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('old')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>Love our ethos but have an older site?</h3>
          <p class="text--normal">
            We’ve often had clients come to us who use a different platform than advertised on our site. That’s okay, we can update your site to use our fast, secure, and scalable WordPress stack.
          </p>
          <NuxtLink class="button" to="/contact/">
            Upgrade your site
          </NuxtLink>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Hosting and Domains</h3>
          <p class="text--normal">
            Hosting and domains are a headache to many. GoDaddy or AWS? 1&1 or Google Cloud? We pride ourselves in having experience with all major hosting providers, and the smaller ones too. We can help you set up a new business, register your domains, and choose the best hosting provider, or show you options for transferring your existing plan over. We’ll let you in on a little secret though, we use <a href="https://netlify.com">Netlify</a> for nearly all of our builds, they’re fast, secure, and completely free!
          </p>
          <NuxtLink class="button" to="/contact/">
            Register today
          </NuxtLink>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="inlineSvg('hosting')" />
      </div>
      <div class="grid right maxWidth">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="inlineSvg('search')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>SEO</h3>
          <p class="text--normal">
            Our modern WordPress stack isgreat for SEO too. Search engine algorithms have slowly been moving away from keywords and backlinks. Search engines are now focussed on website speed and high-quality content, things WordPress is great for. If you choose us to build your website you can rest assured we take care of SEO. In turn, generating more traffic to your website, and more leads.
          </p>
          <NuxtLink class="button" to="/seo/">
            Find out more
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="white text-center">
      <div class="maxWidth">
        <h2 style="line-height: 1.5">
          WordPress powers 43% of all websites including these top brands:
        </h2>
        <SiteImage
          src="/img/companies.png"
          width="1376"
          loading="lazy"
          class="brands-using-wordpress"
          alt="The New York Times, Reuters, BBC America, Microsoft"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageMeta({
  title: 'Web Design and Development',
  description: 'We\'re in the business of building fast, secure, scalable sites. We specialize in WordPress as it aligns with our ethos as a company. You can find out more about it at WordPress.org but that’s why you pay us; to take care of learning all about the latest and greatest standards in the world of the web so that you can focus on what you do best.',
  path: '/web/',
  breadcrumb: [{ name: 'Web', item: 'https://galexia.agency/web/' }]
})
</script>
