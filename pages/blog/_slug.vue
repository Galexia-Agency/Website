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
    font-size: 4rem;
    font-size: clamp(3rem, 10vw, 5rem)
  }
  .post--header {
    height: 400px;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
  }
  .background_opacity {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4)
  }
  .post--meta {
    display: grid;
    grid-auto-flow: column
  }
  .post--meta p:last-of-type {
    justify-self: end;
    text-align: right;
    width: 100%
  }
  .post--content {
    line-height: 1.5
  }
  .post--footer {
    display: grid;
    grid-gap: .5rem;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, 140px)
  }
  .post--footer a {
    text-align: center;
    width: 140px;
    color: white;
    font-size: 1rem;
    margin: 0
  }
  .post--footer h4 {
    grid-column: 1/-1;
    margin-bottom: 0;
    width: fit-content
  }
  .post--footer.nativeShare h4 {
    place-self: center;
    text-align: center;
    margin: 1.33em 0 1em;
    width: 100%
  }

  @media (max-width: 690px) {
    .post--footer {
      justify-content: center
    }
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
    margin: 0;
    max-width: 100%
  }
  figure img {
    width: 75%;
    height: auto;
    display: block;
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
      <h1 class="maxWidth" v-html="blog.title" />
    </div>
    <section class="white">
      <div class="maxWidth">
        <div class="post--meta">
          <p>Author: <strong>{{ blog.author.node.name }}</strong></p>
          <p>
            Published on:
            <strong>
              <time>
                {{ new Date(blog.date).getDate() + " " + monthArr[new Date(blog.date).getMonth()] + " '" + new Date(blog.date).getFullYear().toString().substring(2) }}
              </time>
            </strong>
          </p>
        </div>

        <div class="post--content" v-html="blog.content" />
        <div v-if="!share" class="post--footer">
          <h4>Share:</h4>
          <ShareNetwork
            v-for="social in socials"
            :key="social"
            :network="social"
            :url="'https://galexia.agency' + $router.currentRoute.path"
            :title="blog.title + ' | Galexia Creative Agency Ltd | Web Design and Development'"
            :description="blog.excerpt"
            :media="blog.featuredImage.mediaItemUrl"
            class="button"
          >
            <font-awesome-icon :icon="['fab', social.toLowerCase()]" /> {{ social }}
          </ShareNetwork>
        </div>
        <div v-else class="post--footer nativeShare">
          <h4 class="button">
            <font-awesome-icon :icon="['fas', 'share-alt']" /> <a href="javascript:void(0)" @click="nativeShare">Share this blog post</a>
          </h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socials: ['Facebook', 'LinkedIn', 'Twitter', 'WhatsApp'],
      monthArr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
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
            innerHTML: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://galexia.agency/blog/"
              }]
            }`,
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
    share () {
      try {
        return process.client ? navigator.share() : false
      } catch {
        return false
      }
    },
    blog () {
      return this.$parent.$parent.blogs.find(blog => blog.slug === this.$route.params.slug)
    }
  },
  methods: {
    nativeShare () {
      navigator.share({
        title: this.blog.title + ' | Blog',
        text: this.blog.excerpt.replace('<p>', '').replace('</p>', '').replace('[&hellip;]', '').replace('\n', ''),
        url: 'https://galexia.agency' + this.$router.currentRoute.path
      })
    }
  }
}
</script>
