import React from 'react';
import Services from '../../components/services';
import Person from '../../components/people';
import './css/photography.scss';
import RSS from '../../components/rss';

function Photography() {
  return (
    <div className="PageContent Photography">
      <div className="PageHeaderContainer">
        <header className="PageHeader">
          <div className="HeaderLeft">
            <p className="HeaderTitle">
              Photography
            </p>
            <p className="HeaderInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim.
            </p>
          </div>
          <div className="HeaderRight">
            <picture>
                <source
                  srcSet="
                  /img/photography_image.webp 1x,
                  /img/photography_image_x2.webp 2x"
                  type="image/webp"
                />
                <source
                  srcSet="
                  /img/photography_image.png 1x,
                  /img/photography_image_x2.png 2x"
                  type="image/png"
                />
                <img
                  src="/img/photography_image.png"
                  loading="lazy"
                  alt="Portfolio of work"
                  width="412"
                  height="402"
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
      <div className="Blog">
        <h2 className="TextGradient">
          Portraits
        </h2>
        <RSS feed="https://allesoverwaterstof.nl/nieuws/feed/" maxitems="4" name="Portraits"/>
        <h2 className="TextGradient">
          Weddings
        </h2>
        <RSS feed="https://forestparkdental.com/category/uncategorized/feed" maxitems="4" name="Weddings"/>
        <h2 className="TextGradient">
          Wildlife
        </h2>
        <RSS feed="https://www.joebaileyphotography.com/Blog/category/joe-bailey-photography/photography/feed/" maxitems="4" name="Wildlife"/>
      </div>
      
      <div className="OtherServices">
        <h2 className="TextGradient">Read about our other services</h2>
        <div className="GridContainer ServicesGrid" id="PhotographyPageServices">
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Web"/></div>
          <div className="SpaceBackground"><Services servicesClass="Blue" name="Marketing"/></div>
        </div>
      </div>
    </div>
  );
}

export default Photography;