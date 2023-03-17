import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  methods: {
    checkform (formName, data) {
      localStorage.setItem(formName, JSON.stringify(data))
      const f = document.forms[formName].elements
      let cansubmit = true

      for (let i = 0; i < f.length - 2; i++) {
        if (f[i].required && (f[i].value.length === 0 || f[i].value === '')) {
          cansubmit = false
        }
      }

      if (document.querySelector('#submit')) {
        document.querySelector('#submit').disabled = !cansubmit
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
