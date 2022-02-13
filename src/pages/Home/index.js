import Page from "../../components/Page";
import Button from "../../components/Button";
import List from "../../components/List";
import ListItem from "../../components/List/ListItem";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import LanguageContext, { languages } from "../../languageContext";

const StyledLogo = styled(Logo)`
  margin: 64px;
  width: 40%;
`;

const Title = styled(motion.h1)`
  text-align: center;
`;

const data = new Array(6).fill("hello");

export default function Home() {
  const [language] = useContext(LanguageContext);

  return (
    <Page>
      <StyledLogo animated />
      <Title animate={{ scale: [0, 1] }} transition={{ duration: 2 }}>
        {language["darAlSalam"]}
      </Title>
      <List role="menu" vGap={4} $width="100%">
        {data.map((el) => (
          <ListItem key={el}>
            <Button $width="100%" $elevation={2}>
              {language[el]}
            </Button>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
