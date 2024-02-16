<style lang="scss">
/* Layout */
.site-background {
  min-height: 100vh;
  background-color: rgb(53 47 114);
  background-image: url('~/assets/img/SpaceBackgroundBlurred.jpg?format=webp&resize');
  background-image: image-set(
    var(--imageToPreload) type('image/avif'),
    url('~/assets/img/SpaceBackgroundBlurred.jpg?format=webp&resize') type('image/webp')
  );
  background-repeat: no-repeat;
  background-size: var(--backgroundSize, 4500px)
}
main :any-link,
main h2,
main h3,
main h4,
main h5,
main h6 {
  color: var(--primaryColor);
  font-weight: 700
}
main :any-link:hover {
  text-decoration: underline
}

/* Hosting / SEO */
.title {
  font-size: 1.25rem
}
.desc {
  max-width: 780px;
  margin: auto;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.33;
  text-align: center;
  opacity: .9;
  &:last-of-type {
    margin-bottom: 2rem
  }
}
.terms {
  padding-left: 22px;
  color: var(--primaryColor);
  font-size: .9rem
}
#top {
  position: relative
}

@media (max-width: 900px) {
  .hosting--background {
    background-size: 75%
  }
  #top {
    display: grid
  }
  .desc {
    margin-bottom: 2em;
    opacity: .95
  }
}

/* Comparison Table */
table.comparison {
  border-collapse: collapse;
  td {
    padding: .5rem;
    &:nth-of-type(2),
    &:nth-of-type(3) {
      text-align: center
    }
  }
  h3 {
    margin-bottom: 1.5rem
  }
  tbody {
    td {
      svg.svg-inline--fa {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--primaryColor)
      }
      svg.fa-times-circle {
        color: #999999
      }
    }
    tr {
      &:nth-of-type(odd):not(.no-background) {
        background-color: var(--secondaryColor)
      }
    }
  }
}
@media (max-width: 740px) {
  .scroll-wrapper {
    position: relative;
    overflow: hidden;
    .shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 100;
      width: 10px;
      height: 100%;
      background: red;
      &.shadow-left {
        left: 0;
        background: linear-gradient(450deg, rgb(0 0 0 / 15%), transparent);
        opacity: 0
      }
      &.shadow-right {
        right: 0;
        background: linear-gradient(270deg, rgb(0 0 0 / 15%), transparent)
      }
    }
  }
  .mobile-table {
    position: relative;
    max-width: calc(var(--100vw) - 2rem);
    height: 100%;
    overflow-x: scroll;
    table.comparison {
      width: 650px
    }
  }
}

/* Info */
.info-item {
  display: block;
  margin-left: 1em;
  color: #333333;
  font-size: .8em
}

@media (max-width: 1070px) {
  .site-width {
    width: var(--100vw)
  }
}

</style>

<template>
  <div class="site-background" :style="`--imageToPreload: url(${imageToPreload})`">
    <div class="site-width">
      <LayoutNav />
      <main>
        <nuxt keep-alive />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      imageToPreload: require('~/assets/img/SpaceBackgroundBlurred.jpg?format=avif&resize')
    }
  },
  head () {
    return {
      link: [
        { rel: 'preload', as: 'image', href: this.imageToPreload }
      ]
    }
  }
}
</script>
