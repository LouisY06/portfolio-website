// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact</h2>
        <p className="text-gray-600 mb-8">Let’s connect — feel free to send a message.</p>

        <form
          action="https://formspree.io/f/manbekwo" 
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}