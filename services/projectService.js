import supabase from "@/lib/supabaseClient";

export async function createProject(data) {
  return await supabase.from("projects").insert([data]);
}

export async function getProjects() {
  return await supabase.from("projects").select("*");
}

export async function updateProject(id, data) {
  return await supabase.from("projects").update(data).eq("id", id);
}

export async function deleteProject(id) {
  return await supabase.from("projects").delete().eq("id", id);
}