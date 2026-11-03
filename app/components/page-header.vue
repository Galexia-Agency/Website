<style>
  .header--inner h1 i,
  .header--inner h2 i {
    border-bottom: .25rem solid white
  }
</style>
<style scoped>
  /* Header */
  .header--inner {
    display: grid;
    gap: 2rem;
    max-width: 880px;
    margin: auto;
    padding: 6rem 2rem 7.5rem;
    text-align: center
  }
  .header--inner * {
    margin: 0
  }
  .header--inner h1 {
    color: white
  }
  .header--inner h2 {
    padding: 0;
    color: rgb(255 255 255 / 90%)
  }
  .header--inner p {
    color: rgb(255 255 255 / 90%);
    font-size: 1.125rem;
    line-height: 1.4
  }
  .header--inner :any-link:not(.button) {
    color: white;
    font-weight: normal;
    text-decoration: underline
  }

  /* Ghost button, so it stands out against the dark background */
  .header--inner .button {
    color: var(--primaryColor);
    background: rgb(255 255 255 / 90%);
    box-shadow: inset 0 0 0 1px rgb(83 75 174 / 45%), 0 8px 20px -6px rgb(0 0 0 / 35%);
    transition: background-color .3s, color .3s, box-shadow .3s
  }
  .header--inner .button:hover {
    color: white;
    background: #534BAE;
    box-shadow: inset 0 0 0 1px #534BAE, 0 10px 24px -6px rgb(0 0 0 / 45%)
  }
  @media (max-width: 900px) {
    .header--inner p {
      color: rgb(255 255 255 / 95%);
      font-size: 1rem;
      line-height: 1.5
    }
  }
  @media (max-width: 500px) {
    .header--inner {
      padding: 2rem 1rem 4rem
    }
  }
</style>
<template>
  <header>
    <div class="header--inner maxWidth">
      <h1 v-html="title" />
      <h2 v-if="subtitle" v-html="subtitle" />
      <p v-html="desc" />
      <div v-if="link.text">
        <a v-if="link.location.startsWith('#')" :href="link.location" class="button" v-html="link.text" />
        <NuxtLink v-else class="button" :to="link.location">
          <span v-html="link.text" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string | null
  desc?: string
  link?: { text: string, location: string }
}>(), {
  title: '',
  subtitle: null,
  desc: '',
  link: () => ({ text: '', location: '' })
})
</script>
