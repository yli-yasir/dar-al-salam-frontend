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
  width: ${(props) => (props.open ? `var(--side-bar-width)` : `0px`)};
  border-radius: 0px 32px 32px 0px;
`;

export default function SideBar(props) {
  const { onClickAway, ...otherProps } = props;

  const ref = useRef(null);

  useClickAway(ref, onClickAway);

  return <StyledSideBar ref={ref} {...otherProps} />;
}
