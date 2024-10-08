"use client";
import { follow, unFollow } from "@/app/apis/follow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getAuth } from "@/store/features/auth";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = (props: {
  title: string;
  author: {
    nickname: string;
    avatar: string;
    user_id: string;
  };
  created_at: string;
  follow: boolean;
}) => {
  const { toast } = useToast();
  let time = dayjs(props.created_at).format("YYYY-MM-DD HH:mm:ss");
  const userInfo = useSelector(getAuth);

  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    setIsFollow(props.follow);
  }, []);

  const handleFollow = async () => {
    if (!isFollow) {
      const res = await follow({
        following_id: props.author.user_id,
        follower_id: userInfo.uid,
      });
      if (res?.code == 200) {
        setIsFollow(true);
        toast({
          title: "关注成功",
          description: "您已成功关注该用户",
          variant: "default",
        });
      }
    } else {
      const res = await unFollow({
        following_id: props.author.user_id,
        follower_id: userInfo.uid,
      });
      if (res?.code == 200) {
        setIsFollow(false);
        toast({
          title: "取消关注成功",
          description: "您已成功取消关注该用户",
          variant: "default",
        });
      }
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{props.title}</h1>
      <div>
        <div className="mb-7 ">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <div className="flex gap-2 items-center ">
              <Avatar className="w-9 h-9">
                <AvatarImage
                  src={props.author.avatar || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>{"CN"}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/user/${props.author.user_id}`}>
                  <div className="text-base font-bold">
                    {props.author.nickname}
                  </div>
                </Link>
                <p className="text-sm text-slate-500">
                  {time}发布中国大陆
                </p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => handleFollow()}
                className={cn(isFollow ? "bg-slate-300" : "")}
              >
                {isFollow ? "已关注" : "关 注"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
