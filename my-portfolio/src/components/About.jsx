// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 bg-white text-gray-900"
    >
      {/* Image */}
      <div
        data-aos="fade-right"
        className="w-40 h-40 md:w-64 md:h-64 mb-10 md:mb-0 md:mr-16 rounded-full bg-gray-200 shadow-md"
      >
        {/* Optionally insert your profile image:
        <img src={profileImage} className="object-cover w-full h-full rounded-full" /> */}
      </div>

      {/* Text */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
          Hi, I'm Louis.
        </h2>
        <p className="text-gray-600 text-lg leading-loose tracking-wide mb-4">
          I'm a computer science student at Columbia University with a passion for building meaningful, modern digital experiences.
        </p>
        <p className="text-gray-600 text-lg leading-loose tracking-wide">
        Hi, I’m Louis Yu. I’m a computer science major at Columbia University with a passion for building things. I love working on software, tools, and projects that solve real problems. I grew up working in my family’s restaurant from a young age, 
        which taught me a lot about discipline, teamwork, and staying grounded. Now I’m bringing that same energy into tech, always looking for ways to create useful and clean digital experiences.
        </p>
      </div>
    </section>
  );
}