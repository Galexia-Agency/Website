import React from 'react';
import { Link } from "react-router-dom";
import './css/services.scss';

function description(name) {
  if (name === "Photography") {
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.";
    return (desc)
  }
  if (name === "Web") {
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.";
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
                  srcSet={`
                      /img/${props.name}.webp 1x,
                      /img/${props.name}_x2.webp 2x,
                  `}
                  type="image/webp"
                />
                <source
                  srcSet={`
                      /img/${props.name}.jpg 1x,
                      /img/${props.name}_x2.jpg 2x,
                  `}
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