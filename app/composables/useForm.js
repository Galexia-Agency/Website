import { onMounted, ref } from '#imports'

// A form that posts to the forms worker (/api/forms/<name>) after a Turnstile check. Drafts are kept in
// localStorage under `storageKey` (the Netlify form names, so existing drafts survive), and the submit button
// is enabled once the browser's own validation passes and the spam check has a token.
export function useForm (name, { storageKey = name } = {}) {
  const form = ref({})
  const formEl = ref(null)
  const canSubmit = ref(false)
  const sending = ref(false)
  const message = ref('')
  const token = ref('')

  const validate = () => {
    canSubmit.value = Boolean(formEl.value?.checkValidity() && token.value) && !sending.value
  }

  const changed = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(form.value))
    } catch {
      // Private browsing can refuse storage; the form still works.
    }
    validate()
  }

  const setToken = (value) => {
    token.value = value
    validate()
  }

  onMounted(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      form.value = saved ? JSON.parse(saved) : {}
    } catch {
      form.value = {}
    }
    validate()
  })

  async function submit (success) {
    sending.value = true
    validate()
    const body = new FormData()
    for (const [key, value] of Object.entries(form.value)) {
      if (value !== undefined && value !== null && value !== '') {
        body.set(key, Array.isArray(value) ? value.join(', ') : String(value))
      }
    }
    body.set('cf-turnstile-response', token.value)
    try {
      const response = await fetch(`/api/forms/${name}`, { method: 'POST', body })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.error || `Message could not be sent (${response.status})`)
      }
      try {
        localStorage.removeItem(storageKey)
      } catch {
        // Nothing to clear
      }
      form.value = {}
      message.value = success

      return true
    } catch (error) {
      // The worker's messages already say what to do next.
      message.value = /try again|email/i.test(error.message) ? `${error.message}.` : `${error.message}. Please try again.`

      return false
    } finally {
      sending.value = false
      validate()
    }
  }

  return { form, formEl, canSubmit, sending, message, changed, setToken, submit }
}
