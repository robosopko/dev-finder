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
 * Profile header component (shared between mobile/desktop)
 */
const ProfileHeader = ({
  user,
  avatarSize,
  nameClass,
  layout,
}: {
  user: GitHubUser;
  avatarSize: number;
  nameClass: string;
  layout: "mobile" | "desktop";
}) => {
  return (
    <>
      <div className={`relative shrink-0 size-[${avatarSize}px]`}>
        <Image
          src={user.avatar_url}
          alt={`${user.name || user.login}'s avatar`}
          fill
          className="rounded-full object-cover"
        />
      </div>
      {layout === "mobile" ? (
        <div className="flex flex-col min-w-0">
          <h1 className={cn(nameClass, "text-foreground truncate")}>
            {user.name || user.login}
          </h1>
          <p className="text-preset-4 text-primary dark:text-blue-300">
            @{user.login}
          </p>
          <p className="text-preset-6 text-muted-foreground dark:text-foreground mt-100">
            {formatJoinDate(user.created_at)}
          </p>
        </div>
      ) : null}
    </>
  );
};

/**
 * User links component (shared between mobile/desktop)
 */
const UserLinks = ({ user }: { user: GitHubUser }) => {
  const twitterUrl = user.twitter_username
    ? `https://twitter.com/${user.twitter_username}`
    : null;

  const companyUrl = user.company?.startsWith("@")
    ? `https://github.com/${user.company.slice(1)}`
    : null;

  return (
    <>
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
    </>
  );
};

/**
 * User Profile Card component
 * Displays GitHub user information in a card layout
 */
export const UserProfileCard = ({ user, className }: UserProfileCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-[15px] shadow-lg p-300 md:p-600",
        className
      )}
    >
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Profile Header */}
        <div className="flex items-start gap-200 mb-300">
          <ProfileHeader
            user={user}
            avatarSize={70}
            nameClass="text-preset-2"
            layout="mobile"
          />
        </div>

        {/* Bio */}
        <p
          className={cn(
            "text-preset-6 text-muted-foreground dark:text-foreground dark:opacity-70 mb-300",
            !user.bio && "opacity-75 dark:opacity-70"
          )}
        >
          {user.bio || "This profile has no bio"}
        </p>

        {/* Stats */}
        <div className="mb-300">
          <UserStats
            repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />
        </div>

        {/* Links - single column */}
        <div className="flex flex-col gap-200">
          <UserLinks user={user} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-400">
        {/* Avatar */}
        <ProfileHeader
          user={user}
          avatarSize={117}
          nameClass="text-preset-1"
          layout="desktop"
        />

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
            <UserLinks user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
