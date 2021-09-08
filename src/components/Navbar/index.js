import { useState } from "react";
import styled from "styled-components";
import SideBar from "../SideBar";

const AppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  min-height: var(--app-bar-height);
  @media (min-width: 960px) {
    display: none;
  }
`;

export default function Navbar(props) {
  const [sideBarOpen, setSideBarOpen] = useState("");

  return (
    <>
      <AppBar />
      <SideBar open={sideBarOpen} />
    </>
  );
}
