export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Intern Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Manage interns, projects, and progress professionally.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg mb-2">Manage Interns</h3>
            <p className="text-gray-600">
              Add, update, and track interns easily from one dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg mb-2">Track Projects</h3>
            <p className="text-gray-600">
              Assign and monitor project progress in real time.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg mb-2">Admin Control</h3>
            <p className="text-gray-600">
              Secure admin dashboard to control everything.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}