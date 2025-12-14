import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ReposSkeleton = () => {
  return (
    <div className="space-y-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2 gap-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap items-center gap-300">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-32 ml-auto" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
