interface UserStatsProps {
  repos: number;
  followers: number;
  following: number;
}

/**
 * Stats section showing repos, followers, following
 * Mobile: vertical column layout
 * Desktop: horizontal row layout
 */
export const UserStats = ({ repos, followers, following }: UserStatsProps) => {
  return (
    <div className="flex flex-col gap-200 md:flex-row md:items-center md:justify-between bg-background rounded-[10px] px-250 py-200 md:px-400">
      <div className="flex flex-col gap-050 md:flex-1 text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Repos
        </span>
        <span className="text-preset-2 text-foreground">{repos}</span>
      </div>
      <div className="flex flex-col gap-050 md:flex-1 text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Followers
        </span>
        <span className="text-preset-2 text-foreground">{followers}</span>
      </div>
      <div className="flex flex-col gap-050 md:flex-1 text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Following
        </span>
        <span className="text-preset-2 text-foreground">{following}</span>
      </div>
    </div>
  );
};
