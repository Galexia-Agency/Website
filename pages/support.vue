<style scoped>
  #commonIssues .card--inner {
    grid-template-rows: 8ch auto
  }

  @media (max-width: 500px) {
    #commonIssues .card--inner {
      grid-template-rows: auto auto
    }
  }
</style>

<template>
  <div>
    <Header
      title="Emergency Website Support"
      desc="Is your website down? Are you running into random errors? Are you struggling dealing with your hosting company? We can help. We provide affordable support to help you get your website back on track. We put your business first. We know that a website is often the first port of call for customers and if your website's down or not performing properly this can leave many customers unhappy. We'll drop everything and help you resolve any issues as quickly as possible."
    />
    <section class="white">
      <div class="grid left maxWidth">
        <div>
          <h3>Hosting issues</h3>
          <p>Sometimes your website can go down because your host can't handle a spike in web traffic. This causes the server to freeze and shut down. Think of sites on Black Friday, they often have queues to get on the site to prevent this very issue. Our Jamstack approach to websites minimizes this issue as only static files are served to customers. This means a lot less processing for the server to do, letting it serve a lot more people.</p>
          <p>What happens if you don't have the budget for a shiny new Jamstack site though? Well, there are various things we can do to help minimize the load on your server. Caching is key as it means the server only has to respond to the request once, then this request is stored and can be served numerous times without putting stress on your server.</p>
          <p>Traditional servers also come with some security issues. A Distributed Denial-of-Service (<abbr>DDOS</abbr>) Attack is where one or many computers send repeated requests to your website in order to overload the system or to repeatedly guess a password until they gain access. There are many other types of attacks too. By installing <a href="https://www.cloudflare.com/">Cloudflare</a> we mitigate a lot of these issues. As an added bonus Cloudflare also has built-in caching support.</p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/server.svg?include')" class="svg" />
      </div>
      <div class="grid right maxWidth">
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/wordpress.svg?include')" class="svg" />
        <div>
          <h3>WordPress issues</h3>
          <p>If you take one thing away from this page let it be have a regular backup schedule, and test to make sure you can restore from those backups. WordPress has such a large ecosystem that it's impossible for plugin and theme developers to thoroughly test their product with every combination of other plugins and themes out there. This means that when you update a plugin or theme there will always be the possibility that something goes wrong. This is why it is vital to have a backup that you can quickly restore from which prevents your site from being down for long periods of time.</p>
          <p>Because WordPress is so widely used, it comes with some security risks. If your site get's hacked, you'll want to delete everything off the server and restore from a backup of when the site was not hacked. This means you'll want to store the backup in a different location to the site.</p>
          <!--eslint-disable-next-line-->
          <p>All of this sound too complicated? Don't worry, our <nuxt-link to="/hosting/">hosting plans</nuxt-link> include built-in backups and security.</p>
        </div>
      </div>
      <div class="grid left maxWidth">
        <div>
          <h3>Facebook support community</h3>
          <p>If you've worked with us before  then you'll already have access to our great Facebook community. It's a place where all the small businesses we've worked with can interact, share their great sites, and get support for common website issues including WordPress themes and plugins, as well as styling issues. If your query isn't urgent we recommend posting a topic here first before coming to us. Best of all, it's free!</p>
        </div>
        <!--eslint-disable-next-line-->
        <div v-html="require('../assets/svg/community.svg?include')" class="svg" />
      </div>
    </section>
    <section class="white">
      <h2>Common issues</h2>
      <div id="commonIssues" class="grid column maxWidth four">
        <div class="card">
          <div class="card--inner">
            <h3>Error 404</h3>
            <p>This means the resource could not be found, whether it be a page or an image. This could be caused by an incorrect link, or the file really is missing.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>Error 500</h3>
            <p>This is a generic server error code. Inspecting the logs can help to diagnose this issue.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>Javascript errors</h3>
            <p>JavaScript errors can be caused for a whole bunch of reasons. Chrome DevTools can often help you find the offending bit of code.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>WordPress issues</h3>
            <p>Has a theme or plugin not installed properly? This may be due to mismatching WordPress or PHP versions.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>Database connection</h3>
            <p>WordPress can have trouble connecting to the database if it is down or if credentials are incorrect.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>SSL Error</h3>
            <p>SSL Certificates secure and encrypt web traffic. They may not be configured correctly resulting in an error.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>Slow website</h3>
            <p>There are a number of reasons for a website to be performing badly. We know various tricks to speed up an old site.</p>
          </div>
        </div>
        <div class="card">
          <div class="card--inner">
            <h3>Spam</h3>
            <p>For all the good the web brings there are some bad actors on it. Are you getting overwhelmed by spam? Try using <a href="https://www.google.com/recaptcha/about/">Google's reCaptcha</a> on comment boxes.</p>
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
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Website Support'
    this.$parent.$parent.metaHelper.description = 'Is your website down? Are you running into random errors? Are you struggling dealing with your hosting company? We can help. We provide affordable support to help you get your website back on track. We put your business first. We know that a website is often the first port of call for customers and if your website\'s down or not perfomring properly this can leave many customers unhappy. We\'ll drop everything and help you resolve any issues as quickly as possible.'
  }
}
</script>
