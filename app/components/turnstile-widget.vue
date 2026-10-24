<template>
  <div>
    <div ref="widget" />
    <p v-if="error" role="status">
      {{ error }}
      <button v-if="siteKey" class="btn" type="button" @click="retry">
        Retry spam check
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import type { Turnstile } from '~/types/globals'

// One script load is shared by every widget on the page.
let loading: Promise<Turnstile> | null = null

function loadTurnstile () {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile)
  }
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      const fail = () => {
        clearTimeout(timeout)
        script.remove()
        loading = null
        reject(new Error('Turnstile could not load'))
      }
      const timeout = setTimeout(fail, 15000)
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      // Turnstile rejects ready() when the script has async/defer, and script
      // elements created from JS are async by default, so opt out explicitly.
      script.async = false
      script.onload = () => {
        if (!window.turnstile) {
          fail()

          return
        }
        clearTimeout(timeout)
        resolve(window.turnstile)
      }
      script.onerror = fail
      document.head.appendChild(script)
    })
  }

  return loading
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  siteKey?: string
  // Checked by the forms worker, so a token from one form cannot submit another
  action: string
}>(), {
  siteKey: ''
})
const emit = defineEmits<{
  token: [token: string]
}>()

const widget = useTemplateRef<HTMLElement>('widget')
const widgetId = ref<string | null>(null)
const error = ref('')
let disposed = false

async function renderWidget () {
  if (!props.siteKey) {
    error.value = 'This form is temporarily unavailable. Please email info@galexia.agency.'

    return
  }
  try {
    const turnstile = await loadTurnstile()
    if (disposed || !widget.value) {
      return
    }
    widgetId.value = turnstile.render(widget.value, {
      sitekey: props.siteKey,
      action: props.action,
      size: 'flexible',
      callback: (token) => {
        error.value = ''
        emit('token', token)
      },
      'expired-callback': () => reset(),
      'timeout-callback': () => reset(),
      'error-callback': () => {
        emit('token', '')
        error.value = 'Spam check could not complete. Please retry.'
      }
    }) ?? null
  } catch {
    if (!disposed) {
      error.value = 'Spam check could not load. Please retry or email info@galexia.agency.'
    }
  }
}

function reset () {
  emit('token', '')
  error.value = ''
  if (widgetId.value !== null && window.turnstile) {
    window.turnstile.reset(widgetId.value)
  }
}

function retry () {
  reset()
  if (widgetId.value === null) {
    renderWidget()
  }
}

onMounted(() => {
  renderWidget()
})

onBeforeUnmount(() => {
  disposed = true
  if (widgetId.value !== null && window.turnstile) {
    window.turnstile.remove(widgetId.value)
  }
})
</script>
