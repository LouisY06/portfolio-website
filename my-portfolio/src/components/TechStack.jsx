export default function TechStack() {
  const skills = {
    Languages: ['Python', 'Java', 'C'],
    Frameworks: ['React', 'Tailwind CSS'],
    Tools: ['Git', 'VSCode', 'JetBrains IDEs'],
    Technologies: ['AWS (Amplify, S3)', 'Figma', 'Gemini API', 'Expo', 'Formspree', 'LaTeX'],
  };

  return (
    <section
      id="techstack"
      className="px-6 py-20 bg-gradient-to-b from-white-100 via-gray-100 to-slate text-gray-900 font-mono"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Tech Stack</h2>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={category} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full text-sm font-medium border border-gray-700 text-gray-800 hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}