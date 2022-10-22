import React, { FC } from "react";
import Landing from "../components/home/LandingMain";
import data from "../_data.json";
import imgg from "../assets/home/landing/kitchen1.jpg";

export const Home: FC = () => {
  console.log(data);

  return (
    <div>
      <Landing data={data.home.landing} />
    </div>
  );
};
