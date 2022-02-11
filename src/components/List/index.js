import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { sizeable } from "../../globalStyle";

const StyledList = styled.ul`
  &[role="menu"] {
    list-style-type: none;
  }
  padding: 8px;
  & > li {
    margin-bottom: ${(props) => (props.vGap ? `${props.vGap * 4}px` : 0)};
  }
  ${sizeable}
`;

export default function List(props) {
  return <StyledList {...props} />;
}

StyledList.propTypes = {
  vGap: PropTypes.number,
  children: PropTypes.arrayOf(ListItem),
};
