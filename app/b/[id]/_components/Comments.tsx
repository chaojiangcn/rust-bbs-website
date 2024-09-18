"use client";
import {
  addComment,
  CommentItem,
  getCommentList,
  GetListParams,
} from "@/app/apis/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { timeAgo } from "@/lib/utils";
import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";

async function handleSubmit(args: {
  parent_comment_id?: number;
  post_id: number;
  user_id: number;
  content: string;
}) {
  const { post_id, user_id, parent_comment_id, content } = args;
  if (!user_id) {
    return alert("请先登录");
  }
  return await addComment({
    post_id,
    user_id,
    parent_comment_id,
    content,
  });
}

const Index = (props: { commentNumber: number; post_id: number }) => {
  const cookie = getCookie("auth");
  const auth = cookie ? JSON.parse(cookie) : null;
  const [inputDisable, setInputDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [commentList, setCommentList] = useState<CommentItem[]>([]);
  const { toast } = useToast();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  async function GetCommentList(params: GetListParams) {
    const res = await getCommentList(params);
    if (res?.code === 200) {
      setCommentList(res.data.list);
    }
  }
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setInputDisable(e.target.value.length === 0);
    setMessage(e.target.value);
  };

  useEffect(() => {
    GetCommentList({
      page: 1,
      size: 50,
      post_id: props.post_id,
    });
  }, []);

  return (
    <>
      <div className="flex gap-2">
        <div className="text-lg font-bold">评论</div>
        <div className="text-lg font-bold">{props.commentNumber || "0"}</div>
      </div>
      <div className="mt-7 mb-5 flex">
        <div className="flex w-9 mr-3">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{"CN"}</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full relative">
          <Textarea
            ref={textAreaRef}
            placeholder="写下你的评论..."
            onChange={handleInput}
          />
          <div className="w-full flex justify-end mt-2">
            <Button
              disabled={inputDisable}
              onClick={async () => {
                const res = await addComment({
                  post_id: props.post_id,
                  user_id: auth.uid,
                  content: message,
                });
                if (res?.code === 200) {
                  setInputDisable(true);
                  if (textAreaRef.current) {
                    textAreaRef.current.value = "";
                  }
                  setCommentList([
                    {
                      id: 0,
                      user_id: 0,
                      post_id: 0,
                      parent_comment_id: 0,
                      content: message,
                      created_at: Date(),
                      is_deleted: 0,
                      user_info: {
                        user_id: auth.uid,
                        nickname: auth.nickname,
                        avatar: auth.avatar,
                      },
                    },
                    ...commentList,
                  ]);
                  toast({
                    title: "回复成功",
                  });
                }
              }}
            >
              发表评论
            </Button>
          </div>
        </div>
      </div>
      <div>
        {/* <Comment /> */}
        {commentList?.map((item) => {
          console.log(8888, item);

          return (
            <div key={item.id}>
              <Comment
                id={item.id}
                user_id={item.user_id}
                post_id={item.post_id}
                parent_comment_id={item.parent_comment_id}
                content={item.content}
                created_at={item.created_at}
                is_deleted={item.is_deleted}
                user_info={item.user_info}
              />
              <ReplyComment comment_id={item.id} post_id={props.post_id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Comment = (props: CommentItem) => {
  return (
    <div className="mb-8 flex">
      <div className="flex w-9 mr-3">
        <Avatar className="w-9 h-9">
          <AvatarImage src={props.user_info?.avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="text-base text-gray-400 mb-2">
          {props.user_info?.nickname}
        </div>
        <div className="text-base leading-6 text-gray-600 tracking-wider">
          {props.content}
        </div>
        <div className="mt-3 text-sm text-gray-400 ">
          {timeAgo(props.created_at)}
          <span className="mx-2 ">·</span>
          <Button variant={"link"} className="px-0">
            回复
          </Button>
        </div>
      </div>
    </div>
  );
};
const ReplyComment = (porps: { post_id: number; comment_id: number }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyList, setReplyCommentList] = useState<CommentItem[]>();

  async function GetCommentList(params: GetListParams) {
    const res = await getCommentList(params);
    if (res?.code === 200) {
      setReplyCommentList(res.data.list);
    }
  }

  useEffect(() => {
    GetCommentList({
      post_id: porps.post_id,
      page: 1,
      size: 10,
      parent_comment_id: porps.comment_id,
    });
  }, []);

  return (
    <>
      {replyList?.map((item) => {
        return (
          <div className="ml-12" key={item.id}>
            <div className=" mb-8 flex">
              <div className="flex w-7 mr-3">
                <Avatar className="w-7 h-7">
                  <AvatarImage src={item.user_info?.avatar} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="text-base text-gray-400 mb-2">
                  {item.user_info?.nickname}
                </div>
                <div className="text-base leading-6 text-gray-600 tracking-wider">
                  {item.content}
                </div>
                <div className="mt-3 text-sm text-gray-400 ">
                  {timeAgo(item.created_at)}
                  <span className="mx-2 ">·</span>
                  <Button
                    variant={"link"}
                    className="px-0"
                    onClick={() => setShowReply(true)}
                  >
                    回复
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
