import { Layout } from "antd";
import styled from "styled-components";

export const LandingMainDiv = styled.div`
  position: relative;
  width: 100%;
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
