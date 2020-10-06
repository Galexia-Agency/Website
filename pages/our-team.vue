<style scoped>
  h3, h4 {
    text-transform: capitalize;
    text-align: center
  }
  h4 {
    color: #1A237EAA
  }
  img {
    width: 100%;
    max-width: 300px;
    display: block;
    margin: auto
  }
</style>

<template>
  <div>
    <Header
      title="Our Team"
      desc="Meet our team of highly creative individuals who will put your business first. They each have things that make them unique, in their own life, and in the work that they do. Get to know them a bit more down below."
    />
    <section class="white">
      <div class="maxWidth grid column four">
        <div v-for="(member, index) in team" :key="index" class="card">
          <div class="card--inner">
            <h3>
              {{ member.name }}
            </h3>
            <h4>
              {{ member.title }}
            </h4>
            <img :src="require('../assets/img/octocats/' + member.name + '.png?resize&size=300')" width="300px">
            <!--eslint-disable-next-line-->
            <div v-html="member.desc" class="desc" />
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
        { name: 'joe', title: 'Managing Director', desc: '<p>Joe started Galexia in the middle of his University Degree in 2020, the year of the virus.<br><br>Joe wanted to help small businesses in his local area update their online presence to help them get more customers.<br><br>In his free time, Joe enjoys simulator games, travelling, and photography.</p>' },
        { name: 'chelsea', title: 'Photographer' }
        /*
        { name: 'eleanor', title: 'Marketing, Graphic Design' },
        { name: 'aurimas', title: 'Web Developer' },
        { name: 'kris', title: 'Web Developer' },
        { name: 'james', title: 'web developer' },
        { name: 'hannah', title: 'Marketing' },
        { name: 'jamie', title: 'Copy-Writing' },
        { name: 'benjamin', title: 'IT Services' },
        */
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
        { hid: 'og:image', property: 'og:image', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Our Team' },
        { hid: 'twitter:description', name: 'twitter:description', content: '' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'https://galexia.agency/android-chrome-512x512.png' },
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/our-team/' }
      ]
    }
  }
}
</script>
