import styled from "styled-components";
import PropTypes from "prop-types";
import MedicalLine from "../MedicalLine";
import { elevatable } from "../../globalStyle";

const Root = styled.div`
  background-image: url(${(props) => props.bgImgSrc || ""});
  display: inline-block;
  padding: 8px;
  color: ${(props) => props.textColor || "inherit"};
  border: 4px solid var(--app-color-secondary);
  background-size: cover;
  width: min(100%, 400px);
  ${elevatable};
`;

const DoctorName = styled.h3`
  display: inline-block;
`;
export default function DoctorCard(props) {
  const {
    doctorName,
    doctorDescription,
    medicalLineColor,
    ...rootProps
  } = props;
  return (
    <Root {...rootProps}>
      <DoctorName>{doctorName}</DoctorName>
      <MedicalLine color={medicalLineColor} width="100%" />
      <p>{doctorDescription}</p>
    </Root>
  );
}

DoctorCard.propTypes = {
  bgImgSrc: PropTypes.string,
  doctorName: PropTypes.string,
  doctorDescription: PropTypes.string,
  $elevation: PropTypes.number,
  textColor: PropTypes.string,
};
