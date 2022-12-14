import React, { FC, ReactElement } from "react";
import { SlideOneMainDiv, SlideOneMainImage } from "../LandingStyle";

interface SlideOneProps {
  slideOneData: any;
}

const SlideOne: FC<SlideOneProps> = ({ slideOneData }): ReactElement => {
  console.log(slideOneData.main_photo);

  return <SlideOneMainDiv></SlideOneMainDiv>;
};

export default SlideOne;
