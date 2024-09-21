import { post_detail } from '@/app/apis/post';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log("request:", request);

  let cookie = getCookie("auth", { cookies });

  console.log(555, cookie, request.cookies);

  let res = await post_detail('16', {})

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