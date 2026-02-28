export default function AboutInternsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About Our Interns
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our internship program is designed to provide real-world experience
          to students and fresh graduates. Interns work on live projects and
          collaborate with experienced mentors.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          We focus on building technical skills, communication abilities, and
          professional confidence. Each intern is assigned tasks and projects
          that help them grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Real Projects</h3>
            <p className="text-gray-600">
              Work on live industry-level projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
            <p className="text-gray-600">
              Learn directly from experienced developers.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
            <p className="text-gray-600">
              Build skills that help you in your career.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}