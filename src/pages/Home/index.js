import doctorCards from "../../components/DoctorCard/doctorCardDetails";
import Page from "../../components/Page";
import DoctorCard from "../../components/DoctorCard";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 16px;
  }
`;

export default function Home() {
  return (
    <Page>
      <CardsContainer>
        {Object.values(doctorCards).map((doctorCard) => (
          <DoctorCard $elevation={4} {...doctorCard} />
        ))}
      </CardsContainer>
    </Page>
  );
}
