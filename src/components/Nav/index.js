import { useState } from "react";
import { useMedia } from "react-use";
import { breakpoints } from "../../globalStyle";
import AppBar from "../AppBar";
import SideBar from "../SideBar";

export default function Nav(props) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const isWideScreen = useMedia(breakpoints.up("md"));

  // Need this function for clickAway events.
  function closeSideBar() {
    !isWideScreen && sideBarOpen && setSideBarOpen(false);
  }

  return (
    <>
      <AppBar
        shown={!isWideScreen}
        onMenuButtonClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <SideBar open={isWideScreen || sideBarOpen} onClickAway={closeSideBar} />
    </>
  );
}
