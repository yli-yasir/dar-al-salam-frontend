import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: ${(props) => (props.primary ? "red" : "blue")};
  min-height: 50px;
  min-width: 50px;
`;
export default function Navbar(props) {
  return <StyledNavbar {...props} />;
}
