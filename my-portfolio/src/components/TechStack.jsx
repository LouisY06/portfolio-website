export default function TechStack() {
    const skills = {
      Languages: ['Python', 'Java', 'C', 'SQL', 'XML'],
      Frameworks: ['React', 'Tailwind CSS', 'FastAPI'],
      Tools: ['Git', 'VSCode', 'Figma'],
    };
  
    return (
      <section
        id="techstack"
        className="px-6 py-20 bg-gray-50 text-gray-900 font-mono"
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
                      className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
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