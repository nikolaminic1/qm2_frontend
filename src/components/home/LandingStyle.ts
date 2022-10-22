import { Layout } from "antd";
import styled from "styled-components";

export const LandingMainDiv = styled.div`
  background: #fff;
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
  height: 650px;
  border-radius: 50px 0 0 50px;
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
`;
