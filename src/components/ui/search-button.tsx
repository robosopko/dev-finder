import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface SearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

/**
 * SearchButton component based on Figma design.
 *
 * States:
 * - Default: Blue background (#0079ff), white text
 * - Hover: Lighter blue background (#60abff)
 * - Focus: Blue background with white ring outline
 *
 * Typography: Space Mono Bold, 16px, line-height 1.5
 * Border radius: 10px
 * Padding: 12px vertical, 24px horizontal
 */
const SearchButton = React.forwardRef<HTMLButtonElement, SearchButtonProps>(
  ({ className, children = "Search", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          // Reset base button styles
          "bg-blue-500 text-neutral-0",
          // Typography - Space Mono Bold 16px
          "font-mono font-bold text-base leading-normal",
          // Sizing & spacing
          "h-auto px-300 py-150",
          // Border radius
          "rounded-10",
          // Hover state - lighter blue
          "hover:bg-blue-300",
          // Focus state - reset shadcn defaults and apply Figma design
          // Blue ring around button with small offset
          "focus:outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          // Transition
          "transition-colors duration-200",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
SearchButton.displayName = "SearchButton";

export { SearchButton };
