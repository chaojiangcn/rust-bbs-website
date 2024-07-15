import { Star } from "lucide-react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

const Sider = (props: {
  hasLiked: boolean;
  comment_count: number;
  like_count: number;
}) => {
  const LikeIcon = props.hasLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <>
      <div className="hidden lg:flex text-xs w-16 h-full justify-center gap-4 flex-col items-center absolute -left-24 top-0">
        <div className="flex flex-col justify-center items-center   gap-1  cursor-pointer   transition  hover:text-sky-500">
          <div className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100">
            <AiOutlineMessage size={19} />
          </div>
          <p>{props.comment_count || "评论"}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100">
            <LikeIcon color={props.hasLiked ? "red" : ""} size={19} />
          </div>
          <p>{props.like_count || "喜欢"}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div className="flex flex-row items-center justify-center rounded-full w-12 h-12 bg-slate-100">
            <Star size={19} />
          </div>
          <p>{props.like_count || "收藏"}</p>
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
          <div className="flex flex-row items-center justify-center  ">
            <LikeIcon color={props.hasLiked ? "red" : ""} size={19} />
          </div>
          <p>{props.like_count || "喜欢"}</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-1 cursor-pointer transition hover:text-red-500">
          <div className="flex flex-row items-center justify-center  ">
            <Star size={19} />
          </div>
          <p>{props.like_count || "收藏"}</p>
        </div>
      </div>
    </>
  );
};

export default Sider;
