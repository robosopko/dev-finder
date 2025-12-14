# Implementation Plan: GitHub OAuth Dashboard (Part 2)

This document outlines the detailed implementation plan for adding GitHub OAuth authentication and a protected dashboard to the DevFinder application.

## 📋 Overview

We will implement:

1. **GitHub OAuth Authentication** using NextAuth.js (Auth.js v5)
2. **Session Management** across client and server components
3. **Protected Dashboard Route** at `/dashboard`
4. **User Repositories List** with TanStack Query

---

## 🔧 Prerequisites

The following are already configured:

- ✅ Next.js 15 with App Router
- ✅ TanStack Query provider set up
- ✅ Theme provider (next-themes) configured
- ✅ GitHub OAuth App created (credentials in `.env.local`)
- ✅ Basic project structure in place

### Required Environment Variables

```bash
# Already in .env.local
AUTH_SECRET="your-generated-secret"
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"
```

---

## 📁 Files to Create

| File Path                                       | Purpose                                        |
| ----------------------------------------------- | ---------------------------------------------- |
| `src/auth.ts`                                   | NextAuth.js configuration with GitHub provider |
| `src/app/api/auth/[...nextauth]/route.ts`       | Auth.js API route handlers                     |
| `src/middleware.ts`                             | Session middleware for protected routes        |
| `src/components/providers/session-provider.tsx` | Client-side SessionProvider wrapper            |
| `src/components/auth/sign-in-button.tsx`        | Sign in with GitHub button                     |
| `src/components/auth/sign-out-button.tsx`       | Sign out button                                |
| `src/components/auth/user-menu.tsx`             | Dropdown menu with user info and sign out      |
| `src/components/auth/index.ts`                  | Auth components barrel export                  |
| `src/app/dashboard/page.tsx`                    | Protected dashboard page                       |
| `src/components/dashboard/repos-list.tsx`       | Repository list component                      |
| `src/components/dashboard/repo-card.tsx`        | Individual repository card                     |
| `src/components/dashboard/repos-skeleton.tsx`   | Loading skeleton for repos                     |
| `src/components/dashboard/index.ts`             | Dashboard components barrel export             |
| `src/hooks/use-user-repos.ts`                   | TanStack Query hook for fetching repos         |
| `src/types/github.ts`                           | Update with Repository type                    |
| `src/lib/github-api.ts`                         | Update with authenticated API functions        |

---

## 📁 Files to Modify

| File Path                          | Changes                                        |
| ---------------------------------- | ---------------------------------------------- |
| `src/app/layout.tsx`               | Add SessionProvider wrapper                    |
| `src/components/layout/header.tsx` | Add auth state display and sign in/out buttons |
| `next.config.ts`                   | Remove `output: 'export'` for OAuth to work    |

---

## 🛠️ Detailed Implementation Steps

---

### Step 1: Configure NextAuth.js

#### 1.1 Create Auth Configuration (`src/auth.ts`)

```typescript
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // Store the access token in the session for API calls
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access token to session for client-side API calls
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/", // Redirect to home for sign in
  },
});
```

**Key Points:**

- Export `handlers`, `auth`, `signIn`, `signOut` for use across the app
- Use `callbacks` to pass GitHub access token to the session
- The access token is needed to fetch authenticated user's repositories

#### 1.2 Create API Route (`src/app/api/auth/[...nextauth]/route.ts`)

```typescript
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
```

**Purpose:** This catch-all route handles all Auth.js endpoints:

- `/api/auth/signin` - Sign in page
- `/api/auth/signout` - Sign out
- `/api/auth/callback/github` - OAuth callback
- `/api/auth/session` - Session endpoint

#### 1.3 Extend NextAuth Types (`src/types/next-auth.d.ts`)

```typescript
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
```

**Purpose:** Extend TypeScript types to include `accessToken` in session.

---

### Step 2: Add Session Provider

#### 2.1 Create Session Provider Wrapper (`src/components/providers/session-provider.tsx`)

```typescript
"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};
```

**Key Points:**

- Must be a client component (`"use client"`)
- Wraps the NextAuth SessionProvider

#### 2.2 Update Root Layout (`src/app/layout.tsx`)

Add SessionProvider to the provider hierarchy:

```typescript
import { SessionProvider } from "@/components/providers/session-provider";

// Wrap children with SessionProvider
<ThemeProvider>
  <SessionProvider>
    <QueryProvider>{children}</QueryProvider>
  </SessionProvider>
</ThemeProvider>;
```

**Provider Order:** ThemeProvider → SessionProvider → QueryProvider

---

### Step 3: Add Middleware for Protected Routes

#### 3.1 Create Middleware (`src/middleware.ts`)

```typescript
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  // Redirect unauthenticated users trying to access dashboard
  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  // Matcher for routes that should run middleware
  matcher: ["/dashboard/:path*"],
};
```

**Key Points:**

- Only apply middleware to `/dashboard` routes
- Redirect to home page if not authenticated
- Uses the `auth` wrapper from Auth.js

---

### Step 4: Create Auth Components

#### 4.1 Sign In Button (`src/components/auth/sign-in-button.tsx`)

**Client-side approach:**

```typescript
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button
      onClick={() => signIn("github", { redirectTo: "/dashboard" })}
      variant="default"
    >
      Sign in with GitHub
    </Button>
  );
};
```

**OR Server-side approach (with Server Action):**

```typescript
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit">Sign in with GitHub</Button>
    </form>
  );
};
```

**Recommendation:** Use client-side for better UX with loading states.

#### 4.2 Sign Out Button (`src/components/auth/sign-out-button.tsx`)

```typescript
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return (
    <Button onClick={() => signOut({ redirectTo: "/" })} variant="ghost">
      Sign out
    </Button>
  );
};
```

#### 4.3 User Menu Dropdown (`src/components/auth/user-menu.tsx`)

```typescript
"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserMenu = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const initials =
    session.user.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Avatar className="size-8">
            <AvatarImage
              src={session.user.image || ""}
              alt={session.user.name || ""}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span>{session.user.name}</span>
            <span className="text-muted-foreground text-sm font-normal">
              {session.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/dashboard">Dashboard</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ redirectTo: "/" })}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
```

---

### Step 5: Update Header Component

#### 5.1 Modify Header (`src/components/layout/header.tsx`)

Update the header to show:

- **Logo** (left)
- **Sign In button** OR **User Menu** (based on auth state)
- **Theme toggle** (right)

```typescript
"use client";

import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";

import { Logo, MoonIcon, SunIcon } from "@/assets/icons";
import { SignInButton } from "@/components/auth/sign-in-button";
import { UserMenu } from "@/components/auth/user-menu";
import { cn } from "@/lib/utils";

export const Header = ({ className }: { className?: string }) => {
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
      <Logo className="h-[26px] w-auto text-foreground" />

      <div className="flex items-center gap-300">
        {/* Auth State */}
        {status === "loading" ? (
          <div className="size-8 rounded-full bg-muted animate-pulse" />
        ) : session ? (
          <UserMenu />
        ) : (
          <SignInButton />
        )}

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
      </div>
    </header>
  );
};
```

---

### Step 6: Add GitHub Repository Types

#### 6.1 Update Types (`src/types/github.ts`)

Add the Repository interface:

```typescript
/**
 * GitHub Repository response from the REST API
 * @see https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
 */
export interface GitHubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  visibility: "public" | "private" | "internal";
  topics: string[];
}
```

---

### Step 7: Add Authenticated API Functions

#### 7.1 Update API Functions (`src/lib/github-api.ts`)

```typescript
import type { GitHubRepository } from "@/types/github";

/**
 * Fetch authenticated user's repositories
 * @param accessToken - GitHub OAuth access token from session
 * @param options - Pagination and sorting options
 */
export const fetchUserRepos = async (
  accessToken: string,
  options: {
    sort?: "created" | "updated" | "pushed" | "full_name";
    direction?: "asc" | "desc";
    per_page?: number;
    page?: number;
  } = {}
): Promise<GitHubRepository[]> => {
  const {
    sort = "updated",
    direction = "desc",
    per_page = 10,
    page = 1,
  } = options;

  const params = new URLSearchParams({
    sort,
    direction,
    per_page: String(per_page),
    page: String(page),
  });

  const response = await fetch(`https://api.github.com/user/repos?${params}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Authentication expired. Please sign in again.");
    }
    if (response.status === 403) {
      throw new Error("API rate limit exceeded. Try again later.");
    }
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
};
```

---

### Step 8: Create TanStack Query Hook for Repos

#### 8.1 Create Hook (`src/hooks/use-user-repos.ts`)

```typescript
"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchUserRepos } from "@/lib/github-api";

export const useUserRepos = () => {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ["user-repos", session?.accessToken],
    queryFn: () => {
      if (!session?.accessToken) {
        throw new Error("No access token available");
      }
      return fetchUserRepos(session.accessToken, {
        sort: "updated",
        per_page: 10,
      });
    },
    enabled: !!session?.accessToken,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

**Key Points:**

- Uses `useSession` to get the access token
- Only runs query when access token is available (`enabled: !!session?.accessToken`)
- Includes access token in queryKey for proper caching

---

### Step 9: Create Dashboard Components

#### 9.1 Repo Card (`src/components/dashboard/repo-card.tsx`)

```typescript
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { GitHubRepository } from "@/types/github";

interface RepoCardProps {
  repo: GitHubRepository;
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  const updatedAt = formatDistanceToNow(new Date(repo.updated_at), {
    addSuffix: true,
  });

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {repo.name}
            </a>
          </CardTitle>
          <Badge variant={repo.private ? "secondary" : "outline"}>
            {repo.private ? "Private" : "Public"}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {repo.description || "No description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-300 text-sm text-muted-foreground">
          {repo.language && (
            <div className="flex items-center gap-100">
              <span className="size-3 rounded-full bg-primary" />
              <span>{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-100">
            <span>⭐</span>
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-100">
            <span>🍴</span>
            <span>{repo.forks_count}</span>
          </div>
          <span className="ml-auto">Updated {updatedAt}</span>
        </div>
      </CardContent>
    </Card>
  );
};
```

**Note:** Install `date-fns` for date formatting:

```bash
npm install date-fns
```

#### 9.2 Repos Skeleton (`src/components/dashboard/repos-skeleton.tsx`)

```typescript
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ReposSkeleton = () => {
  return (
    <div className="space-y-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="h-4 w-full mt-2" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-300">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-32 ml-auto" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

#### 9.3 Repos List (`src/components/dashboard/repos-list.tsx`)

```typescript
"use client";

import { useUserRepos } from "@/hooks/use-user-repos";
import { RepoCard } from "./repo-card";
import { ReposSkeleton } from "./repos-skeleton";

export const ReposList = () => {
  const { data: repos, isLoading, isError, error } = useUserRepos();

  if (isLoading) {
    return <ReposSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center py-400">
        <p className="text-destructive">{error.message}</p>
      </div>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <div className="text-center py-400">
        <p className="text-muted-foreground">No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-300">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
```

---

### Step 10: Create Dashboard Page

#### 10.1 Dashboard Page (`src/app/dashboard/page.tsx`)

```typescript
import { auth } from "@/auth";
import { Header } from "@/components/layout/header";
import { ReposList } from "@/components/dashboard/repos-list";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-200 py-300 max-w-3xl">
        <Header className="mb-500" />

        <main>
          <div className="mb-400">
            <h1 className="text-preset-1 text-foreground">
              Welcome, {session?.user?.name?.split(" ")[0] || "Developer"}!
            </h1>
            <p className="text-preset-4 text-muted-foreground mt-100">
              Your most recently updated repositories
            </p>
          </div>

          <ReposList />
        </main>
      </div>
    </div>
  );
}
```

---

### Step 11: Update Next.js Config

#### 11.1 Modify `next.config.ts`

Remove or conditionally apply `output: 'export'`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for OAuth to work
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack(config) {
    // ... existing SVGR config
  },
};

export default nextConfig;
```

**Note:** Static export (`output: 'export'`) is not compatible with NextAuth.js API routes. The dashboard requires a Node.js server.

---

## 📦 Additional Dependencies

Install required packages:

```bash
npm install date-fns
```

---

## 🔒 Security Considerations

1. **Access Token Storage:** Stored in encrypted JWT, not exposed to client JavaScript directly
2. **CSRF Protection:** NextAuth.js handles CSRF automatically
3. **Session Expiry:** Default session max age is 30 days; can be configured
4. **Route Protection:** Middleware ensures dashboard is only accessible when authenticated

---

## 🧪 Testing Checklist

### Authentication Flow

- [ ] Click "Sign in with GitHub" redirects to GitHub OAuth
- [ ] After GitHub authorization, redirects to `/dashboard`
- [ ] Session persists across page refreshes
- [ ] Sign out clears session and redirects to home
- [ ] Unauthenticated users redirected from `/dashboard` to `/`

### Dashboard

- [ ] Shows user's name in welcome message
- [ ] Displays top 10 most recently updated repos
- [ ] Each repo shows: name, description, language, stars, forks, last updated
- [ ] Repo names link to GitHub
- [ ] Private repos show "Private" badge
- [ ] Loading skeleton displays during data fetch
- [ ] Error state displays if API fails

### Header

- [ ] Logo displays correctly
- [ ] Unauthenticated: Shows "Sign in with GitHub" button
- [ ] Authenticated: Shows user avatar dropdown
- [ ] Dropdown shows user name, email, Dashboard link, Sign out
- [ ] Theme toggle works in both states

---

## 📝 Implementation Order

1. **Core Auth Setup (Steps 1-2)**

   - Create `src/auth.ts`
   - Create API route
   - Create type declarations
   - Create SessionProvider
   - Update layout

2. **Route Protection (Step 3)**

   - Create middleware

3. **Auth UI (Steps 4-5)**

   - Create auth components
   - Update header

4. **API & Data (Steps 6-8)**

   - Add repository types
   - Add API functions
   - Create TanStack Query hook

5. **Dashboard UI (Steps 9-10)**

   - Create dashboard components
   - Create dashboard page

6. **Config (Step 11)**
   - Update next.config.ts

---

## 🔗 References

- [Auth.js Documentation](https://authjs.dev)
- [Auth.js GitHub Provider](https://authjs.dev/getting-started/providers/github)
- [TanStack Query v5 SSR Guide](https://tanstack.com/query/v5/docs/framework/react/guides/advanced-ssr)
- [GitHub REST API - Repos](https://docs.github.com/en/rest/repos/repos)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
