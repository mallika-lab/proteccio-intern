export default function ListingPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Intern Listing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded">
          <h2 className="font-semibold">John Doe</h2>
          <p>Frontend Intern</p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Aisha Khan</h2>
          <p>Backend Intern</p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Rahul Sharma</h2>
          <p>Full Stack Intern</p>
        </div>
      </div>
    </div>
  );
}