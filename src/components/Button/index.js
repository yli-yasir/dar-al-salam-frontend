import styled from "styled-components";
import { clickable, fullWidthable } from "../../globalStyle";
import PropTypes from "prop-types";
import useConditionalWrapper from "../../hooks/useConditionalWrapper";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px;
  font-family: inherit;
  font-size: inherit;
  & > * {
    flex-shrink: 0;
  }
  ${fullWidthable};
  ${clickable}
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  ${fullWidthable};
`;

export default function Button(props) {
  const { link, to, ...buttonProps } = props;

  const [ConditionalLink, linkProps] = useConditionalWrapper({
    condition: link,
    wrapper: ButtonLink,
    wrapperProps: { to, $fullWidth: buttonProps.$fullWidth },
  });

  return (
    <ConditionalLink {...linkProps}>
      <StyledButton {...buttonProps} />
    </ConditionalLink>
  );
}

Button.propTypes = {
  link: PropTypes.bool,
  justifyContent: PropTypes.oneOf(["start", "center", "end"]),
};
