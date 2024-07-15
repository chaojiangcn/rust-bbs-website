import PostFeed from "@/components/posts/PostFeed";
import PostFeedFollowed from "@/components/posts/PostFeedFollowed";
import { PostItemProps } from "@/components/posts/PostItem";
import { Metadata } from "next";
import { post_list } from "../apis/post";
import { Suspense } from "react";
import TopPostFeed from "@/components/posts/TopPostFeed";
import { TopSkeleton, ListSkeleton } from "./_components/Index";

export const metadata: Metadata = {};

export default async function Home() {
  const postList: PostItemProps[] = [
    {
      id: "1",
      title: "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态",
      introduction:
        "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态, 2021-03-24 10:00:00",
      images: [
        "https://wx2.sinaimg.cn/orj360/a1196959ly1hpoefxqvghj20rs15m11o.jpg",
        "https://wx4.sinaimg.cn/mw690/a1196959ly1hpoefyyhe7j20u012o0yq.jpg",
      ],
      date: "2022-06-13",
      author_info: {
        nickname: "北辰 jiujiu",
        avatar:
          "https://img0.baidu.com/it/u=4258548311,3664140258&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
      },
      like_count: 100,
      comment_count: 10,
    },
    {
      id: "2",
      title: "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态",
      introduction:
        "Hey everyone, I'm currently reading 'The modem world' The Modem World (yale.edu) and I want to find out more about BBS's that are still being run today. I'be found syncterm and hit up a few BBS's on the list, but not all of them are very active",
      images: [
        "https://wx4.sinaimg.cn/mw690/a1196959ly1hpoeg013ozj20u011i7de.jpg",
      ],
      date: "2024-06-13",
      author_info: {
        nickname: "北辰 jiujiu",
        avatar:
          "https://img0.baidu.com/it/u=4258548311,3664140258&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
      },
      like_count: 100,
      comment_count: 0,
    },
  ];

  const res = await post_list({
    page: 1,
    size: 10,
  });
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
              <h2 className="text-xl font-bold">推荐关注</h2>
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
