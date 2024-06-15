'use client'
import { useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";

import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";

const UserView = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const fetchedUser: any = {};
  const isLoading = false;

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} resource={[]} />
    </>
  );
};

export default UserView;
