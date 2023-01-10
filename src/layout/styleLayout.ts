import { Layout } from "antd";
import { LayoutContextProps } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

interface LayoutProps {
  //  extends LayoutContextProps
  closeEvent: () => void;
  openSide: boolean;
}
interface Props {
  openSide: boolean;
}

export const LayoutDiv = styled(Layout)`
  background: #fff;
`;

export const FooterDiv = styled.div`
  background-color: aliceblue;
`;

export const MainSiderbarDiv = styled(Sider)<Props>`
  position: fixed;
  height: 100%;
  overflow: hidden;
  z-index: 1002;
  width: 300px;
  background-color: aqua;
  left: ${({ openSide }) => (openSide ? "0" : "-300px")}; ;
`;

export const MainLayout = styled(Layout)<LayoutProps>``;
