import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
