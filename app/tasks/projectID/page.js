"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function TasksPage() {
  const { projectId } = useParams();
  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("project_id", projectId);

      if (!error) {
        setTasks(data);
      }
    };

    if (projectId) {
      loadTasks();
    }
  }, [projectId]);

  const handleAddTask = async () => {
    if (!title.trim()) return;

    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          title,
          project_id: projectId,
        },
      ])
      .select();

    if (!error && data) {
      setTasks([...tasks, data[0]]);
      setTitle("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tasks for Project</h2>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <hr />

      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title} — {task.status}</p>
        </div>
      ))}
    </div>
  );
}