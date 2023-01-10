import styled from "styled-components";

interface Props {
  props: number;
}

export const MainNavbarDiv = styled.div<Props>`
  position: fixed;
  z-index: 1000;
  background-color: #efefef;
  width: 100%;
  height: 70px;
  padding-left: 100px;
  top: ${({ props }) => (props == 0 ? "-70px" : "0")};
  transition: 0.4s all ease;
`;

export const ItemsDiv = styled.div`
  height: 100%;
  display: flex;
`;

export const LogoDiv = styled.div`
  height: 100%;
  width: 70px;
  padding: 5px 0 0 0;
  margin-left: 10px;
`;

export const LinksDiv = styled.div``;

export const ListLinks = styled.ul`
  display: flex;
  list-style: none;
`;
