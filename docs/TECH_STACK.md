# GitHub Dashboard - Tech Stack & Setup Guide

## 📋 Project Overview

A GitHub Dashboard application with two main features:

1. **Public Search** - Search GitHub users by username and display their profile
2. **GitHub OAuth Login** - Authenticate with GitHub and access private dashboard with repositories

## 🛠️ Tech Stack

### Core Framework

| Technology     | Version | Purpose                                                |
| -------------- | ------- | ------------------------------------------------------ |
| **Next.js**    | 15.x    | React framework with App Router, static export support |
| **React**      | 19.x    | UI library                                             |
| **TypeScript** | 5.x     | Type-safe JavaScript                                   |

### Styling

| Technology       | Version | Purpose                                |
| ---------------- | ------- | -------------------------------------- |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework            |
| **shadcn/ui**    | latest  | Accessible, customizable UI components |
| **next-themes**  | latest  | Dark/Light mode theming support        |

### State Management & Data Fetching

| Technology                       | Version | Purpose                                         |
| -------------------------------- | ------- | ----------------------------------------------- |
| **TanStack Query (React Query)** | 5.x     | Server state management, caching, data fetching |

### Authentication

| Technology                | Version    | Purpose                     |
| ------------------------- | ---------- | --------------------------- |
| **NextAuth.js (Auth.js)** | 5.x (beta) | GitHub OAuth authentication |

### Development Tools

| Technology                         | Purpose                              |
| ---------------------------------- | ------------------------------------ |
| **ESLint**                         | Code linting                         |
| **@tanstack/eslint-plugin-query**  | React Query specific linting         |
| **@tanstack/react-query-devtools** | React Query debugging                |
| **@svgr/webpack**                  | Transform SVGs into React components |

---

## 🚀 Setup Commands

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest gh-dashboard --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

When prompted:

- ✅ Would you like to use TypeScript? → **Yes**
- ✅ Would you like to use ESLint? → **Yes**
- ✅ Would you like to use Tailwind CSS? → **Yes**
- ✅ Would you like your code inside a `src/` directory? → **Yes**
- ✅ Would you like to use App Router? → **Yes**
- ✅ Would you like to use Turbopack for `next dev`? → **Yes**
- ✅ Would you like to customize the import alias? → **Yes** (@/\*)

```bash
cd gh-dashboard
```

### Step 2: Configure for Static Export

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

> **Note:** For OAuth to work during development, you'll need to temporarily remove `output: 'export'` or use a hybrid approach. The static export is primarily for the public search feature.

### Step 3: Initialize shadcn/ui

```bash
npx shadcn@latest init
```

When prompted:

- Style: **Default** (or New York)
- Base color: **Neutral** (or your preference)
- CSS variables: **Yes**

### Step 4: Install shadcn/ui Components

```bash
# Core UI components needed for the dashboard
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add avatar
npx shadcn@latest add skeleton
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
```

### Step 5: Install next-themes (Dark Mode)

```bash
npm install next-themes
```

### Step 6: Install TanStack Query (React Query)

```bash
# Core package
npm install @tanstack/react-query

# DevTools (development only)
npm install @tanstack/react-query-devtools

# ESLint plugin (optional, recommended)
npm install -D @tanstack/eslint-plugin-query
```

### Step 7: Install NextAuth.js (Auth.js v5)

```bash
npm install next-auth
```

### Step 8: Generate Auth Secret

```bash
npx auth secret
```

This will add `AUTH_SECRET` to your `.env.local` file.

### Step 9: Install SVGR for SVG Components

```bash
npm install -D @svgr/webpack
```

Update `next.config.ts` to handle SVG imports:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
```

Create TypeScript declaration for SVG imports in `src/types/svg.d.ts`:

```typescript
declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
```

---

## 📁 Project Structure

```
gh-dashboard/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts          # NextAuth API route
│   │   ├── dashboard/
│   │   │   └── page.tsx                  # Protected dashboard (repos list)
│   │   ├── layout.tsx                    # Root layout with providers
│   │   ├── page.tsx                      # Home page (public search)
│   │   └── globals.css                   # Global styles + Tailwind
│   ├── assets/
│   │   └── icons/                        # SVG icons as React components
│   │       ├── index.ts                  # Icon exports
│   │       ├── logo.svg                  # devfinder logo
│   │       ├── moon.svg                  # Dark mode icon
│   │       ├── sun.svg                   # Light mode icon
│   │       ├── search.svg                # Search icon
│   │       ├── twitter.svg               # Twitter/X icon
│   │       ├── location.svg              # Location pin icon
│   │       ├── link.svg                  # URL/link icon
│   │       └── company.svg               # Company/building icon
│   ├── components/
│   │   ├── ui/                           # shadcn/ui components
│   │   ├── providers/
│   │   │   ├── query-provider.tsx        # React Query provider
│   │   │   └── theme-provider.tsx        # next-themes provider
│   │   ├── layout/
│   │   │   ├── navbar.tsx                # Navigation with auth state
│   │   │   └── theme-toggle.tsx          # Dark/Light mode toggle
│   │   ├── search/
│   │   │   ├── search-form.tsx           # Username search input
│   │   │   └── user-profile.tsx          # Public profile display
│   │   └── dashboard/
│   │       └── repos-list.tsx            # Repository list component
│   ├── lib/
│   │   ├── utils.ts                      # Utility functions (cn helper)
│   │   └── github-api.ts                 # GitHub API functions
│   ├── hooks/
│   │   └── use-github-user.ts            # React Query hook for user data
│   ├── types/
│   │   ├── github.ts                     # TypeScript types for GitHub API
│   │   └── svg.d.ts                      # TypeScript declaration for SVG imports
│   └── auth.ts                           # NextAuth configuration
├── .env.local                            # Environment variables
├── next.config.ts                        # Next.js configuration
├── tailwind.config.ts                    # Tailwind configuration
├── components.json                       # shadcn/ui configuration
└── package.json
```

---

## 🔐 Environment Variables

Create `.env.local` file:

```bash
# Auth.js
AUTH_SECRET="your-generated-secret"

# GitHub OAuth
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"

# Optional: GitHub API Token for higher rate limits on public search
GITHUB_TOKEN="your-personal-access-token"
```

### Setting Up GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - **Application name:** GitHub Dashboard
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`

---

## 📜 Available Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build"
  }
}
```

| Command         | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `npm run dev`   | Start development server with Turbopack                            |
| `npm run build` | Build for production (outputs to `out/` folder for static hosting) |
| `npm run start` | Start production server (not for static export)                    |
| `npm run lint`  | Run ESLint                                                         |

---

## 🌐 GitHub API Endpoints

### Public User Search (No Auth Required)

```
GET https://api.github.com/users/{username}
```

Returns: User profile data (avatar, name, bio, location, repos count, followers, etc.)

### Authenticated User Repos (Requires OAuth)

```
GET https://api.github.com/user/repos?sort=updated&per_page=10
```

Returns: List of repositories for authenticated user

---

## 📱 Features Breakdown

### Part 1: Public Search

- [x] Search input for GitHub username
- [x] Display user profile:
  - Avatar, name, username
  - Bio, location, website
  - Stats: Public Repos | Followers | Following
  - Join date
- [x] Responsive design (mobile + desktop)
- [x] Light/Dark mode toggle

### Part 2: GitHub OAuth Dashboard

- [x] "Sign in with GitHub" button
- [x] OAuth flow with NextAuth.js
- [x] Session management (login/logout)
- [x] Logged-in user display in navbar
- [x] Protected `/dashboard` route
- [x] Top 10 repos list with:
  - Repo name (link to GitHub)
  - Description
  - Stars count
  - Primary language
  - Last updated date

---

## 🎨 Design Notes

Based on Figma design (`github-user-search-app.fig`):

- Clean, minimal interface
- Card-based layout for user profile
- Responsive breakpoints for mobile/desktop
- Accessible color contrast for both themes
- Loading states with skeleton components

---

## 🖼️ SVG Icons Usage

SVG icons are stored in `src/assets/icons/` and can be imported as React components thanks to SVGR.

### Available Icons

| Icon Name    | File           | Purpose               |
| ------------ | -------------- | --------------------- |
| Logo         | `logo.svg`     | devfinder logo        |
| MoonIcon     | `moon.svg`     | Dark mode toggle      |
| SunIcon      | `sun.svg`      | Light mode toggle     |
| SearchIcon   | `search.svg`   | Search input icon     |
| TwitterIcon  | `twitter.svg`  | Twitter/X social link |
| LocationIcon | `location.svg` | User location         |
| LinkIcon     | `link.svg`     | Website/URL link      |
| CompanyIcon  | `company.svg`  | Company/organization  |

### Usage Example

```tsx
// Import from the icons index
import { SearchIcon, MoonIcon, SunIcon } from "@/assets/icons";

// Or import individually
import SearchIcon from "@/assets/icons/search.svg";

// Use as React component with full SVG props support
const SearchButton = () => (
  <button>
    <SearchIcon className="w-5 h-5 text-blue-500" />
  </button>
);

// Icons use currentColor, so they inherit text color
const ThemeToggle = ({ isDark }: { isDark: boolean }) => (
  <button className="text-gray-700 dark:text-white">
    {isDark ? (
      <SunIcon className="w-5 h-5" />
    ) : (
      <MoonIcon className="w-5 h-5" />
    )}
  </button>
);
```

### Importing SVG as URL

If you need the SVG as a URL (for `<img>` tags), use the `?url` suffix:

```tsx
import logoUrl from "@/assets/icons/logo.svg?url";

const Logo = () => <img src={logoUrl} alt="devfinder" />;
```

---

## 📦 Full Installation Command (One-liner)

After creating the Next.js project, run:

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools next-auth@beta next-themes && npm install -D @tanstack/eslint-plugin-query @svgr/webpack && npx shadcn@latest init && npx shadcn@latest add button input card avatar skeleton badge separator dropdown-menu navigation-menu
```

---

## 🔗 Documentation References

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query/latest)
- [NextAuth.js (Auth.js)](https://authjs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [GitHub REST API](https://docs.github.com/en/rest)
- [SVGR - SVG to React](https://react-svgr.com)
