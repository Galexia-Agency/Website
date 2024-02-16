<style scoped>
  .white {
    padding-top: 0
  }
  .white .layout--max-width {
    max-width: 780px
  }
  h1 {
    z-index: 2;
    grid-row: 1;
    grid-column: 1;
    align-self: end;
    justify-self: left;
    width: 100%;
    margin-bottom: 1rem;
    color: white;
    font-size: 4rem;
    font-size: clamp(3rem, calc((var(--100vw) / 100) * 10), 5rem)
  }
  .post--header {
    position: relative;
    display: grid;
    height: 400px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    place-items: center
  }
  .background_opacity {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 40%)
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: end;
    width: 100%;
    text-align: right
  }
  .post--content {
    line-height: 1.5
  }

  @media (max-width: 500px) {
    .post--header {
      height: 300px
    }
    .post--meta {
      grid-auto-flow: row
    }
    .post--meta p:last-of-type {
      justify-self: start;
      text-align: left
    }
  }
</style>
<style>
  figure {
    max-width: 100%;
    margin: 0
  }
  figure img {
    display: block;
    width: 75%;
    height: auto;
    margin: auto
  }
  @media (max-width: 500px) {
    figure img {
      width: 100%
    }
  }
</style>

<template>
  <div v-if="blog" class="post">
    <div class="post--header" :style="'background-image:url(' + blog.featuredImage.node.mediaItemUrl + ')'">
      <div class="background_opacity" />
      <h1 class="layout--max-width" v-html="blog.title" />
    </div>
    <section class="white">
      <div class="layout--max-width">
        <div class="post--content" v-html="blog.content" />
        <ClientOnly>
          <GalexiaShare
            :title="blog.title"
            :description="blog.excerpt"
            :media="blog.featuredImage.mediaItemUrl"
          />
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    if (this.blog) {
      return {
        title: this.blog.title.replace('&#8217;', '\'') + ' | Blog',
        meta: [
          { hid: 'description', name: 'description', content: this.blog.seo.metaDesc || this.blog.excerpt },
          { hid: 'og:title', property: 'og:title', content: this.blog.title.replace('&#8217;', '\'') + ' | Blog' },
          { hid: 'og:description', property: 'og:description', content: this.blog.seo.metaDesc || this.blog.excerpt },
          { hid: 'og:image', property: 'og:image', content: this.blog.featuredImage.node.mediaItemUrl },
          { hid: 'twitter:title', name: 'twitter:title', content: this.blog.title.replace('&#8217;', '\'') + ' | Blog' },
          { hid: 'twitter:description', name: 'twitter:description', content: this.blog.seo.metaDesc || this.blog.excerpt },
          { hid: 'twitter:img', name: 'twitter:img', content: this.blog.featuredImage.node.mediaItemUrl }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/blog/' + this.blog.slug + '/' }
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [
          {
            innerHTML: '{"@context": "https://schema.org","@type": "BreadcrumbList","itemListElement": [{"@type": "ListItem","position": 2,"name": "Blog","item": "https://galexia.agency/blog/"}]}',
            type: 'application/ld+json'
          },
          {
            innerHTML: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 3,
                "name": "${this.blog.title}",
                "item": "https://galexia.agency/blog/${this.blog.slug}/"
              }]
            }`,
            type: 'application/ld+json'
          },
          {
            innerHTML: `{
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "${this.blog.title.replace('&#8217;', '\'')}",
              "image": [
                "${this.blog.featuredImage.node.mediaItemUrl}"
              ],
              "datePublished": "${new Date(this.blog.date).toISOString()}"
            }`,
            type: 'application/ld+json'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'blogs'
    ]),
    blog () {
      return this.blogs.find((blog) => blog.slug === this.$route.params.slug)
    }
  }
}
</script>
