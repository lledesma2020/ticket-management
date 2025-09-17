// app/api/posiciones/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,   // o SUPABASE_URL
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!           // usa ANON key (no la service role)
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("posicion")
      .select("*")
      .order("created_at", { ascending: false }); // ordenar por fecha de creación, más recientes primero

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Unexpected error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre } = body;

    if (!nombre) {
      return NextResponse.json({ error: "El campo 'nombre' es requerido" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("posicion")
      .insert({ nombre })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Unexpected error" }, { status: 500 });
  }
}