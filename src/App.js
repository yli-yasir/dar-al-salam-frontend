import GlobalStyle from "./globalStyle";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Clinic from "./pages/Clinic";
import LanguageContext, { languages } from "./languageContext";
import { useState } from "react";
import routePaths from "./routes";
import styled from "styled-components";
import AppContainer from "./components/AppContainer";

function App() {
  const [language, setLanguage] = useState(languages.ar);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <GlobalStyle />
      <AppContainer lang={language.langKey}>
        <Router>
          <Switch>
            <Route path={routePaths.home} component={Home} exact />
            <Route path={routePaths.clinic} component={Clinic} />
          </Switch>
        </Router>
      </AppContainer>
    </LanguageContext.Provider>
  );
}

export default App;
