import Nav from "@/components/nav/Nav";
import PostFeed from "@/components/posts/PostFeed";
import PostFeedFollowed from "@/components/posts/PostFeedFollowed";
import { PostItemProps } from "@/components/posts/PostItem";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'home',
}


export default async function Home() {
  
  const postList: PostItemProps[] = [
    {
      id: '1',
      title: "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态",
      introduction: "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态, 2021-03-24 10:00:00",
      images: [
        "https://wx2.sinaimg.cn/orj360/a1196959ly1hpoefxqvghj20rs15m11o.jpg",
        "https://wx4.sinaimg.cn/mw690/a1196959ly1hpoefyyhe7j20u012o0yq.jpg",
      ],
      date: "2022-06-13",
      authorInfo: {
        nickname: "北辰 jiujiu",
        avatar: "https://img0.baidu.com/it/u=4258548311,3664140258&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
      },
      likeCount: 100,
      commentCount: 10,
    },
    {
      id: '2',
      title: "深圳白天“秒变黑”！一天连发七次预警，全市进入暴雨紧急防御状态",
      introduction: "Hey everyone, I'm currently reading 'The modem world' The Modem World (yale.edu) and I want to find out more about BBS's that are still being run today. I'be found syncterm and hit up a few BBS's on the list, but not all of them are very active",
      images: [
        "https://wx4.sinaimg.cn/mw690/a1196959ly1hpoeg013ozj20u011i7de.jpg"
      ],
      date: "2024-06-13",
      authorInfo: {
        nickname: "北辰 jiujiu",
        avatar: "https://img0.baidu.com/it/u=4258548311,3664140258&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
      },
      likeCount: 100,
      commentCount: 0,
    },
  ];

 

  return (
    <main className="">
      <Nav />
      <section className="w-[1190px] flex justify-between px-0 pt-4 mx-auto min-h-[calc(100vh-52px)] relative">
        <div className="main w-[852px]">
          <div className="text-xl font-bold underline-offset-8">热门文章</div>
          <PostFeed resource={postList}></PostFeed>
        </div>
        <div className="recomend w-[318px] h-[300px] ">
          <h2 className="text-xl font-bold text-center">推荐关注</h2>
        </div>
      </section>
    </main>
  );
}
