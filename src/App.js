import Nav from "./components/Nav";
import GlobalStyle from "./globalStyle";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Nav />
        <Route path="/" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
