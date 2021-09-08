import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledAppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  min-height: var(--app-bar-height);
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export default function AppBar(props) {
  return (
    <StyledAppBar>
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
