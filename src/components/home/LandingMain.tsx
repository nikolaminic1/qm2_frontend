import React, { FC, ReactElement, useState } from "react";
import { LandingMainDiv } from "./LandingStyle";
import MainCarousel from "./MainCarousel";

interface LandingProps {
  slideNumber?: number | 0;
  data: {};
}

const Landing: FC<LandingProps> = ({ data }): ReactElement => {
  const [mainCarouselSlide, setMainCarouselSlide] = useState(0);

  console.log(data);

  return (
    <LandingMainDiv>
      <MainCarousel slidesData={data} />
    </LandingMainDiv>
  );
};

export default Landing;
