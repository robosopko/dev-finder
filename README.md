# DevFinder Dashboard

A GitHub Dashboard application with public user search and GitHub OAuth authentication.

🔗 **Live Demo:** [https://dev-finder-tau.vercel.app](https://dev-finder-tau.vercel.app)

## Features

- **Public Search** - Search GitHub users by username and display their profile
- **GitHub OAuth Login** - Authenticate with GitHub and access private dashboard
- **Dashboard** - View your top repositories with stats
- **Dark/Light Mode** - Toggle between themes

## Tech Stack

| Technology     | Version | Purpose                                 |
| -------------- | ------- | --------------------------------------- |
| Next.js        | 16.x    | React framework with App Router         |
| React          | 19.x    | UI library                              |
| TypeScript     | 5.x     | Type-safe JavaScript                    |
| Tailwind CSS   | 4.x     | Utility-first CSS with custom theme     |
| shadcn/ui      | latest  | Accessible, customizable UI components  |
| TanStack Query | 5.x     | Server state management & data fetching |
| NextAuth.js    | 5.x     | GitHub OAuth authentication             |
| next-themes    | latest  | Dark/Light mode theming                 |

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```bash
AUTH_SECRET="your-auth-secret"  # Generate with: npx auth secret

# GitHub OAuth
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"
```

#### Setting Up GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name:** DevFinder Dashboard
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Copy **Client ID** and **Client Secret** to your `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build for production                    |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint                              |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── assets/icons/           # SVG icons as React components
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── providers/          # React context providers
│   ├── layout/             # Layout components
│   ├── auth/               # Authentication components
│   ├── search/             # Public search components
│   └── dashboard/          # Dashboard components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── types/                  # TypeScript type definitions
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query/latest)
- [NextAuth.js](https://authjs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub REST API](https://docs.github.com/en/rest)
