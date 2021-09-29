import styled from "styled-components";
import CenteringBlock from "../CenteringBlock";

const StyledListItem = styled.li`
  display: block;
  background-color: red;
  padding: 8px;
  gap: 12px;
`;

const ContentContainer = styled(CenteringBlock)`
  gap: 8px;
`;

export default function ListItem(props) {
  const { children, icon, ...otherProps } = props;
  return (
    <StyledListItem {...otherProps}>
      <ContentContainer>
        {icon}
        {children}
      </ContentContainer>
    </StyledListItem>
  );
}
