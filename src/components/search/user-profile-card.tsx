"use client";

import Image from "next/image";

import {
  CompanyIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon,
} from "@/assets/icons";
import { cn, formatJoinDate } from "@/lib/utils";
import type { GitHubUser } from "@/types/github";

import { UserLinkItem } from "./user-link-item";
import { UserStats } from "./user-stats";

interface UserProfileCardProps {
  user: GitHubUser;
  className?: string;
}

/**
 * User Profile Card component
 * Displays GitHub user information in a card layout
 * Uses responsive Tailwind classes for mobile/desktop layouts
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
      {/* Main container: column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row md:gap-400">
        {/* Profile Header Section */}
        <div className="flex items-start gap-200 md:gap-400 mb-300 md:mb-0">
          {/* Avatar - 70px mobile, 117px desktop */}
          <div className="relative shrink-0 size-[70px] md:size-[117px]">
            <Image
              src={user.avatar_url}
              alt={`${user.name || user.login}'s avatar`}
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Mobile: Name, username, date inline */}
          {/* Desktop: Hidden (rendered separately for layout) */}
          <div className="flex flex-col min-w-0 md:hidden">
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

        {/* Content Section */}
        <div className="flex flex-col gap-300 flex-1 min-w-0">
          {/* Desktop: Name row with date on right */}
          <div className="hidden md:flex items-start justify-between">
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

          {/* Links: single column mobile, 2x2 grid desktop */}
          <div className="flex flex-col gap-200 md:grid md:grid-cols-2 md:gap-x-200 md:gap-y-200">
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

export default UserProfileCard;
