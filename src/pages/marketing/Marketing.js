import React, { useEffect } from 'react';
import Services from '../../components/services';
import People from '../../components/people';
import Info from '../../components/info';
import './css/marketing.scss';
import RSS from '../../components/rss';

function Marketing() {
  useEffect(() => {
    document.title = 'Marketing | Galexia | The Best Creative Agency in the Galaxy';
  })
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
        </header>
      </div>
      <People arr={[]} names={["Hannah Goodman", "Eleanor Morgan", ""]}></People>
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
      <div className="InfoContainer SpaceBackground">
        <div className="Blue Info" id="MarketingClients">
          <h2>
            Our past clients
          </h2>
          <div className="GridContainer InfoGrid">
            <RSS feed="https://www.joebaileyphotography.com/Blog/category/joe-bailey-photography/photography/feed/" maxitems="4" name="Wildlife"/>
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