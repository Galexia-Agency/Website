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

<script setup lang="ts">
import { useTurnstileWidget } from '@joebailey26/turnstile-forms/vue'

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

const { error, renderWidget, reset, retry, dispose } = useTurnstileWidget({
  siteKey: () => props.siteKey,
  container: useTemplateRef<HTMLElement>('widget'),
  action: () => props.action,
  contactEmail: 'info@galexia.agency',
  onToken: (token) => emit('token', token)
})

onMounted(renderWidget)
onBeforeUnmount(dispose)

// useForm resets the widget after each attempt, as tokens are single-use.
defineExpose({ reset })
</script>
