import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { supabase, getServiceSupabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");

  let query = supabase
    .from("guide_videos")
    .select("*")
    .order("sort_order", { ascending: true });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

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
  const { data, error } = await sb.from("guide_videos").insert(body).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}
