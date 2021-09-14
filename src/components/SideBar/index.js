import styled from "styled-components";
import { useClickAway } from "react-use";
import { useRef } from "react";

const StyledSideBar = styled.div`
  background-color: var(--app-color-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 1s;
  overflow: hidden;
  width: ${(props) => (props.open ? `var(--side-bar-width)` : `0px`)};
`;

export default function SideBar(props) {
  const { onClickAway, children, ...otherProps } = props;

  const ref = useRef(null);

  useClickAway(ref, onClickAway);

  return (
    <StyledSideBar ref={ref} {...otherProps}>
      <ul>
        <li>Home</li>
        <li>Dr Ali's Clinic</li>
        <li>Dr Shamam's Clinic</li>
      </ul>
    </StyledSideBar>
  );
}
