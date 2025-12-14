import { cn, ensureProtocol } from "@/lib/utils";

interface UserLinkItemProps {
  icon: React.ReactNode;
  value: string | null;
  href?: string | null;
  className?: string;
}

/**
 * Individual link item in the user profile
 */
export const UserLinkItem = ({
  icon,
  value,
  href,
  className,
}: UserLinkItemProps) => {
  const isAvailable = value !== null && value.trim() !== "";
  const displayValue = isAvailable ? value : "Not Available";

  const content = (
    <div
      className={cn(
        "flex items-center gap-200",
        !isAvailable && "opacity-70",
        className
      )}
    >
      <span className="shrink-0 w-5 text-muted-foreground dark:text-foreground">
        {icon}
      </span>
      <span
        className={cn(
          "text-preset-6 text-muted-foreground dark:text-foreground truncate",
          isAvailable && href && "hover:underline"
        )}
      >
        {displayValue}
      </span>
    </div>
  );

  if (isAvailable && href) {
    return (
      <a
        href={ensureProtocol(href)}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  return content;
};
