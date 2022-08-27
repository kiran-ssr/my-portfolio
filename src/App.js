import "./App.css";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import Header from "./components/ui/Header";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
