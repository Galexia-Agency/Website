import React from 'react';

function container(arr, name, desc, role, img) {
  arr.push(
    <div className="SpaceBackground" key={name}>
        <div className="Person">
          <picture>
          <source
              srcSet={`/img/${img}.webp`}
              type="image/webp"
            />
            <source
              srcSet={`/img/${img}.jpg`}
              type="image/jpg"
            />
            <img
              src={`/img/${img}.jpg`}
              loading="lazy"
              alt={name}
              width="100%"
              height="auto"
            />
          </picture>
          <h3>
            {name}
          </h3>
          <h5 className="PersonRole">
            {role}
          </h5>
          <p className="PersonDescription">
            {desc}
          </p>
        </div>
      </div>
  )
  return arr
}

function description(name) {
  const arr = []
  if (name === "Joe Bailey") {
    let role = "Founder, Director, Web Developer, Photographer";
    let desc = "Joe came up with the idea for Galexia when studying Web Development at University. He made many connections and wanted to bring together all of his skills and thus decided to create Galexia, The Best Creative Agency in the Galaxy.";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return(container(arr, name, desc, role, img))
  }
  else if (name === "Chelsea Gibson") {
    let role = "Photographer";
    let desc = "Chelsea studied photography at GCSE and Sixth Form and is now pursuing it as a career alongside studying the subject at University. Her main areas of interest are portraiture and wildlife photography.";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return(container(arr, name, desc, role, img))
  }
  else if (name === "Hannah Goodman") {
    let role = "Digital Marketer";
    let desc = "";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return(container(arr, name, desc, role, img))
  }
  else if (name === "Aurimas Karvelis") {
    let role = "Front End Developer";
    let desc = "";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return(container(arr, name, desc, role, img))
  }
  else if (name === "Eleanor Morgan") {
    let role = "Digital Designer, Front End Developer, Digital Marketer";
    let desc = "";
    let img = name.toLowerCase().replace(/\s/g, '_');
    return (container(arr, name, desc, role, img))
  }
  else {
    return(<div></div>)
  }
}

function Person(props) {
    return (
      description(props.name)
    )
} 

export default Person;