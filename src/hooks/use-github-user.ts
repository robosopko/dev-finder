import { fetchGitHubUser } from "@/lib/github-api";
import type { GitHubUser } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGitHubUser = (username: string | null) => {
  return useQuery<GitHubUser, Error>({
    queryKey: ["github-user", username],
    queryFn: () => fetchGitHubUser(username!),
    enabled: !!username && username.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: false, // Don't retry on 404
  });
};
