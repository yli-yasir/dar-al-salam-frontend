import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 8px;
  text-align: ${(props) => props.textAlign};
  & > * {
    margin-bottom: ${(props) => `${props.vGap}px`};
  }
`;

export default function List(props) {
  return <StyledList {...props} />;
}

StyledList.propTypes = {
  vGap: PropTypes.number,
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};
