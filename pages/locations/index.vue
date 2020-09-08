<template>
  <div>
    <nuxt-link to="/locations/trumpington" />
    <nuxt-link to="/locations/bassingbourn" />
    <nuxt-link to="/locations/cambridge" />
    <nuxt-link to="/locations/cambridgeshire" />

    <nuxt-link to="/locations/hertfordshire" />
    <nuxt-link to="/locations/royston" />
    <nuxt-link to="/locations/melbourne" />
    <nuxt-link to="/locations/baldock" />
    <nuxt-link to="/locations/letchworth" />
    <nuxt-link to="/locations/stevenage" />

    <nuxt-link to="/locations/southampton" />
    <nuxt-link to="/locations/hampshire" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
