import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'TFT Voice Assistant',
      description:
        'Built a real-time assistant for Teamfight Tactics using Python, OCR, and OpenCV. It captures the game screen, detects shop champions, and suggests optimal decisions based on live scraping from Mobafire.',
      image: project1,
      link: 'https://github.com/LouisY06/TFT',
    },
    {
      title: 'Nomzi – Gamified Healthy Eating',
      description:
        'Hackathon-winning mobile app that uses AI to identify food and offer healthier alternatives. Built with React Native, Python, and MongoDB with LLaMA for prompt-tuned AI recognition.',
      image: project2,
      link: 'https://devpost.com/software/track-a-big-back',
    },
    {
      title: 'Finge – The Dating App for Stocks',
      description:
        'Swipe-based investing experience to make stock discovery more fun and accessible. Built in React Native using OpenAI, Nasdaq, and Yahoo Finance APIs.',
      image: project3,
      link: 'https://devpost.com/software/finge',
    },
  ];

  const smallProjects = [
    {
      title: 'Published Research Paper',
      description:
        'Co-authored a research paper on computational methods and NLP, published in a peer-reviewed journal. Explores modern techniques in sentiment classification. NSF Grant 2435093',
      link: '/paper.pdf',
      buttonText: 'View PDF →',
    },
    {
      title: 'X Sentiment Analyzer',
      description:
        'Analyzes sentiment from tweets using the Sentiment140 dataset. Cleans, tokenizes, and classifies tweets to determine public opinion on a keyword using NLTK.',
      link: 'https://github.com/LouisY06/X-Sentiment-Analyzer',
    },
    {
      title: 'HTTP Server',
      description:
        'HTTP server built from scratch in C with socket programming. Private on GitHub due to it being a class final project.',
      link: 'https://github.com/LouisY06/http-server',
    },
    {
      title: 'Portfolio Website (This One)',
      description:
        'My first attempt at a personal portfolio website built using React, Tailwind CSS, and scroll-based animations.',
      link: 'https://github.com/LouisY06/portfolio-website',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#f5f5f5] px-6 py-20 font-mono text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Selected Projects
        </h2>

        {/* Featured Projects */}
        <div className="space-y-20">
          {featuredProjects.map((proj, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
              data-aos="fade-up"
              data-aos-delay={`${idx * 200}`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{proj.title}</h3>
                <p className="text-gray-700 mb-4">{proj.description}</p>
                <a
                  href={proj.link}
                  className="inline-block border border-gray-800 text-gray-900 px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-gray-300"></div>

        {/* More Projects */}
        <h3 className="text-2xl font-semibold mb-6">More Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {smallProjects.map((proj, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition bg-white"
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <div>
                <h4 className="text-lg font-medium mb-2">{proj.title}</h4>
                <p className="text-gray-600 text-sm mb-6">{proj.description}</p>
              </div>
              <a
                href={proj.link}
                className="inline-block border border-gray-700 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 transition-transform duration-300 self-start mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.buttonText || 'View on GitHub →'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}