// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b">
      <div className="text-lg font-semibold">louis.</div>
      <ul className="flex gap-6 text-sm text-gray-600">
        <li className="hover:text-black cursor-pointer">
          <a href="#work">Work</a>
        </li>
        <li className="hover:text-black cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-black cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}