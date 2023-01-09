import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { LayoutDiv } from "./styleLayout";

const { Header, Content, Sider } = Layout;

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
};

const CLayout: React.FC<Props> = ({ title, children }) => {
  const [yPostition, setYPostition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setYPostition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LayoutDiv className="layouy-div">
      <Navbar scrollPostion={yPostition} />
      <Layout>
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </Layout>
    </LayoutDiv>
  );
};

export default CLayout;
