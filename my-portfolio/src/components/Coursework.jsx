export default function Coursework() {
    const courses = [
      'Intro to Computer Science',
      'Data Structures in Java',
      'Advanced Programming',
      'Discrete Mathematics',
      'Computer Science Theory',
      'Artificial Intelligence',
      'Natural Language Processing',
      'Fundamentals of Computer Systems',
      'Introduction to Databases',
      'Intermediate Computing in Python',
    ];
  
    return (
      <section
        id="coursework"
        className="px-6 py-20 bg-gray-50 text-gray-900 font-mono"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Relevant Coursework</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-4 rounded-md shadow hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <p className="text-sm text-gray-800">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }