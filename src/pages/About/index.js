import Page from "../../components/Page";
import LanguageContext from "../../languageContext";
import { useContext } from "react";

export default function About() {
  const [language] = useContext(LanguageContext);

  return (
    <Page>
      <h1>{language.about}</h1>
      <p>{language.aboutDetails}</p>
    </Page>
  );
}
