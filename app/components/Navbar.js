import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Intern Portal</h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/interns" className="hover:text-blue-600">Interns</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        <Link href="/login" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Admin</Link>
      </div>
    </nav>
  );
}