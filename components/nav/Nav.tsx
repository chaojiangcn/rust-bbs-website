"use client";

import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { getNav, changeNav } from "@/store/features/counterSlice";
import { AppDispatch } from "@/store/store";
import Link from "next/link";

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
    <header className=" bg-white shadow-md w-full">
      <nav className=" h-[52px] w-full lg:w-[1200px] flex justify-between items-center mx-auto">
        <div className="hidden items-center flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {Navs.map((item, index) => (
            <Link
              key={item.href}
              href="#"
              className={`${
                navIndex === index ? "text-foreground" : "text-muted-foreground"
              } transition-colors hover:text-foreground`}
              onClick={() => onClick(index)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <span>
            <Button variant="ghost" className=" text-slate-500">
              消息
            </Button>
          </span>
          <span>
            <Button variant="ghost" className=" text-slate-500">
              通知
            </Button>
          </span>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
