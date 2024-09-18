import { post_detail } from '@/app/apis/post';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  let cookie = getCookie("auth", { cookies });

  console.log(555, cookie, request.cookies);

  let res = await post_detail('1', {})
  
  console.log(666, res);

  return Response.json({
    res
  })
}