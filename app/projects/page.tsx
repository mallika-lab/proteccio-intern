"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading projects...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Project Showcase</h1>

      {projects.length === 0 && (
        <p className="text-gray-500">No projects added yet.</p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{p.description}</p>
            <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}