import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 8px;
  text-align: ${(props) => props.textAlign};
  & > li {
    margin-bottom: ${(props) => (props.vGap ? `${props.vGap}px` : 0)};
  }
`;

export default function List(props) {
  return <StyledList {...props} />;
}

StyledList.propTypes = {
  vGap: PropTypes.number,
  children: PropTypes.arrayOf(ListItem),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};
