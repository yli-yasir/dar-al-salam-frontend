import { useContext } from "react";
import styled from "styled-components";
import LanguageContext from "../../languageContext";
import Page from "../../components/Page";

const GeoMap = styled.iframe`
  display: block;
  border: 0;
  margin-top: 16px;
  background-color: skyblue;
  width: 100%;
  min-height: 500px;
`;

export default function Address() {
  const [language] = useContext(LanguageContext);

  return (
    <Page $width="100%" $maxWidth="1000px">
      <h1>{language.centerAddress}</h1>
      <p>{language.addressDescription}</p>
      <GeoMap
        title="center address"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.5813131198834!2d-4.083798227884306!3d50.43807143290093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf885600e66a9875!2zNTDCsDI2JzE3LjEiTiA0wrAwNCc1OC40Ilc!5e0!3m2!1sen!2suk!4v1645301904553!5m2!1sen!2suk"
        allowfullscreen=""
        loading="lazy"
      />
    </Page>
  );
}
