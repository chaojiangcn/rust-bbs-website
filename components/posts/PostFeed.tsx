"use client";
import PostItem from "./PostItem";
import List from "rc-virtual-list";

import { PostItemProps } from "./PostItem";

interface PostFeedProps {
  userId?: string;
  resource: PostItemProps[];
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, resource }) => {
  return (
    <div className="">
      <List data={resource} itemKey="id">
        {(post: PostItemProps, index) => (
          <PostItem
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
        )}
      </List>
    </div>
  );
};

export default PostFeed;
