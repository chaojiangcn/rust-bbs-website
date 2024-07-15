import { Skeleton } from "@/components/ui/skeleton";

export const TopSkeleton = () => (
  <div className=" space-y-2 mt-3">
    {[1, 2, 3, 4, 5].map((item) => (
      <TopSkeletonItem key={item} />
    ))}
  </div>
);

export const ListSkeleton = () => (
  <div className="space-y-4 mt-3">
    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
      <ListSkeletonItem key={item} />
    ))}
  </div>
);

export const TopSkeletonItem = () => (
  <Skeleton className="h-11 w-full rounded-sm"></Skeleton>
);
export const ListSkeletonItem = () => (
  <div className="flex flex-row items-center gap-3 justify-between ">
    <div className="flex-1">
      <div className=" space-y-2">
        <Skeleton className="mt-1 text-lg font-bold h-8"></Skeleton>
        <Skeleton className="text-neutral-500 pt-2 h-14"></Skeleton>
      </div>
    </div>
    <Skeleton className=" w-28 h-20 rounded-sm" />
  </div>
);
