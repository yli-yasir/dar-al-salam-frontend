import { useState, Fragment } from "react";
import { useMedia } from "react-use";
import { breakpoints } from "../../globalStyle";
import AppBar from "../AppBar";
import SideBar from "../SideBar";
import Logo from "../Logo";
import Menu from "../Menu";
import navMenuItems from "./navMenuItems";

export default function Nav() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const isAppBarHidden = useMedia(breakpoints.appBarShown(false));

  // Need this function for clickAway events.
  function closeSideBar() {
    !isAppBarHidden && sideBarOpen && setSideBarOpen(false);
  }

  return (
    <Fragment>
      <AppBar
        $elevation={2}
        title="Dar Al-Salam"
        shown={!isAppBarHidden}
        onMenuButtonClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <SideBar
        open={isAppBarHidden || sideBarOpen}
        onClickAway={closeSideBar}
        $elevation={2}
        header={
          <Fragment>
            <Logo /> &nbsp;<h4>Dar Al-Salam</h4>
          </Fragment>
        }
      >
        <Menu menuItems={navMenuItems} />
      </SideBar>
    </Fragment>
  );
}
