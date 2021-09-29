import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: unset;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
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
