import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import clinicInfo from "./clinicInfo";
import ImageSection from "../../components/ImageSection";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Clinic() {
  const { clinicName } = useParams();

  const { phoneNumber, services } = clinicInfo[clinicName];

  return (
    <Root>
      <p>hello</p>
      <Card $width="100%">Hello world {phoneNumber}</Card>
      {services.map(({ title, description, image }, index) => (
        <ImageSection
          key={title}
          title={title}
          imgSrc={image}
          reverse={index % 2 === 0}
        >
          {description}
        </ImageSection>
      ))}
    </Root>
  );
}
