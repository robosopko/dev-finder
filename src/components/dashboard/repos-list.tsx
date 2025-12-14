"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useUserRepos } from "@/hooks/use-user-repos";
import { RepoCard } from "./repo-card";
import { ReposSkeleton } from "./repos-skeleton";

export const ReposList = () => {
  const { data: repos, isLoading, isError, error } = useUserRepos();

  if (isLoading) {
    return <ReposSkeleton />;
  }

  if (isError) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="py-400 text-center">
          <p className="text-destructive text-preset-4">
            {error instanceof Error
              ? error.message
              : "Failed to load repositories"}
          </p>
          <p className="text-muted-foreground text-preset-7 mt-100">
            Please try refreshing the page or signing in again.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <Card>
        <CardContent className="py-400 text-center">
          <p className="text-muted-foreground text-preset-4">
            No repositories found.
          </p>
          <p className="text-muted-foreground text-preset-7 mt-100">
            Create a repository on GitHub to see it here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-300">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
