import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizeable, clickable, elevatable } from "../../globalStyle";

const StyledButton = styled.button`
  background: var(--app-color-secondary);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4em;
  padding: 1em;
  text-decoration: none;
  user-select: none;
  text-transform: uppercase;
  color: white;
  ${sizeable}
  ${clickable}
  ${elevatable}
`;

export default function Button({ link, to, ...props }) {
  const linkProps = link && { as: Link, to };
  return <StyledButton {...linkProps} {...props} />;
}
