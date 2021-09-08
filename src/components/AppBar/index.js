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

export default AppBar;
