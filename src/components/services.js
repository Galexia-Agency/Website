import React from 'react';
import { Link } from "react-router-dom";
import './css/services.scss';

function Services(props) {
    return (
        <Link className="ServicesLink" to={{pathname: `/${props.name}`}}>
            <div className={`Services ${props.class}`} id="MarketingService">
              <h2>
                {props.name}
              </h2>
              <picture>
                  <source
                    srcSet={`
                        /img/${props.name}.jpg 1x,
                        /img/${props.name}_x2.jpg 2x,
                        /img/${props.name}.webp 1x,
                        /img/${props.name}_x2.webp 2x,
                    `}
                  />
                  <img
                    src={`/img/${props.name}.jpg`}
                    loading="lazy"
                    alt={props.name}
                    width="450"
                    height="175"
                  />
              </picture>
              <p>
                {props.desc}
              </p>
              <p className="ReadMore">Read More...</p>
            </div>
          </Link>
    )
} 

export default Services;