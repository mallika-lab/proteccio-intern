import { createIntern, getInterns } from "@/services/internService";

export async function GET() {
  const { data, error } = await getInterns();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const { full_name, email } = body;

  if (!full_name || !email) {
    return Response.json(
      { error: "Required fields missing" },
      { status: 400 }
    );
  }

  const { data, error } = await createIntern(body);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: "Intern created", data });
}