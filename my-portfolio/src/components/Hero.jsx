import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const phrases = [
  "Hi, I'm Louis",
  "CS @ Columbia"
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.slice(0, charIndex - 1)
        : currentPhrase.slice(0, charIndex + 1);

      setText(nextText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && nextText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Blurred background glow with floating animation */}
      <div className="absolute top-[-10%] left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-300 to-pink-300 opacity-60 rounded-full blur-[160px] -z-10 animate-[floatBlob_6s_ease-in-out_infinite]"></div>

      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight h-[5rem]"
      >
        <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
          {text}
          <span className="blinking-cursor">|</span>
        </span>
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-6 text-lg text-gray-600 max-w-xl"
      >
        Merging hands-on grit with digital craft
      </p>

      {/* Buttons */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {/* Contact Button (white outline) */}
        <button
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="border border-gray-300 px-6 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-black transition hover:scale-105 duration-300"
        >
          Contact Me
        </button>

        {/* Projects Button (centered, black) */}
        <button
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition-transform duration-300"
        >
          Projects
        </button>

        {/* Resume Button (white outline) */}
        <a
          href="/LOUIS_YU_RESUME.pdf"
          download
          className="border border-gray-300 px-6 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-black transition hover:scale-105 duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-6" data-aos="fade-up" data-aos-delay="600">
        <a
          href="https://github.com/LouisY06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/louisyu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700 transition-transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Cursor animation and floating animation keyframes */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 0 }
          50% { opacity: 1 }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}