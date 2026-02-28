import { updateIntern, deleteIntern } from "@/services/internService";

export async function PUT(req, { params }) {
  const body = await req.json();

  const { data, error } = await updateIntern(params.id, body);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: "Intern updated", data });
}

export async function DELETE(req, { params }) {
  const { data, error } = await deleteIntern(params.id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: "Intern deleted", data });
}