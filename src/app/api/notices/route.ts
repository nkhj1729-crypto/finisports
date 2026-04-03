import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { supabase, getServiceSupabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json([], { status: 200 });
  }

  return NextResponse.json(data || []);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const sb = getServiceSupabase();
  const { data, error } = await sb.from("notices").insert(body).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}
