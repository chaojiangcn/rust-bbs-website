import PostFeed from "@/components/posts/PostFeed";
import { PostItemProps } from "@/components/posts/PostItem";
import { Metadata } from "next";
import { Suspense } from "react";
import TopPostFeed from "@/components/posts/TopPostFeed";
import { TopSkeleton, ListSkeleton } from "./_components/Index";

export const metadata: Metadata = {};

export default async function Home() {
  const postList: PostItemProps[] = [];

  const query = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?page=1&size=10`, { method: "GET" });
  const res = await query.json();
  if (res && res.data && res.data.list) {
    postList.push(...res.data.list);
  }
  return (
    <main className="">
      <section className="w-full lg:w-[1190px] flex justify-between px-4 lg:px-0 pt-4 mx-auto min-h-[calc(100vh-52px)] relative">
        <div className="main flex-1">
          <div className="text-xl font-bold underline-offset-8">热门文章</div>
          <Suspense fallback={<ListSkeleton />}>
            <PostFeed resource={postList}></PostFeed>
          </Suspense>
        </div>
        <div className="w-[318px] ml-[50px] hidden lg:block">
          <div className=" sticky top-20 mt-10">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">推荐阅读</h2>
              <div className="underline underline-offset-1">换一换</div>
            </div>
            <Suspense fallback={<TopSkeleton />}>
              <TopPostFeed></TopPostFeed>
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
