"use client";

import { SearchIcon } from "@/assets/icons";
import { SearchButton } from "@/components/ui/search-button";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onSubmit"> {
  /** Error message to display (e.g., "No results") */
  error?: string;
  /** Whether the search bar is in a loading state */
  isLoading?: boolean;
  /** Callback when the search form is submitted */
  onSubmit?: (value: string) => void;
  /** Callback when the input value changes */
  onValueChange?: (value: string) => void;
}

/**
 * SearchBar component based on Figma design.
 *
 * States:
 * - Default: Blue search icon, placeholder text in neutral-500, white/card background
 * - Hover: Search button changes to lighter blue (handled by SearchButton)
 * - Active: Input has text in neutral-700 with cursor
 * - Error: Input has text + error message in red
 * - Focus: Focus ring around the container
 *
 * Structure:
 * - Container: card background, rounded-lg (15px), shadow, flex layout
 * - Search icon: 24px, blue (primary)
 * - Input: Space Mono Regular 18px, flexible width
 * - Error text: Space Mono Bold 16px, red (destructive)
 * - Search button: Uses existing SearchButton component
 */
const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      placeholder = "Search GitHub username…",
      error,
      isLoading,
      disabled,
      onSubmit,
      onValueChange,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue?.toString() ?? ""
    );
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value.toString() : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(e);
      onValueChange?.(newValue);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(inputValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit?.(inputValue);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        className={cn(
          // Layout
          "flex items-center gap-200",
          // Background & sizing
          "bg-card w-full",
          // Padding
          "py-100 pl-200 pr-100",
          // Border radius (15px as per Figma container)
          "rounded-[15px]",
          // Shadow
          "shadow-lg",
          // Focus-within state - show ring when input is focused
          // Dark mode uses light blue (blue-300) for better visibility
          "focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-blue-300 focus-within:ring-offset-2 focus-within:ring-offset-background",
          // Transition
          "transition-shadow duration-200",
          // Disabled state
          disabled && "opacity-50 pointer-events-none",
          className
        )}
      >
        {/* Search Icon */}
        <SearchIcon
          className="size-6 shrink-0 text-primary dark:text-blue-300"
          aria-hidden="true"
        />

        {/* Input Container */}
        <div className="flex flex-1 items-center gap-250">
          {/* Text Input */}
          <input
            ref={ref}
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled || isLoading}
            className={cn(
              // Reset browser styles
              "bg-transparent border-none outline-none",
              // Typography - Space Mono Regular 18px (text-preset-3)
              "font-mono text-preset-3",
              // Text colors based on state
              // Placeholder: neutral-500 (light), white with 70% opacity (dark)
              "placeholder:text-neutral-500 dark:placeholder:text-white/70",
              // Value: neutral-700 (light), white (dark)
              "text-neutral-700 dark:text-white",
              // Sizing
              "flex-1 min-w-0 w-full",
              // Caret color - light blue in dark mode
              "caret-primary dark:caret-blue-300"
            )}
            aria-invalid={!!error}
            aria-describedby={error ? "search-error" : undefined}
            {...props}
          />

          {/* Error Message */}
          {error && (
            <span
              id="search-error"
              className={cn(
                // Typography - Space Mono Bold 16px (text-preset-5)
                "font-mono font-bold text-preset-5",
                // Color
                "text-red-500",
                // No wrap
                "whitespace-nowrap shrink-0"
              )}
              role="alert"
            >
              {error}
            </span>
          )}
        </div>

        {/* Search Button */}
        <SearchButton type="submit" disabled={disabled || isLoading}>
          {isLoading ? "..." : "Search"}
        </SearchButton>
      </form>
    );
  }
);

SearchBar.displayName = "SearchBar";

export { SearchBar };
