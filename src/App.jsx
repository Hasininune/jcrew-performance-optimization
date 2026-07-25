import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Collections />
      </main>

      <Footer />
    </>
  );
}

export default App;