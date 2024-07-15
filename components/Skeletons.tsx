import { Skeleton } from "@/components/ui/skeleton";

export const HomeSkeleton = () => <div>
  <ResultsSkeleton />
</div>;

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
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
