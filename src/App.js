import "./App.scss";
import HireMe from "./components/pages/HireMe";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <HireMe />
    </div>
  );
}

export default App;
