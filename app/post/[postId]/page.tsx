'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";


import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentFeed from "@/components/posts/CommentFeed";


const PostView = () => {
  const  searchParams = useSearchParams;
  const postId  = searchParams().get('postId');

  const fetchedPost = {}; const isLoading = false;

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return ( 
    <>
      <Header showBackArrow label="Tweet" />
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder="Tweet your reply" />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
   );
}
 
export default PostView;