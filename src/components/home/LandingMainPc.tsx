import React, { FC, ReactElement, useState } from "react";
import {
  LandingMainDiv,
  LandingPartLeft,
  LandingPartRight,
  LowerPartRight,
  MainGridContainer,
  SecondaryCarouselDiv,
  ThirdCarouselDiv,
  UpperPartRight,
} from "./LandingStyle";
import MainCarousel from "./MainCarousel";

interface LandingProps {
  slideNumber?: number | 0;
  data: {};
}

const LandingMainPc: FC<LandingProps> = ({ data }): ReactElement => {
  const [carouselSlide, setCarouselSlide] = useState(0);

  return (
    <LandingMainDiv>
      <MainGridContainer>
        {/* <MainCarousel slidesData={data} /> */}
        <LandingPartLeft>
          <div>
            <div>hamburger</div>
            <div>explore</div>
            <div>
              <ul>
                <li>number</li>
                <li>line</li>
                <li>year</li>
              </ul>
            </div>
          </div>
        </LandingPartLeft>
        <LandingPartRight>
          <UpperPartRight>
            <div className="left-upper">
              <div>
                <div>
                  <div>logo</div>
                  <div>
                    <ul>
                      <li>collections</li>
                      <li>projects</li>
                      <li>design</li>
                      <li>icon</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h6>subtitle</h6>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur nihil sed quis maiores quisquam incidunt rerum
                    optio ipsam, dolorem praesentium.
                  </p>
                </div>
                <div>
                  <button>button1</button>
                  <button>button2</button>
                </div>
                <div>
                  <button>left</button>
                  <button>rigth</button>
                </div>
              </div>
            </div>
            <div className="left-lower">2</div>
          </UpperPartRight>
          <LowerPartRight>
            <div className="right-upper">
              <div className="right-upper-left">3</div>
              <div className="right-upper-right">
                <div>
                  <div>01</div>
                  <div>line</div>
                  <div>title</div>
                </div>
              </div>
            </div>
            <div className="right-lower">
              <div>
                <div>
                  <h3>Lorem, ipsum dolor.</h3>
                  <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste labore aut magni, aliquid tempora dolore?
                  </p>
                </div>
                <div>
                  <button>learn more</button>

                  <ul>
                    <li>instagram</li>
                    <li>facebook</li>
                    <li>pinterest</li>
                  </ul>
                </div>
              </div>
            </div>
          </LowerPartRight>
        </LandingPartRight>
      </MainGridContainer>
    </LandingMainDiv>
  );
};

export default LandingMainPc;
