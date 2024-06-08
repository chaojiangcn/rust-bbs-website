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
          authorInfo={post.authorInfo}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
          images={post.images}
        />
      ))}
    </>
  );
};

export default PostFeed;
