<style scoped>
  .logo {
    display: inline-block;
    margin-bottom: 2rem
  }
  h1 {
    margin: 1.75rem 0;
    margin: clamp(1.5rem, calc(var(--100vw) / 100) + 1.5rem, 2rem) 0;
    font-size: 2.25rem;
    font-size: clamp(1.75rem, calc(var(--100vw) / 100) + 1.75rem, 2.5rem)
  }
  h2 {
    margin: 0;
    padding: 0;
    color: var(--secondaryColor);
    font-size: 1.75rem;
    font-size: clamp(1.5rem, calc(var(--100vw) / 100) + 1.5rem, 2rem)
  }
  h3 {
    margin: 0 0 2.75rem;
    color: var(--secondaryColor);
    font-size: clamp(1.25rem, calc(var(--100vw) / 100) + 1rem, 1.5rem)
  }
  .client {
    min-height: 600px;
    text-align: center
  }
  .client--inner {
    padding: 2rem
  }
  .card__inner {
    height: 100%;
    min-height: 300px
  }
  .card h2 {
    height: 6.5ex;
    margin: 0;
    padding: 1rem;
    color: var(--primaryColor);
    font-size: clamp(1.25rem, calc(var(--100vw) / 100) + 1.25rem, 2rem)
  }
  .card p {
    height: 10ex;
    margin: 0
  }
  .card .button {
    align-self: end
  }
  .card--container {
    grid-auto-flow: dense;
    grid-row-gap: 4rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(6, 1fr)
  }
  .card {
    grid-column: span 2
  }
  form {
    gap: 2rem;
    width: 100%;
    max-width: 600px;
    margin: auto;
    place-items: start
  }
  form label {
    display: grid;
    width: 100%;
    place-items: start
  }
  form p {
    margin: .5rem 0;
    font-weight: 600;
    font-size: .9rem
  }
  form label input {
    width: 100%
  }

  @media (max-width: 1200px) {
    .card--container {
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr
    }
  }
  @media (max-width: 800px) {
    .card {
      width: 100%;
      max-width: 600px;
      margin: auto
    }
    .card p, .card h2 {
      height: auto
    }
    .card--container {
      grid-row-gap: 2rem;
      grid-template-columns: 1fr;
      padding-bottom: 0
    }
  }
</style>

<template>
  <div class="section white client">
    <div class="client--inner layout--max-width">
      <client-only>
        <div v-if="url && title">
          <a :href="url" target="_blank" rel="noopener noreferrer" class="logo">
            <img v-if="logo" :src="logo" :alt="title" width="auto" height="75">
          </a>
          <h2>Welcome to your own space.</h2>
          <h1>Thanks for being our client, {{ title }}</h1>
          <h3>We'd love it if you could mention us to businesses you work with and we'll do the same.<br>Let's keep this great relationship going!</h3>
          <div class="grid grid--column card--container">
            <div v-infocus="'showElement'" class="card white hidden">
              <div class="card__inner">
                <h2>View your site</h2>
                <p>Need an easy way to access your site?</p>
                <a :href="url" target="_blank" rel="noopener noreferrer" class="button">My site</a>
              </div>
            </div>
            <div
              v-infocus="'showElement'"
              class="card white hidden"
              style="--delay: .25s"
            >
              <div class="card__inner">
                <h2>Book a call</h2>
                <p>Book a time to have a chat about your website.</p>
                <a href="https://calendly.com/galexia/phone-call" target="_blank" rel="noopener noreferrer" class="button">Book Now</a>
              </div>
            </div>
            <div
              v-infocus="'showElement'"
              class="card white hidden"
              style="--delay: .5s"
            >
              <div class="card__inner">
                <h2>Transfer us some files</h2>
                <p>Need to send us something? We have that covered.</p>
                <a href="https://wetransfer.com/?to=info@galexia.agency&msg=Hey%20Galexia,%20Here%27s%20those%20files%20you%20requested!" target="_blank" rel="noopener noreferrer" class="button">Transfer</a>
              </div>
            </div>
            <div v-infocus="'showElement'" class="card white hidden">
              <div class="card__inner">
                <h2>Join our mailing list</h2>
                <p>You'll receive all our latest blog posts about how best to optimize your site straight to your inbox. You can unsubscribe at any time.</p>
                <a href="http://eepurl.com/hbgVZL" target="_blank" rel="noopener noreferrer" class="button">Signup</a>
              </div>
            </div>
            <div
              v-infocus="'showElement'"
              class="card white hidden"
              style="--delay: .25s"
            >
              <div class="card__inner">
                <h2>Leave a review</h2>
                <p>We'd love it if you could leave an honest review.</p>
                <a href="https://www.facebook.com/GalexiaAgency/reviews" target="_blank" rel="noopener noreferrer" class="button">Review</a>
              </div>
            </div>
            <div
              v-infocus="'showElement'"
              class="card white hidden"
              style="--delay: .5s"
            >
              <div class="card__inner">
                <h2>Join our Facebook Group</h2>
                <p>Join our group and connect with other clients. Discuss best-practises and bounce ideas off eachother to build a happy community.</p>
                <a href="https://www.facebook.com/groups/galexiaclients" target="_blank" rel="noopener noreferrer" class="button">Join</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="details">
          <h1>Please enter your details below to access this page</h1>
          <form method="GET" action="/client" class="form">
            <label>
              <p>Title</p>
              <input name="title" type="text" required autofocus>
            </label>
            <label>
              <p>Site URL</p>
              <input name="url" type="url" autocomplete="url" required>
            </label>
            <label>
              <p>Logo URL</p>
              <input name="logo" type="url" autocomplete="photo">
            </label>
            <div>
              <input type="submit" class="button" value="Submit">
            </div>
          </form>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Client',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  },
  computed: {
    title () {
      return this.$route.query.title
    },
    url () {
      return this.$route.query.url
    },
    logo () {
      return this.$route.query.logo
    }
  }
}
</script>
