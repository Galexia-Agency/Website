<template>
  <div v-if="testimonials.length" class="testimonials--container">
    <div ref="container" class="testimonials">
      <div v-for="testimonial in testimonials" :key="testimonial.slug" class="testimonial">
        <div v-html="testimonial.content" />
        <div class="company" v-text="`- ${testimonial.title}`" />
      </div>
    </div>
    <div class="testimonials--controls">
      <button aria-label="previous" :disabled="count === 1" @click="move(-1)">
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      </button>
      <p>
        <span>{{ count }}</span> /
        <span>{{ testimonials.length }}</span>
      </p>
      <button aria-label="next" :disabled="count === testimonials.length" @click="move(1)">
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script setup>
const { data: pages } = await useCmsIndex('testimonials', { content: true })
const testimonials = computed(() => pages.value.flat())
const count = ref(1)
const container = ref(null)

function move (direction) {
  const width = container.value.querySelector('.testimonial').offsetWidth
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  container.value.scrollBy({ left: direction * width, behavior: smooth ? 'smooth' : 'auto' })
  setTimeout(() => {
    count.value = Math.round(container.value.scrollLeft / width + 1)
  }, 300)
}
</script>
