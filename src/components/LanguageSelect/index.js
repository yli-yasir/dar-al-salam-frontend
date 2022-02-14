import Flags from "country-flag-icons/react/1x1";
import styled from "styled-components";
import { useContext, useState } from "react";
import List from "../List";
import ListItem from "../List/ListItem";
import { motion } from "framer-motion";
import IconButton from "../IconButton";
import LanguageContext, { languages } from "../../languageContext";

const Root = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  & svg {
    border-radius: 50%;
    width: 32px;
  }
  cursor: pointer;
`;

const StyledList = styled(List)`
  padding: 0px;
  margin: 0px;
  & > li {
    display: flex;
    justify-content: center;
  }
`;

const StyledIconButton = styled(IconButton)`
  padding: 8px;
`;

const countries = [
  { icon: <Flags.IQ />, langKey: languages.ar.langKey },
  { icon: <Flags.GB />, langKey: languages.en.langKey },
];

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);

  const [, setLanguage] = useContext(LanguageContext);

  console.log(countries);
  return (
    <Root layout>
      <StyledIconButton onClick={() => setOpen(!open)}>🌎</StyledIconButton>
      {open && (
        <StyledList role="menu">
          {" "}
          {countries.map(({ icon, langKey }) => (
            <ListItem key={langKey}>
              <StyledIconButton onClick={() => setLanguage(languages[langKey])}>
                {icon}
              </StyledIconButton>
            </ListItem>
          ))}
        </StyledList>
      )}
    </Root>
  );
}
