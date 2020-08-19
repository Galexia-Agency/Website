<style scoped>
  .logo {
    display: inline-block
  }
  h1 {
    margin: 1.75rem 0;
    margin: clamp(1.5rem, 1vw + 1.5rem, 2rem) 0;
    font-size: 2.25rem;
    font-size: clamp(1.75rem, 1vw + 1.75rem, 2.5rem)
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.75rem;
    font-size: clamp(1.5rem, 1vw + 1.5rem, 2rem);
    color: #1A237EAA
  }
  h3 {
    font-size: 1.33rem;
    font-size: clamp(1.25rem, 1vw + 1rem, 1.5rem);
    margin: 0 0 2.75rem;
    color: #1A237EAA
  }
  .client {
    text-align: center;
    min-height: 600px
  }
  .client--inner {
    padding: 2rem
  }
  .card--inner {
    height: 100%;
    min-height: 300px
  }
  .card h2 {
    font-size: 1.66rem;
    font-size: clamp(1.25rem, 1vw + 1.25rem, 2rem);
    margin: 0;
    padding: 1rem;
    height: 6.5ex;
    color: #1A237E
  }
  .card p {
    margin: 0;
    height: 10ex
  }
  .card .button {
    align-self: end
  }
  .card--container {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 4rem;
    grid-auto-flow: dense
  }
  .card {
    grid-column: span 2;
    box-shadow:
      0 0 2.2px rgba(0, 0, 0, .02),
      0 0 5.3px rgba(0, 0, 0, .028),
      0 0 10px rgba(0, 0, 0, .035),
      0 0 17.9px rgba(0, 0, 0, .042),
      0 0 33.4px rgba(0, 0, 0, .05),
      0 0 80px rgba(0, 0, 0, .07);
    border-radius: .5rem
  }
  .card:nth-of-type(4) {
    grid-column: 2 / 4
  }
  .card:nth-of-type(5) {
    grid-column: 4 / 6
  }
  form {
    grid-gap: 2rem;
    place-items: start;
    max-width: 600px;
    width: 100%;
    margin: auto
  }
  form label {
    display: grid;
    width: 100%;
    place-items: start
  }
  form p {
    font-size: .9rem;
    margin: .5rem 0;
    font-weight: bold
  }
  form label input {
    width: 100%
  }

  @media (max-width: 1200px) {
    .card--container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto
    }
    .card, .card:nth-of-type(4), .card:nth-of-type(5) {
      grid-column: span 1
    }
  }
  @media (max-width: 800px) {
    .card {
      max-width: 600px;
      margin: auto;
      width: 100%
    }
    .card p, .card h2 {
      height: auto
    }
    .card--container {
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
      padding-bottom: 0
    }
  }
</style>

<template>
  <div class="section white client">
    <div class="client--inner maxWidth">
      <client-only>
        <div v-if="url && title">
          <a :href="url" target="_blank" rel="noopener noreferrer" class="logo">
            <!--eslint-disable-next-line-->
            <img v-if="logo" v-bind:src="logo" :alt="title" width="150" height="150">
          </a>
          <h2>Welcome to your own space.</h2>
          <h1>Thanks for being our client, {{ title }}</h1>
          <h3>We'd love it if you could mention us to businesses you work with and we'll do the same.<br>Let's keep this great relationship going!</h3>
          <div class="grid column card--container">
            <div class="card">
              <div class="card--inner">
                <h2>View your site</h2>
                <p>Need an easy way to access your site?</p>
                <a :href="url" target="_blank" rel="noopener noreferrer" class="button">My site</a>
              </div>
            </div>
            <div class="card">
              <div class="card--inner">
                <h2>Join our mailing list</h2>
                <p>You'll receive all our latest blog posts about how best to optimize your site straight to your inbox. You can unsubscribe at any time.</p>
                <a href="http://eepurl.com/hbgVZL" target="_blank" rel="noopener noreferrer" class="button">Signup</a>
              </div>
            </div>
            <div class="card">
              <div class="card--inner">
                <h2>Transfer us some files</h2>
                <p>Need to send us something? We have that covered.</p>
                <a href="https://wetransfer.com/?to=info@galexia.agency&msg=Hey%20Galexia,%20Here%27s%20those%20files%20you%20requested!" target="_blank" rel="noopener noreferrer" class="button">Transfer</a>
              </div>
            </div>
            <div class="card">
              <div class="card--inner">
                <h2>Leave a review</h2>
                <p>We'd love it if you could leave an honest review.</p>
                <a href="https://www.facebook.com/GalexiaAgency/reviews" target="_blank" rel="noopener noreferrer" class="button">Review</a>
              </div>
            </div>
            <div class="card">
              <div class="card--inner">
                <h2>Join our Facebook Group</h2>
                <p>Join our group and connect with other clients. Discuss best-practises and bounce ideas off eachother to build a happy community.</p>
                <a href="https://www.facebook.com/groups/galexiaclients" target="_blank" rel="noopener noreferrer" class="button">Join</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="details">
          <h1>Please enter your details below to access this page</h1>
          <form method="GET" action="/client" class="grid">
            <label>
              <p>Title</p>
              <input name="title" type="text" required>
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
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = this.title
  },
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
