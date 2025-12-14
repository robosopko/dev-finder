interface UserStatsProps {
  repos: number;
  followers: number;
  following: number;
}

/**
 * Stats section showing repos, followers, following
 */
export const UserStats = ({ repos, followers, following }: UserStatsProps) => {
  return (
    <div className="flex items-center justify-between bg-background rounded-[10px] px-400 py-200 md:px-400">
      <div className="flex flex-col gap-050 flex-1 text-center md:text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Repos
        </span>
        <span className="text-preset-2 text-foreground">{repos}</span>
      </div>
      <div className="flex flex-col gap-050 flex-1 text-center md:text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Followers
        </span>
        <span className="text-preset-2 text-foreground">{followers}</span>
      </div>
      <div className="flex flex-col gap-050 flex-1 text-center md:text-left">
        <span className="text-preset-7 text-muted-foreground dark:text-foreground">
          Following
        </span>
        <span className="text-preset-2 text-foreground">{following}</span>
      </div>
    </div>
  );
};
