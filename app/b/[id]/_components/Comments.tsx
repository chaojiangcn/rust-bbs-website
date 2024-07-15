"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const index = () => {
  const [inputDisable, setInputDisable] = useState(true);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setInputDisable(e.target.value.length === 0);
  };
  return (
    <>
      <div className="flex gap-2">
        <div className="text-lg font-bold">评论</div>
        <div className="text-lg font-bold">0</div>
      </div>
      <div className="mt-7 mb-5 flex">
        <div className="flex w-9 mr-3">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{"CN"}</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full relative">
          <Textarea placeholder="写下你的评论..." onChange={handleInput} />
          <div className="w-full flex justify-end mt-2">
            <Button disabled={inputDisable}>发表评论</Button>
          </div>
        </div>
      </div>
      <div>
        <Comment />
        <ReplyComment />
      </div>
    </>
  );
};

const Comment = () => {
  return (
    <div className="mb-8 flex">
      <div className="flex w-9 mr-3">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="text-base text-gray-400 mb-2">梅超风</div>
        <div className="text-base leading-6 text-gray-600 tracking-wider">
          西方人就是会给别国上眼药水忽悠套路，也是也太高看大国的地位了，其实是美国人西方人不再拱火递刀子武装乌克兰进行杀人放火损耗俄罗斯，和平的曙光马上来到实现。
        </div>
        <div className="mt-3 text-sm text-gray-400 ">
          3小时前·<span>回复</span>
        </div>
      </div>
    </div>
  );
};
const ReplyComment = () => {
  return (
    <div className="ml-12">
      <div className=" mb-8 flex">
        <div className="flex w-7 mr-3">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="text-base text-gray-400 mb-2">梅超风</div>
          <div className="text-base leading-6 text-gray-600 tracking-wider">
            西方人就是会给别国上眼药水忽悠套路，也是也太高看大国的地位了，其实是美国人西方人不再拱火递刀子武装乌克兰进行杀人放火损耗俄罗斯，和平的曙光马上来到实现。
          </div>
          <div className="mt-3 text-sm text-gray-400 ">
            3小时前·<span>回复</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
