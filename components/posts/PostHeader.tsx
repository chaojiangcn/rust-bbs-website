import React, { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDistanceToNowStrict } from "date-fns";

interface PostHeaderProps {
  nickname: string;
  avatar: string;
  honors?: string[];
  date: string;
}

export default function PostHeader(props: PostHeaderProps) {
  const createdAt = useMemo(() => {
    if (!props?.date) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(props.date));
  }, [props.date]);

  return (
    <div className="flex flex-row items-center justify-center space-x-1">
      <div className="">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row items-start justify-center space-x-1 text-slate-950 text-sm">
        <div className="">{props.nickname}</div>
        <div className="text-neutral-200">
          <span className="">{createdAt}</span>
        </div>
      </div>
    </div>
  );
}
