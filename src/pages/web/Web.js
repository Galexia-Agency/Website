import React from 'react';
import Services from '../../components/services';
import Person from '../../components/people';
import Info from '../../components/info';
import './css/web.scss' ;

function Web() {
  return (
    <div className="PageContent Web">
      <div className="PageHeaderContainer">
        <header className="PageHeader">
          <div className="HeaderLeft">
            <p className="HeaderTitle">
              Web
            </p>
            <p className="HeaderInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim.
            </p>
          </div>
          <div className="HeaderRight">
            <picture>
                <source
                  srcSet="
                  /img/web_image.png 1x,
                  /img/web_image_x2.png 2x,
                  /img/web_image.webp 1x,
                  /img/web_image_x2.webp 2x"
                />
                <img
                  src="/img/web_image.png"
                  loading="lazy"
                  alt="Portfolio of work"
                  width="970"
                  height="985"
                />
            </picture>
          </div>
        </header>
      </div>
      <div className="People">
        <h2 className="PeopleTitle TextGradient">We're all about the people</h2>
        <div className="GridContainer PeopleGrid" id="PhotographyPeople">
          <Person name="John Sheppard" />
          <Person name="Teyla Emmagan" />
          <Person name="Elizabeth Weir" />
        </div>
      </div>
      <div className="InfoContainer SpaceBackground">
        <div className="Info">
          <h2>
            Need a checkup?
          </h2>
          <div className="GridContainer InfoGrid" id="MarketingInfo">
            <Info name="Speed Boost" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="SEO Checkup" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="Monthly Health Care" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
          </div>
        </div>
      </div>
      <div className="HostingInfoContainer SpaceBackground">
        <div className="Blue">
          <div className="HostingInfoInner">
            <div className="HostingItemLeft">
              <h2 className="HostingTitle">
                Need Hosting?
              </h2>
              <p className="HostingDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <h2>
                Hosting Package Transfer
              </h2>
              <div className="HostingTransferGrid">
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor 
                  incididunt ut labore et 
                  dolore magna aliqua. 
                  Praesent tristique.
                </p>
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor 
                  incididunt ut labore et 
                  dolore magna aliqua. 
                  Praesent tristique.
                </p>
              </div>
            </div>
            <div className="Seperator"></div>
            <div className="HostingItemRight">
              <div className="HostingTransferGrid">
              <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor 
                  incididunt ut labore et 
                  dolore magna aliqua. 
                  Praesent tristique.
                </p>
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor 
                  incididunt ut labore et 
                  dolore magna aliqua. 
                  Praesent tristique.
                </p>
              </div>
              <div className="RightText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="InfoContainer SpaceBackground">
        <div className="Info">
          <h2>
            WordPress
          </h2>
          <div className="GridContainer InfoGrid" id="MarketingInfo">
            <Info name="Basic" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="Intermediate" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="Advanced/E-Commerce" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
          </div>
        </div>
      </div>
      <div className="SomethingElseContainer SpaceBackground">
        <div className="Blue">
          <h2>
            Something else in mind...?
          </h2>
          <div className="SomethingElseGrid">
            <div className="SomethingElseItemLeft">
              <picture>
                <source
                  srcSet="
                  /img/else.png 1x,
                  /img/else_x2.png 2x,
                  /img/else.webp 1x,
                  /img/else_x2.webp 2x"
                />
                <img
                  src="/img/else.png"
                  loading="lazy"
                  alt="Something else in mind...?"
                  width="460"
                  height="460"
                />
              </picture>
            </div>
            <div className="SomethingElseItemRight">
              <h3>
                Don’t worry. Our team have a wide skill set in a variety of applications and settings. Get in touch and we’ll see whether we can accomodate your needs. 
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
              <p>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="OtherServices">
        <h2 className="TextGradient">Read about our other services</h2>
        <div className="GridContainer ServicesGrid" id="WebPageServices">
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Photography"/></div>
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Marketing"/></div>
        </div>
      </div>
    </div>
  );
}

export default Web;