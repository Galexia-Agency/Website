<style>
  .rocket.animate {
    position: relative;
    -webkit-animation: move 6000ms 1 normal ease-in-out;
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
</style>
<style scoped>
  .contact_container {
    display: grid;
    grid-template-columns: 1fr .75fr;
    grid-gap: 2rem
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    z-index: 1
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem
  }
  label {
    text-align: left;
    display: grid;
    grid-gap: .5rem
  }
  #subject, #message {
    grid-column: span 2
  }
  #submitcontainer {
    grid-column: span 2;
    text-align: left
  }
  svg {
    width: 100%;
    overflow: visible
  }
  p.message {
    text-align: left;
    grid-column: 1 / 3
  }
</style>

<template>
  <div id="contact">
    <section class="white">
      <div class="maxWidth">
        <h2>Get in Touch</h2>
        <p>
          We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.
        </p>
        <div class="contact_container">
          <form method="post" name="Contact Form" netlify @submit.prevent="onSubmit">
            <label>
              Name:
              <input
                id="fname"
                name="FName"
                type="text"
                placeholder="Han"
                required
                @keyup="checkform"
              >
            </label>
            <label>
              Last Name:
              <input
                id="lname"
                name="LName"
                type="text"
                placeholder="Solo"
                required
                @keyup="checkform"
              >
            </label>
            <label>
              Email:
              <input
                id="mail"
                name="Email"
                type="email"
                placeholder="millenium@falcon.net"
                required
                @keyup="checkform"
              >
            </label>
            <label>
              Telephone:
              <input
                id="telephone"
                name="Telephone"
                type="tel"
                placeholder="+447569836548"
                required
                @keyup="checkform"
              >
            </label>
            <label id="subject">
              Subject:
              <input
                name="Subject"
                type="text"
                placeholder="Corellia"
                required
                @keyup="checkform"
              >
            </label>
            <label id="message">
              Message:
              <textarea
                name="Message"
                placeholder="Chewie, the exhaust ports need cleaning"
                required
                rows="3"
                @keyup="checkform"
              />
            </label>
            <div id="submitcontainer">
              <input
                id="submit"
                type="submit"
                name="Submit"
                class="button colorTwo"
                value="submit"
                disabled
              >
            </div>
            <p v-if="submitted" class="message">
              Message sent successfully! We'll be in touch within 2-3 working days
            </p>
          </form>
          <inline-svg :src="require('../assets/svg/contact.svg')" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submitted: false
    }
  },
  mounted () {
    this.$parent.$parent.page = {
      display: false,
      title: '',
      subTitle: '',
      desc: '',
      cta1: {
        active: false
      },
      cta: {
        active: false
      }
    }
  },
  methods: {
    onSubmit () {
      document.querySelector('.rocket').classList.add('animate')
      this.submitted = true
    },
    checkform () {
      const f = document.forms['Contact Form'].elements
      let cansubmit = true

      for (let i = 0; i < f.length - 2; i++) {
        if (f[i].value.length === 0) {
          cansubmit = false
        }
      }
      if (document.querySelector('#message')) {
        if (document.querySelector('#message').value === '') {
          cansubmit = false
        }
      }

      if (document.querySelector('#submit')) {
        document.querySelector('#submit').disabled = !cansubmit
      }
    }
  }
}
</script>
