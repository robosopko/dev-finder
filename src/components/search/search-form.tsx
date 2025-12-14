"use client";

import { SearchBar } from "@/components/ui/search-bar";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  onSearch: (username: string) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Search form wrapper component for GitHub user search.
 * Wraps the existing SearchBar with search-specific logic.
 */
export const SearchForm = ({
  onSearch,
  isLoading,
  error,
  className,
}: SearchFormProps) => {
  const handleSubmit = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      onSearch(trimmedValue);
    }
  };

  return (
    <SearchBar
      className={cn(className)}
      placeholder="Search GitHub username…"
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchForm;
