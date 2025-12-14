import type { GitHubError, GitHubUser } from "@/types/github";

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Fetch a GitHub user by username
 * @throws Error with message if user not found or API error
 */
export const fetchGitHubUser = async (
  username: string
): Promise<GitHubUser> => {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    const error: GitHubError = await response.json();
    if (response.status === 404) {
      throw new Error("No results");
    }
    if (response.status === 403) {
      throw new Error("API rate limit exceeded. Try again later.");
    }
    throw new Error(error.message || "Failed to fetch user");
  }

  return response.json();
};
