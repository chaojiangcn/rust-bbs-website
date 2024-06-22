"use client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { formatDistanceToNowStrict } from "date-fns";

import useLoginModal from "@/hooks/useLoginModal";
import useLike from "@/hooks/useLike";
import Image from "next/image";

import Avatar from "../Avatar";
import PostHeader from "./PostHeaderFollowed";
import { timeAgo } from "@/lib/utils";

export interface PostItemProps {
  id: string;
  title: string;
  introduction: string;
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
      <div className="flex flex-col items-start">
        <div className="w-full">
          <div className="flex flex-row items-center gap-3 justify-between ">
            <div className="flex-1">
              <div>
                <div
                  onClick={() => goToPost()}
                  className="mt-1 text-lg font-bold"
                >
                  {props.title}
                </div>
                <div className="text-neutral-500 pt-2 font-sans line-clamp-2">
                  {props.introduction}
                </div>
              </div>
            </div>
            <div className=" w-28 h-16 bg-indigo-300 rounded-sm">
              <Image
                className="h-16 rounded-sm"
                style={{
                  objectFit: "cover",
                }}
                src={props.images?.[0] || ""}
                width={112} // 自定义图片宽度
                height={100} // 自定义图片高度
                // layout="responsive" // 响应式布局
                alt="over Image"
              />
            </div>
          </div>
          <div className="flex flex-row items-center mt-3 gap-5 text-neutral-500  text-sm">
            <span>{props.authorInfo?.nickname}</span>
            <div
              className="
                flex 
                flex-row 
                items-center 
                
                gap-1
                cursor-pointer 
                transition 
                hover:text-sky-500
            "
            >
              <AiOutlineMessage size={17} />
              <p>{props.commentCount || "评论"}</p>
            </div>
            <div
              // onClick={onLike}
              className="
                flex 
                flex-row 
                items-center 
                gap-1 
                cursor-pointer 
                transition 
                hover:text-red-500
            "
            >
              <LikeIcon color={hasLiked ? "red" : ""} size={20} />
              <p>{props.likeCount || "喜欢"}</p>
            </div>
            <div>
              <span>{timeAgo(props.date)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
