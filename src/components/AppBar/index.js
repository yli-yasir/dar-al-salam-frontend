import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { elevatable } from "../../globalStyle";

const StyledAppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-left: 16px;
  overflow: hidden;
  color: white;
  transition: height 0.1s;
  height: ${(props) => (props.shown ? `var(--app-bar-height)` : `0`)};
  ${elevatable}
`;

const Title = styled.h3`
  margin-left: 16px;
`;

export default function AppBar({ title, onMenuButtonClick, ...rootProps }) {
  return (
    <StyledAppBar {...rootProps}>
      <IconButton
        size={24}
        onClick={onMenuButtonClick}
        icon={FiMenu}
        iconColor="white"
      />
      <Title>{title}</Title>
    </StyledAppBar>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  onMenuButtonClick: PropTypes.func,
};
