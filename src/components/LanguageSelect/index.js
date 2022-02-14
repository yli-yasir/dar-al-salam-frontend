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
  border-radius: 16px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 0px;
  width: 75px;
  height: 75px;
  & svg {
    border-radius: 50%;
    width: 50%;
  }
`;

const countries = [
  { icon: <Flags.IQ />, langKey: languages.ar.langKey },
  { icon: <Flags.GB />, langKey: languages.en.langKey },
];

export default function LanguageSelect({ className }) {
  const [open, setOpen] = useState(false);

  const [, setLanguage] = useContext(LanguageContext);

  return (
    <Root layout className={className}>
      <StyledIconButton onClick={() => setOpen(!open)}>🌎</StyledIconButton>
      {open && (
        <StyledList role="menu">
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
