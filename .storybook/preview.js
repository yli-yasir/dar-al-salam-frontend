import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "../src/globalStyle";
import LanguageContext from "../src/languageContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <LanguageContext.Provider value={[]}>
        <Router>
          <Story />
        </Router>
      </LanguageContext.Provider>
    </>
  ),
];
