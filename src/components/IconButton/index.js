import styled from "styled-components";
import Button from "../Button";

const StyledButton = styled(Button)`
  border-radius: 50%;
  background-color: ${(props) =>
    props.hasBackground ? `rgba(0, 0, 0, 0.1)` : `transparent`};
  &:hover {
    background-image: ${(props) => props.hasBackground || `none`};
  }
`;

export default function IconButton(props) {
  return <StyledButton {...props} />;
}
