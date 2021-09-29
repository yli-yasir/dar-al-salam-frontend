import { useState } from "react";
import { useMedia } from "react-use";
import { breakpoints } from "../../globalStyle";
import AppBar from "../../components/AppBar";
import SideBar from "../../components/SideBar";
import Logo from "../../components/Logo";
import {
  FiEye,
  FiFacebook,
  FiHome,
  FiMail,
  FiPhone,
  FiInstagram,
} from "react-icons/fi";
import List from "../../components/List";
import ListItem from "../ListItem";
import MedicalLine from "../../components/MedicalLine";
import { Fragment } from "react";

export default function Nav() {
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
      <SideBar
        open={isWideScreen || sideBarOpen}
        onClickAway={closeSideBar}
        header={
          <Fragment>
            <Logo /> &nbsp;<h4>Dar Al-Salam</h4>
          </Fragment>
        }
      >
        <List textAlign="left">
          <ListItem icon={<FiHome />}>Home</ListItem>
          <ListItem icon={<FiEye />}>Dr. Ali</ListItem>
          <ListItem icon={<FiEye />}>Dr. Shamam</ListItem>
          <ListItem icon={<FiPhone />}>Contact Us</ListItem>
          <MedicalLine width="80%" />
          <ListItem icon={<FiFacebook />} />
          <ListItem icon={<FiInstagram />} />
          <ListItem icon={<FiMail />} />
        </List>
      </SideBar>
    </>
  );
}