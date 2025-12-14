import { cn } from "@/lib/utils";

interface UserProfileCardErrorProps {
  className?: string;
}

/**
 * Error state for UserProfileCard - No results found
 */
export const UserProfileCardError = ({
  className,
}: UserProfileCardErrorProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-[15px] shadow-lg p-600 text-center",
        className
      )}
    >
      <h2 className="text-preset-2 text-neutral-700 dark:text-foreground mb-200">
        No results found!
      </h2>
      <p className="text-preset-6 text-neutral-300 dark:text-neutral-200">
        We couldn&apos;t find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </div>
  );
};
