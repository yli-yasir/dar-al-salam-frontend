import PropTypes from "prop-types";
import styled from "styled-components";
import { clickable } from "../../globalStyle";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  ${clickable}
`;

export default function IconButton({ icon, size = 20, ...rootProps }) {
  const Icon = icon;
  return (
    <StyledButton {...rootProps}>
      <Icon size={size} />
    </StyledButton>
  );
}

IconButton.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.elementType,
};
