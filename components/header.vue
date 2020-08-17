<template>
  <header>
    <div class="header--inner maxWidth">
      <!-- eslint-disable-next-line -->
      <h1 v-html="title" />
      <!-- eslint-disable-next-line -->
      <p v-html="desc" />
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
