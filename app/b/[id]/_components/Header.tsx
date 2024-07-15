import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Header = (props: { title: string; nickname: string; avatar: string }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">{props.title}</h1>
      <div>
        <div className="mb-7 ">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <div className="flex gap-2 items-center ">
              <Avatar className="w-9 h-9">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{"CN"}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-base font-bold">{props.nickname}</div>
                <p className="text-sm text-slate-500">
                  2024-07-03 15:27发布于上海 澎湃新闻官方账号
                </p>
              </div>
            </div>
            <div>
              <Button>关注</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
