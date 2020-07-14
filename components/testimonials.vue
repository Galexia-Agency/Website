<style>
  .testimonials {
    justify-self: right;
    width: 100%;
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    cursor: grab
  }
  .testimonials:active {
    cursor: grabbing
  }
  .testimonials::-webkit-scrollbar {
    display: none
  }
  .testimonial {
    scroll-snap-align: center;
    scroll-snap-stop: always
  }
  .testimonial p {
    margin: 0
  }
  .testimonial .company {
    font-size: 1.25rem;
    margin-top: .75rem;
    text-align: right
  }

  @media (max-width: 768px) {
    .testimonial .company {
      text-align: center
    }
  }
</style>

<template>
  <div class="testimonials">
    <div v-for="(testimonial, index) in posts.nodes" :key="index" class="testimonial">
      <div style="display: none">
        {{ testimonial = JSON.parse(JSON.stringify(testimonial).replace(new RegExp('\\[', 'g'),"").replace(new RegExp('\\]', 'g'),"")) }}
      </div>
      <!--eslint-disable-next-line-->
      <div v-html="testimonial.content" />
      <!--eslint-disable-next-line-->
      <div v-html="'- ' + testimonial.title" class="company"/>
    </div>
  </div>
</template>

<script>
import testimonialsQuery from '~/apollo/queries/categories/testimonial.gql'

export default {
  data () {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: testimonialsQuery
    }
  },
  updated () {
    this.scrollTestimonial()
  },
  methods: {
    scrollTestimonial () {
      const container = document.querySelector('.testimonials')
      const width = document.querySelector('.testimonial').offsetWidth
      setInterval(function () {
        if (container.scrollLeft > (width * (document.querySelectorAll('.testimonial').length - 1))) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        } else {
          container.scrollBy({
            left: width,
            behavior: 'smooth'
          })
        }
      }, 5000)
    }
  }
}
</script>
