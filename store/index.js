import testimonialsQuery from '~/apollo/queries/categories/testimonial.gql'
import blogQuery from '~/apollo/queries/categories/blog.gql'
import blogPostQuery from '~/apollo/queries/posts/blog.gql'
import portfolioQuery from '~/apollo/queries/categories/portfolio.gql'
import portfolioPostQuery from '~/apollo/queries/posts/portfolio.gql'
import legalQuery from '~/apollo/queries/categories/legal.gql'
import legalPostQuery from '~/apollo/queries/posts/legal.gql'

export const state = () => ({
  testimonials: [],
  blog: [],
  blogs: [],
  portfolio: [],
  portfolios: [],
  legal: [],
  legals: []
})

export const actions = {
  async nuxtServerInit ({ state }, { req }) {
    /* Testimonials */
    const testimonialResponse = await this.app.apolloProvider.defaultClient.query({
      query: testimonialsQuery
    })
    state.testimonials = testimonialResponse.data.posts.nodes

    /* Blogs */
    const blogResponse = await this.app.apolloProvider.defaultClient.query({
      query: blogQuery
    })
    const blogArr = []
    for (const a in blogResponse.data.posts.nodes) {
      const blogResponse2 = await this.app.apolloProvider.defaultClient.query({
        query: blogPostQuery,
        variables: {
          slug: blogResponse.data.posts.nodes[a].slug
        }
      })
      blogArr.push(blogResponse2.data.post)
    }
    state.blog = blogResponse.data.posts.nodes
    state.blogs = blogArr

    /* Legal */
    const legalResponse = await this.app.apolloProvider.defaultClient.query({
      query: legalQuery
    })
    const legalArr = []
    for (const c in legalResponse.data.posts.nodes) {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: legalPostQuery,
        variables: {
          slug: legalResponse.data.posts.nodes[c].slug
        }
      })
      legalArr.push(response.data.post)
    }

    state.legal = legalResponse.data.posts.nodes
    state.legals = legalArr

    /* Portfolio */
    const portfolioResponse = await this.app.apolloProvider.defaultClient.query({
      query: portfolioQuery
    })
    const portfolioArr = []
    for (const b in portfolioResponse.data.posts.nodes) {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: portfolioPostQuery,
        variables: {
          id: portfolioResponse.data.posts.nodes[b].id
        }
      })
      portfolioArr.push(response.data.post)
    }
    state.portfolio = portfolioResponse.data.posts.nodes

    for (const post of portfolioArr) {
      post.imgThumb = await this.$screenshotHandler(encodeURIComponent(post.ACFLink.link))
    }
    await this.$browser.close()
    state.portfolios = portfolioArr
  }
}
