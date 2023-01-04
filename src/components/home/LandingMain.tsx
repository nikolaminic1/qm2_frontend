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

const Landing: FC<LandingProps> = ({ data }): ReactElement => {
  const [carouselSlide, setCarouselSlide] = useState(0);

  return (
    <LandingMainDiv>
      <MainGridContainer>
        {/* <MainCarousel slidesData={data} /> */}
        <LandingPartLeft>Left</LandingPartLeft>
        <LandingPartRight>
          <UpperPartRight>
            <div className="upper-right-part-one">1</div>
            <div className="upper-right-part-two">2</div>
            <div className="upper-right-part-three">3</div>
          </UpperPartRight>
          <LowerPartRight>
            <div className="lower-right-part-one">1</div>
            <div className="lower-right-part-two">2</div>
            <div className="lower-right-part-three">3</div>
          </LowerPartRight>
        </LandingPartRight>
      </MainGridContainer>
    </LandingMainDiv>
  );
};

export default Landing;
