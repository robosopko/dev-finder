"use client";

import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";

import { Logo, MoonIcon, SunIcon } from "@/assets/icons";
import { SignInButton, UserMenu } from "@/components/auth";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

/**
 * Header component with DevFinder logo, auth state, and theme toggle.
 * Based on Figma design specifications.
 */
export const Header = ({ className }: HeaderProps) => {
  const { data: session, status } = useSession();
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <header
      className={cn("flex items-center justify-between w-full", className)}
    >
      {/* Logo */}
      <Logo className="h-[26px] w-auto text-foreground" />

      {/* Right Side: Auth + Theme Toggle */}
      <div className="flex items-center gap-300 md:gap-400">
        {/* Auth State */}
        {status === "loading" ? (
          <div className="size-8 md:size-9 rounded-full bg-muted animate-pulse" />
        ) : session ? (
          <UserMenu />
        ) : (
          <SignInButton />
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-200 group cursor-pointer rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-[3px] focus-visible:ring-offset-background"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="text-preset-8 text-muted-foreground group-hover:text-foreground transition-colors">
            {isDark ? "LIGHT" : "DARK"}
          </span>
          {isDark ? (
            <SunIcon className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          ) : (
            <MoonIcon className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
