"use client";

import { post_list } from "@/app/apis/post";

import PostItem from "./PostItem";
import List from "rc-virtual-list";

import { PostItemProps } from "./PostItem";
import { useEffect, useState } from "react";

interface PostFeedProps {
  userId?: string;
  resource: PostItemProps[];
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, resource }) => {
  const [data, setData] = useState(resource);

  // const fetchData = async () => {
  //   const { data } = await post_list({
  //     page: 1,
  //     size: 10,
  //   });
  //   setData((prev) => [...prev, ...data.list]);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

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
            authorInfo={post.authorInfo}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            images={post.images}
          />
        )}
      </List>
    </div>
  );
};

export default PostFeed;
