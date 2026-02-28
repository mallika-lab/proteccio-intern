"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
       setEmail(data.user.email ?? "");
      }
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <p className="mb-4">
        Logged in as: <strong>{email}</strong>
      </p>

      <div className="flex gap-4">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => router.push("/interns")}
        >
          Manage Interns
        </button>

        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => router.push("/projects")}
        >
          Manage Projects
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}