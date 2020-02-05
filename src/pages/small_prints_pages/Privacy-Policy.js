import React, { useEffect } from 'react';
import './css/small_prints_pages.scss' ;

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Galexia | The Best Creative Agency in the Galaxy';
  })
  return (
    <div className="PageContent SmallPrints">
      <h2 className="TextGradient">
        Privacy Policy
      </h2>
      <h3>
          <strong>1. Payment</strong>
      </h3>
      <p>Payment must be received in full before the order will be dispatched. We accept payment in Pounds Sterling only, by PayPal.</p>
      <h3>
          <strong>2. Confirmation of orders</strong>
      </h3>
      <p>We will send you an email to confirm receipt of your order following the successful authorisation of your PayPal transaction. We will send a further email to confirm dispatch of your order in due course.</p>
      <p>
        If you do not appear to receive these automatic emails, please check your “spam” filter in case they have been mistakenly identified as junk mail. If you are still unable to find them, please contact us at 
        <a href="mailto:info@galexia.agency"> info@galexia.agency </a> 
        to enquire about the status of your order.
      </p>
      <h3 >
          <strong>3. Limitation of liability</strong>
      </h3>
      <p >Don &#8217;s Discs, its officers, directors, employees, shareholders or agents and any other party involved in creating and maintaining the website hereby exclude all and any liability and responsibility for any amount or kind of loss or damage incurred by:</p>
      <ul >
          <li>Interruption of the operation of the business including, but not limited to, website downtime, postal strikes, Acts of God etc.</li>
          <li>Viruses that may infect your computer equipment, software, data or other property on account of your access to, use of, or browsing the website.</li>
          <li>Your downloading of any material from the website or any websites linked to the website.</li>
          <li>Offence caused by or mistakes made in your message, where you have asked us to send an item directly to a third-party recipient. We will copy your message exactly as entered by you during the “checkout” process and will not correct any mistakes in the message or recipient address that you may have made.</li>
          <li>Failure of the Royal Mail or other delivery companies to deliver your order, or for damage suffered during the delivery process.</li>
      </ul>
      <p>Nothing in these Terms shall exclude or limit our liability for any liability which cannot be excluded or limited under applicable law.</p>
      <p>In no event shall our total aggregate liability to you for all and any damages and/or losses exceed the amount paid by you, if any, for accessing the website, purchasing and/or enjoying our products or using the services provided via the website.</p>
      <h3>
          <strong>4. Disclaimers</strong>
      </h3>
      <p>Whilst we shall endeavour to ensure that the information and images on the website are true and correct, we do not warrant the accuracy and completeness of the material on the website. We may make changes to the material on the website, or to the services, the products and/or the prices described in the website, at any time and without notice. The material on the website may be out of date, and we make no commitment to update such material.</p>
      <h3>
          <strong>5. Governing Law and Jurisdiction</strong>
      </h3>
      <p >The Terms above shall be governed by and construed in accordance with English law and disputes arising in connection with our business shall be subject to the exclusive jurisdiction of the English courts.</p>
      <p >
          <strong>Last updated 21 August 2019.</strong>
      </p>
    </div>
  );
}

export default PrivacyPolicy;