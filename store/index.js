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
  nuxtServerInit ({ state }, context) {
    state.testimonials = context.ssrContext.$state.testimonials
    state.blog = context.ssrContext.$state.blog
    state.blogs = context.ssrContext.$state.blogs
    state.portfolio = context.ssrContext.$state.portfolio
    state.portfolios = context.ssrContext.$state.portfolios
    state.legal = context.ssrContext.$state.legal
    state.legals = context.ssrContext.$state.legals
  }
}
