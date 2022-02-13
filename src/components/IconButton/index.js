import styled from "styled-components";
import Button from "../Button";

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

export default function IconButton(props) {
  return <StyledButton {...props} />;
}
