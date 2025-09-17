// app/api/user/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,   // o SUPABASE_URL
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!           // usa ANON key (no la service role)
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*"); // si querés solo activos

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Unexpected error" }, { status: 500 });
  }
}
