"use client";

import Image from "next/image";

import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "@/assets/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, ensureProtocol, formatJoinDate } from "@/lib/utils";
import type { GitHubUser } from "@/types/github";

interface UserProfileCardProps {
  user: GitHubUser;
  className?: string;
}

interface UserLinkItemProps {
  icon: React.ReactNode;
  value: string | null;
  href?: string | null;
  className?: string;
}

/**
 * Individual link item in the user profile
 */
const UserLinkItem = ({ icon, value, href, className }: UserLinkItemProps) => {
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

/**
 * Stats section showing repos, followers, following
 */
const UserStats = ({
  repos,
  followers,
  following,
}: {
  repos: number;
  followers: number;
  following: number;
}) => {
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

/**
 * User Profile Card component
 * Displays GitHub user information in a card layout
 */
export const UserProfileCard = ({ user, className }: UserProfileCardProps) => {
  const twitterUrl = user.twitter_username
    ? `https://twitter.com/${user.twitter_username}`
    : null;

  const companyUrl = user.company?.startsWith("@")
    ? `https://github.com/${user.company.slice(1)}`
    : null;

  return (
    <div
      className={cn(
        "bg-card rounded-[15px] shadow-lg p-300 md:p-600",
        className
      )}
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Profile Header - Mobile */}
        <div className="flex items-start gap-200 mb-300">
          <div className="relative size-[70px] shrink-0">
            <Image
              src={user.avatar_url}
              alt={`${user.name || user.login}'s avatar`}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-preset-2 text-foreground truncate">
              {user.name || user.login}
            </h1>
            <p className="text-preset-4 text-primary dark:text-blue-300">
              @{user.login}
            </p>
            <p className="text-preset-6 text-muted-foreground dark:text-foreground mt-100">
              {formatJoinDate(user.created_at)}
            </p>
          </div>
        </div>

        {/* Bio - Mobile */}
        <p
          className={cn(
            "text-preset-6 text-muted-foreground dark:text-foreground dark:opacity-70 mb-300",
            !user.bio && "opacity-75 dark:opacity-70"
          )}
        >
          {user.bio || "This profile has no bio"}
        </p>

        {/* Stats - Mobile */}
        <div className="mb-300">
          <UserStats
            repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />
        </div>

        {/* Links - Mobile (single column) */}
        <div className="flex flex-col gap-200">
          <UserLinkItem
            icon={<LocationIcon className="size-5" />}
            value={user.location}
          />
          <UserLinkItem
            icon={<TwitterIcon className="size-5" />}
            value={user.twitter_username}
            href={twitterUrl}
          />
          <UserLinkItem
            icon={<LinkIcon className="size-5" />}
            value={user.blog}
            href={user.blog}
          />
          <UserLinkItem
            icon={<CompanyIcon className="size-5" />}
            value={user.company}
            href={companyUrl}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-400">
        {/* Avatar */}
        <div className="relative size-[117px] shrink-0">
          <Image
            src={user.avatar_url}
            alt={`${user.name || user.login}'s avatar`}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col gap-300 flex-1 min-w-0">
          {/* Header Row */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-025 min-w-0">
              <h1 className="text-preset-1 text-foreground truncate">
                {user.name || user.login}
              </h1>
              <p className="text-preset-4 text-primary dark:text-blue-300">
                @{user.login}
              </p>
            </div>
            <p className="text-preset-6 text-muted-foreground dark:text-foreground whitespace-nowrap">
              {formatJoinDate(user.created_at)}
            </p>
          </div>

          {/* Bio */}
          <p
            className={cn(
              "text-preset-6 text-muted-foreground dark:text-foreground dark:opacity-70",
              !user.bio && "opacity-75 dark:opacity-70"
            )}
          >
            {user.bio || "This profile has no bio"}
          </p>

          {/* Stats */}
          <UserStats
            repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />

          {/* Links - 2x2 grid */}
          <div className="grid grid-cols-2 gap-x-200 gap-y-200">
            <UserLinkItem
              icon={<LocationIcon className="size-5" />}
              value={user.location}
            />
            <UserLinkItem
              icon={<TwitterIcon className="size-5" />}
              value={user.twitter_username}
              href={twitterUrl}
            />
            <UserLinkItem
              icon={<LinkIcon className="size-5" />}
              value={user.blog}
              href={user.blog}
            />
            <UserLinkItem
              icon={<CompanyIcon className="size-5" />}
              value={user.company}
              href={companyUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton loading state for UserProfileCard
 */
export const UserProfileCardSkeleton = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-card rounded-[15px] shadow-lg p-300 md:p-600",
        className
      )}
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-start gap-200 mb-300">
          <Skeleton className="size-[70px] rounded-full" />
          <div className="flex flex-col gap-100 flex-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28 mt-100" />
          </div>
        </div>
        <Skeleton className="h-16 w-full mb-300" />
        <Skeleton className="h-20 w-full rounded-[10px] mb-300" />
        <div className="flex flex-col gap-200">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-400">
        <Skeleton className="size-[117px] rounded-full shrink-0" />
        <div className="flex flex-col gap-300 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-100">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-5 w-28" />
            </div>
            <Skeleton className="h-5 w-36" />
          </div>
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-20 w-full rounded-[10px]" />
          <div className="grid grid-cols-2 gap-x-200 gap-y-200">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Error state for UserProfileCard - No results found
 */
export const UserProfileCardError = ({ className }: { className?: string }) => {
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

export default UserProfileCard;
