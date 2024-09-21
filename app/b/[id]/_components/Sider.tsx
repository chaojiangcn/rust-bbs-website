"use client";
import { favorite, unFavorite } from "@/app/apis/favorite";
import { like, unLike } from "@/app/apis/like";
import { useToast } from "@/components/ui/use-toast";
import { getAuth } from "@/store/features/auth";
import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Sider = (props: {
  post_id: string;
  hasLiked: boolean;
  hasFavorite: boolean;
  comment_count: number;
  like_count: number;
  favorite_count: number;
}) => {
  const userInfo = useSelector(getAuth);

  const { toast } = useToast();

  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    setIsLike(props.hasLiked);
    setIsFavorite(props.hasFavorite);
    setFavCount(props.favorite_count);
    setLikeCount(props.like_count);
  }, []);

  async function likeHandle() {
    if (!userInfo.uid) return toast({ title: "请先登录", variant: "destructive" });
    let query = await fetch("/api/post/like", {
      method: "POST",
      body: JSON.stringify({
        post_id: Number(props.post_id),
        user_id: Number(userInfo.uid),
      }),
    });
    const res = await query.json();
    if (res?.code == 200) {
      setIsLike(true);
      setLikeCount((pre) => pre + 1);
    }
  }

  async function unLikeHandle() {
    if (!userInfo.uid) return toast({ title: "请先登录", variant: "destructive" });
    let query = await fetch("/api/post/unlike", {
      method: "POST",
      body: JSON.stringify({
        post_id: Number(props.post_id),
        user_id: Number(userInfo.uid),
      }),
    });
    const res = await query.json();
    if (res?.code == 200) {
      setIsLike(false);
      setLikeCount((pre) => pre - 1);
    }
  }

  async function favoriteHandle() {
    if (!userInfo.uid) return toast({ title: "请先登录", variant: "destructive" });
    let query = await fetch("/api/post/favorite", {
      method: "POST",
      body: JSON.stringify({
        post_id: Number(props.post_id),
        user_id: Number(userInfo.uid),
      }),
    });
    const res = await query.json();
    if (res?.code == 200) {
      setIsFavorite(true);
      setFavCount((pre) => pre + 1);
    }
  }

  async function unFavoriteHandle() {
    if (!userInfo.uid) return toast({ title: "请先登录", variant: "destructive" });

    let query = await fetch("/api/post/unfavorite", {
      method: "POST",
      body: JSON.stringify({
        post_id: Number(props.post_id),
        user_id: Number(userInfo.uid),
      }),
    });
    const res = await query.json();
    if (res?.code == 200) {
      setIsFavorite(false);
      setFavCount((pre) => pre - 1);
    }
  }

  return (
    <>
      <div className="hidden lg:flex text-xs w-16 h-[100vh] justify-center gap-4 flex-col items-center absolute -left-24 top-0">
        <div className="flex flex-col justify-center items-center   gap-1  cursor-pointer   transition  hover:text-sky-500">
          <div className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100">
            <AiOutlineMessage size={19} />
          </div>
          <p>{props.comment_count || "评论"}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div
            className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100"
            onClick={() => {
              return isLike ? unLikeHandle() : likeHandle();
            }}
          >
            {isLike ? (
              <AiFillHeart color="red" size={19} />
            ) : (
              <AiOutlineHeart size={19} />
            )}
          </div>
          <p>{likeCount || "喜欢"}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div
            className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100"
            onClick={() => (isFavorite ? unFavoriteHandle() : favoriteHandle())}
          >
            {isFavorite ? (
              <AiFillStar size={19} />
            ) : (
              <AiOutlineStar size={19} />
            )}
          </div>
          <p>{favCount || "收藏"}</p>
        </div>
      </div>
      {/* mobile sider start*/}
      <div className="flex z-10 lg:hidden w-full fixed bottom-0 left-0 bg-white gap-4 px-2 py-4 justify-around">
        <div className="flex flex-row justify-center items-center   gap-1  cursor-pointer   transition  hover:text-sky-500">
          <div className="flex flex-row items-center justify-center  ">
            <AiOutlineMessage size={19} />
          </div>
          <p>{props.comment_count || "评论"}</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div
            className="flex flex-row items-center justify-center  "
            onClick={() => {
              return isLike ? unLikeHandle() : likeHandle();
            }}
          >
            {isLike ? (
              <AiFillHeart color="red" size={19} />
            ) : (
              <AiOutlineHeart size={19} />
            )}
          </div>
          <p>{likeCount || "喜欢"}</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div
            className="flex flex-row items-center justify-center  "
            onClick={() => (isFavorite ? unFavoriteHandle() : favoriteHandle())}
          >
            {isFavorite ? (
              <AiFillStar size={19} />
            ) : (
              <AiOutlineStar size={19} />
            )}
          </div>
          <p>{favCount || "收藏"}</p>
        </div>
      </div>
    </>
  );
};

export default Sider;
