import { ListSkeleton, TopSkeleton } from "@/app/(home)/_components/Index";
import { Skeleton } from "@/components/ui/skeleton";

export const HomeSkeleton = () => (
  <div>
    <ResultsSkeleton />
  </div>
);

export const ResultCardSkeleton = () => (
  <div className="flex gap-x-3">
    <div className="flex flex-col gap-y-1">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
);

export const ResultsSkeleton = () => {
  return (
    <div className="w-full lg:w-[1190px] flex justify-between px-4 lg:px-0 pt-4 mx-auto min-h-[calc(100vh-52px)] relative">
      <div className="main flex-1">
        <ListSkeleton />
      </div>
      <div className="w-[318px] ml-[50px] hidden lg:block">
        <TopSkeleton />
      </div>
    </div>
  );
};
