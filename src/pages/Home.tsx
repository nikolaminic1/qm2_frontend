import React, { FC } from "react";
import Landing from "../components/home/LandingMainPc";
import data from "../_data.json";
import imgg from "../assets/home/landing/kitchen1.jpg";
import SecondPart from "../components/home/SecondPart";

export const Home: FC = () => {
  console.log(data);

  return (
    <div>
      <Landing data={data.home.landing} />
      <SecondPart />
    </div>
  );
};
