import testimonialsQuery from '~/apollo/queries/categories/testimonial.gql'
import blogQuery from '~/apollo/queries/categories/blog.gql'

export const state = () => ({
  testimonials: [],
  blog: []
})

export const actions = {
  async nuxtServerInit ({ state }, { req }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: testimonialsQuery
    })
    const blogResponse = await this.app.apolloProvider.defaultClient.query({
      query: blogQuery
    })
    state.testimonials = await response.data.posts.nodes
    state.blog = await blogResponse.data.posts.nodes
  }
}
