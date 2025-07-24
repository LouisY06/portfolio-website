import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./pages/Timeline"; // ← this is your new page

function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-black scroll-smooth">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;