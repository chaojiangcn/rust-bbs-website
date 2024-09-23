import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${params}`)
  res = await res.json()
  return Response.json({
    ...res
  })
}