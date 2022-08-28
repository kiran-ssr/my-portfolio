import "./App.css";
import About from "./components/pages/About";
import Qualification from "./components/pages/Qualification";
import Contact from "./components/pages/Contact";
import Header from "./components/ui/Header";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
