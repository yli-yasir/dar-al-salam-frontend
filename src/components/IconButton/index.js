import PropTypes from "prop-types";
import styled from "styled-components";
import { clickable } from "../../globalStyle";
import Button from "../Button";

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

export default function IconButton({ icon, iconColor, size, ...rootProps }) {
  const Icon = icon;
  return (
    <StyledButton {...rootProps}>
      <Icon size={size} color={iconColor} />
    </StyledButton>
  );
}

IconButton.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
};
