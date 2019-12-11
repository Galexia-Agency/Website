import React from 'react';
import './css/home.scss';
import Services from '../../components/services';

function Home() {
  return (
    <div className="PageContent" id="Home">
      <header className="PageHeader" >
        <div className="HeaderLeft">
          <h1>
            The Best Creative Agency in the Galaxy
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim.
          </p>
        </div>
        <div className="HeaderRight">
          <picture>
            <noscript>
              <source
                media="(min-width: 780px)"
                srcset="
                homebackground.jpg 1x,
                homebackground.2x.jpg 2x,
                homebackground.webp 1x,
                homebackground.2x.webp 2x"
              />
              <img
                src="homebackground.jpg"
                loading="lazy"
                alt="Header Background of a Galaxy"
              />
            </noscript>
          </picture>
        </div>
      </header>
      <div className="SpaceBackground">
        <div className="GridContainer" id="HomePageServices">
          <Services name="Photography" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
          <Services name="Web" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
          <Services name="Marketing" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
        </div>
      </div>
    </div>
  );
}

export default Home;