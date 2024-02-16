<style lang="scss" scoped>
.testimonials-container {
  display: grid
}
.testimonials {
  display: grid;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-self: right;
  width: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none
  }
  @media (max-width: 900px) {
    margin-top: 1rem
  }
}
.testimonial {
  scroll-snap-align: center;
  scroll-snap-stop: always;
  .company {
    margin-top: .75rem;
    font-size: 1.33rem;
    text-align: right;
    @media (max-width: 768px) {
      text-align: center
    }
  }
}
.testimonials-controls {
  justify-self: end;
  margin-top: 1rem;
  * {
    display: inline
  }
  button {
    margin: 1rem;
    color: white;
    font-size: 1.1rem;
    background: none;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: .5
    }
  }
}
</style>

<style lang="scss">
.testimonial p {
  margin: 0;
  font-weight: 300;
  line-height: 1.5;
  opacity: .85
}
</style>

<template>
  <div class="testimonials-container">
    <div class="testimonials" @scroll="updateCount">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial"
      >
        <div v-html="testimonial.content" />
        <div class="company" v-html="'- ' + testimonial.title" />
      </div>
    </div>
    <div class="testimonials-controls">
      <button
        aria-label="previous"
        :disabled="count === 1"
        @click="left"
      >
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
      </button>
      <p>
        <span>{{ count }}</span> /
        <span>{{ testimonials.length }}</span>
      </p>
      <button
        aria-label="next"
        :disabled="count === testimonials.length"
        @click="right"
      >
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      count: 1
    }
  },
  computed: {
    ...mapState([
      'testimonials'
    ])
  },
  methods: {
    left () {
      if (this.count !== 1) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: -width,
          behavior: window.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round(container.scrollLeft / width + 1)
        }, 300)
      }
    },
    right () {
      if (this.count !== this.testimonials.length) {
        const container = document.querySelector('.testimonials')
        const width = document.querySelector('.testimonial').offsetWidth
        container.scrollBy({
          left: width,
          behavior: window.motion
        })
        const self = this
        setTimeout(function () {
          self.count = Math.round(container.scrollLeft / width + 1)
        }, 300)
      }
    },
    updateCount () {
      const container = document.querySelector('.testimonials')
      const width = document.querySelector('.testimonial').offsetWidth
      this.count = Math.round(container.scrollLeft / width + 1)
    }
  }
}
</script>
