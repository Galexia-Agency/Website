import React from 'react';
import { Link } from "react-router-dom";
import './css/footer.scss';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

var i = 0;

var testimonial = [
  {content: '“Galexia helped my brand realize it’s potential. They gave me valuable content to share with my clients”', company: '- A Nice Company'},
  {content: '“Foo Bar”', company: '- A Different Company'},
  {content: '“Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet”', company: '- A Different Different Company'},
]

class Testimonials extends React.Component {
  componentDidMount() {
    this.timer = setInterval(function() {
        if (i === testimonial.length - 1) {
          document.querySelector(".Testimonial").innerHTML = testimonial[i].content;
          document.querySelector(".TestimonialCompany").innerHTML = testimonial[i].company;
          i = 0;
        } else {
          document.querySelector(".Testimonial").innerHTML = testimonial[i].content;
          document.querySelector(".TestimonialCompany").innerHTML = testimonial[i].company;
          i = i + 1;
        }
    }, 5000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="FooterTestimonials">
        <p className="Testimonial">{testimonial[i].content}</p>
        <p className="TestimonialCompany">{testimonial[i].company}</p>
      </div>
    )
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FName: "", LName: "", Email: "", Telephone: "", Subject: "", Message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Message sent successfully! We'll be in touch within 2-3 working days"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { FName, LName, Email, Telephone, Subject, Message } = this.state;
    return (
      <form className="Contact" method="post" name="contact" id="contact" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact"/>
        <label htmlFor="FName">Name:</label>
        <input id="fname" name="FName" type="text" placeholder="Han" required value={FName} onChange={this.handleChange}></input>
        <label htmlFor="LName">Last Name:</label>
        <input id="lname" name="LName" type="text" placeholder="Solo" required value={LName} onChange={this.handleChange}></input>
        <label htmlFor="Email">Email:</label>
        <input id="mail" name="Email" type="email" placeholder="millenium@falcon.net" required value={Email} onChange={this.handleChange}></input>
        <label htmlFor="Telephone">Telephone:</label>
        <input id="telephone" name="Telephone" type="tel" placeholder="+447569836548" required value={Telephone} onChange={this.handleChange}></input>
        <label htmlFor="Subject">Subject:</label>
        <input id="subject" name="Subject" type="text" placeholder="Corellia" required value={Subject} onChange={this.handleChange}></input>
        <label htmlFor="Message">Message:</label>
        <textarea id="message" name="Message" placeholder="Chewie, the exhaust ports need cleaning" required value={Message} onChange={this.handleChange}></textarea>
        <div id="SubmitContainer">
          <input id="submit" type="submit" name="Submit" className="Button ColorTwo" value="submit"></input>
        </div>
      </form>
    );
  }

  componentDidMount() {
    document.querySelectorAll(".Contact input, .Contact textarea").forEach(
      function(e){
        e.addEventListener("change", 
          function() {
            if (e.value) { 
              e.style.borderRadius = "6px"; 
              e.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.06)";
            }
            else { 
              e.style.borderRadius = ""; 
              e.style.boxShadow = "";
            }
          }
        )
      }
    )
  };
}

function Footer() {
  return (
      <footer className="GlobalFooter" id="Contact">
        <div className="FooterContainer SpaceBackground">
          <div className="FooterContactContainer">
            <div className="FooterContact">
              <h2>Get in Touch</h2>
              <p className="FooterContactInfo">We’d love to help you on your next big project. We understand what it means to dream big, and then achieve that dream.</p>
              <ContactForm />
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
              <Testimonials />
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