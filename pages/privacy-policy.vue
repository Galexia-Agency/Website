<template>
  <section class="white">
    <div class="maxWidth">
      <h1>Privacy Policy</h1>
      <p>Last updated: <b>7 July 2020</b>.</p>
      <p>Your privacy is important to us. It is Galexia Ltd's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://galexia.agency">https://galexia.agency</a>, and other sites we own and operate.</p>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
      <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
      <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
      <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
      <p>Galexia Ltd follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
      <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
      <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
      <p>This policy is effective as of <b>7 July 2020</b>.</p>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Privacy Policy'
    this.$parent.$parent.metaHelper.description = 'Galexia Ltd\'s Privacy Policy'
    this.$parent.$parent.metaHelper.url = 'https://galexia.agency/privacy-policy/'
  }
}
</script>
