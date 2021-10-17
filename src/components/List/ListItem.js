import CenteringBlock from "../CenteringBlock";
import styled from "styled-components";

const StyledListItem = styled.li`
  overflow-wrap: anywhere;
`;

const ListItemContents = styled(CenteringBlock)``;
export default function ListItem(props) {
  const { children, contentWidth, ...rootProps } = props;
  return (
    <StyledListItem {...rootProps}>
      <ListItemContents width={contentWidth}>{children}</ListItemContents>
    </StyledListItem>
  );
}
