import React, { FC, ReactElement } from "react";
import { Carousel } from "antd";

interface MainCarouselProps {
  slidesData: {};
}

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const MainCarousel: FC<MainCarouselProps> = ({}): ReactElement => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
