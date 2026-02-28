export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">Total Interns</div>
        <div className="border p-4 rounded">Projects</div>
        <div className="border p-4 rounded">Tasks</div>
      </div>
    </div>
  );
}