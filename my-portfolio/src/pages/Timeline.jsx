import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const events = [
    {
      date: 'Jun 12, 2005',
      title: 'Born in Manhattan, New York City',
      description: 'The beginning of everything.',
    },
    {
      date: 'Jan 2012',
      title: 'First Job',
      description: "I start working in the drive-thru of my dad's restaurant, Wok Express in Gulfport, MS.",
    },
    {
      date: 'Nov 2014',
      title: 'Moving to a new city',
      description: "I move to Montgomery, AL after my parents buy their 2nd restaurant, Asia Bistro & Seafood.",
    },
    {
      date: 'Jan 2015',
      title: 'Second Job',
      description: "I begin working as a dishwasher and waiter in my dad's restaurant.",
    },
    {
      date: 'Aug 2019',
      title: 'Beginning of High School',
      description: "I was accepted into LAMP High School, which I credit with my academic success in the future.",
    },
    {
      date: 'Aug 2022',
      title: 'Comeback',
      description: "My two years stuck at home because of COVID-19 gave me a newfound motivation to explore things I was interested in. I joined the Robotics Club, eSports Club, and a variety of other small clubs and honor societies. I also began volunteering at the animal shelter.",
    },
    {
      date: 'Nov 2022',
      title: 'First Robotics Tournament Win',
      description: "I win my first robotics tournament at Brewbaker Magnet School with an insane stroke of luck.",
    },
    {
      date: 'Apr 2023',
      title: 'First State Championship Title',
      description: "My team becomes the winners of the League of Legends Alabama State Championship with a 2-0 victory.",
    },
    {
      date: 'Dec 2023',
      title: 'Second State Championship Title',
      description: "We won again... with a 2-0 victory.",
    },
    {
      date: 'Aug 2023 - Feb 2023',
      title: 'Final Robotics Season',
      description: "My team had the best season we could've asked for to end our final year in the robotics club. We racked up 4 tournament wins, 2 skills wins, 1 design award, and numerous tournament runner-up placements.",
    },
    {
      date: 'Mar 30, 2023',
      title: 'Columbia Acceptance Letter',
      description: "I opened the email and saw the acceptance video play. It didn’t feel real at first, just shock and silence. After all the essays, late nights, and doubts, it was one of those moments I’ll never forget.",
    },
    {
      date: 'Apr 2023',
      title: 'Three-peat',
      description: "We ended our LOL season as the state champions for a third time, with a 2-0 victory of course. Our school gave us a pretty cool championship ring to celebrate our 68-1 all-time record.",
    },
    {
      date: 'May 2023',
      title: "Robotics World's Championship",
      description: "After qualifying through the State Championships, we hopped on an 8-hour bus trip to Dallas, TX.",
    },
    {
      date: 'May 16, 2023',
      title: 'High School Graduation!',
      description: "Four years passed in an instant, and now I was being shipped off to college.",
    },
    {
      date: 'Sep 2023',
      title: 'Back to where I started',
      description: "I began attending Columbia located in the same place where I was born, Manhattan, New York City.",
    },
    {
      date: 'Feb 2024',
      title: 'My First Hackathon',
      description: "I participated in my first hackathon at Columbia's Devfest. It was my first time tackling something in such a short amount of time. I had fun though.",
    },
    {
      date: 'Jun 1, 2024',
      title: 'Freshman Summer',
      description: "I began my research project with Dr. Olcay Kursun at Auburn University at Montgomery while also working part-time at my family's restaurant.",
    },
    {
      date: 'Feb 2025',
      title: 'Same Hackathon Different Year',
      description: "I created Nomzi, an AI-powered nutrition tracking and recommendation app that won my team first in the Nutrition Track.",
    },
    {
      date: 'Mar 2025',
      title: 'First Research Paper',
      description: "My first research paper was published at the IEEE Southeastern 2025 conference.",
    },
    {
      date: 'Present',
      title: 'More things to come!',
      description: "I continued working on projects like a TFT voice assistant, invested in myself, and built this portfolio website.",
    },
  ];

  const formattedLogin = new Date().toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <section className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-3xl mx-auto rounded-xl shadow-xl overflow-hidden bg-[#1e1e1e] text-white font-mono">
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#444]">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-gray-400 text-sm">louisyu — zsh — 80×24</span>
        </div>

        {/* Last login line */}
        <div className="px-6 py-4 text-green-400 text-sm">
          Last login: {formattedLogin} on ttys034
        </div>

        {/* Timeline Entries */}
        <div className="px-6 pb-8 space-y-6 text-sm">
          {events.map((event, i) => (
            <div key={i} data-aos="fade-up">
              <p className="text-sky-400">
                (base) <span className="text-cyan-300">louisyu@Mac</span> ~ %{' '}
                <span className="text-white">echo "{event.date} – {event.title}"</span>
              </p>
              <p className="text-gray-400 pl-6">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}