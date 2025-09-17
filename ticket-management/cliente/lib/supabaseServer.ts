// utils/supabase/server.ts
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createClient() {
  const cookieStore = await cookies(); // ahora sí, cookieStore.get existe

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}
