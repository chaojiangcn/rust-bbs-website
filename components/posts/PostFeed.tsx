
import PostItem from './PostItem';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const  posts = [{}];

  return (
    <>
      {posts.map((post: Record<string, any>,) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
