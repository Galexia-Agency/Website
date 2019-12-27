import React from 'react';
import './css/home.scss';
import Services from '../../components/services';

function Home() {
  return (
    <div className="PageContent Home">
      <div className="PageHeaderContainer SpaceBackground">
        <header className="PageHeader">
          <div className="HeaderLeft">
            <p className="HeaderTitle">
              The Best Creative Agency in the Galaxy
            </p>
            <p className="HeaderInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim.
            </p>
          </div>
          <div className="HeaderRight">
            <picture>
                <source
                  srcSet="
                  /img/home_image.webp 1x,
                  /img/home_image_x2.webp 2x"
                  type="image/webp"
                />
                <source
                  srcSet="
                  /img/home_image.png 1x,
                  /img/home_image_x2.png 2x"
                  type="image/png"
                />
                <img
                  src="/img/home_image.png"
                  loading="lazy"
                  alt="Portfolio of work"
                  width="970"
                  height="985"
                />
            </picture>
          </div>
        </header>
      </div>
      <div className="HomeInfoContainer">
        <div className="FloatingInfoBox">
          <p className="InfoTitle TextGradient">
            We believe in the freedom to explore
          </p>
          <div className="InfoDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis. Curabitur maximus ante ac dolor tristique, vel dictum augue efficitur. Sed at tortor enim. 
            </p>
            <p>
              Suspendisse eu quam vitae massa tristique faucibus at faucibus orci. Aliquam non sapien non odio auctor egestas at vel ligula. Nulla tempor convallis nunc at fringilla. Aenean at nisi venenatis enim fringilla malesuada. Nulla tempus orci ut justo gravida, ac dictum neque efficitur. 
              Praesent dignissim augue enim, quis porttitor augue ullamcorper sed. 
            </p>
            <p>
              Nullam ultricies imperdiet mauris, et facilisis mi dignissim non. Maecenas porta sem nunc, laoreet gravida ligula vulputate at. Mauris vulputate non leo et ultrices. Suspendisse aliquet sem magna, et facilisis orci consectetur non.
            </p>
            <div className="SpaceBackground Button">
              <a href="Photography" className="Button ColorOne">Click</a>
            </div>
            <div className="SpaceBackground Button">
              <a href="Photography" className="Button ColorTwo">Click</a>
            </div>
          </div>
        </div>
        <div className="SpaceBackground">
          <div className="BlueTongue">
            <div className="PortfolioContainer">
              <h2>
                Lorem Ipsum Dolor
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam egestas neque ut sagittis.
              </p>
              <div className="PortfolioImages">
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
                <picture>
                    <source
                      srcSet={`
                          /img/Marketing.webp 1x,
                          /img/Marketing_x2.webp 2x,
                      `}
                      type="image/webp"
                    />
                    <source
                      srcSet={`
                          /img/Marketing.jpg 1x,
                          /img/Marketing_x2.jpg 2x
                      `}
                      type="image/jpg"
                    />
                    <img
                      src={`/img/Marketing.jpg`}
                      loading="lazy"
                      alt="Marketing"
                      width="100%"
                      height="auto"
                    />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="SpaceBackground">
        <div className="GridContainer ServicesGrid" id="HomePageServices">
          <Services servicesClass="Purple" name="Photography"/>
          <Services servicesClass="Purple" name="Web"/>
          <Services servicesClass="Purple" name="Marketing"/>
        </div>
      </div>

      <div className="Blog">
        <h2 className="TextGradient">Our Blog</h2>
        {/*Do some stuff*/} 
      </div>

    </div>
    
  );
}

export default Home;
