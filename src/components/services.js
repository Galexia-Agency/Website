import React from 'react';
import { Link } from "react-router-dom";
import './css/services.scss';

function description(name) {
  if (name === "Photography") {
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.";
    return (desc)
  }
  if (name === "Web") {
    let desc = "We take care of everything from branding and design to development to user testing and marketing. We have a team of experienced professionals that all strive for perfection. This is reflected in all of the websites we build.";
    return (desc)
  };
  if (name === "Marketing") {
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.";
    return (desc)
  };
  
}

function Services(props) {
    return (
        <Link className="ServicesLink" to={{pathname: `/${props.name}`}}>
            <div className={`Services ${props.servicesClass}`}>
              <h2>
                {props.name}
              </h2>
              <picture>
                <source
                  srcSet={`/img/${props.name}.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`/img/${props.name}.jpg`}
                  type="image/jpg"
                />
                <img
                  src={`/img/${props.name}.jpg`}
                  loading="lazy"
                  alt={props.name}
                  width="100%"
                  height="auto"
                />
              </picture>
              <p>
                {description(props.name)}
              </p>
              <p className="ReadMore">Read More...</p>
            </div>
          </Link>
    )
} 

export default Services;