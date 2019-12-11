import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/app.scss';
import Home from './pages/home/Home';
import Photography from './pages/photography/Photography';
import Web from './pages/web/Web';
import 'normalize.css'

function App() {
  return (
    <div className="GalexiaStudios">
      <Router>
        <div className="GlobalHeader">
          <div className="HeaderContainer">
            <div className="LogoContainer">
                <Link className="LogoLink" to="/">
                    <p className="Logo">
                        Galexia                
                    </p>
                </Link>
            </div>
            
            <div className="NavigationContainer">
                <nav className="Navigation">
                    <Link className="NavLink" id="Home" to="/">Home</Link>
                    <Link className="NavLink" id="Photography" to="/Photography">Photography</Link>
                    <Link className="NavLink" id="Web" to="/Web">Web</Link>
                    <Link className="NavLink" id="Marketing" to="/Marketing">Marketing</Link>
                    <Link className="NavLink" id="Blog" to="/Blog">Blog</Link>
                </nav>
            </div>        
        </div>
        </div>
        <div id="content">
          <Switch>
            <Route path="/Photography">
              <Photography />
            </Route>
            <Route path="/Web">
              <Web />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer className="GlobalFooter">
          <div className="FooterContainer SpaceBackground">
            <div className="FooterContactContainer">
              <div className="FooterContact">
                <h2>Get in Touch</h2>
                <p className="FooterContactInfo">We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.</p>
                <form className="Contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
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
                    <input id="submit" type="submit" className="Button ColorTwo"></input>
                    <div data-netlify-recaptcha="true"></div>
                  </div>
                  
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
      </Router>
    </div>
  );
}

export default App;
