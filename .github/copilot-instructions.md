# GitHub Copilot Instructions - DevFinder Dashboard

## Tech Stack

| Technology                | Version | Purpose                                 |
| ------------------------- | ------- | --------------------------------------- |
| **Next.js**               | 15.x    | React framework with App Router         |
| **React**                 | 19.x    | UI library                              |
| **TypeScript**            | 5.x     | Type-safe JavaScript                    |
| **Tailwind CSS**          | 4.x     | Utility-first CSS with custom theme     |
| **shadcn/ui**             | latest  | Accessible, customizable UI components  |
| **TanStack Query**        | 5.x     | Server state management & data fetching |
| **NextAuth.js (Auth.js)** | 5.x     | GitHub OAuth authentication             |
| **next-themes**           | latest  | Dark/Light mode theming                 |

---

## Code Style Rules

### React Components

Always use **arrow function** syntax with `const` for React components:

```tsx
// ✅ Correct
const MyComponent = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default MyComponent;

// ❌ Avoid
function MyComponent({ title }: Props) {
  return <div>{title}</div>;
}
```

### TypeScript

- Use explicit types for props interfaces
- Prefer `interface` for component props, `type` for unions/intersections
- Export prop types when components are reusable

---

## Tailwind CSS Theme

This project uses a **custom Tailwind theme** defined according to the Figma design system. Always prefer these design tokens over arbitrary values.

### Colors

Use semantic color classes that support light/dark mode:

| Class                   | Usage                 |
| ----------------------- | --------------------- |
| `bg-background`         | Page background       |
| `bg-card`               | Card backgrounds      |
| `bg-primary`            | Primary accent (blue) |
| `bg-muted`              | Muted backgrounds     |
| `text-foreground`       | Primary text          |
| `text-muted-foreground` | Secondary/muted text  |
| `text-primary`          | Primary accent text   |
| `border-border`         | Default borders       |

Direct color palette (when semantic colors don't apply):

| Class              | HEX       |
| ------------------ | --------- |
| `text-neutral-700` | `#2B3442` |
| `text-neutral-500` | `#4B6A9B` |
| `text-neutral-300` | `#697C9A` |
| `bg-neutral-100`   | `#F6F8FF` |
| `bg-neutral-900`   | `#141D2F` |
| `text-blue-500`    | `#0079FF` |
| `text-red-500`     | `#F74646` |

### Typography

Use text preset utility classes for consistent typography:

| Class           | Size | Weight | Usage              |
| --------------- | ---- | ------ | ------------------ |
| `text-preset-1` | 26px | Bold   | Logo, main heading |
| `text-preset-2` | 22px | Bold   | User name          |
| `text-preset-3` | 18px | Normal | Desktop body       |
| `text-preset-4` | 16px | Normal | Standard body      |
| `text-preset-5` | 16px | Bold   | Bold body          |
| `text-preset-6` | 15px | Normal | Small text         |
| `text-preset-7` | 13px | Normal | Caption            |
| `text-preset-8` | 13px | Bold   | Uppercase labels   |

### Spacing

Custom spacing scale available:

| Token         | Value |
| ------------- | ----- |
| `spacing-100` | 8px   |
| `spacing-150` | 12px  |
| `spacing-200` | 16px  |
| `spacing-300` | 24px  |
| `spacing-400` | 32px  |
| `spacing-500` | 40px  |

### Border Radius

| Class          | Value  |
| -------------- | ------ |
| `rounded-sm`   | 6px    |
| `rounded-md`   | 8px    |
| `rounded-lg`   | 10px   |
| `rounded-xl`   | 12px   |
| `rounded-full` | 9999px |

---

## Library Documentation

**Important:** Do not assume you have the latest knowledge on libraries used in this project. Always use the **Context7 tool** (`mcp_context7_resolve-library-id` and `mcp_context7_get-library-docs`) to fetch up-to-date documentation before implementing features with:

- TanStack Query (React Query)
- NextAuth.js / Auth.js
- shadcn/ui components
- next-themes
- Any other library you're uncertain about

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── assets/icons/           # SVG icons (imported as React components)
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── providers/          # React context providers
│   ├── layout/             # Layout components (navbar, etc.)
│   └── [feature]/          # Feature-specific components
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
└── types/                  # TypeScript type definitions
```

---

## SVG Icons

Icons are located in `src/assets/icons/` and can be imported as React components:

```tsx
import { SearchIcon, MoonIcon } from "@/assets/icons";

<SearchIcon className="w-5 h-5 text-primary" />;
```

---

## Key Patterns

1. **Data Fetching**: Use TanStack Query hooks for all API calls
2. **Authentication**: Use NextAuth.js session hooks
3. **Theming**: Use `next-themes` for dark/light mode switching
4. **UI Components**: Prefer shadcn/ui components from `@/components/ui`
5. **Styling**: Use Tailwind classes with the custom theme tokens
