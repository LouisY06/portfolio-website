import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-white border-b px-6 py-4 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-lg font-semibold">louis.</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-600 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-black cursor-pointer">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/LouisY06" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/louis-yu-964b67271/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] group"
          >
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-opacity duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/LouisY06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/louis-yu-964b67271/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}