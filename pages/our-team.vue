<style scoped>
  h3, h4 {
    text-align: center;
    text-transform: capitalize
  }
  h4 {
    color: #1A237EAA
  }
  img {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: auto
  }
</style>

<template>
  <div>
    <Header
      title="Our Team"
      desc="Meet our team of highly creative individuals who will put your business first. They each have things that make them unique, in their own life, and in the work that they do. Get to know them a bit more down below."
      :link="{location: '/contact/', text: 'Chat to us'}"
    />
    <section class="white">
      <div class="maxWidth grid column three">
        <div v-for="(member, index) in team" :key="index" class="card">
          <div class="card--inner">
            <h3>
              {{ member.name }}
            </h3>
            <h4>
              {{ member.title }}
            </h4>
            <GalexiaImage
              :avif="require('../assets/img/octocats/' + member.name + '.png?format=avif&resize&size=300')"
              :webp="require('../assets/img/octocats/' + member.name + '.png?format=webp&resize&size=300')"
              :src="require('../assets/img/octocats/' + member.name + '.png?resize&size=300')"
              width="300px"
              loading="lazy"
              decoding="async"
            />
            <div class="desc" v-html="member.desc" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '../components/header'

export default {
  components: {
    Header
  },
  data () {
    return {
      team: [
        {
          name: 'joe',
          title: 'Managing Director',
          desc: '<p>Joe started Galexia in the middle of his University Degree in 2020, the year of the virus.<br><br>Joe wanted to help small businesses in his local area update their online presence to help them get more customers.<br><br>In his free time, Joe enjoys simulator games, travelling, and photography.</p>'
        },
        {
          name: 'don',
          title: 'Operations Director',
          desc: '<p>Don joined the company at it\'s founding and keeps the cogs oiled.<br><br>He\'s passionate about all things business which really helps us get to understand how you run yours.<br><br>In his spare time, he likes to work on cars and collect vinyl, cassettes, and VHS tapes.</p>'
        },
        {
          name: 'chelsea',
          title: 'Creative Director',
          desc: '<p>Chelsea joined Galexia as a photographer when the company was founded.<br><br>Chelsea specializes in event photography and has worked with a number of clients at a range of functions.<br><br>In her spare time, she likes to read, collect Funko pops, and look at pictures of dogs.</p>'
        },
        {
          name: 'megan',
          title: 'Senior Designer',
          desc: '<p>Megan has been designing business materials for the last 6 years, joining our team at the start of 2021.<br><br>From business cards to brochures and favicons to websites, Megan can create fantastic designs for just about anything.<br><br>In her spare time, Megan will be walking her dog, creating her own artwork or drinking cups of tea in bed.</p>'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Our Team',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:title', property: 'og:title', content: 'Our Team' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/icon.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Our Team' },
        { hid: 'twitter:description', name: 'twitter:description', content: '' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/icon.png' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/our-team/' }
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
              "name": "Our Team",
              "item": "https://galexia.agency/our-team/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
