// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/profile.png';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-[#f5f5f5] text-gray-900 font-mono"
    >
      {/* Profile Image */}
      <div
        data-aos="fade-right"
        className="w-72 h-72 md:w-96 md:h-96 bg-gray-200 rounded-md overflow-hidden shadow-md border border-gray-300 mr-0 md:mr-10 mb-10 md:mb-0"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* About Text */}
      <div
        data-aos="fade-left"
        className="max-w-2xl text-sm md:text-base leading-relaxed tracking-wide"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Hi, I'm Louis.
        </h2>
        <p className="mb-4">
          I'm a computer science student at Columbia University with a minor in Innovation and Entrepreneurship.
        </p>
        <p className="mb-4">
          I grew up working in my family’s Chinese restaurant. I was bussing tables, rolling silverware, and helping out wherever I was needed. It was a fast-paced and hands-on environment that taught me grit, responsibility, and how to stay calm under pressure.
        </p>
        <p>
          I bring that same mindset into tech today. Whether I’m debugging code or designing a new feature, I stay focused, take pride in the work, and try to build things that are clean, useful, and thoughtful. In my free time, I like working out, playing strategy games, and tinkering with side projects that usually start as jokes.
        </p>
      </div>
    </section>
  );
}