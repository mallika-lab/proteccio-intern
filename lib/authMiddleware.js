import supabase from "./supabaseClient";

export async function verifyUser(req) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new Error("Unauthorized");
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    throw new Error("Invalid Token");
  }

  return data.user;
}