import { Layout } from "antd";
import styled from "styled-components";

export const LandingMainDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const SlideOneMainDiv = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const SecondaryCarouselDiv = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #edede9;
  width: 450px;
  height: 630px;
  border-radius: 40px 0 0 40px;
`;

export const SlideOneMainImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`;

export const SecondPartMainDiv = styled.div`
  height: 100vh;
  background-color: #edede9;
`;

export const ThirdCarouselDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 450px);
  background-color: #edede9;
  height: 80px;
  border-radius: 0 40px 0 0;
`;

export const MainGridContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const LandingPartLeft = styled.div`
  background-color: aqua;
  width: 8%;
`;

export const LandingPartRight = styled.div`
  background-color: bisque;
  display: flex;
  width: 92%;
`;

export const UpperPartRight = styled.div`
  height: 100%;
  width: 60%;

  .left-upper {
    width: 100%;
    height: 60%;
    text-align: left;
    background-color: blueviolet;
  }
  .left-lower {
    width: 100%;
    height: 40%;
    background-color: gainsboro;
  }
`;

export const LowerPartRight = styled.div`
  width: 40%;
  height: 100%;

  .right-upper {
    height: 50%;
    display: flex;

    .right-upper-left {
      width: 80%;
      background-color: gold;
    }
    .right-upper-right {
      width: 20%;
      background-color: sandybrown;
    }
  }

  .right-lower {
    width: 100%;
    height: 50%;
    background-color: green;
  }
`;
