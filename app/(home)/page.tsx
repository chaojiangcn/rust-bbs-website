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
      images: [
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/5f72d28df8384b54ae4d27e641bf1350~tplv-tt-cs0:750:1124.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=vKVEweDzA%2F0dIr7PJM349r0jATw%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/3dfa280dbdf84aaa82e397146deb2dca~tplv-tt-cs0:616:480.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716474431&x-signature=OsJiy6OpTar3%2BRzqJ51%2BZeAisPM%3D",
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
      images: [
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-tjoges91tu/f643f8adb526e42155f92874d82cfd21~tplv-tt-cs0:1200:675.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=Ucnkab8slMxuDIQcgVy3guQmgLM%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/5f72d28df8384b54ae4d27e641bf1350~tplv-tt-cs0:750:1124.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716472877&x-signature=vKVEweDzA%2F0dIr7PJM349r0jATw%3D",
        "https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/3dfa280dbdf84aaa82e397146deb2dca~tplv-tt-cs0:616:480.jpg?_iz=31826&from=article.headline&lk3s=06827d14&x-expires=1716474431&x-signature=OsJiy6OpTar3%2BRzqJ51%2BZeAisPM%3D",
      ],
      date: "2022-06-13",
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
          <div className="text-xl font-bold">热门文章</div>
          <PostFeed resource={postList}></PostFeed>
        </div>
        <div className="recomend w-[318px] h-[300px] ">
          <h2 className="text-xl font-bold text-center">推荐关注</h2>
        </div>
      </section>
    </main>
  );
}
