import React from 'react';
import Services from '../../components/services';
import Person from '../../components/people';
import Info from '../../components/info';
import './css/marketing.scss';

function Marketing() {
  return (
    <div className="PageContent Marketing">
      <div className="PageHeaderContainer">
        <header className="PageHeader">
          <div className="HeaderLeft">
            <p className="HeaderTitle">
              Marketing
            </p>
            <p className="HeaderInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim.
            </p>
          </div>
          <div className="HeaderRight">
            <picture>
                <source
                  srcSet="
                  /img/marketing_image.webp 1x,
                  /img/marketing_image_x2.webp 2x"
                  type="image/webp"
                />
                <source
                  srcSet="
                  /img/marketing_image.png 1x,
                  /img/marketing_image_x2.png 2x"
                  type="image/png"
                />
                <img
                  src="/img/marketing_image.png"
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
            How's your retention?
          </h2>
          <div className="GridContainer InfoGrid" id="MarketingInfo">
            <Info name="Social Media" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="Email Marketing" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
            <Info name="SEO" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." />
          </div>
        </div>
      </div>
      <div className="OtherServices">
        <h2 className="TextGradient">Read about our other services</h2>
        <div className="GridContainer ServicesGrid" id="MarketingPageServices">
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Photography"/></div>
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Web"/></div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;