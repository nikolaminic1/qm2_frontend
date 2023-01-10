import React, { FC, ReactElement } from "react";
import { MainSiderbarDiv } from "./styleLayout";

interface SidebarProps {
  openSide: boolean;
  closeEvent: () => void;
  width: number;
  style: any;
}

const Sidebar: FC<SidebarProps> = ({ openSide, closeEvent }): ReactElement => {
  return (
    <MainSiderbarDiv
      width={300}
      onClick={() => closeEvent()}
      openSide={openSide}
      collapsedWidth={0}
    >
      <button
        onClick={() => {
          closeEvent();
        }}
      >
        menu
      </button>
    </MainSiderbarDiv>
  );
};

export default Sidebar;
