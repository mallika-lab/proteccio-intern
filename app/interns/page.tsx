"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminInternsPage() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newIntern, setNewIntern] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("interns").select("*");
    if (!error) setInterns(data || []);
    setLoading(false);
  };

  const addIntern = async () => {
    if (!newIntern.full_name || !newIntern.email) {
      alert("Name and email required");
      return;
    }

    const { error } = await supabase.from("interns").insert([newIntern]);

    if (error) alert(error.message);
    else {
      setNewIntern({ full_name: "", email: "", phone: "" });
      fetchInterns();
    }
  };

  const updateIntern = async (id, field, value) => {
    setInterns((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );

    const { error } = await supabase.from("interns").update({ [field]: value }).eq("id", id);
    if (error) alert(error.message);
  };

  const deleteIntern = async (id) => {
    if (!confirm("Delete this intern?")) return;
    const { error } = await supabase.from("interns").delete().eq("id", id);
    if (!error) fetchInterns();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Interns</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Add Intern</h2>

        <input
          className="border p-2 mr-2 rounded"
          placeholder="Full name"
          value={newIntern.full_name}
          onChange={(e) => setNewIntern({ ...newIntern, full_name: e.target.value })}
        />

        <input
          className="border p-2 mr-2 rounded"
          placeholder="Email"
          value={newIntern.email}
          onChange={(e) => setNewIntern({ ...newIntern, email: e.target.value })}
        />

        <input
          className="border p-2 mr-2 rounded"
          placeholder="Phone"
          value={newIntern.phone}
          onChange={(e) => setNewIntern({ ...newIntern, phone: e.target.value })}
        />

        <button
          onClick={addIntern}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interns.map((intern) => (
              <tr key={intern.id} className="border-b">
                <td className="p-2">
                  <input
                    className="border p-1 rounded w-full"
                    value={intern.full_name}
                    onChange={(e) =>
                      updateIntern(intern.id, "full_name", e.target.value)
                    }
                  />
                </td>

                <td className="p-2">
                  <input
                    className="border p-1 rounded w-full"
                    value={intern.email}
                    onChange={(e) =>
                      updateIntern(intern.id, "email", e.target.value)
                    }
                  />
                </td>

                <td className="p-2">
                  <input
                    className="border p-1 rounded w-full"
                    value={intern.phone || ""}
                    onChange={(e) =>
                      updateIntern(intern.id, "phone", e.target.value)
                    }
                  />
                </td>

                <td className="p-2 text-center">
                  <button
                    onClick={() => deleteIntern(intern.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}