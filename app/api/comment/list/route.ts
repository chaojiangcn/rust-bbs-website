import { getCommentList, GetListParams } from '@/app/apis/comment';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log("request:", request);

  const params = request.nextUrl.searchParams
  
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comment/list?${params}`)
  res = await res.json()

  console.log(666, res);

  return Response.json({
    ...res
  })
}

export async function POST(request: Request) {
  console.log("request:", request);

  const res = await request.json()
  return Response.json({ res })
}