import React from 'react';
import {
  Link
} from "react-router-dom";
import './css/home.scss';

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
          <Link className="ServicesLink" to="/Photography">
            <div className="Purple Services" id="PhotographyService">
              <h2>
                Photography
              </h2>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p className="ReadMore">Read More...</p>
            </div>
          </Link>
          <Link className="ServicesLink" to="/Web">
            <div className="Purple Services" id="WebService">
              <h2>
                Web
              </h2>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p className="ReadMore">Read More...</p>
            </div>
          </Link>
          <Link className="ServicesLink" to="/Marketing">
            <div className="Purple Services" id="MarketingService">
              <h2>
                Marketing
              </h2>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p className="ReadMore">Read More...</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;