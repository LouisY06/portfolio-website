import React, { useState } from 'react';

export default function Contact() {
  const [lines, setLines] = useState([
    'Feel free to contact me using the form below.',
    '> What is your name?',
  ]);
  const [step, setStep] = useState('name');
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://formspree.io/f/manbekwo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setLines((prev) => [...prev, '> Message sent successfully.']);
        setSubmitted(true);
      } else {
        setLines((prev) => [...prev, '> Something went wrong.']);
      }
    } catch (err) {
      setLines((prev) => [...prev, '> Failed to send message.']);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const input = inputValue.trim();
      setLines((prev) => [...prev, `> ${input}`]);
      setInputValue('');

      switch (step) {
        case 'name':
          setFormData((prev) => ({ ...prev, name: input }));
          setLines((prev) => [...prev, '> What is your email?']);
          setStep('email');
          break;
        case 'email':
          setFormData((prev) => ({ ...prev, email: input }));
          setLines((prev) => [...prev, '> What message would you like to send?']);
          setStep('message');
          break;
        case 'message':
          setFormData((prev) => ({ ...prev, message: input }));
          setLines((prev) => [...prev, '> Shall I send it now? [Y/n]']);
          setStep('confirm');
          break;
        case 'confirm':
          if (input.toLowerCase() === 'y') {
            handleSubmit();
            setStep('done');
          } else {
            setLines((prev) => [...prev, 'Message not sent. Please try again.']);
            setStep('done');
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-white px-6 py-20 font-mono text-black text-base"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white whitespace-pre-wrap">
          {lines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          {!submitted && step !== 'done' && (
            <div className="flex">
              <span className="mr-2">&gt;</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-white border-none outline-none font-mono"
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}