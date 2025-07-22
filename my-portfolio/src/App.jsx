import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;