import Nav from "./components/Nav";
// import ContentSection from "./components/ContentSection";
import GlobalStyle from "./globalStyle";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
