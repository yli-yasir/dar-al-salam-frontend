import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledAppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: height 1s;
  height: ${(props) => (props.shown ? `var(--app-bar-height)` : `0`)};
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export default function AppBar(props) {
  return (
    <StyledAppBar {...props}>
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        color="white"
        role="button"
        onClick={props.onMenuButtonClick}
      />
    </StyledAppBar>
  );
}
