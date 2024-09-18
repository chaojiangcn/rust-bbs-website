import { Suspense } from "react";

import NavBar from "@/components/nav/Nav";
import Feet from "@/components/Feet";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Feet />
    </>
  );
};

export default HomeLayout;
