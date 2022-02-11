import eye from "../../assets/eye.svg";
import styled from "styled-components";
import { sizeable } from "../../globalStyle";

const StyledLogo = styled.img.attrs(() => ({
  alt: "logo",
  src: eye,
}))`
  ${sizeable}
`;

export default function Logo(props) {
  return <StyledLogo {...props} />;
}
