# Implementation Plan: Part 1 - Public Search

> **Status:** Planning Phase
> **Last Updated:** December 14, 2025
> **Figma Reference:** https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-69&p=f&m=dev

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [GitHub API Data Structure](#github-api-data-structure)
3. [TypeScript Types](#typescript-types)
4. [File Structure](#file-structure)
5. [Implementation Steps](#implementation-steps)
6. [Component Specifications](#component-specifications)
7. [Styling Guidelines](#styling-guidelines)
8. [Error Handling](#error-handling)
9. [Testing Checklist](#testing-checklist)

---

## Overview

Implement a public GitHub user search feature that allows users to:

- Search for any GitHub user by username
- Display user profile information in a card layout
- Handle loading states with skeleton UI
- Handle error states (user not found, API errors)
- Support light/dark mode themes
- Responsive design (mobile + desktop)

### Core Features

| Feature               | Description                                  |
| --------------------- | -------------------------------------------- |
| **Search Input**      | Uses existing `SearchBar` component          |
| **User Profile Card** | Displays avatar, name, bio, stats, and links |
| **Loading State**     | Skeleton placeholders while fetching         |
| **Error State**       | "No results" message for invalid usernames   |
| **Theme Support**     | Light/Dark mode via next-themes              |
| **Responsive**        | Mobile-first, adapts to desktop              |

---

## GitHub API Data Structure

### API Endpoint

```
GET https://api.github.com/users/{username}
```

### Sample Response (from `https://api.github.com/users/tailwindlabs`)

```json
{
  "login": "tailwindlabs",
  "id": 67109815,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjY3MTA5ODE1",
  "avatar_url": "https://avatars.githubusercontent.com/u/67109815?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tailwindlabs",
  "html_url": "https://github.com/tailwindlabs",
  "followers_url": "https://api.github.com/users/tailwindlabs/followers",
  "following_url": "https://api.github.com/users/tailwindlabs/following{/other_user}",
  "gists_url": "https://api.github.com/users/tailwindlabs/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tailwindlabs/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tailwindlabs/subscriptions",
  "organizations_url": "https://api.github.com/users/tailwindlabs/orgs",
  "repos_url": "https://api.github.com/users/tailwindlabs/repos",
  "events_url": "https://api.github.com/users/tailwindlabs/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tailwindlabs/received_events",
  "type": "Organization",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Tailwind Labs",
  "company": null,
  "blog": "tailwindcss.com",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Creators of Tailwind CSS and Headless UI, and authors of Refactoring UI.",
  "twitter_username": "tailwindcss",
  "public_repos": 27,
  "public_gists": 0,
  "followers": 8569,
  "following": 0,
  "created_at": "2020-06-18T14:01:57Z",
  "updated_at": "2025-07-09T18:37:57Z"
}
```

### Fields Used in UI

| API Field          | UI Element      | Notes                                      |
| ------------------ | --------------- | ------------------------------------------ |
| `avatar_url`       | Profile picture | Fallback to `avatar.png` if missing        |
| `login`            | Username        | Displayed with @ prefix                    |
| `name`             | Display name    | Falls back to login if null                |
| `created_at`       | Join date       | Format: "Joined DD Mon YYYY"               |
| `bio`              | Biography       | "This profile has no bio" if null          |
| `public_repos`     | Repos count     | Stats section                              |
| `followers`        | Followers count | Stats section                              |
| `following`        | Following count | Stats section                              |
| `location`         | Location        | With LocationIcon, "Not Available" if null |
| `twitter_username` | Twitter link    | With TwitterIcon, "Not Available" if null  |
| `blog`             | Website URL     | With LinkIcon, "Not Available" if null     |
| `company`          | Company name    | With CompanyIcon, "Not Available" if null  |

---

## TypeScript Types

### File: `src/types/github.ts`

```typescript
/**
 * GitHub User response from the REST API
 * @see https://docs.github.com/en/rest/users/users#get-a-user
 */
export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User" | "Organization";
  user_view_type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

/**
 * GitHub API error response
 */
export interface GitHubError {
  message: string;
  documentation_url?: string;
}
```

---

## File Structure

### New Files to Create

```
src/
├── types/
│   └── github.ts                    # GitHub API types
├── lib/
│   └── github-api.ts                # GitHub API fetch functions
├── hooks/
│   └── use-github-user.ts           # React Query hook for user data
├── components/
│   ├── providers/
│   │   └── query-provider.tsx       # React Query provider
│   ├── search/
│   │   ├── search-form.tsx          # Search form wrapper component
│   │   └── user-profile-card.tsx    # User profile card component
│   └── layout/
│       └── header.tsx               # App header with logo and theme toggle
└── app/
    └── page.tsx                     # Update main page
```

### Existing Files to Modify

| File                 | Changes                         |
| -------------------- | ------------------------------- |
| `src/app/layout.tsx` | Wrap with QueryClientProvider   |
| `src/app/page.tsx`   | Complete redesign for search UI |

---

## Implementation Steps

### Phase 1: Setup & Infrastructure

#### Step 1.1: Create React Query Provider

**File:** `src/components/providers/query-provider.tsx`

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        gcTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
```

#### Step 1.2: Update Layout with Query Provider

**File:** `src/app/layout.tsx`

- Import `QueryProvider`
- Wrap children with `QueryProvider` inside `ThemeProvider`

#### Step 1.3: Create GitHub Types

**File:** `src/types/github.ts`

- Define `GitHubUser` interface
- Define `GitHubError` interface

---

### Phase 2: Data Layer

#### Step 2.1: Create GitHub API Functions

**File:** `src/lib/github-api.ts`

```typescript
import type { GitHubUser, GitHubError } from "@/types/github";

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Fetch a GitHub user by username
 * @throws Error with message if user not found or API error
 */
export const fetchGitHubUser = async (
  username: string
): Promise<GitHubUser> => {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      // Optional: Add token for higher rate limits
      // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const error: GitHubError = await response.json();
    if (response.status === 404) {
      throw new Error("No results");
    }
    throw new Error(error.message || "Failed to fetch user");
  }

  return response.json();
};
```

#### Step 2.2: Create React Query Hook

**File:** `src/hooks/use-github-user.ts`

```typescript
import { useQuery } from "@tanstack/react-query";
import { fetchGitHubUser } from "@/lib/github-api";
import type { GitHubUser } from "@/types/github";

export const useGitHubUser = (username: string | null) => {
  return useQuery<GitHubUser, Error>({
    queryKey: ["github-user", username],
    queryFn: () => fetchGitHubUser(username!),
    enabled: !!username && username.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: false, // Don't retry on 404
  });
};
```

---

### Phase 3: UI Components

#### Step 3.1: Create Header Component

**File:** `src/components/layout/header.tsx`

Features:

- Logo on the left (use `Logo` from assets)
- Theme toggle on the right (use existing `ModeToggle`)
- Responsive layout

#### Step 3.2: Create User Profile Card Component

**File:** `src/components/search/user-profile-card.tsx`

This is the main display component. Structure:

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────┐  Name                                         │
│  │          │  @username        Joined DD Mon YYYY          │
│  │  Avatar  │                                               │
│  │          │                                               │
│  └──────────┘                                               │
│                                                             │
│  Bio text goes here...                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Repos        Followers        Following            │   │
│  │  XX           XX               XX                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  📍 Location          🔗 Website                           │
│  🐦 Twitter           🏢 Company                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Props:

```typescript
interface UserProfileCardProps {
  user: GitHubUser;
  className?: string;
}
```

Sub-components to create within the file:

- `UserAvatar` - Avatar with fallback
- `UserStats` - Stats bar (repos, followers, following)
- `UserLinks` - Grid of social/contact links
- `UserProfileCardSkeleton` - Loading skeleton version

#### Step 3.3: Create Search Form Component

**File:** `src/components/search/search-form.tsx`

Features:

- Uses existing `SearchBar` component
- Manages search state
- Handles form submission
- Shows loading state
- Shows error state from API

Props:

```typescript
interface SearchFormProps {
  onSearch: (username: string) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
}
```

---

### Phase 4: Page Integration

#### Step 4.1: Update Main Page

**File:** `src/app/page.tsx`

Structure:

```typescript
"use client";

const Home = () => {
  const [searchedUsername, setSearchedUsername] = useState<string | null>(null);
  const { data: user, isLoading, error } = useGitHubUser(searchedUsername);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[730px] px-6 py-8">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchForm
          onSearch={setSearchedUsername}
          isLoading={isLoading}
          error={error?.message}
        />

        {/* Results */}
        {isLoading && <UserProfileCardSkeleton />}
        {user && <UserProfileCard user={user} />}
        {!user && !isLoading && !error && (
          <WelcomeMessage /> // Optional: Initial state message
        )}
      </div>
    </main>
  );
};
```

---

## Component Specifications

### UserProfileCard Design Specs

Based on Figma design and existing Tailwind theme:

| Element            | Light Mode                        | Dark Mode                   | Typography                     |
| ------------------ | --------------------------------- | --------------------------- | ------------------------------ |
| Card Background    | `bg-card` (#FFFFFF)               | `bg-card` (#1E2A47)         | -                              |
| Card Border Radius | `rounded-[15px]`                  | Same                        | -                              |
| Card Shadow        | `shadow-lg`                       | Same                        | -                              |
| Card Padding       | `p-6` (mobile), `p-12` (desktop)  | Same                        | -                              |
| Name               | `text-foreground` (#2B3442)       | `text-foreground` (#FFFFFF) | `text-preset-2` (22px Bold)    |
| Username           | `text-primary` (#0079FF)          | Same                        | `text-preset-4` (16px Regular) |
| Join Date          | `text-muted-foreground` (#697C9A) | Same                        | `text-preset-6` (15px Regular) |
| Bio                | `text-muted-foreground` (#4B6A9B) | Same                        | `text-preset-6` (15px Regular) |
| Stats Background   | `bg-background` (#F6F8FF)         | `bg-background` (#141D2F)   | -                              |
| Stats Label        | `text-muted-foreground`           | Same                        | `text-preset-7` (13px Regular) |
| Stats Value        | `text-foreground`                 | Same                        | `text-preset-2` (22px Bold)    |
| Link Text          | `text-muted-foreground`           | Same                        | `text-preset-6` (15px Regular) |
| Disabled Link      | `opacity-50`                      | Same                        | -                              |

### Avatar Specifications

| Property       | Value                           |
| -------------- | ------------------------------- |
| Size (Mobile)  | 70px                            |
| Size (Desktop) | 117px                           |
| Border Radius  | `rounded-full`                  |
| Fallback Image | `/src/assets/images/avatar.png` |

### Icons to Use

From `src/assets/icons/index.ts`:

- `LocationIcon` - User location
- `TwitterIcon` - Twitter/X link
- `LinkIcon` - Website/blog URL
- `CompanyIcon` - Company/organization

### SearchBar Integration

The existing `SearchBar` component already supports:

- `error` prop for displaying error messages
- `isLoading` prop for loading state
- `onSubmit` callback for form submission
- `onValueChange` callback for controlled input

---

## Styling Guidelines

### Typography Presets (from globals.css)

Use the custom text preset classes:

| Class           | Size | Weight  | Line Height | Usage                   |
| --------------- | ---- | ------- | ----------- | ----------------------- |
| `text-preset-1` | 26px | Bold    | 1.5         | Logo                    |
| `text-preset-2` | 22px | Bold    | 1.5         | User name, Stats values |
| `text-preset-3` | 18px | Regular | 1.4         | Desktop body            |
| `text-preset-4` | 16px | Regular | 1.5         | Standard body           |
| `text-preset-5` | 16px | Bold    | 1.5         | Bold labels             |
| `text-preset-6` | 15px | Regular | 1.5         | Small text, Bio         |
| `text-preset-7` | 13px | Regular | 1.5         | Caption, Stats labels   |
| `text-preset-8` | 13px | Bold    | 1.5         | Uppercase labels        |

### Spacing Scale

Use design system spacing tokens:

- `spacing-100` = 8px
- `spacing-150` = 12px
- `spacing-200` = 16px
- `spacing-250` = 20px
- `spacing-300` = 24px
- `spacing-400` = 32px
- `spacing-500` = 40px

### Responsive Breakpoints

| Breakpoint | Width   | Layout Changes                                            |
| ---------- | ------- | --------------------------------------------------------- |
| Mobile     | < 768px | Single column, smaller avatar, compact spacing            |
| Desktop    | ≥ 768px | Two-column avatar + info, larger avatar, expanded spacing |

---

## Error Handling

### Error States

| Error Type           | Display                                     | Action                       |
| -------------------- | ------------------------------------------- | ---------------------------- |
| User Not Found (404) | "No results" in red                         | Show in SearchBar error slot |
| Network Error        | "Network error. Please try again."          | Show in SearchBar error slot |
| Rate Limited (403)   | "API rate limit exceeded. Try again later." | Show in SearchBar error slot |
| Invalid Username     | "Please enter a valid username"             | Client-side validation       |

### Date Formatting

Create a utility function for consistent date formatting:

**File:** `src/lib/utils.ts` (add to existing)

```typescript
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
```

### URL Handling

Create a utility for formatting website URLs:

```typescript
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
```

---

## Testing Checklist

### Functional Tests

- [ ] Search for valid username → displays user profile
- [ ] Search for invalid username → shows "No results" error
- [ ] Empty search → shows validation error or disabled button
- [ ] Click Search button → triggers search
- [ ] Press Enter in input → triggers search
- [ ] Loading state shows skeleton
- [ ] User without avatar → shows fallback image
- [ ] User without bio → shows "This profile has no bio"
- [ ] User without location/twitter/blog/company → shows "Not Available"
- [ ] Twitter link → opens twitter.com/{username}
- [ ] Blog link → opens URL in new tab
- [ ] Company with @ prefix → links to GitHub org

### Visual Tests

- [ ] Light mode styling matches Figma
- [ ] Dark mode styling matches Figma
- [ ] Mobile layout is correct
- [ ] Desktop layout is correct
- [ ] Avatar displays correctly (117px desktop, 70px mobile)
- [ ] Stats bar has correct background color
- [ ] Icons have correct colors
- [ ] Disabled links have reduced opacity

### Accessibility Tests

- [ ] All interactive elements are keyboard accessible
- [ ] Form has proper labels
- [ ] Loading state is announced to screen readers
- [ ] Error messages are announced to screen readers
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have alt text

### Edge Cases

- [ ] Long username handling
- [ ] Long bio text (should wrap properly)
- [ ] Very long company/location names
- [ ] URLs with special characters
- [ ] Organization accounts (type: "Organization")
- [ ] Users with 0 followers/repos
- [ ] API rate limiting handling

---

## Implementation Order Summary

1. **Phase 1: Infrastructure**

   - [ ] Create `QueryProvider` component
   - [ ] Update `layout.tsx` with QueryProvider
   - [ ] Create GitHub types

2. **Phase 2: Data Layer**

   - [ ] Create `github-api.ts` with fetch function
   - [ ] Create `use-github-user.ts` hook
   - [ ] Add utility functions to `utils.ts`

3. **Phase 3: UI Components**

   - [ ] Create `Header` component
   - [ ] Create `UserProfileCard` component
   - [ ] Create `UserProfileCardSkeleton` component
   - [ ] Create `SearchForm` wrapper component

4. **Phase 4: Page Integration**

   - [ ] Redesign `page.tsx` with full search UI
   - [ ] Connect all components together
   - [ ] Test full flow

5. **Phase 5: Polish**
   - [ ] Fine-tune responsive design
   - [ ] Verify Figma design alignment
   - [ ] Add any missing hover/focus states
   - [ ] Test edge cases
   - [ ] Accessibility review

---

## Notes

### Rate Limiting

GitHub API has a rate limit of 60 requests/hour for unauthenticated requests. Consider:

- Adding caching via React Query (already configured with staleTime)
- Adding debouncing to search input
- Optionally using a GitHub token for 5000 requests/hour

### Static Export Consideration

The app uses `output: "export"` in next.config.ts for static hosting. This feature is fully client-side and works with static export since:

- All data fetching happens client-side via React Query
- No server components with data fetching
- No API routes needed (direct GitHub API calls)

### Design System Alignment

The existing Tailwind theme in `globals.css` is already configured with:

- DevFinder color palette
- Space Mono typography
- Custom spacing and radius tokens
- Light/Dark mode semantic colors

Use these existing tokens rather than hardcoded values for consistency.
