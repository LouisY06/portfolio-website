export default function Coursework() {
  const courses = [
    'Intro to Computer Science',
    'Data Structures in Java',
    'Advanced Programming',
    'Discrete Mathematics',
    'Artificial Intelligence',
    'Natural Language Processing',
    'Fundamentals of Computer Systems',
    'Intermediate Computing in Python',
  ];

  return (
    <section
      id="coursework"
      className="px-6 py-20 bg-gradient-to-b from-white-100 via-gray-100 to-slate text-gray-900 font-mono"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Relevant Coursework</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="border border-gray-700 text-gray-800 px-4 py-2 rounded-md bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-sm"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <p className="text-sm">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}