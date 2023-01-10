import { Layout } from "antd";
import { LayoutContextProps } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { LayoutDiv, MainLayout } from "./styleLayout";

const { Header, Content, Sider } = Layout;

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
};

const CLayout: React.FC<Props> = ({ title, children }) => {
  const [yPostition, setYPostition] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [sidebarOpen]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setYPostition(position);
    // dispatch()
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
      <Sidebar
        openSide={sidebarOpen}
        closeEvent={() => setSidebarOpen(!sidebarOpen)}
        width={300}
        style={{ overflow: "scroll" }}
      />
      <MainLayout
        openSide={sidebarOpen}
        closeEvent={() => setSidebarOpen(!sidebarOpen)}
      >
        <Content>
          <div className="main-content-div">{children}</div>
        </Content>
      </MainLayout>
      <Footer />
    </LayoutDiv>
  );
};

export default CLayout;
