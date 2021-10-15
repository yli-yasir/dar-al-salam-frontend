import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDivider = styled.svg`
  margin: 16px auto;
  display: block;
`;

export default function MedicalLine(props) {
  return (
    <StyledDivider
      width={props.width}
      viewBox="0 0 252 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M156 28H144L135 55L117 1L108 28H96L0.5 28.5M251 28.0804H156"
        stroke="#1B4965"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledDivider>
  );
}

MedicalLine.propTypes = {
  width: PropTypes.string,
};
