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
  @media (prefers-reduced-motion) {
    .rocket.animate {
      -webkit-animation: none;
      animation: none
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
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
              First Name:
              <input
                id="fname"
                v-model="form.fname"
                name="FName"
                type="text"
                placeholder="Han"
                required
                autocomplete="given-name"
                @keyup="checkform"
              >
            </label>
            <label>
              Last Name:
              <input
                id="lname"
                v-model="form.lname"
                name="LName"
                type="text"
                placeholder="Solo"
                required
                autocomplete="family-name"
                @keyup="checkform"
              >
            </label>
            <label>
              Email:
              <input
                id="mail"
                v-model="form.email"
                name="Email"
                type="email"
                placeholder="millenium@falcon.net"
                required
                autocomplete="email"
                @keyup="checkform"
              >
            </label>
            <label>
              Telephone:
              <input
                id="telephone"
                v-model="form.telephone"
                name="Telephone"
                type="tel"
                placeholder="+447569836548"
                required
                autocomplete="tel"
                inputmode="tel"
                @keyup="checkform"
              >
            </label>
            <label id="subject">
              Subject:
              <input
                v-model="form.subject"
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
                v-model="form.message"
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
            <p v-show="!submitted">
              &nbsp;
            </p>
            <transition name="fade">
              <p v-show="submitted" class="message">
                Message sent successfully! We'll be in touch within 2-3 working days
              </p>
            </transition>
          </form>
          <inline-svg :src="require('../assets/svg/contact.svg')" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      submitted: false,
      form: {
        fname: '',
        lname: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      }
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
    if (localStorage.getItem('form')) {
      this.form = JSON.parse(localStorage.getItem('form'))
    } else {
      this.form = {
        fname: '',
        lname: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    onSubmit () {
      localStorage.setItem('form', '')
      this.form = {
        fname: '',
        lname: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
      }
      document.querySelector('.rocket').classList.add('animate')
      this.submitted = true
      const self = this
      axios.post(
        '/',
        self.encode({
          'form-name': 'Contact Form',
          ...JSON.stringify(self.form)
        }),
        { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
    },
    checkform () {
      localStorage.setItem('form', JSON.stringify(this.form))
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
