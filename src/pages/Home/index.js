import Page from "../../components/Page";
import Button from "../../components/Button";
import List from "../../components/List";
import ListItem from "../../components/List/ListItem";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import routePaths from "../../routes";
import { Link } from "react-router-dom";

const StyledLogo = styled(Logo)`
  margin: 64px;
  width: 40%;
`;

const Title = styled(motion.h1)`
  text-align: center;
  margin: 8px;
`;

const menuItemData = [
  { labelKey: "drAliClinic", linkTo: routePaths.drAli },
  { labelKey: "drShamamClinic", linkTo: routePaths.drShamam },
];

export default function Home() {
  const [language] = useContext(LanguageContext);

  return (
    <>
      <StyledLogo animated />
      <Title animate={{ scale: [0, 1] }} transition={{ duration: 2 }}>
        {language["darAlSalam"]}
      </Title>
      <List role="menu" $vGap={4} $width="100%">
        {menuItemData.map(({ labelKey, linkTo }) => (
          <ListItem key={labelKey}>
            <Button as={Link} $width="100%" $elevation={2} to={linkTo}>
              {language[labelKey]}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
