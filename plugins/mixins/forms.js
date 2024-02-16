import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  methods: {
    checkform (formName, data) {
      localStorage.setItem(formName, JSON.stringify(data))
      const cansubmit = Array.from(document.forms[formName].elements).every((formElement) => {
        // If the form element is not required, we can return true as we're skipping the check
        if (!formElement.required) {
          return true
        }
        // We return whether the value is filled or not
        return (formElement.value.length !== 0 || formElement.value !== '')
      })

      if (document.querySelector('.submit')) {
        document.querySelector('.submit').disabled = !cansubmit
      }
    },
    encode (data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    async submit (data, formName) {
      const self = this
      return await axios.post(
        '/?t=' + Math.floor(Date.now() / 1000),
        self.encode({
          'form-name': formName,
          ...data
        }),
        { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
    }
  }
})
