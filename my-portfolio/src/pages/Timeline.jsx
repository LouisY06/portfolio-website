// src/pages/Timeline.jsx
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Timeline() {
  React.useEffect(() => {
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
        description: "I begin working as a dishwasher in my dad's restaurant.",
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
        description: "A club I joined for fun ended up being very gratifying. My team becomes the winners of the League of Legends(LOL) Alabama State Championship with a 2-0 victory.",
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
        date: 'March 30, 2023',
        title: 'Columbia Acceptance Letter',
        description: "I opened the email and saw the acceptance video play. It didn’t feel real at first, just shock and silence. After all the essays, late nights, and doubts, it was one of those moments I’ll never forget.",
    },
    {
        date: 'April 2023',
        title: 'Three-peat',
        description: "We ended our LOL season as the state champions for a third time, with a 2-0 victory of course. Our school gave us a pretty cool championship ring to celebrate our 68-1 all-time record :).",
    },
    {
        date: 'May 2023',
        title: "Robotics World's Championship",
        description: "After we qualified for the World's Championships through the State Championships, we hopped on an 8-hour bus trip to Dallas, TX.",
    },
    {
        date: 'May 16, 2023',
        title: 'High School Graduation!',
        description: "Four years passed in an instant, and now I was being shipped off to college.",
    },

    // Add more events below as you continue
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
        <div className="relative border-l border-gray-300 pl-6 space-y-12">
          {events.map((event, i) => (
            <div key={i} data-aos="fade-up" className="relative">
              <span className="absolute -left-4 top-1.5 bg-black rounded-full w-2 h-2"></span>
              <div>
                <p className="text-sm text-gray-500">{event.date}</p>
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}