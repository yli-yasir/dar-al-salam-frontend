import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0 4px 0 32px;
  text-align: ${(props) => props.textAlign};
  & > * {
    margin: 24px 0;
  }
`;

export default function List({ children, ...otherProps }) {
  return <StyledList {...otherProps}>{children}</StyledList>;
}
