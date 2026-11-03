// The Galexia components ship as plain .vue files without types.
declare module 'nuxt-component-pagination/index.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{
    pageCount: number
    currentPage?: number
    goToPage: (page: number) => void
  }>
  export default component
}
