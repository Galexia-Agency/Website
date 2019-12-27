import React from 'react';
import './css/people.scss';

function description(name) {
  if (name === "John Sheppard") {
    let role = "Lt. Colonel";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis.";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return {desc: desc, role: role, img: img}
  }
  if (name === "Teyla Emmagan") {
    let role = "Athosian Leader";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis.";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return {desc: desc, role: role, img: img}
  };
  if (name === "Elizabeth Weir") {
    let role = "Atlantis Expedition Leader";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis.";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return {desc: desc, role: role, img: img}
  };
  
}

function Person(props) {
    return (
      <div className="SpaceBackground">
        <div className="Person">
          <picture>
          <source
              srcSet={`
                  /img/${description(props.name).img}.webp 1x,
                  /img/${description(props.name).img}_x2.webp 2x,
              `}
              type="image/webp"
            />
            <source
              srcSet={`
                  /img/${description(props.name).img}.jpg 1x,
                  /img/${description(props.name).img}_x2.jpg 2x,
              `}
              type="image/jpg"
            />
            <img
              src={`/img/${description(props.name).img}.jpg`}
              loading="lazy"
              alt={props.name}
              width="100%"
              height="auto"
            />
          </picture>
          <h3>
            {props.name}
          </h3>
          <p className="PersonRole">
            {description(props.name).role}
          </p>
          <p className="PersonDescription">
            {description(props.name).desc}
          </p>
        </div>
      </div>
      
    )
} 

export default Person;