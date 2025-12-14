import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface UserProfileCardSkeletonProps {
  className?: string;
}

/**
 * Skeleton loading state for UserProfileCard
 */
export const UserProfileCardSkeleton = ({
  className,
}: UserProfileCardSkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-[15px] shadow-lg p-300 md:p-600",
        className
      )}
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start gap-200 mb-300">
          <Skeleton className="size-[70px] rounded-full" />
          <div className="flex flex-col gap-100 flex-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28 mt-100" />
          </div>
        </div>
        <Skeleton className="h-16 w-full mb-300" />
        <Skeleton className="h-20 w-full rounded-[10px] mb-300" />
        <div className="flex flex-col gap-200">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-400">
        <Skeleton className="size-[117px] rounded-full shrink-0" />
        <div className="flex flex-col gap-300 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-100">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-5 w-28" />
            </div>
            <Skeleton className="h-5 w-36" />
          </div>
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-20 w-full rounded-[10px]" />
          <div className="grid grid-cols-2 gap-x-200 gap-y-200">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};
