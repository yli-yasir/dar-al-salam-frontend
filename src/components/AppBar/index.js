import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import PropTypes from "prop-types";

const StyledAppBar = styled.div`
  background-color: var(--app-color-secondary);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: ${(props) => (props.shown ? `var(--app-bar-height)` : `0px`)};
  display: flex;
  align-items: center;
  padding-left: 16px;
  overflow: hidden;
  color: white;
`;

const Title = styled.h3`
  margin-left: 16px;
`;
export default function AppBar(props) {
  return (
    <StyledAppBar {...props}>
      <FiMenu size={24} role="button" onClick={props.onMenuButtonClick} />
      <Title>Dar Al-Salam</Title>
    </StyledAppBar>
  );
}

AppBar.propTypes = {
  show: PropTypes.bool,
  onMenuButtonClick: PropTypes.func,
};
