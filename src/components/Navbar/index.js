import styled from "styled-components";

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

const SideBar = styled.div`
  background-color: var(--app-color-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: var(--side-bar-width);
`;

export default function Navbar(props) {
  return (
    <>
      <AppBar />
      <SideBar />
    </>
  );
}
