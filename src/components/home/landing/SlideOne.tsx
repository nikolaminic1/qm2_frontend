import React, { FC, ReactElement } from "react";
import { SlideOneMainDiv } from "../LandingStyle";

interface SlideOneProps {
  slideOneData: any;
}

const SlideOne: FC<SlideOneProps> = ({ slideOneData }): ReactElement => {
  console.log(slideOneData.main_photo);

  return (
    <SlideOneMainDiv>
      <img src={slideOneData.main_photo} />
    </SlideOneMainDiv>
  );
};

export default SlideOne;
