import doctorCards from "../../components/DoctorCard/doctorCardDetails";
import Page from "../../components/Page";
import DoctorCard from "../../components/DoctorCard";
import styled from "styled-components";
import ImageSection from "../../components/ImageSection";

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
      <ImageSection
        direction="left"
        imgSrc="https://scx2.b-cdn.net/gfx/news/hires/2020/hospital.jpg"
        title="Dar Al-Salam"
      >
        Consectetur mollis vehicula magnis mi vitae aliquet ligula eros a curae
        a sit vel curabitur class nascetur cubilia ut consectetur tempor eget
        torquent in ipsum.Hac a platea velit a interdum a vestibulum a et
        ridiculus nisl eget sem a a a fermentum habitasse nullam metus suscipit
        donec euismod vestibulum nisl suspendisse ut.
      </ImageSection>
      <CardsContainer>
        {Object.values(doctorCards).map((doctorCard) => (
          <DoctorCard $elevation={4} {...doctorCard} />
        ))}
      </CardsContainer>
    </Page>
  );
}
