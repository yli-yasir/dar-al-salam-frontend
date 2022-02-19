import styled from "styled-components";
import { sizeable } from "../../globalStyle";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  align-items: center;
  ${sizeable}
`;

export default function Page(props) {
  return <StyledPage {...props} />;
}
