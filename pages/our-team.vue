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
      <div class="maxWidth grid column three">
        <div v-for="(member, index) in team" :key="index" class="card">
          <div class="card--inner">
            <h3>
              {{ member.name }}
            </h3>
            <h4>
              {{ member.title }}
            </h4>
            <img :src="require('../assets/img/octocats/' + member.name + '.png?resize&size=300')" width="300px" loading="lazy" decoding="async">

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
          title: 'Media Creation',
          desc: '<p>Chelsea joined Galexia as a photographer when the company was founded.<br><br>Chelsea specializes in event photography and has worked with a number of clients at a range of functions.<br><br>In her spare time, she likes to read, collect Funko pops, and look at pictures of dogs.</p>'
        },
        {
          name: 'hannah',
          title: 'Marketer',
          desc: '<p>Hannah graduated with a bachelor\'s degree in marketing from the Solent University, in 2019.<br><br>There\'s no doubt that marketing is a fickle and fast paced industry. It\'s easy to get stuck in ways of the past, but Hannah can help bring your marketing efforts up to present-day standards, maximising your potential for future success.<br><br>In her free time, she enjoys playing games, both online and offline and also building and painting miniatures to add to her ever-growing collection.</p>'
        },
        {
          name: 'jamie',
          title: 'Copy-Writer',
          desc: '<p>Jamie graduated from university in 2019 with a degree in Sports Journalism.<br><br>Jamie has a vast experience across all platforms of the journalism industry but specialises in print.<br><br>He\'s a self-proclaimed Blogger, writer and freelancer and happy to try his hand at anything.</p>'
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
      ]
    }
  }
}
</script>
