import styled from "styled-components";
import { useClickAway } from "react-use";
import { useRef } from "react";
import List from "../List";
import {
  faEye,
  faHome,
  faPhone,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem";

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
      <List textAlign="center">
        <ListItem icon={faHome}>Home</ListItem>
        <ListItem icon={faEye}>Dr. Ali</ListItem>
        <ListItem icon={faXRay}>Dr. Shamam</ListItem>
        <ListItem icon={faPhone}>Contact Us</ListItem>
      </List>
    </StyledSideBar>
  );
}
