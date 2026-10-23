<template>
  <div v-if="!nativeShareEnabled" class="post--footer">
    <h4>Share:</h4>
    <a
      v-for="network in networks"
      :key="network.name"
      class="button"
      :href="network.href"
      target="_blank"
      rel="noopener noreferrer"
      @click.prevent="openPopup(network.href)"
    >
      <FontAwesomeIcon :icon="['fab', network.icon]" /> {{ network.name }}
    </a>
  </div>
  <div v-else class="post--footer nativeShare">
    <h4 class="button">
      <FontAwesomeIcon :icon="['fas', 'share-alt']" /> <a href="javascript:void(0)" @click="nativeShare">Share this blog post</a>
    </h4>
  </div>
</template>

<script setup>
// Replaces vue-social-sharing's ShareNetwork buttons, with the same networks and markup.
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  path: { type: String, required: true }
})

const url = `https://galexia.agency${props.path}`
const shareObject = computed(() => ({ title: props.title, text: props.description, url }))
// Decided after hydration, so the server and client render the same buttons first.
const nativeShareEnabled = ref(false)
onMounted(() => {
  try {
    nativeShareEnabled.value = navigator.canShare(shareObject.value)
  } catch {
    nativeShareEnabled.value = false
  }
})

const networks = computed(() => {
  const u = encodeURIComponent(url)
  const t = encodeURIComponent(props.title)
  const d = encodeURIComponent(props.description)

  return [
    { name: 'Facebook', icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}&title=${t}&description=${d}` },
    { name: 'LinkedIn', icon: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: 'Twitter', icon: 'twitter', href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { name: 'WhatsApp', icon: 'whatsapp', href: `https://api.whatsapp.com/send?text=${t}%0D%0A${u}%0D%0A${d}` }
  ]
})

function openPopup (href) {
  const width = 626
  const height = 436
  const left = window.screenX + (window.outerWidth - width) / 2
  const top = window.screenY + (window.outerHeight - height) / 2
  window.open(href, 'sharer', `width=${width},height=${height},left=${left},top=${top}`)
}

function nativeShare () {
  navigator.share(shareObject.value)
}
</script>
