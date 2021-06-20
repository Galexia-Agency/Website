import { InMemoryCache } from 'apollo-cache-inmemory'

export default function (ctx) {
  const cache = new InMemoryCache()
  return {
    httpEndpoint: 'https://blog.galexia.agency/graphql',
    cache
  }
}
