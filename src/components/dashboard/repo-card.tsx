import { formatDistanceToNow } from "date-fns";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import type { GitHubRepository } from "@/types/github";

interface RepoCardProps {
  repo: GitHubRepository;
}

/**
 * Language color mapping for popular languages
 */
const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
  "C#": "bg-purple-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  Ruby: "bg-red-500",
  PHP: "bg-indigo-400",
  Swift: "bg-orange-400",
  Kotlin: "bg-purple-400",
  Dart: "bg-teal-500",
  HTML: "bg-orange-600",
  CSS: "bg-blue-400",
  Shell: "bg-green-600",
  Vue: "bg-emerald-500",
};

export const RepoCard = ({ repo }: RepoCardProps) => {
  const updatedAt = formatDistanceToNow(new Date(repo.updated_at), {
    addSuffix: true,
  });

  const languageColor = repo.language
    ? languageColors[repo.language] || "bg-primary"
    : null;

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="pb-2 gap-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-preset-4 md:text-preset-3 font-bold text-primary hover:underline break-all"
          >
            {repo.name}
          </a>
          <Badge
            variant={repo.private ? "secondary" : "outline"}
            className="w-fit shrink-0"
          >
            {repo.private ? "Private" : "Public"}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 text-preset-7 md:text-preset-6">
          {repo.description || "No description provided"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-x-300 gap-y-100 text-preset-7 text-muted-foreground">
          {repo.language && (
            <div className="flex items-center gap-100">
              <span
                className={`size-3 rounded-full ${languageColor}`}
                aria-hidden="true"
              />
              <span>{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-100">
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            <span>{repo.stargazers_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-100">
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            <span>{repo.forks_count.toLocaleString()}</span>
          </div>
          <span className="ml-auto text-preset-7">Updated {updatedAt}</span>
        </div>
      </CardContent>
    </Card>
  );
};
