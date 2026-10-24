import { onMounted, ref } from '#imports'

// A field's v-model value: text, or a list (sent joined with commas).
export type FormValue = string | number | string[] | null | undefined

export type FormValues = Record<string, FormValue>

export interface FormOptions {
  storageKey?: string
}

const isObject = (value: unknown): value is object => typeof value === 'object' && value !== null && !Array.isArray(value)

// The forms worker answers { error } when it refuses a submission.
const errorFrom = (result: unknown) => (isObject(result) && 'error' in result && typeof result.error === 'string' ? result.error : '')

// A form that posts to the forms worker (/api/forms/<name>) after a Turnstile check. Drafts are kept in
// localStorage under `storageKey` (the Netlify form names, so existing drafts survive), and the submit button
// is enabled once the browser's own validation passes and the spam check has a token.
export function useForm (name: string, { storageKey = name }: FormOptions = {}) {
  const form = ref<FormValues>({})
  const formEl = ref<HTMLFormElement | null>(null)
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

  const setToken = (value: string) => {
    token.value = value
    validate()
  }

  onMounted(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      const draft: unknown = saved ? JSON.parse(saved) : {}
      // A draft is only ever written by changed() above, so an object holds the form's values.
      form.value = isObject(draft) ? draft as FormValues : {}
    } catch {
      form.value = {}
    }
    validate()
  })

  async function submit (success: string) {
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
      const result: unknown = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(errorFrom(result) || `Message could not be sent (${response.status})`)
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
      const text = error instanceof Error ? error.message : String(error)
      message.value = /try again|email/i.test(text) ? `${text}.` : `${text}. Please try again.`

      return false
    } finally {
      sending.value = false
      validate()
    }
  }

  return { form, formEl, canSubmit, sending, message, changed, setToken, submit }
}
