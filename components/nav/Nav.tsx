"use client";

import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import { Bell, CirclePlus, Search } from "lucide-react";

import { getNav, changeNav } from "@/store/features/counterSlice";
import { AppDispatch } from "@/store/store";
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

const Nav = () => {
  const navIndex = useSelector(getNav);
  const dispatch = useDispatch<AppDispatch>();

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
    <header className="backdrop-blur-xl bg-white/30  shadow-nav w-full h-16 min-w-[1280px] px-6 sticky top-0 z-10">
      <nav className="flex items-center h-full justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-2xl font-bold gradient-text">
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
        <div className="flex items-center text-base">
          <Button variant="ghost" className=" text-slate-500 gap-1">
            <Bell className="w-5 h-5" />
            消息
          </Button>
          <Button variant="ghost" className=" text-slate-500 gap-1">
            <CirclePlus className="w-5 h-5" />
            写想法
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-[28px] h-[28px] ml-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>个人中心</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings">设置</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>支持</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>退出登录</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
