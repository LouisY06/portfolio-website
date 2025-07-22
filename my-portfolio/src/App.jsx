// src/App.jsx
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Minigame from './components/Minigame';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth bg-black text-white">
      <Navbar />
      <Home />
      <Portfolio />
      <Resume />
      <Minigame />
      <Contact />
    </div>
  );
}

export default App;