import styled from "styled-components";
import { elevatable } from "../../globalStyle";

const StyledPaper = styled.div`
  ${elevatable}
  padding:16px;
  background-color: white;
  border-radius: 16px;
`;
export default function Paper({ ...props }) {
  return <StyledPaper $elevation={4} {...props} />;
}
