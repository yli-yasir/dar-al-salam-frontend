import { useState } from "react";
import AppBar from "../AppBar";
import SideBar from "../SideBar";

export default function Navbar(props) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // Need this function for clickAway events.
  function closeSideBar() {
    sideBarOpen && setSideBarOpen(false);
  }

  return (
    <>
      <AppBar onMenuButtonClick={() => setSideBarOpen(!sideBarOpen)} />
      <SideBar open={sideBarOpen} onClickAway={closeSideBar}></SideBar>
    </>
  );
}
