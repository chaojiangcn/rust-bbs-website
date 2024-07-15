"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

export interface PostItemProps {
  id: string;
  title: string;
  introduction: string;
  images?: string[];
  date: string;
  author_info: {
    nickname: string;
    avatar: string;
  };
  like_count: number;
  comment_count: number;
  keyindex: number;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const router = useRouter();

  const goToPost = useCallback(() => {
    router.push(`/b/${props.id}`);
  }, [props.id]);

  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center py-[10px]">
          <div
            onClick={() => goToPost()}
            className="text-base font-bold line-clamp-1"
          >
           <span className="mr-3">{props.keyindex + 1}</span> {props.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
