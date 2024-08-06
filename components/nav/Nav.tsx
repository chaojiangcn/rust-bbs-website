"use client";

import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import { Bell, CirclePlus, PanelLeft, Search } from "lucide-react";

import { getNav, changeNav } from "@/store/features/counterSlice";
import { getAuth, logOut } from "@/store/features/auth";
import { AppDispatch } from "@/store/index";
import Link from "next/link";
import { SearchInput } from "../ui/search-input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Nav = () => {
  const navIndex = useSelector(getNav);
  const authInfo = useSelector(getAuth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const logout = () => {
    dispatch(logOut());
    // router.push("/login");
  };

  const onClick = (inx: number) => {
    dispatch(changeNav(inx));
  };

  const Navs = [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "学习",
      href: "/learning",
    },
  ];

  return (
    <header className="backdrop-blur-xl bg-white/30  shadow-nav w-full h-16  lg:min-w-[1280px] px-2 lg:px-6 sticky top-0 z-10">
      <nav className="flex items-center h-full justify-between">
        <div className="items-center hidden lg:flex">
          <Link
            href={"/"}
            className="text-2xl font-bold gradient-text hidden lg:block"
          >
            Rust-BBS
          </Link>
          <div className="flex shrink-0 ml-7  flex-row gap-5 w-[514px]">
            {Navs.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  navIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground py-0.5 text-base relative font-medium select-none`}
                onClick={() => onClick(index)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-slate-500 h-7">
                <PanelLeft size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>
                  <Link href={"/"} className="text-2xl font-bold gradient-text">
                    Rust-BBS
                  </Link>
                </SheetTitle>
                <SheetDescription>不积跬步,无以成千里</SheetDescription>
                <div className="flex shrink-0  flex-col mt-4 gap-2">
                  {Navs.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${
                        navIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground"
                      } transition-colors hover:text-foreground py-0.5 text-base relative font-medium select-none`}
                      onClick={() => onClick(index)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button variant="ghost" className=" text-slate-500 gap-1">
                    <Bell size={20} />
                    消息
                  </Button>
                  <Button variant="ghost" className=" text-slate-500 gap-1">
                    <CirclePlus size={20} />
                    写想法
                  </Button>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="search rounded-md flex items-center border border-gray-200 p-1">
          <SearchInput
            type="text"
            placeholder="发现精彩..."
            className=" h-7 w-full border-none"
          />
          <Button variant="ghost" className=" text-slate-500 h-7">
            <Search className="w-4" />
          </Button>
        </div>
        <div className="flex items-center text-base ml-3 md:ml-0">
          <Button
            variant="ghost"
            className="hidden md:flex text-slate-500 gap-1"
          >
            <Bell size={20} />
            消息
          </Button>
          <Button
            variant="ghost"
            className=" hidden md:flex text-slate-500 gap-1"
          >
            <CirclePlus size={20} />
            写想法
          </Button>
          {authInfo.isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-[28px] h-[28px] ml-6">
                  <AvatarImage
                    src={authInfo.avatar || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>{authInfo.nickname || "CN"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>个人中心</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/user/" + authInfo.uid}>我的主页</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">设置</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>支持</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>退出登录</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="h-8">
              <Link href="/login">登录</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
