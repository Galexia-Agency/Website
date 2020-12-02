import testimonialsQuery from '~/apollo/queries/categories/testimonial.gql'

export const state = () => ({
  testimonials: []
})

export const actions = {
  async nuxtServerInit ({ state }, { req }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: testimonialsQuery
    })
    state.testimonials = response.data.posts.nodes
  }
}
