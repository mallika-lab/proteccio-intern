import supabase from "@/lib/supabaseClient";

export async function createTask(data) {
  return await supabase.from("tasks").insert([data]);
}

export async function getTasks() {
  return await supabase.from("tasks").select("*");
}

export async function updateTask(id, data) {
  return await supabase.from("tasks").update(data).eq("id", id);
}

export async function deleteTask(id) {
  return await supabase.from("tasks").delete().eq("id", id);
}