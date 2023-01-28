import About from "./components/About";
import Competences from "./components/Competences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar /> 
      <Home />
      <About />
      <Portfolio />
      <Competences />

      <SocialLinks />
    </div>
  );
}

export default App;
