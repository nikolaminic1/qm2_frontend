import React, { FC } from "react";
import Landing from "../components/home/LandingMain";
import dataHome from "../components/home/_data.json";

export const Home: FC = () => {
  return (
    <div>
      <Landing data={dataHome.landing} />
      <img src={dataHome.landing.slideOne.main_photo} />
    </div>
  );
};
