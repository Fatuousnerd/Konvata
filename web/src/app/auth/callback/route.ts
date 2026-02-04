import { createSupabaseClient } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) return NextResponse.redirect("/auth/auth-code-error");

  const supabase = await createSupabaseClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) return NextResponse.redirect("/auth/auth-code-error");

  const redirectPath = "/dashboard";

  const host = req.headers.get("x-forwarded-host") || url.host;
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const finalUrl = `${protocol}://${host}${redirectPath}`;

  return NextResponse.redirect(finalUrl);
}
