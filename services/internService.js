import supabase from "@/lib/supabaseClient";

export async function createIntern(data) {
  return await supabase.from("intern_profiles").insert([data]);
}

export async function getInterns() {
  return await supabase.from("intern_profiles").select("*");
}

export async function updateIntern(id, data) {
  return await supabase
    .from("intern_profiles")
    .update(data)
    .eq("id", id);
}

export async function deleteIntern(id) {
  return await supabase
    .from("intern_profiles")
    .delete()
    .eq("id", id);
}