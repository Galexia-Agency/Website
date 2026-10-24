<style scoped lang="scss">
  form {
    grid-template-columns: 1fr;
    gap: 2rem
  }
  #submitcontainer {
    grid-column: 1
  }
  h1 {
    margin-bottom: 1rem
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
            <h1>Your Brand Identity</h1>
            <p>
              Your Brand Identity is how people perceive you.
              <br>
              What will people think and feel when they hear your company name?
              <br>
              How do you want to come across to customers and potential customers?
            </p>
            <form ref="formEl" name="brandIdentityForm" @input="changed" @change="changed" @submit.prevent="onSubmit">
              <label>
                Your Company Name:
                <input
                  id="yourCompanyName"
                  v-model="form.yourCompanyName"
                  name="yourCompanyName"
                  type="text"
                  required
                >
              </label>
              <label>
                Who is your ideal customer?
                <p>
                  If you target a very specific group of people, let us know just how specific. This will help hone the Brand Identity to those people. For example, you might be a Clothing Store that creates alternative clothing & jewellery for women in their teens - 30s that like to dress in a gothic/alternative style. You can imagine the brand style for this company would be very different to Primark's!
                </p>
                <textarea
                  id="whoIsYourIdealCustomer"
                  v-model="form.whoIsYourIdealCustomer"
                  name="whoIsYourIdealCustomer"
                  required
                />
              </label>
              <label>
                What is your why?
                <p>
                  A lot of companies focus on what they do and how they do it. People don't identify with products, they identify with dreams, purposes and feelings. <a href="https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" target="_blank">Watch this video</a> for a fantastic explanation on why you need to tell the world your 'WHY?'
                </p>
                <textarea
                  id="whatIsYourWhy"
                  v-model="form.whatIsYourWhy"
                  name="whatIsYourWhy"
                  required
                />
              </label>
              <label>
                This follows on from your Why, but how do you solve problems for your customer?
                <select
                  id="howDoYouSolveProblemsForYourCustomers"
                  v-model="form.howDoYouSolveProblemsForYourCustomers"
                  name="howDoYouSolveProblemsForYourCustomers"
                  required
                >
                  <option>
                    Affordable: you offer the same services for less money than competitors already on the market
                  </option>
                  <option>
                    Sustainability: you help your customer be more environmentally friendly by offering completely sustainable services, products, packaging etc.
                  </option>
                  <option>
                    Unique: your products are completely unique and like no other on the market
                  </option>
                  <option>
                    Convenience: your services/products are quick and easy to access
                  </option>
                  <option>
                    Quality: what you offer can't be matched by anyone else
                  </option>
                  <option>
                    Other
                  </option>
                </select>
              </label>
              <label v-show="form.howDoYouSolveProblemsForYourCustomers === 'Other'">
                Other
                <textarea
                  id="otherProblems"
                  v-model="form.otherProblems"
                  name="otherProblems"
                />
              </label>
              <label>
                You're in a lift and someone asks what you do. How do you answer?
                <p>
                  For example: LastPass might say: "We've produced software that allows users across the globe to securely store their passwords behind one master password and access them on all of their devices through an app or website."
                </p>
                <textarea
                  id="yourInALiftAndSomeoneAsksWhatYouDo"
                  v-model="form.yourInALiftAndSomeoneAsksWhatYouDo"
                  name="yourInALiftAndSomeoneAsksWhatYouDo"
                  required
                />
              </label>
              <label>
                Of the below 5 categories, what best suits your brand personality?
                <p>
                  These are your human characteristics.
                </p>
                <select
                  id="whatBestSuitsYourBrandPersonality"
                  v-model="form.whatBestSuitsYourBrandPersonality"
                  name="whatBestSuitsYourBrandPersonality"
                  required
                >
                  <option>
                    Sophisticated
                  </option>
                  <option>
                    Sincere
                  </option>
                  <option>
                    Competent
                  </option>
                  <option>
                    Excited
                  </option>
                  <option>
                    Rugged
                  </option>
                </select>
              </label>
              <label>
                Based on the category you chose, what words would you associate with your brand. E.g 'honest', 'down to earth', 'caring'. These can be anything you like!
                <textarea
                  id="whatWordsWouldYouAssociateWithYourBrand"
                  v-model="form.whatWordsWouldYouAssociateWithYourBrand"
                  name="whatWordsWouldYouAssociateWithYourBrand"
                  required
                />
              </label>
              <TurnstileWidget :site-key="turnstileSiteKey" action="brand-identity" @token="setToken" />
              <div id="submitcontainer">
                <input
                  id="submit"
                  type="submit"
                  class="button colorTwo"
                  value="submit"
                  :disabled="!canSubmit"
                >
              </div>
              <p v-show="!message">
              &nbsp;
              </p>
              <Transition name="fade">
                <p v-show="message" class="message" v-text="message" />
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { turnstileSiteKey } = useRuntimeConfig().public
const { form, formEl, canSubmit, message, changed, setToken, submit } = useForm('brand-identity', { storageKey: 'brandIdentityForm' })

usePageMeta({
  title: 'Brand Identity',
  description: 'Your Brand Identity is how people perceive you. What will people think and feel when they hear your company name? How do you want to come across to customers and potential customers?',
  path: '/brand-identity/',
  breadcrumb: [{ name: 'Brand Identity', item: 'https://galexia.agency/brand-identity/' }],
  noindex: true
})

async function onSubmit () {
  await submit('Message sent successfully!')
}
</script>
