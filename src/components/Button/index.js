import styled from "styled-components";
import { sizeable, clickable, elevatable } from "../../globalStyle";

const StyledButton = styled.button`
  background-color: var(--app-color-primary);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4em;
  padding: 1em;
  text-decoration: none;
  color: white;
  user-select: none;
  text-transform: uppercase;
  ${sizeable}
  ${clickable}
  ${elevatable}
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
