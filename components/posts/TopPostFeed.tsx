import { post_list } from "@/app/apis/post";

import PostItem from "./TopPostItem";

import { PostItemProps } from "./TopPostItem";

interface PostFeedProps {
  userId?: string;
  resource: PostItemProps[];
}

const PostFeed: React.FC = async () => {
  const { data } = await post_list({
    page: 1,
    size: 10,
  });

  return (
    <div className="mt-3">
      {data.list.map((post: PostItemProps, index: number) => (
        <PostItem
          keyindex={index}
          key={post.id}
          id={post.id}
          title={post.title}
          introduction={post.introduction}
          date={post.date}
          author_info={post.author_info}
          like_count={post.like_count}
          comment_count={post.comment_count}
          images={post.images}
        />
      ))}
    </div>
  );
};

export default PostFeed;
