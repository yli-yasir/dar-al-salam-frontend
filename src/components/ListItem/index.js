import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
`;

export default function ListItem(props) {
  const { children, icon, ...otherProps } = props;
  return (
    <StyledListItem {...otherProps}>
      {icon}
      &nbsp;
      {children}
    </StyledListItem>
  );
}
