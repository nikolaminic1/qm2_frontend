export interface Layout {
  width: number;
  height: number;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  scrollPosition: number;
}
