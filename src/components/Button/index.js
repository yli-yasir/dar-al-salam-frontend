import styled from "styled-components";
import { clickable } from "../../globalStyle";
import PropTypes from "prop-types";
import useConditionalWrapper from "../../hooks/useConditionalWrapper";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px;
  gap: 8px;
  font-family: inherit;
  font-size: inherit;
  ${clickable}
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

export default function Button(props) {
  const { link, to, ...buttonProps } = props;

  const [ConditionalLink, linkProps] = useConditionalWrapper({
    condition: link,
    wrapper: ButtonLink,
    wrapperProps: { to },
  });

  return (
    <ConditionalLink {...linkProps}>
      <StyledButton {...buttonProps} />
    </ConditionalLink>
  );
}

Button.propTypes = {
  link: PropTypes.bool,
};
