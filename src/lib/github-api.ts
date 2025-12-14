import type { GitHubError, GitHubRepository, GitHubUser } from "@/types/github";

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

/**
 * Fetch authenticated user's repositories
 * @param accessToken - GitHub OAuth access token from session
 * @param options - Pagination and sorting options
 */
export const fetchUserRepos = async (
  accessToken: string,
  options: {
    sort?: "created" | "updated" | "pushed" | "full_name";
    direction?: "asc" | "desc";
    per_page?: number;
    page?: number;
  } = {}
): Promise<GitHubRepository[]> => {
  const {
    sort = "updated",
    direction = "desc",
    per_page = 10,
    page = 1,
  } = options;

  const params = new URLSearchParams({
    sort,
    direction,
    per_page: String(per_page),
    page: String(page),
  });

  const response = await fetch(`${GITHUB_API_BASE}/user/repos?${params}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Authentication expired. Please sign in again.");
    }
    if (response.status === 403) {
      throw new Error("API rate limit exceeded. Try again later.");
    }
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
};
