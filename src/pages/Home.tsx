import React, { FC, ReactElement } from "react";
import Landing from "../components/home/LandingMainPc";
import data from "../_data.json";
import imgg from "../assets/home/landing/kitchen1.jpg";
import SecondPart from "../components/home/SecondPart";
import { ThirdPartMainDiv } from "../components/home/LandingStyle";

interface HomeProps {
  closeEvent: () => void;
  openSide: boolean;
}

export const Home: FC<HomeProps> = ({ openSide, closeEvent }): ReactElement => {
  console.log(data);

  return (
    <div>
      <Landing closeEvent={() => closeEvent()} data={data.home.landing} />
      <SecondPart />
      <ThirdPartMainDiv />
    </div>
  );
};
