import { post_list_with_uid } from "@/app/apis/post";
import PostItem from "./PostItemMini";
import { PostItemProps } from "./PostItem";

interface PostFeedProps {
  userId: number;
}

const PostFeed: React.FC<PostFeedProps> = async (props) => {
  const res = await post_list_with_uid({
    uid: props.userId,
    page: 1,
    size: 10,
  });

  const data = res?.data;
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3">
      {data.list.map((post: PostItemProps) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          time={post.date}
          images={[post.images![0]]}
        />
      ))}
    </div>
  );
};

export default PostFeed;
