function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><a href="#resume" className="hover:text-blue-400 transition">Resume</a></li>
            <li><a href="#minigame" className="hover:text-blue-400 transition">Minigame</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;