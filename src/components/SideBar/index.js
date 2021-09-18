import styled from "styled-components";
import { useClickAway } from "react-use";
import { useRef } from "react";
import List from "../List";
import {
  faEnvelope,
  faEye,
  faHome,
  faPhone,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem";
import Logo from "../Logo";
import MedicalLine from "../MedicalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const SocialMediaContainer = styled.div``;
export default function SideBar(props) {
  const { onClickAway, children, ...otherProps } = props;

  const ref = useRef(null);

  useClickAway(ref, onClickAway);

  return (
    <StyledSideBar ref={ref} {...otherProps}>
      <Header>
        <Logo /> &nbsp;Dar Al-Salam
      </Header>
      <List textAlign="left">
        <ListItem icon={faHome}>Home</ListItem>
        <ListItem icon={faEye}>Dr. Ali</ListItem>
        <ListItem icon={faXRay}>Dr. Shamam</ListItem>
        <ListItem icon={faPhone}>Contact Us</ListItem>
      </List>
      <MedicalLine width="70%" />
      <List>
        <ListItem icon={faFacebook} />
        <ListItem icon={faInstagram} />
        <ListItem icon={faEnvelope} />
      </List>
    </StyledSideBar>
  );
}
