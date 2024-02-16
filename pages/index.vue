<template>
  <div>
    <LayoutHeader
      title="Let us focus on your online presence so you can focus on your <i>business</i>"
      desc="We are a creative agency built from the ground up to help start-ups grow. Aiming to accelerate your business, we provide a multitude of creative services from bespoke WordPress websites to Social Media Management. We know first-hand running a start-up can be a stressful experience so we aim to take some of that stress away by providing a best-in-class project management for the services we offer and that your business vitaly needs."
      :link="{location: '/contact/', text: 'Get in touch'}"
    />
    <section class="white">
      <h2 class="layout--max-width">
        Our three step process to increasing your revenue
      </h2>
      <div class="grid grid--left layout--max-width">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>We start with a conversation</h3>
          <p class="text--normal">
            We find the best way to engage a start-up is to have an informal, no-obligations chat about your business. Some of businesses come to us with a detailed idea about what they want with a very strict budget, whilst others are super passionate about their idea, but haven't started researching how to digitally market it.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('~/assets/svg/discussion.svg?include')" />
      </div>
      <div class="grid grid--right layout--max-width">
        <div v-infocus="'showElement'" class="hidden hidden-left svg" v-html="require('~/assets/svg/project.svg?include')" />
        <div v-infocus="'showElement'" class="hidden hidden-right">
          <h3>You run your business. We run the website project</h3>
          <p class="text--normal">
            We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your website project on track, working to strict deadlines, so you don’t have to worry.
          </p>
        </div>
      </div>
      <div class="grid grid--left layout--max-width">
        <div v-infocus="'showElement'" class="hidden hidden-left">
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p class="text--normal">
            We love to keep in touch with our clients, even after the initial website project has finished. We’re happy to offer continued maintenance plans on our websites. We even have a community where past clients can discuss and share their websites.
          </p>
        </div>
        <div v-infocus="'showElement'" class="hidden hidden-right svg" v-html="require('~/assets/svg/launch.svg?include')" />
      </div>
    </section>
    <section class="white">
      <div class="layout--max-width">
        <h2>
          We let our work speak for itself
        </h2>
        <PagesIndexPortfolio />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Helping start-ups grow by managing your online presence',
      meta: [
        { hid: 'description', name: 'description', content: 'We are a creative agency built from the ground up to help start-ups grow. Aiming to accelerate your business, we provide a multitude of creative services from bespoke WordPress websites to Social Media Management. We know first-hand running a start-up can be a stressful experience so we aim to take some of that stress away by providing a best-in-class project management for the services we offer and that your business vitaly needs.' },
        { hid: 'og:title', property: 'og:title', content: 'Home' },
        { hid: 'og:description', property: 'og:description', content: 'We are a creative agency built from the ground up to help start-ups grow. Aiming to accelerate your business, we provide a multitude of creative services from bespoke WordPress websites to Social Media Management. We know first-hand running a start-up can be a stressful experience so we aim to take some of that stress away by providing a best-in-class project management for the services we offer and that your business vitaly needs.' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Home' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'We are a creative agency built from the ground up to help start-ups grow. Aiming to accelerate your business, we provide a multitude of creative services from bespoke WordPress websites to Social Media Management. We know first-hand running a start-up can be a stressful experience so we aim to take some of that stress away by providing a best-in-class project management for the services we offer and that your business vitaly needs.' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/' }
      ]
    }
  }
}
</script>
