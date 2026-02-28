"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";



export default function InternsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [interns, setInterns] = useState<Intern[]>([]);
  type Intern = {
  id: number;
  name: string;
  email: string;
  role?: string;
};
  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.from("interns").select("*");

   if (!error && data) setInterns(data as Intern[]);

    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Interns</h1>

      {loading && <p>Loading interns...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interns.map((intern) => (
          <div
            key={intern.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{intern.full_name}</h2>
            <p className="text-gray-600">{intern.email}</p>
            <p className="text-gray-500 text-sm">{intern.phone}</p>
          </div>
        ))}
      </div>

      {!loading && interns.length === 0 && (
        <p className="text-gray-500">No interns found.</p>
      )}
    </div>
  );
}