import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,   // URL de tu proyecto
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! // usa la ANON key
);

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Usuario", user: data }, { status: 200 });
}
