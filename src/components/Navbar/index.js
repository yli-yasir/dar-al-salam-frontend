import { useState } from "react";
import styled from "styled-components";
import AppBar from "../AppBar";
import SideBar from "../SideBar";
export default function Navbar(props) {
  const [sideBarOpen, setSideBarOpen] = useState("");

  return (
    <>
      <AppBar onMenuButtonClick={() => setSideBarOpen(!sideBarOpen)} />
      <SideBar open={sideBarOpen} />
    </>
  );
}
