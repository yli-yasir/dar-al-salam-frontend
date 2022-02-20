import Button from "../../components/Button";
import List from "../../components/List";
import ListItem from "../../components/List/ListItem";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import routePaths from "../../routes";
import { DR_SHAMAM, DR_ALI } from "../../clinicNames";
import { Link } from "react-router-dom";
import Page from "../../components/Page";

const Title = styled(motion.h1)`
  text-align: center;
  margin: 8px;
`;

const menuItemData = [
  { labelKey: "drAliClinic", linkTo: routePaths[DR_ALI] },
  { labelKey: "drShamamClinic", linkTo: routePaths[DR_SHAMAM] },
  { labelKey: "centerAddress", linkTo: routePaths.address },
  { labelKey: "about", linkTo: routePaths.about },
];

export default function Home() {
  const [language] = useContext(LanguageContext);

  return (
    <Page $width="90%" $maxWidth="500px">
      <Logo animated />
      <Title animate={{ scale: [0, 1] }} transition={{ duration: 2 }}>
        {language["darAlSalam"]}
      </Title>
      <List role="menu" $vGap={4} $width="100%">
        {menuItemData.map(({ labelKey, linkTo }) => (
          <ListItem key={labelKey}>
            <Button link $width="100%" $elevation={2} to={linkTo}>
              {language[labelKey]}
            </Button>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
