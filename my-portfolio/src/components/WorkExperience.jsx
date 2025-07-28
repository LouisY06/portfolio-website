import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function WorkExperience() {
  const experiences = [
    {
      title: 'Line Cook',
      company: 'Asia Bistro and Seafood',
      location: 'Montgomery, AL',
      period: 'May 2025 – Present',
      description:
        'Prepared and plated high-volume meals, maintained kitchen safety standards, and optimized efficiency with the kitchen team during peak hours.',
    },
    {
      title: 'CS Undergraduate Research Assistant',
      company: 'Auburn University at Montgomery',
      location: 'Montgomery, AL',
      period: 'June 2024 – Sept 2024',
      description:
        'Co-authored a paper on tactile texture classification. Achieved 98% model accuracy using CNNs. Presented at IEEE SoutheastCon 2025. NSF Grant 2435093.',
      link: {
        label: 'View PDF →',
        href: '/your-paper.pdf',
      },
    },
    {
      title: 'Waiter',
      company: 'Asia Bistro and Seafood',
      location: 'Montgomery, AL',
      period: 'Jan 2015 – Sept 2023',
      description:
        'Delivered excellent customer service, managed online presence, and secured $100K+ in COVID-19 relief for restaurant operations.',
    },
  ];

  useEffect(() => {
    // Initialize AOS if not already done
    import('aos').then((AOS) => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <section
      id="experience"
      className="px-6 py-20 bg-gray-50 text-gray-900 font-mono"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-600">
                {exp.company} — {exp.location}
              </p>
              <p className="text-xs text-gray-500 mb-4">{exp.period}</p>
              <p className="text-sm mb-4">{exp.description}</p>
              {exp.link && (
                <a
                  href={exp.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm border border-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  {exp.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}