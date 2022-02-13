import GlobalStyle from "./globalStyle";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LanguageContext, { languages } from "./languageContext";
import { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: ${(props) =>
    props.lang === "en"
      ? `'Permanent Marker', cursive`
      : `'Lemonada', cursive`};
`;

function App() {
  const [language, setLanguage] = useState(languages.ar);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <GlobalStyle />
      <AppContainer lang={language.langKey}>
        <Router>
          <Route path="/" component={Home}></Route>
        </Router>
      </AppContainer>
    </LanguageContext.Provider>
  );
}

export default App;
