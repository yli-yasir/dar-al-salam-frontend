import Navbar from "./components/Nav";
// import ContentSection from "./components/ContentSection";
import ImageSection from "./components/ImageSection";
import GlobalStyle from "./globalStyle";

function App() {
  return <div className="App">
    <GlobalStyle />
    {
      // <Navbar/>
      // <ContentSection/>
      <ImageSection />
    }
  </div>;
}

export default App;
