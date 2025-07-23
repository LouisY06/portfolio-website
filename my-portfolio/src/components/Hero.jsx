import React, { useState, useEffect } from 'react';

const phrases = [
  "Hey, I'm Louis",
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
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-300 to-pink-300 opacity-30 rounded-full blur-[160px] -z-10"></div>

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
        Bombaclat
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-10 flex gap-4"
      >
        <button
        onClick={() => {
          const el = document.getElementById('projects');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition-transform duration-300"
      >
        Projects
      </button>
        <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition hover:scale-105 duration-300">
          Contact Me
        </button>
      </div>

      {/* Cursor animation */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 0 }
          50% { opacity: 1 }
        }
      `}</style>
    </section>
  );
}