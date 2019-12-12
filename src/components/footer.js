import React from 'react';
import { Link } from "react-router-dom";
import './css/footer.scss';

function Footer() {
    return (
        <footer className="GlobalFooter">
          <div className="FooterContainer SpaceBackground">
            <div className="FooterContactContainer">
              <div className="FooterContact">
                <h2>Get in Touch</h2>
                <p className="FooterContactInfo">We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.</p>
                <form className="Contact" method="POST">
                  <label htmlFor="fname">Name:</label>
                  <input id="fname" name="FName" type="text" placeholder="Han"></input>
                  <label htmlFor="lname">Last Name:</label>
                  <input id="lname" name="LName" type="text" placeholder="Solo"></input>
                  <label htmlFor="email">Email:</label>
                  <input id="email" name="Email" type="email" placeholder="millenium@falcon.net"></input>
                  <label htmlFor="telephone">Telephone:</label>
                  <input id="telephone" name="Telephone" type="tel" placeholder="+447569836548"></input>
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" name="Subject" type="text" placeholder="Corellia"></input>
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="Message" placeholder="Chewie, the exhaust ports need cleaning"></textarea>
                  <div id="SubmitContainer">
                    <input id="submit" type="submit" className="Button ColorTwo" value="submit"></input>
                    <div data-netlify-recaptcha="true"></div>
                  </div>
                  <input type="hidden" name="form-name" value="contact" />
                </form>
              </div>
            </div>
            <div className="FooterBottomContainer">
              <div className="FooterBottom">
                <div className="FooterSitemap">
                  <h2>Galexia</h2>
                  <Link className="FooterNavLink" id="WorkWithUs" to="/Work-With-Us">Work with us</Link>
                  <Link className="FooterNavLink" id="Privacy" to="/Privacy-Policy">Privacy Policy</Link>
                  <Link className="FooterNavLink" id="Cookie" to="/Cookie-Policy">Cookie Policy</Link>
                  <Link className="FooterNavLink" id="Terms" to="/Terms">Terms & Conditions</Link>
                </div>
                <div className="FooterTestimonials">
                  <p className="Testimonial">“Galexia helped my brand realize it’s potential. They gave me valuable content to share with my clients”</p>
                  <p className="TestimonialCompany">- A Nice Company</p>
                </div>
              </div>
              <div className="FooterCopyright">
                <p>© {new Date().getFullYear()} Galexia. Company No: 11824756.</p>
              </div>
            </div>
          </div>
        </footer>
    )
} 

export default Footer;