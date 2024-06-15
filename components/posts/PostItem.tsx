"use client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { formatDistanceToNowStrict } from "date-fns";

import useLoginModal from "@/hooks/useLoginModal";
import useLike from "@/hooks/useLike";

import Avatar from "../Avatar";
import PostHeader from "./PostHeaderFollowed";

export interface PostItemProps {
  id: string;
  title: string;
  images?: string[];
  date: string;
  authorInfo: {
    nickname: string;
    avatar: string;
  };
  likeCount: number;
  commentCount: number;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const currentUser = {};
  const { hasLiked, toggleLike } = useLike({ postId: props.id, userId: "1" });

  // const goToUser = useCallback(
  //   (ev: any) => {
  //     ev.stopPropagation();
  //     router.push(`/users/${data.user.id}`);
  //   },
  //   [router, data.user.id]
  // );

  const goToPost = useCallback(() => {
    console.log(999);
    router.push(`/b/${props.id}`);
  }, [props.id]);

  // const onLike = useCallback(
  //   async (ev: any) => {
  //     ev.stopPropagation();

  //     if (!currentUser) {
  //       return loginModal.onOpen();
  //     }

  //     toggleLike();
  //   },
  //   [loginModal, currentUser, toggleLike]
  // );

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

  const createdAt = useMemo(() => {
    if (!props?.date) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(props.date));
  }, [props.date]);

  return (
    <div
      className="
        border-b-[1px] 
        border-grey-100
        cursor-pointer 
        transition
        py-5
      "
    >
      <div className="flex flex-col items-start gap-3">
        <div>
          <div onClick={() => goToPost()} className="mt-1 text-xl font-bold">
            {props.title}
          </div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            "
            >
              <AiOutlineMessage size={20} />
              <p>{props.commentCount || 0}</p>
            </div>
            <div
              // onClick={onLike}
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            "
            >
              <LikeIcon color={hasLiked ? "red" : ""} size={20} />
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
