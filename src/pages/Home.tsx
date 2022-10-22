import React, { FC } from "react";
import Landing from "../components/home/LandingMain";
import data from "../components/home/_data.json";

export const Home: FC = () => {
  return (
    <div>
      <Landing data={data.landing} />
    </div>
  );
};
