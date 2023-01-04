import { Layout } from "antd";
import React from "react";
import Navbar from "./Navbar";
import { LayoutDiv } from "./styleLayout";

const { Header, Content, Sider } = Layout;

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
};

const CLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <LayoutDiv className="layouy-div">
      {/* <Navbar /> */}
      <Layout>
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </Layout>
    </LayoutDiv>
  );
};

export default CLayout;
