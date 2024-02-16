<style scoped>
.team-card {
  text-align: center
}
.team-card__name,
.team-card__title {
  text-align: center;
  text-transform: capitalize
}
.team-card__title {
  color: var(--secondaryColor)
}
.team-card__image {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: auto
}
.team-card__description {
  color: var(--darkGrey);
  font-size: 1.2rem;
  line-height: 1.33
}
</style>

<template>
  <div>
    <LayoutHeader
      title="Our Team"
      desc="Meet our team of highly creative individuals who will put your business first. They each have things that make them unique, in their own life, and in the work that they do."
      :link="{location: '/contact/', text: 'Chat to us'}"
    />
    <section class="section-padding section-padding--100 white">
      <div class="layout--max-width grid grid--column grid--three">
        <div v-for="(member, index) in team" :key="index" class="card team-card">
          <div class="card__inner">
            <h3 class="team-card__name">
              {{ member.name }}
            </h3>
            <h4 class="team-card__title">
              {{ member.title }}
            </h4>
            <GalexiaImage
              :avif="require('~/assets/img/octocats/' + member.name + '.png?format=avif&resize&size=300')"
              :webp="require('~/assets/img/octocats/' + member.name + '.png?format=webp&resize&size=300')"
              width="300px"
              loading="lazy"
              decoding="async"
              class="team-card__image"
            />
            <div class="team-card__description" v-html="member.desc" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'joe',
          title: 'Managing Director',
          desc: '<p>Joe started Galexia during the middle of his Digital Design and Development Degree in 2020.<br><br>Joe wanted to help small businesses in his local area update their online presence to help them get more customers.<br><br>In his free time, Joe enjoys simulator games, travelling, and photography.</p>'
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
          name: 'megan',
          title: 'Designer',
          desc: '<p>Megan has been designing business materials for the last 6 years, joining our team at the start of 2021.<br><br>From business cards to brochures and favicons to websites, Megan can create fantastic designs for just about anything.<br><br>In her spare time, Megan will be walking her dog, creating her own artwork or drinking cups of tea in bed.</p>'
        },
        {
          name: 'hannah',
          title: 'Marketer',
          desc: '<p>Hannah graduated with a bachelor\'s degree in marketing from Solent University, in 2019.<br><br>There\'s no doubt that marketing is a fickle and fast paced industry. It\'s easy to get stuck in ways of the past, but Hannah can help bring your marketing efforts up to present-day standards, maximising your potential for future success.<br><br>In her free time, she enjoys playing games, both online and offline and also building and painting miniatures to add to her ever-growing collection.</p>'
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
