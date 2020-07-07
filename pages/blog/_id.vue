<style scoped>
  .white {
    padding-top: 0
  }
  .white .maxWidth {
    max-width: 780px
  }
  h1 {
    z-index: 2;
    color: white;
    justify-self: left;
    align-self: end;
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 5rem
  }
  .post--header {
    height: 400px;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center
  }
  .background_opacity {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .33)
  }
  svg {
    grid-row: 1;
    grid-column: 1;
    opacity: .85
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: right
  }
</style>
<style>
  figure {
    margin: 0;
    max-width: 100%
  }
  figure img {
    width: 75%;
    display: block;
    margin: auto
  }
</style>

<template>
  <div class="post">
    <div class="post--header">
      <div class="background_opacity" />
      <h1 class="maxWidth">
        {{ post.title }}
      </h1>
      <inline-svg :src="require('assets/svg/faux-code.svg')" />
    </div>
    <section class="white">
      <div class="maxWidth">
        <div class="post--meta">
          <p>Author: <b>{{ post.author.name }}</b></p>
          <p>
            Published on:
            <b>
              <time>
                {{ new Date(post.date).getDate() + " " + monthArr[new Date(post.date).getMonth()] + " '" + new Date(post.date).getFullYear().toString().substring(2) }}
              </time>
            </b>
          </p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="post.content" class="post--content"/>
      </div>
    </section>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/posts/blog'

export default {
  data () {
    return {
      post: {},
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
  mounted () {
    this.$parent.$parent.page = {
      display: false
    }
    this.$parent.$parent.metaHelper.title = this.post.title
    this.$parent.$parent.metaHelper.description = this.post.excerpt
    this.$parent.$parent.metaHelper.image = this.post.featuredImage.mediaItemUrl
  }
}
</script>