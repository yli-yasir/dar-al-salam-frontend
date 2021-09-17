import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function ListItem({ children, icon, ...otherProps }) {
  return (
    <li {...otherProps}>
      <FontAwesomeIcon icon={icon} />
      &nbsp;
      {children}
    </li>
  );
}
