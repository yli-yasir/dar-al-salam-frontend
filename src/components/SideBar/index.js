import styled from "styled-components";
import { useClickAway } from "react-use";
import { useRef } from "react";
import PropTypes from "prop-types";

const StyledSideBar = styled.div`
  background-color: var(--app-color-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 1s;
  width: ${(props) => (props.open ? `var(--side-bar-width)` : `0px`)};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
    width: 1em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border: 4px solid var(--app-color-secondary);
    border-radius: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--app-color-secondary);
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

SideBar.prototypes = {
  header: PropTypes.element,
  children: PropTypes.element,
  onClickAway: PropTypes.func,
};
