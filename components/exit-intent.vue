<style lang="scss">
</style>

<template>
  <transition name="modal">
    <div
      v-if="exitIntent"
      id="exit-modal"
      style="z-index: 71"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      @click="exit"
    >
      <div
        class="relative top-20 mx-auto p-8 rounded-md bg-paper dark:bg-slate"
      >
        <a
          class="absolute top-8 right-8 cursor-pointer hover:opacity-60 transition-all rounded-none"
          href="#"
          @click.prevent="exitIntent = false"
        />
        <div class="text-center">
          <h3>
            Let's stay connected!
          </h3>
          <p class="my-8">
            Sign up to our mailing list to learn more about WordPress and how we can help your business succeed.
          </p>
          <form @submit.prevent="mc(name, email, website)">
            <input
              v-model="name"
              class="sm:w-1/2 mr-4"
              placeholder="Name"
              type="name"
              required
            >
            <input
              v-model="email"
              class="sm:w-1/2 mr-4"
              placeholder="Email"
              type="email"
              required
            >
            <input
              v-model="website"
              class="sm:w-1/2 mr-4"
              placeholder="Website"
              type="url"
              required
            >
            <button
              type="submit"
              class="z-10 mt-2 sm:mt-0"
              :disabled="!email || !ValidateEmail(email)"
            >
              Sign me up
            </button>
          </form>
        </div>
        <span class="mt-4 mb-8" :class="messageClasses">
          {{ message }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: '',
      website: '',
      message: 'By clicking sign up you consent to us adding you to our mailing list. We promise not to spam you!',
      messageClasses: '',
      exitIntent: false
    }
  },
  mounted () {
    const mouseEvent = (e) => {
      // Check that we are exiting the window at the top and not from the sides or bottom of the screen
      const shouldShowExitIntent =
        !e.toElement && !e.relatedTarget && e.clientY < 10

      if (shouldShowExitIntent) {
        // Remove the mouseout event listener so we don't get into a loop
        document.removeEventListener('mouseout', mouseEvent)
        // Show the popup
        this.exitIntent = true
        setTimeout(() => {
          // add all the elements inside modal which you want to make focusable
          const focusableElements =
            'button:not(:disabled), [href], input:not(:disabled), select, textarea, [tabindex]:not([tabindex="-1"])'
          const popup = this.$el // select the navigation

          const firstFocusableElement =
            popup.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
          const focusableContent = popup.querySelectorAll(focusableElements)
          const lastFocusableElement =
            focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

          document.addEventListener('keydown', function (e) {
            const isTabPressed = e.key === 'Tab' || e.keyCode === 9

            if (!isTabPressed) {
              return
            }

            if (e.shiftKey) {
              // if shift key pressed for shift + tab combination
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus() // add focus for the last focusable element
                e.preventDefault()
              }
            } else if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus() // add focus for the first focusable element
              e.preventDefault()
            }
          })

          lastFocusableElement.focus()
        }, 200)

        // Don't set the cookie if in development mode
        if (process.env.NODE_ENV !== 'development') {
          // Set the cookie when the popup is shown to the user - so we don't show the popup again for 30 days
          this.setCookie('exitIntentShown', true, 30)
        }
      }
    }
    // Wrap the setTimeout into an if statement
    if (!this.getCookie('exitIntentShown')) {
      window.addEventListener('mousemove', startExitCountdown)
      window.addEventListener('scroll', startExitCountdown)
      window.addEventListener('keydown', startExitCountdown)
      window.addEventListener('click', startExitCountdown)
      window.addEventListener('touchstart', startExitCountdown)
    }
    // const self = this
    function startExitCountdown () {
      // Show exit intent straight away in development mode
      if (process.env.NODE_ENV === 'development') {
        document.addEventListener('mouseout', mouseEvent)
      } else {
        // Set timeout so exit intent isn't show on page load - wait 10 seconds
        setTimeout(() => {
          // Add event listener for when user leaves page
          document.addEventListener('mouseout', mouseEvent)
          // Add event listener for when user presses a key - which we listen to the escape key
          // document.addEventListener('keydown', self.exit)
        }, 10000)
      }
      window.removeEventListener('mousemove', startExitCountdown)
      window.removeEventListener('scroll', startExitCountdown)
      window.removeEventListener('keydown', startExitCountdown)
      window.removeEventListener('click', startExitCountdown)
      window.removeEventListener('touchstart', startExitCountdown)
    }
  },
  methods: {
    // Close the modal
    exit (e) {
      if (e.target.id === 'exit-modal') {
        this.exitIntent = false
      }
    },
    setCookie (name, value, days) {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = ' expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (value || '') + expires + ''
    },
    getCookie (name) {
      const cookies = document.cookie.split('')
      for (const cookie of cookies) {
        // eslint-disable-next-line
        if (cookie.indexOf(name + '=') > -1) {
          return cookie.split('=')[1]
        }
      }
      return null
    },
    async mc (name, email, website) {
      try {
        await axios.post('/.netlify/functions/mailchimp', {
          name,
          email,
          website
        })
        this.message = 'To complete the subscription process, please click the link in the email we just sent you.'
        this.messageClasses = 'success'
      } catch (e) {
        if (e.response.status === 400) {
          this.message = 'You\'re already signed up to our mailing list. Thank you!'
          this.messageClasses = 'fail'
        } else {
          // eslint-disable-next-line
          console.error(e);
          this.message = e.response.data
        }
      }
    },
    ValidateEmail (mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
      }
      return false
    }
  }
}
</script>
