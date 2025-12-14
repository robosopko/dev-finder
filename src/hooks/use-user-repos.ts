"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { fetchUserRepos } from "@/lib/github-api";

export const useUserRepos = () => {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["user-repos", session?.accessToken],
    queryFn: () => {
      if (!session?.accessToken) {
        throw new Error("No access token available");
      }
      return fetchUserRepos(session.accessToken, {
        sort: "updated",
        per_page: 10,
      });
    },
    enabled: !!session?.accessToken,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
