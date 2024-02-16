<style lang="scss" scoped>
.social-links {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-content: center;
  align-items: center;
  justify-self: end;
  font-size: 24px;
  a {
    transition: color .5s;
    &:hover {
      color: #FFFFFF99
    }
    svg {
      width: 1.5rem
    }
  }
  @media (max-width: 900px) {
    justify-self: center
  }
  @media (max-width: 500px) {
    grid-auto-flow: row;
    grid-template-columns: auto auto auto auto auto
  }
  @media print {
    display: none
  }
}
</style>
<style lang="scss">
@media(max-width: 500px) {
  .social-image {
    grid-column: 1 / -1;
    img {
      display: block;
      margin: auto
    }
  }
}
</style>

<template>
  <div class="social-links">
    <a href="https://www.policybee.co.uk/" target="_blank" class="social-image">
      <GalexiaImage
        :avif="require('~/assets/img/White_Badge_PolicyBee.png?format=avif&resize&size=75')"
        :webp="require('~/assets/img/White_Badge_PolicyBee.png?format=webp&resize&size=75')"
        width="75"
        height="75"
        alt="Insured through PolicyBee"
      />
    </a>
    <a
      href="https://digitalagencynetwork.com/agencies/cambridge"
      target="_blank"
      class="social-image"
    >
      <img
        style="width: 160px; height: auto"
        src="https://digitalagencynetwork.com/wp-content/themes/danglobal/assets/images/badges/dark.svg"
        alt="Cambridge digital agency network member badge dark"
      >
    </a>
  </div>
</template>
