import { post_detail } from "@/app/apis/post";
import Sider from "./_components/Sider";
import Header from "./_components/Header";
import Content from "./_components/Content";
import Comments from "./_components/Comments";
import { lazy, Suspense } from "react";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import PostMiniFeed from "@/components/posts/PostMiniFeed";

// 懒加载组件
const PostItemMini = lazy(() => import("@/components/posts/PostItemMini"));

export async function generateMetadata({ params }: { params: { id: string } }) {
  let cookie = getCookie("auth", { cookies });
  let headers: { [key: string]: string } = {};
  if (cookie) {
    let temp = JSON.parse(cookie);
    headers["Authorization"] = `Bearer ${temp.token}`;
  }
  const { data } = await post_detail(params.id, headers);
  return {
    title: data.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  let cookie = getCookie("auth", { cookies });
  let headers: { [key: string]: string } = {};
  if (cookie) {
    let temp = JSON.parse(cookie);
    headers["Authorization"] = `Bearer ${temp.token}`;
  }
  const { data } = await post_detail(params.id, headers);

  return (
    <main className="">
      <section className="w-full lg:w-[1190px] flex justify-between px-4 lg:px-0 py-8 mx-auto min-h-[calc(100vh-52px)] relative">
        <div className="main flex-1 lg:ml-24 relative">
          <Sider
            hasLiked={data.is_like}
            comment_count={data.comment_count}
            like_count={data.like_count}
            favorite_count={data.favorite_count}
            post_id={params.id}
            hasFavorite={data.is_favorite}
          />
          <Header
            title={data.title}
            author={data.author_info}
            created_at={data.date}
            follow={data.is_follow}
          />
          <Content content={data.content} />
          <Comments
            commentNumber={data.comment_count}
            post_id={Number(params.id)}
          />
        </div>
        <div className="hidden lg:block w-[318px] ml-[50px]">
          <h2 className="text-xl font-bold">作者其他文章</h2>
          <Suspense fallback={<div>loading...</div>}>
            <PostMiniFeed userId={data.author_info.user_id} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
