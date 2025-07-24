// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/profile.png'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 bg-white text-gray-900"
    >
      {/* Image */}
      <div
        data-aos="fade-right"
        className="w-56 h-56 md:w-80 md:h-80 mb-10 md:mb-0 md:mr-16 bg-gray-200 shadow-md rounded-lg overflow-hidden"      >
        <img
          src={profilePic} alt="Profile" className="object-cover w-full h-full"
        />
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
          I'm a computer science student at Columbia University with a minor in Innovation and Entrepreneurship.
        </p>
        <p className="text-gray-600 text-lg leading-loose tracking-wide mt-4">I grew up working in my family’s Chinese restaurant. I was bussing tables, rolling silverware, and helping out wherever I was needed. It was a fast-paced and hands-on environment that taught me grit, responsibility, and how to stay calm under pressure. I bring that same mindset into tech today. Whether I’m debugging code or designing a new feature, I stay focused, take pride in the work, and try to build things that are clean, useful, and thoughtful.</p>

        <p className="text-gray-600 text-lg leading-loose tracking-wide mt-4">In my free time, I like working out, playing strategy games, and tinkering with side projects that usually start as jokes.</p>
      </div>
    </section>
  );
}