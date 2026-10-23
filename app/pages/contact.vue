<style>
  .rocket.animate {
    position: relative;
    animation: move 6000ms 1 normal ease-in-out
  }
  @keyframes move {
    from {
      transform: translate(0, 0)
    }
    to {
      transform: translate(0, -4000px)
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .rocket.animate {
      animation: none
    }
  }
</style>
<style scoped>
  h1 {
    text-align: center
  }
  .grid {
    gap: 2rem
  }
  p {
    z-index: 1;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    text-align: center
  }
</style>

<template>
  <div id="contact">
    <section class="white">
      <div class="maxWidth">
        <h1>Get in Touch</h1>
        <p>
          We’d love to help you on your next big website project. We understand what it means to dream big, and then achieve that dream.
        </p>
        <div class="grid left">
          <form ref="formEl" name="contactForm" @input="changed" @change="changed" @submit.prevent="onSubmit">
            <label>
              First Name:
              <input
                id="firstName"
                v-model="form.firstName"
                name="firstName"
                type="text"
                placeholder="Joe"
                required
                autocomplete="given-name"
              >
            </label>
            <label>
              Last Name:
              <input
                id="lastName"
                v-model="form.lastName"
                name="lastName"
                type="text"
                placeholder="Bloggs"
                required
                autocomplete="family-name"
              >
            </label>
            <label>
              Email:
              <input
                id="mail"
                v-model="form.email"
                name="email"
                type="email"
                placeholder="joe@bloggs.com"
                required
                autocomplete="email"
              >
            </label>
            <label>
              Telephone:
              <input
                id="telephone"
                v-model="form.telephone"
                name="telephone"
                type="tel"
                placeholder="+447569836548"
                required
                autocomplete="tel"
                inputmode="tel"
              >
            </label>
            <label id="subject">
              Subject:
              <input
                v-model="form.subject"
                name="subject"
                type="text"
                placeholder="I need a site..."
                required
              >
            </label>
            <label id="message">
              Message:
              <textarea
                v-model="form.message"
                name="message"
                placeholder="I have a really outdated website and after reading about your past clients I'd like to request a quote"
                required
                rows="3"
              />
            </label>
            <label>
              How did you hear about us?
              <select
                id="how-did-you-hear-about-us"
                v-model="form.howDidYouHearAboutUs"
                name="howDidYouHearAboutUs"
                required
              >
                <option value="" disabled selected>Please choose from the dropdown</option>
                <option value="Galexia came up during a search">Galexia came up during a search</option>
                <option value="I saw Galexia on Facebook">I saw Galexia on Facebook</option>
                <option value="I saw Galexia on another social platform">I saw Galexia on another social platform</option>
                <option value="Someone recommended Galexia to me">Someone recommended Galexia to me</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label v-if="form.howDidYouHearAboutUs === 'Someone recommended Galexia to me'">
              If you'd like to, let us know who recommended Galexia to you:
              <input
                id="whoRecommended"
                v-model="form.whoRecommended"
                name="whoRecommended"
                type="text"
              >
            </label>
            <label v-if="form.howDidYouHearAboutUs === 'Other'">
              If you can, let us know how you heard about us:
              <input
                id="howDidYouHearAboutUsDetails"
                v-model="form.howDidYouHearAboutUsDetails"
                name="howDidYouHearAboutUsDetails"
                type="text"
              >
            </label>
            <TurnstileWidget :site-key="turnstileSiteKey" action="contact" @token="setToken" />
            <div id="submitcontainer">
              <input
                id="submit"
                type="submit"
                class="button colorTwo"
                value="submit"
                :disabled="!canSubmit"
              >
            </div>
            <p v-show="!message">
            &nbsp;
            </p>
            <Transition name="fade">
              <p v-show="message" class="message" v-text="message" />
            </Transition>
          </form>
          <div class="SVGContainer" v-html="inlineSvg('contact')" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { turnstileSiteKey } = useRuntimeConfig().public
const { form, formEl, canSubmit, message, changed, setToken, submit } = useForm('contact', { storageKey: 'contactForm' })

usePageMeta({
  title: 'Contact',
  description: 'We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.',
  path: '/contact/',
  breadcrumb: [{ name: 'Contact', item: 'https://galexia.agency/contact/' }]
})

async function onSubmit () {
  // The rocket in the contact illustration launches while the message sends.
  formEl.value.parentElement.querySelector('.rocket')?.classList.add('animate')
  await submit('Message sent successfully! We’ll be in touch within 2-3 working days')
}
</script>
