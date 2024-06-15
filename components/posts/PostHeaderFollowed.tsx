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
    <div className="flex flex-row items-start  space-x-1 w-full">
      <div className="">
        <Avatar className="w-9 h-9">
          <AvatarImage src={props.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-start justify-center space-x-1 text-slate-950 text-sm">
        <div className="">{props.nickname}</div>
        <div className="text-xs text-neutral-400">
          <span className="">{createdAt}</span>
        </div>
      </div>
    </div>
  );
}
