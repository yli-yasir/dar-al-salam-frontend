import styled from "styled-components";

const SideBar = styled.div`
  background-color: var(--app-color-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 1s;
  width: ${(props) => (props.open ? `var(--side-bar-width)` : `0px`)};
`;

export default SideBar;
