import { useState, Fragment } from "react";
import { useMedia } from "react-use";
import { breakpoints } from "../../globalStyle";
import AppBar from "../AppBar";
import SideBar from "../SideBar";
import Logo from "../Logo";
import MedicalLine from "../MedicalLine";
import PageList from "./PageList";
import SocialMediaList from "./SocialMediaList";

export default function Nav() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const isWideScreen = useMedia(breakpoints.up("md"));

  // Need this function for clickAway events.
  function closeSideBar() {
    !isWideScreen && sideBarOpen && setSideBarOpen(false);
  }

  return (
    <Fragment>
      <AppBar
        elevation={2}
        title="Dar Al-Salam"
        shown={!isWideScreen}
        onMenuButtonClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <SideBar
        open={isWideScreen || sideBarOpen}
        onClickAway={closeSideBar}
        elevation={2}
        header={
          <Fragment>
            <Logo /> &nbsp;<h4>Dar Al-Salam</h4>
          </Fragment>
        }
      >
        <PageList />
        <MedicalLine width="80%" />
        <SocialMediaList />
      </SideBar>
    </Fragment>
  );
}
