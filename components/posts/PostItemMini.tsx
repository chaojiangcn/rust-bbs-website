"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";

export interface PostItemProps {
  id: string;
  title: string;
  time: string;
  images: string[];
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const router = useRouter();

  const goToPost = useCallback(() => {
    router.push(`/b/${props.id}`);
  }, [props.id]);

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
          <div className="flex flex-row gap-3 justify-between ">
            <div className="w-[108px] h-[72px] bg-indigo-300 rounded-sm">
              <Image
                className="h-16 rounded-sm"
                style={{
                  objectFit: "cover",
                }}
                src={props.images?.[0] || ""}
                width={108} // 自定义图片宽度
                height={72} // 自定义图片高度
                alt="over Image"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between h-full">
              <div onClick={() => goToPost()} className="font-sans line-clamp-2 mb-2">
                {props.title}
              </div>
              <div className="text-xs  text-slate-500">{props.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;