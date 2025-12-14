"use client";

import { useState } from "react";

import { Header } from "@/components/layout/header";
import { SearchForm } from "@/components/search/search-form";
import {
  UserProfileCard,
  UserProfileCardSkeleton,
} from "@/components/search/user-profile-card";
import { useGitHubUser } from "@/hooks/use-github-user";

const Home = () => {
  const [searchedUsername, setSearchedUsername] = useState<string | null>(null);
  const {
    data: user,
    isLoading,
    error,
    isFetching,
  } = useGitHubUser(searchedUsername);

  const handleSearch = (username: string) => {
    setSearchedUsername(username);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[730px] px-200 md:px-300 py-400 md:py-600">
        {/* Header */}
        <Header className="mb-400 md:mb-400" />

        {/* Search Bar */}
        <SearchForm
          onSearch={handleSearch}
          isLoading={isLoading || isFetching}
          error={error?.message}
          className="mb-300"
        />

        {/* Results */}
        {(isLoading || isFetching) && <UserProfileCardSkeleton />}

        {user && !isLoading && !isFetching && <UserProfileCard user={user} />}
      </main>
    </div>
  );
};

export default Home;
