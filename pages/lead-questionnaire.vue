<style scoped lang="scss">
  form {
    grid-template-columns: 1fr;
    gap: 2rem
  }
  #submitcontainer {
    grid-column: 1
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 1.25
  }
  h1 + p {
    margin-bottom: 2rem
  }
  label {
    font-size: 1rem;
    opacity: 1;
    p {
      margin: 0;
      font-size: .85rem;
      opacity: .85
    }
  }
  p.message {
    grid-column: 1
  }
</style>

<template>
  <div id="brand-identity">
    <section class="white">
      <div class="maxWidth">
        <div class="grid left">
          <div>
            <h1>We're happy you're considering Galexia Creative Agency Ltd to build your new online presence</h1>
            <p>
              We specialise in WordPress websites. By filling in this form you'll help us gain a better understanding of what your requirements are.
            </p>
            <form method="post" name="leadForm" netlify @submit.prevent="onSubmit">
              <input
                type="hidden"
                name="form-name"
                value="leadForm"
              >
              <label>
                First up, what's your name?
                <input
                  id="name"
                  v-model="form.name"
                  name="name"
                  type="text"
                  required
                  @keyup="checkform('leadForm', form)"
                >
              </label>
              <label>
                Now, what's your business email address?
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  required
                  @keyup="checkform('leadForm', form)"
                >
              </label>
              <label>
                Do you currently have a site?
                <select
                  id="doYouCurrentlyHaveASite"
                  v-model="form.doYouCurrentlyHaveASite"
                  name="doYouCurrentlyHaveASite"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>
                    Yes
                  </option>
                  <option>
                    No
                  </option>
                </select>
              </label>
              <label v-show="form.doYouCurrentlyHaveASite === 'Yes'">
                Please enter your site's address
                <input
                  id="siteAddress"
                  v-model="form.siteAddress"
                  name="siteAddress"
                  type="url"
                  @keyup="checkform('leadForm', form)"
                >
              </label>
              <p v-show="form.doYouCurrentlyHaveASite === 'Yes'">
                You will need access to a domain and web hosting services in order to have a new site published. Galexia provides <a href="https://galexia.agency/hosting/" target="_blank">domain registration services and web hosting services</a>. If you already have these services please have a look if we can offer you a better deal. In addition, all websites should be regularly maintained, backed up, and have a valid SSL certificate.
              </p>
              <label v-show="form.doYouCurrentlyHaveASite === 'Yes'">
                Please detail any domain, hosting, or maintenance needs
                <p>
                  Please also enter any information about your current domain or hosting that you think we may need to know.
                </p>
                <textarea
                  id="anyDomainHostingOrMaintenanceNeeds"
                  v-model="form.anyDomainHostingOrMaintenanceNeeds"
                  name="anyDomainHostingOrMaintenanceNeeds"
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                Do you have a project brief?
                <p>
                  This can be as simple as a word document of bullet point ideas.
                </p>
                <select
                  id="doYouHaveAProjectBrief"
                  v-model="form.doYouHaveAProjectBrief"
                  name="doYouHaveAProjectBrief"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>
                    Yes
                  </option>
                  <option>
                    No
                  </option>
                </select>
              </label>
              <label>
                What features does your website need to be successful?
                <p>
                  This can be anything from "I need customers to be able to contact me" to "I want to sell my bespoke animal prints"
                </p>
                <textarea
                  id="whatFeaturesDoesYourSiteNeedToBeSuccessful"
                  v-model="form.whatFeaturesDoesYourSiteNeedToBeSuccessful"
                  name="whatFeaturesDoesYourSiteNeedToBeSuccessful"
                  required
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                What pages will your website need to have?
                <p>
                  Please list as so: Home, About, Contact, Info, Services. The order does not matter.
                </p>
                <textarea
                  id="whatPagesWillYourWebsiteNeedToHave"
                  v-model="form.whatPagesWillYourWebsiteNeedToHave"
                  name="whatPagesWillYourWebsiteNeedToHave"
                  required
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                How often will content be updated on these pages?
                <p>
                  This is for manual changes to text and images rather than content from a dynamic source such as Facebook or an RSS feed.
                </p>
                <select
                  id="howOftenWillContentBeUpdatedOnThesePages"
                  v-model="form.howOftenWillContentBeUpdatedOnThesePages"
                  name="howOftenWillContentBeUpdatedOnThesePages"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                  <option>Never</option>
                </select>
              </label>
              <label>
                Can you create content yourself or do you require content creation services?
                <select
                  id="canYouCreateContentYourself"
                  v-model="form.canYouCreateContentYourself"
                  name="canYouCreateContentYourself"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>I prefer creating content myself</option>
                  <option>I need a bit of help</option>
                </select>
              </label>
              <label>
                Do you prefer updating content yourself, or sending it via email to be updated?
                <select
                  id="canYouUpdateContentYourself"
                  v-model="form.canYouUpdateContentYourself"
                  name="canYouUpdateContentYourself"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>I'll update it myself</option>
                  <option>I'll email it to you</option>
                </select>
              </label>
              <label>
                Do you have any websites that we could use for inspiration in the design?
                <p>
                  Even if they're not from your industry they can still help us gauge an idea on what you like.
                </p>
                <textarea
                  id="doYouHaveAnyWebsitesWeCouldUseForInspiration"
                  v-model="form.doYouHaveAnyWebsitesWeCouldUseForInspiration"
                  name="doYouHaveAnyWebsitesWeCouldUseForInspiration"
                  required
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                Do you have an existing style guide or logo we could use?
                <select
                  id="doYouHaveAnExistingStyleGuideOrLogo"
                  v-model="form.doYouHaveAnExistingStyleGuideOrLogo"
                  name="doYouHaveAnExistingStyleGuideOrLogo"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
              <label>
                Do you have any other ideas about a style for the website?
                <p>
                  Fonts, colours, sliders, grids, minimalist, etc
                </p>
                <textarea
                  id="doYouHaveAnyOtherIdeasAboutAStyleForTheWebsite"
                  v-model="form.doYouHaveAnyOtherIdeasAboutAStyleForTheWebsite"
                  name="doYouHaveAnyOtherIdeasAboutAStyleForTheWebsite"
                  required
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                Do you require SEO services?
                <p>SEO stands for Search Engine Optimisation and can, over time, provide new leads for your business</p>
                <select
                  id="doYouRequireSeoServices"
                  v-model="form.doYouRequireSeoServices"
                  name="doYouRequireSeoServices"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
              <label v-show="form.doYouRequireSeoServices === 'Yes'">
                Please detail what you would like to achieve with your SEO
                <p>
                  For example; I would like to be ranked above my competitor for the search term "Bee Keepers Staffordshire"
                </p>
                <textarea
                  id="whatYouWouldLikeToAchieveWithSEO"
                  v-model="form.whatYouWouldLikeToAchieveWithSEO"
                  name="whatYouWouldLikeToAchieveWithSEO"
                  @keyup="checkform('leadForm', form)"
                />
              </label>
              <label>
                Do you have a deadline?
                <select
                  id="doYouHaveADeadline"
                  v-model="form.doYouHaveADeadline"
                  name="doYouHaveADeadline"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </label>
              <label v-show="form.doYouHaveADeadline === 'Yes'">
                When is your deadline?
                <input
                  id="whenIsYourDeadline"
                  v-model="form.whenIsYourDeadline"
                  type="date"
                  name="whenIsYourDeadline"
                  @keyup="checkform('leadForm', form)"
                >
              </label>
              <label>
                Do you have an idea on budget?
                <input
                  id="budget"
                  v-model="form.budget"
                  type="number"
                  name="budget"
                  @keyup="checkform('leadForm', form)"
                >
              </label>
              <label>
                Please familiarize yourself with our <a href="https://galexia.agency/legal/" target="_blank">terms, policies, and agreements</a>
                <p>All our clients are required to agree with these in order to move forward with a project.</p>
                <select
                  id="termsAndConditions"
                  v-model="form.termsAndConditions"
                  name="termsAndConditions"
                  required
                  @keyup="checkform('leadForm', form)"
                  @change="checkform('leadForm', form)"
                >
                  <option>I accept</option>
                  <option>I don't accept</option>
                </select>
              </label>
              <div id="submitcontainer">
                <input
                  id="submit"
                  type="submit"
                  name="submit"
                  class="button colorTwo"
                  value="submit"
                  disabled
                >
              </div>
              <p v-show="!submitted">
              &nbsp;
              </p>
              <transition name="fade">
                <p v-show="submitted" class="message" v-text="submitted" />
              </transition>
            </form>
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
      submitted: false,
      form: {}
    }
  },
  head () {
    return {
      title: 'Lead Questionnaire',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://galexia.agency/lead-questionnaire/' }
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (process.client) {
      if (localStorage.getItem('leadForm')) {
        this.form = JSON.parse(localStorage.getItem('leadForm'))
      } else {
        this.form = {}
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.submit(this.form, 'leadForm')
        localStorage.setItem('leadForm', '')
        this.form = {}
        this.submitted = 'Message sent successfully! Thank you for considering Galexia Creative Agency Ltd for your project. We\'ll send you a quote via email in 1-2 working days.'
      } catch (e) {
        this.submitted = e.toString() + ' Please try again.'
      }
    }
  }
}
</script>
