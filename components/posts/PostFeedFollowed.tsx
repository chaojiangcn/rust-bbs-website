import PostItem from "./PostItemFollowed";

import { PostItemProps } from "./PostItem";

interface PostFeedProps {
  userId?: string;
  resource: PostItemProps[];
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, resource }) => {
  return (
    <>
      {resource.map((post: PostItemProps, index) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          author_info={post.author_info}
          like_count={post.like_count}
          comment_count={post.comment_count}
          images={post.images}
        />
      ))}
    </>
  );
};

export default PostFeed;
