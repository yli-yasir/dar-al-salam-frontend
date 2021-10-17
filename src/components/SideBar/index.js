import styled from "styled-components";
import { useClickAway } from "react-use";
import { useRef } from "react";
import PropTypes from "prop-types";
import { elevatable } from "../../globalStyle";

const StyledSideBar = styled.div`
  background-color: var(--app-color-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.open ? "0px" : "calc( -1 * var(--side-bar-width))"};
  transition: left 1s;
  width: var(--side-bar-width);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  ${elevatable}
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const ChildrenContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--app-color-secondary);
    border: 4px solid transparent;
    border-radius: 32px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0, 0.05);
    border-radius: 8px;
  }
`;

export default function SideBar(props) {
  const { onClickAway, children, header, ...otherProps } = props;

  const ref = useRef(null);

  useClickAway(ref, onClickAway);

  return (
    <StyledSideBar ref={ref} {...otherProps}>
      <HeaderContainer>{header}</HeaderContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledSideBar>
  );
}

SideBar.propTypes = {
  header: PropTypes.element,
  children: PropTypes.node,
  onClickAway: PropTypes.func,
  open: PropTypes.bool,
};
