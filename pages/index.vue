<template>
  <div>
    <section class="white">
      <h2 class="maxWidth">
        Our Process
      </h2>
      <div class="grid left maxWidth">
        <div>
          <h3>We start with a conversation</h3>
          <p>We find the best way to start a project is to have an informal, no-obligations chat about your requirements. Some of our clients come to us with a large project plan spanning many months, with a detailed idea about what they want. Some other clients only know the idea, and not the implementation. We’re happy with both. Contact us today.</p>
        </div>
        <inline-svg :src="require('../assets/svg/discussion.svg')" />
      </div>
      <div class="grid right maxWidth">
        <inline-svg :src="require('../assets/svg/project.svg')" />
        <div>
          <h3>You run your business. We run the project</h3>
          <p>We understand life often feels like it’s moving in the fast lane, that’s why we’re versed in project management. We keep your project on track, working to strict deadlines, so you don’t have to worry. If you do prefer a more hands-on approach we have a proprietary project management system where you can log in and monitor our progress, send us any further details, or ask any questions.</p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Launch day. More business for you, another happy customer for us</h3>
          <p>Donec congue tempor metus id imperdiet. Etiam luctus ex ut ante cursus, id vulputate lorem sodales. Etiam faucibus nisi non eleifend scelerisque. Duis id erat bibendum, fermentum dolor in, scelerisque quam. Proin vel ornare augue. Ut porttitor tortor non diam maximus aliquet. Nulla eget tempor dui. In eget tellus scelerisque, interdum lectus eu, lobortis ligula. Nam consectetur vestibulum massa ut commodo. Praesent tempor mi at eros iaculis, id interdum turpis congue.</p>
        </div>
        <inline-svg :src="require('../assets/svg/launch.svg')" />
      </div>
    </section>
    <section class="white">
      <h2 class="maxWidth">
        Our Portfolio
      </h2>
      <div class="grid column four maxWidth">
        <a class="card" href="blog">
          <img src="https://images.unsplash.com/photo-1590715517483-a21a8bacabcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%" height="auto" loading="lazy">
          <div class="card--inner">
            <h3>DNS Over HTTPS</h3>
            <div class="tags"><span>Marketing</span> <span>Photography</span> <span>Web Design</span></div>
            <p>This is a short summary of the blog post</p>
          </div>
        </a>
        <a class="card" href="blog">
          <img src="https://images.unsplash.com/photo-1590715517483-a21a8bacabcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%" height="auto" loading="lazy">
          <div class="card--inner">
            <h3>DNS Over HTTPS</h3>
            <div class="tags"><span>Marketing</span> <span>Photography</span> <span>Web Design</span></div>
            <p>This is a short summary of the blog post</p>
          </div>
        </a>
        <a class="card" href="blog">
          <img src="https://images.unsplash.com/photo-1590715517483-a21a8bacabcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%" height="auto" loading="lazy">
          <div class="card--inner">
            <h3>DNS Over HTTPS</h3>
            <div class="tags"><span>Marketing</span> <span>Photography</span> <span>Web Design</span></div>
            <p>This is a short summary of the blog post</p>
          </div>
        </a>
        <a class="card" href="blog">
          <img src="https://images.unsplash.com/photo-1590715517483-a21a8bacabcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%" height="auto" loading="lazy">
          <div class="card--inner">
            <h3>DNS Over HTTPS</h3>
            <div class="tags"><span>Marketing</span> <span>Photography</span> <span>Web Design</span></div>
            <p>This is a short summary of the blog post</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$parent.$parent.page = {
      display: true,
      title: 'Let us focus on your content so you can focus on your <i>business</i>',
      subTitle: '',
      desc: 'We are a creative agency specialising in website design development and marketing. We’re a fairly new company built from the ground up to help you grow. We use the latest and greatest practises and technologies so that we can pass on these benefits to you. What’s more, you don’t have to worry about anything, we take care of the whole process so you can carry on running your business.'
    }
  }
}
</script>
