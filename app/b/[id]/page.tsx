import { post_detail } from "@/app/apis/post";
import Sider from "./_components/Sider";
import Header from "./_components/Header";
import Content from "./_components/Content";
import Comments from "./_components/Comments";
import { Suspense } from "react";
import PostItemMini from "@/components/posts/PostItemMini";

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await post_detail(params.id);

  return (
    <main className="">
      <section className="w-full lg:w-[1190px] flex justify-between px-4 lg:px-0 py-8 mx-auto min-h-[calc(100vh-52px)] relative">
        <div className="main flex-1 lg:ml-24 relative">
          <Sider hasLiked={false} comment_count={data.comment_count} like_count={data.like_count}  />
          <Header title={data.title} author={data.author_info} created_at={data.date} />
          <Content content={data.content} />
          <Comments />
        </div>
        <div className="hidden lg:block w-[318px] ml-[50px]">
          <h2 className="text-xl font-bold">作者其他文章</h2>
          <Suspense fallback={<div>loading</div>}>
            <PostItemMini title={"上海接管合作组织首席轮值城市"} images={[]} id={"1"} time="2024-01-01" />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
