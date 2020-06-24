<style scoped>
  .card:hover {
    background-color: inherit;
    color: inherit
  }
  .card:hover h3 {
    color: #1A237E
  }
  .card {
    display: grid;
    grid-template-rows: max-content 300px 1fr
  }
  .card svg {
    margin: auto;
    height: auto;
    width: 75%
  }
  .card h3 {
    margin-bottom: 1.5rem;
    text-align: center
  }
</style>

<template>
  <div id="web">
    <section class="white">
      <div class="grid left maxWidth">
        <div>
          <h3>Advertising</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <inline-svg :src="require('../assets/svg/advertising.svg')" />
      </div>
      <div class="grid right maxWidth">
        <inline-svg :src="require('../assets/svg/social.svg')" />
        <div>
          <h3>Social Media</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Emails / Newsletters</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <inline-svg :src="require('../assets/svg/email.svg')" />
      </div>
    </section>
    <section class="white">
      <h2>Content Creation</h2>
      <div class="grid column maxWidth three">
        <div class="card">
          <h3>Photography</h3>
          <inline-svg :src="require('../assets/svg/photography.svg')" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div class="card">
          <h3>Videography</h3>
          <inline-svg :src="require('../assets/svg/videography.svg')" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div class="card">
          <h3>Copy-writing</h3>
          <inline-svg :src="require('../assets/svg/writing.svg')" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$parent.$parent.page = {
      display: true,
      title: 'Marketing solutions to help your business go from zero to <i>hero</i>',
      subTitle: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui neque, malesuada nec condimentum vel, luctus interdum enim. Vestibulum fermentum ante sit amet mollis finibus. Sed eget tellus a ipsum tempus hendrerit id a mi. Nulla in dolor maximus, ultricies purus sed, tempus justo. Maecenas felis ligula, condimentum eu eleifend at, ultrices in velit. Duis blandit sodales neque at iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      cta1: {
        active: false
      },
      cta: {
        active: false
      }
    }
  }
}
</script>
