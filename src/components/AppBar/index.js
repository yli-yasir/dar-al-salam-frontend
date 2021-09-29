import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";

const StyledAppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: ${(props) => (props.shown ? `var(--app-bar-height)` : `0`)};
  display: flex;
  align-items: center;
  padding-left: 16px;
  overflow: hidden;
  color: white;
`;

const Title = styled.h3`
  margin-left: 16px;
`;

export default function AppBar({ title, onMenuButtonClick, ...rootProps }) {
  return (
    <StyledAppBar {...rootProps}>
      <FiMenu size={24} role="button" onClick={onMenuButtonClick} />
      <Title>{title}</Title>
    </StyledAppBar>
  );
}

AppBar.propTypes = {
  shown: PropTypes.bool,
  title: PropTypes.string,
  onMenuButtonClick: PropTypes.func,
};
