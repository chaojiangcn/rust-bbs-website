import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json()
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/add`, { method: "POST", body: JSON.stringify(body) })
  const data = await res.json()
  return NextResponse.json(data)
}