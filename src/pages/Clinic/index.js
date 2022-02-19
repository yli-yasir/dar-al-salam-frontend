import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import clinicInfo from "./clinicInfo";
import ImageSection from "../../components/ImageSection";
import Page from "../../components/Page";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import Button from "../../components/Button";
import styled from "styled-components";
import { elevatable } from "../../globalStyle";
import List from "../../components/List";
import ListItem from "../../components/List/ListItem";

const CardButton = styled(Button)`
  padding: 0.2em;
  width: 100%;
  margin-bottom: 8px;
  ${elevatable}
  background-color: ${({ bgColor }) => bgColor}
`;

const CardMenu = styled(List)`
  margin: 0px;
  width: 100%;
`;

const cardMenuData = [
  {
    key: "facebook",
    color: "#4267B2",
  },
];

export default function Clinic() {
  const { clinicName } = useParams();

  const [language] = useContext(LanguageContext);

  const targetClinic = clinicInfo[clinicName];

  return (
    <Page $width="100%" $maxWidth="1400px">
      <h1>{language[targetClinic.clinicTitleLanguageKey]}</h1>
      <Card $width="100%" $maxWidth="700px">
        <CardMenu role="menu">
          <ListItem>
            <CardButton
              bgColor="#4CAF50"
              link
              $elevation={1}
              to={targetClinic.phoneNumber}
            >
              {targetClinic.phoneNumber}
            </CardButton>
          </ListItem>
          {cardMenuData.map(
            ({ key, color }) =>
              targetClinic[key] && (
                <ListItem key={key}>
                  <CardButton
                    link
                    to={targetClinic[key]}
                    bgColor={color}
                    $elevation={1}
                  >
                    {language[key]}
                  </CardButton>
                </ListItem>
              )
          )}
        </CardMenu>
      </Card>

      {targetClinic.services.map(({ title, description, image }, index) => (
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
