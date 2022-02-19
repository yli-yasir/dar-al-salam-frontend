import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import clinicInfo from "./clinicInfo";
import ImageSection from "../../components/ImageSection";
import Page from "../../components/Page";
import { useContext } from "react";
import LanguageContext from "../../languageContext";

export default function Clinic() {
  const { clinicName } = useParams();

  const [language] = useContext(LanguageContext);
  const { clinicTitleLanguageKey, phoneNumber, services } =
    clinicInfo[clinicName];

  return (
    <Page $width="100%" $maxWidth="1400px">
      <h1>{language[clinicTitleLanguageKey]}</h1>
      <Card
        $width="100%"
        $maxWidth="700px"
        cover="https://www.myfreetextures.com/wp-content/uploads/2014/10/seamless-wood-background-1.jpg"
      >
        Hello world {phoneNumber}
      </Card>
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
    </Page>
  );
}
