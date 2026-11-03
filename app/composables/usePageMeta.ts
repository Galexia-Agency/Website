import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue, useHead, useSeoMeta } from '#imports'
import { fullTitle, siteUrl } from '~/utils/site'

export interface Breadcrumb {
  name: string
  item: string
}

export interface PageMeta {
  title: MaybeRefOrGetter<string>
  description?: MaybeRefOrGetter<string>
  path?: string
  image?: MaybeRefOrGetter<string>
  breadcrumb?: MaybeRefOrGetter<Breadcrumb[]>
  noindex?: boolean
}

// The title, description, image, canonical URL and breadcrumb that pages set. Values may be refs or getters.
// `path` is the page's route ('/contact/'); it gives the canonical URL and, with `breadcrumb`, the BreadcrumbList.
export function usePageMeta ({ title, description, path, image = `${siteUrl}/icon.png`, breadcrumb, noindex = false }: PageMeta) {
  const pageTitle = computed(() => fullTitle(toValue(title)))
  const url = path ? `${siteUrl}${path}` : null
  const crumbs = breadcrumb ? [{ name: 'Home', item: siteUrl }, ...toValue(breadcrumb)] : null
  useHead({
    title,
    link: url ? [{ rel: 'canonical', href: url }] : [],
    meta: noindex ? [{ name: 'robots', content: 'noindex' }] : [],
    script: crumbs
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb }))
          })
        }]
      : []
  })
  useSeoMeta({
    ogTitle: pageTitle,
    twitterTitle: pageTitle,
    description,
    ogDescription: description,
    twitterDescription: description,
    ogImage: image,
    twitterImage: image,
    ogUrl: url
  })
}
