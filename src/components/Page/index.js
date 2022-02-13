import styled from "styled-components";
import IconButton from "../IconButton";
import Flags from "country-flag-icons/react/3x2";
import LanguageContext, { languages } from "../../languageContext";
import { useContext } from "react";

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const LanguageButton = styled(IconButton)`
  top: 0;
  right: 0;
  position: absolute;
  background-color: transparent;
  & > svg {
    height: 32px;
  }
`;
export default function Page({ children, ...props }) {
  const [, setLanguage] = useContext(LanguageContext);
  return (
    <Root {...props}>
      <LanguageButton onClick={() => setLanguage(languages.en)}>
        <Flags.IQ />
      </LanguageButton>
      {children}
    </Root>
  );
}
