import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0 16px;
  text-align: ${(props) => props.textAlign};
  & > * {
    margin: 12px 0;
  }
`;

export default function List({ children, ...otherProps }) {
  return <StyledList {...otherProps}>{children}</StyledList>;
}
