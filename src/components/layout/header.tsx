"use client";

import { useTheme } from "next-themes";

import { Logo, MoonIcon, SunIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

/**
 * Header component with DevFinder logo and theme toggle.
 * Based on Figma design specifications.
 */
export const Header = ({ className }: HeaderProps) => {
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

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-200 group cursor-pointer"
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
    </header>
  );
};

export default Header;
