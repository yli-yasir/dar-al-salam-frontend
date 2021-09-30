import styled from "styled-components";
import { clickable } from "../../globalStyle";
import CenteringBlock from "../CenteringBlock";
import PropTypes from "prop-types";
const StyledListItem = styled.li`
  display: block;
  padding: 8px;
  border-radius: 8px;
  padding-left: ${(props) =>
    props.startPadding ? `${props.startPadding}px` : "8px"};
  gap: 12px;
  ${(props) => props.button && clickable}
`;

const ContentContainer = styled(CenteringBlock)`
  gap: 16px;
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

ListItem.propTypes = {
  button: PropTypes.bool,
};
