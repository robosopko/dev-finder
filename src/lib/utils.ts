import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to "Joined DD Mon YYYY" format
 */
export const formatJoinDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `Joined ${day} ${month} ${year}`;
};

/**
 * Format a URL for display (remove protocol, trailing slash)
 */
export const formatUrl = (url: string | null): string | null => {
  if (!url) return null;
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

/**
 * Ensure URL has a protocol for linking
 */
export const ensureProtocol = (url: string): string => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};
