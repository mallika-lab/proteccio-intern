import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const body = await req.json();
  const { email, password, role } = body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  // Insert role in custom users table
  await supabase.from("users").insert([
    {
      id: data.user.id,
      email,
      role: role || "intern",
    },
  ]);

  return Response.json({ message: "User created" });
}