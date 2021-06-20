<template>
  <div>
    <nuxt-link to="/locations/cambridge" />

    <nuxt-link to="/locations/hertfordshire" />
    <nuxt-link to="/locations/royston" />
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
