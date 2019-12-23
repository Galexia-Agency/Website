import React from 'react';
import Services from '../../components/services';
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
      <div className="OtherServices">
        <h2>Read about our other services</h2>
        <div className="GridContainer ServicesGrid" id="WebPageServices">
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Photography" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." /></div>
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Marketing" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique." /></div>
        </div>
      </div>
    </div>
  );
}

export default Web;