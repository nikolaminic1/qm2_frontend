import React, { FC, ReactElement } from "react";
import { Carousel } from "antd";
import SlideOne from "./landing/SlideOne";
import SlideTwo from "./landing/SlideTwo";
import SlideThree from "./landing/SlideThree";

interface MainCarouselProps {
  slidesData: any;
}

const MainCarousel: FC<MainCarouselProps> = ({ slidesData }): ReactElement => {
  const onChange = (currentSlide: number) => {};

  return (
    <div>
      <Carousel afterChange={onChange} autoplay>
        <SlideOne slideOneData={slidesData.slideOne} />
        {/* <SlideTwo slideTwoData={slidesData} />
      <SlideThree slideThreeData={slidesData} /> */}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
