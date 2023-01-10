import { Layout } from "../models/Window";

let openSide = false;

export const initialStateWindow: Layout = {
  width: 0,
  height: 0,
  isSidebarOpen: openSide,
  openSidebar: () => {},
  scrollPosition: 0,
};
