import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const lines = [
  'echo "Hi, I\'m Louis"',
  'echo "CS @ Columbia"',
  'echo "Minor in Innovation and Entrepreneurship"',
];

export default function Hero() {
  const [typedLines, setTypedLines] = useState(['']);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (charIndex <= lines[currentLine].length) {
        const timeout = setTimeout(() => {
          const updated = [...typedLines];
          updated[currentLine] = lines[currentLine].slice(0, charIndex);
          setTypedLines(updated);
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setTypedLines((prev) => [...prev, '']);
          setCurrentLine((prev) => prev + 1);
          setCharIndex(0);
        }, 1000);
      }
    }
  }, [charIndex, currentLine, typedLines]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-slate-100 via-gray-100 to-white text-gray-800 font-mono"
    >
      {/* Floating glow */}
      <div className="absolute top-[-10%] left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-300 to-indigo-300 opacity-40 rounded-full blur-[160px] -z-10 animate-[floatBlob_6s_ease-in-out_infinite]" />

      {/* Terminal UI */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-[#1e1e1e]">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#2e2e2e]">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-4 text-gray-400 text-sm">louisyu — zsh — 80×24</span>
        </div>

        <div className="p-4 leading-relaxed text-sm bg-[#1e1e1e] min-h-[250px] whitespace-pre-wrap text-white">
          <div className="text-green-400">
            Last login: {new Date().toString().slice(0, 24)} on ttys034
          </div>
          {typedLines.map((line, idx) => (
            <div key={idx}>
              <span className="text-blue-300">(base)</span>{' '}
              <span className="text-cyan-300">louisyu@Mac</span>{' '}
              <span className="text-gray-300">~ %</span>{' '}
              <span>{line}</span>
              {idx === currentLine && <span className="blinking-cursor">█</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Social icons */}
      <div className="mt-10 flex gap-6">
        <a
          href="https://github.com/LouisY06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/louis-yu0612/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-sky-700 transition-transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {[
          { text: 'Contact Me', id: 'contact' },
          { text: 'Projects', id: 'projects' },
        ].map(({ text, id }) => (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2 border border-gray-800 rounded-md text-gray-800 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            {text}
          </button>
        ))}
        <a
          href="/LOUIS_YU_RESUME.pdf"
          download
          className="px-6 py-2 border border-gray-800 rounded-md text-gray-800 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Animations */}
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 10px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 0 }
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