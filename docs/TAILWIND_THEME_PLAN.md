# Tailwind Theme Update Plan - DevFinder Design System

This document outlines the plan to update the Tailwind CSS theme configuration to match the DevFinder Figma design system.

## Source

- **Figma Design**: [GitHub User Search App - Design System](https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-69)
- **Current Stack**: Next.js 16, React 19, Tailwind CSS v4

---

## 1. Color Palette

### 1.1 Neutral Colors

| Token Name  | HEX     | RGB           | HSL            | Usage                       |
| ----------- | ------- | ------------- | -------------- | --------------------------- |
| neutral-0   | #FFFFFF | 255, 255, 255 | 0, 0%, 100%    | White, backgrounds          |
| neutral-100 | #F6F8FF | 246, 248, 255 | 227, 100%, 98% | Light background            |
| neutral-200 | #90A4D4 | 144, 164, 212 | 222, 44%, 70%  | Muted text, disabled states |
| neutral-300 | #697C9A | 105, 124, 154 | 217, 20%, 51%  | Secondary text              |
| neutral-500 | #4B6A9B | 75, 106, 155  | 217, 35%, 45%  | Body text                   |
| neutral-700 | #2B3442 | 43, 52, 66    | 217, 21%, 21%  | Dark elements               |
| neutral-800 | #1E2A47 | 30, 42, 71    | 222, 41%, 20%  | Dark card background        |
| neutral-900 | #141D2F | 20, 29, 47    | 220, 40%, 13%  | Darkest background          |

### 1.2 Blue Colors

| Token Name | HEX     | RGB          | HSL            | Usage          |
| ---------- | ------- | ------------ | -------------- | -------------- |
| blue-300   | #60ABFF | 96, 171, 255 | 212, 100%, 69% | Hover states   |
| blue-500   | #0079FF | 0, 121, 255  | 212, 100%, 50% | Primary accent |

### 1.3 Red Colors

| Token Name | HEX     | RGB         | HSL         | Usage        |
| ---------- | ------- | ----------- | ----------- | ------------ |
| red-500    | #F74646 | 247, 70, 70 | 0, 92%, 62% | Error states |

### CSS Implementation

```css
@theme inline {
  /* Neutral Colors */
  --color-neutral-0: #ffffff;
  --color-neutral-100: #f6f8ff;
  --color-neutral-200: #90a4d4;
  --color-neutral-300: #697c9a;
  --color-neutral-500: #4b6a9b;
  --color-neutral-700: #2b3442;
  --color-neutral-800: #1e2a47;
  --color-neutral-900: #141d2f;

  /* Blue Colors */
  --color-blue-300: #60abff;
  --color-blue-500: #0079ff;

  /* Red Colors */
  --color-red-500: #f74646;
}
```

---

## 2. Typography

### 2.1 Font Family

| Font       | Weight | Usage                     |
| ---------- | ------ | ------------------------- |
| Space Mono | 700    | Headings, logo, bold text |
| Space Mono | 400    | Body text, regular text   |

### 2.2 Text Presets

| Preset         | Font Family | Weight  | Size | Line Height | Letter Spacing | Usage              |
| -------------- | ----------- | ------- | ---- | ----------- | -------------- | ------------------ |
| text-preset-1  | Space Mono  | Bold    | 26px | 120%        | 0              | Logo, main heading |
| text-preset-2  | Space Mono  | Bold    | 22px | 140%        | 0              | User name          |
| text-preset-3  | Space Mono  | Regular | 18px | 140%        | 0              | Desktop body       |
| text-preset-3m | Space Mono  | Regular | 13px | 140%        | 0              | Mobile body        |
| text-preset-4  | Space Mono  | Regular | 16px | 150%        | 0              | Standard body      |
| text-preset-5  | Space Mono  | Bold    | 16px | 150%        | 0              | Bold body text     |
| text-preset-6  | Space Mono  | Regular | 15px | 150%        | 0              | Small text         |
| text-preset-7  | Space Mono  | Regular | 13px | 150%        | 0              | Caption            |
| text-preset-8  | Space Mono  | Bold    | 13px | 140%        | 2.5px          | Uppercase labels   |

### CSS Implementation

```css
@theme inline {
  /* Font Family */
  --font-mono: "Space Mono", ui-monospace, monospace;

  /* Font Sizes */
  --text-preset-1: 26px;
  --text-preset-2: 22px;
  --text-preset-3: 18px;
  --text-preset-3-mobile: 13px;
  --text-preset-4: 16px;
  --text-preset-5: 16px;
  --text-preset-6: 15px;
  --text-preset-7: 13px;
  --text-preset-8: 13px;
}
```

### Google Fonts Import

Add to `layout.tsx` or `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");
```

---

## 3. Spacing Scale

| Token Name   | Value | CSS Variable Name |
| ------------ | ----- | ----------------- |
| spacing-0    | 0px   | --spacing-0       |
| spacing-025  | 2px   | --spacing-025     |
| spacing-050  | 4px   | --spacing-050     |
| spacing-075  | 6px   | --spacing-075     |
| spacing-100  | 8px   | --spacing-100     |
| spacing-125  | 10px  | --spacing-125     |
| spacing-150  | 12px  | --spacing-150     |
| spacing-200  | 16px  | --spacing-200     |
| spacing-250  | 20px  | --spacing-250     |
| spacing-300  | 24px  | --spacing-300     |
| spacing-400  | 32px  | --spacing-400     |
| spacing-500  | 40px  | --spacing-500     |
| spacing-600  | 48px  | --spacing-600     |
| spacing-800  | 64px  | --spacing-800     |
| spacing-1000 | 80px  | --spacing-1000    |

### CSS Implementation

```css
@theme inline {
  --spacing-0: 0px;
  --spacing-025: 2px;
  --spacing-050: 4px;
  --spacing-075: 6px;
  --spacing-100: 8px;
  --spacing-125: 10px;
  --spacing-150: 12px;
  --spacing-200: 16px;
  --spacing-250: 20px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
  --spacing-600: 48px;
  --spacing-800: 64px;
  --spacing-1000: 80px;
}
```

---

## 4. Border Radius

| Token Name  | Value  | CSS Variable Name |
| ----------- | ------ | ----------------- |
| radius-0    | 0px    | --radius-0        |
| radius-4    | 4px    | --radius-4        |
| radius-6    | 6px    | --radius-6        |
| radius-8    | 8px    | --radius-8        |
| radius-10   | 10px   | --radius-10       |
| radius-12   | 12px   | --radius-12       |
| radius-16   | 16px   | --radius-16       |
| radius-20   | 20px   | --radius-20       |
| radius-24   | 24px   | --radius-24       |
| radius-full | 9999px | --radius-full     |

### CSS Implementation

```css
@theme inline {
  --radius-0: 0px;
  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-full: 9999px;
}
```

---

## 5. Semantic Color Mapping (Light/Dark Mode)

### Light Mode (:root)

```css
:root {
  /* Base radius for component calculations */
  --radius: 10px;

  /* Background & Foreground */
  --background: #f6f8ff; /* neutral-100 */
  --foreground: #2b3442; /* neutral-700 */

  /* Card */
  --card: #ffffff; /* neutral-0 */
  --card-foreground: #2b3442;

  /* Popover */
  --popover: #ffffff;
  --popover-foreground: #2b3442;

  /* Primary (Blue accent) */
  --primary: #0079ff; /* blue-500 */
  --primary-foreground: #ffffff;

  /* Secondary */
  --secondary: #697c9a; /* neutral-300 */
  --secondary-foreground: #ffffff;

  /* Muted */
  --muted: #f6f8ff; /* neutral-100 */
  --muted-foreground: #4b6a9b; /* neutral-500 */

  /* Accent */
  --accent: #60abff; /* blue-300 */
  --accent-foreground: #ffffff;

  /* Destructive */
  --destructive: #f74646; /* red-500 */

  /* Border & Input */
  --border: #90a4d4; /* neutral-200 */
  --input: #ffffff;

  /* Ring (focus) */
  --ring: #0079ff; /* blue-500 */
}
```

### Dark Mode (.dark)

```css
.dark {
  /* Background & Foreground */
  --background: #141d2f; /* neutral-900 */
  --foreground: #ffffff;

  /* Card */
  --card: #1e2a47; /* neutral-800 */
  --card-foreground: #ffffff;

  /* Popover */
  --popover: #1e2a47;
  --popover-foreground: #ffffff;

  /* Primary (Blue accent) */
  --primary: #0079ff; /* blue-500 */
  --primary-foreground: #ffffff;

  /* Secondary */
  --secondary: #4b6a9b; /* neutral-500 */
  --secondary-foreground: #ffffff;

  /* Muted */
  --muted: #2b3442; /* neutral-700 */
  --muted-foreground: #90a4d4; /* neutral-200 */

  /* Accent */
  --accent: #60abff; /* blue-300 */
  --accent-foreground: #141d2f;

  /* Destructive */
  --destructive: #f74646; /* red-500 */

  /* Border & Input */
  --border: #2b3442; /* neutral-700 */
  --input: #2b3442;

  /* Ring (focus) */
  --ring: #0079ff; /* blue-500 */
}
```

---

## 6. Implementation Checklist

### Phase 1: Update globals.css

- [ ] Add Google Fonts import for Space Mono
- [ ] Update `@theme inline` block with new color variables
- [ ] Add custom spacing variables
- [ ] Update radius variables to match design system
- [ ] Add typography-related theme variables
- [ ] Update `:root` light mode semantic colors
- [ ] Update `.dark` dark mode semantic colors

### Phase 2: Update layout.tsx

- [ ] Configure Space Mono font via next/font
- [ ] Apply font family to body

### Phase 3: Create Utility Classes (optional)

- [ ] Create text preset utility classes
- [ ] Create spacing utility classes

### Phase 4: Update Components

- [ ] Update Card component to use new radius
- [ ] Update Button component with new colors
- [ ] Update Input component styling
- [ ] Verify all components work with light/dark mode

---

## 7. Complete globals.css Template

```css
@import "tailwindcss";
@import "tw-animate-css";
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* ===========================
   * COLORS - Design System
   * =========================== */

  /* Neutral Palette */
  --color-neutral-0: #ffffff;
  --color-neutral-100: #f6f8ff;
  --color-neutral-200: #90a4d4;
  --color-neutral-300: #697c9a;
  --color-neutral-500: #4b6a9b;
  --color-neutral-700: #2b3442;
  --color-neutral-800: #1e2a47;
  --color-neutral-900: #141d2f;

  /* Blue Palette */
  --color-blue-300: #60abff;
  --color-blue-500: #0079ff;

  /* Red Palette */
  --color-red-500: #f74646;

  /* ===========================
   * SEMANTIC COLORS
   * =========================== */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* ===========================
   * TYPOGRAPHY
   * =========================== */
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, monospace;
  --font-sans: var(--font-mono); /* Using mono as primary */

  /* ===========================
   * SPACING
   * =========================== */
  --spacing-0: 0px;
  --spacing-025: 2px;
  --spacing-050: 4px;
  --spacing-075: 6px;
  --spacing-100: 8px;
  --spacing-125: 10px;
  --spacing-150: 12px;
  --spacing-200: 16px;
  --spacing-250: 20px;
  --spacing-300: 24px;
  --spacing-400: 32px;
  --spacing-500: 40px;
  --spacing-600: 48px;
  --spacing-800: 64px;
  --spacing-1000: 80px;

  /* ===========================
   * BORDER RADIUS
   * =========================== */
  --radius-0: 0px;
  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-full: 9999px;

  /* Component Radius Aliases */
  --radius-sm: var(--radius-6);
  --radius-md: var(--radius-8);
  --radius-lg: var(--radius-10);
  --radius-xl: var(--radius-12);
  --radius-2xl: var(--radius-16);
  --radius-3xl: var(--radius-20);
  --radius-4xl: var(--radius-24);
}

/* ===========================
 * LIGHT MODE (Default)
 * =========================== */
:root {
  --radius: 10px;

  /* Background & Foreground */
  --background: #f6f8ff;
  --foreground: #2b3442;

  /* Card */
  --card: #ffffff;
  --card-foreground: #2b3442;

  /* Popover */
  --popover: #ffffff;
  --popover-foreground: #2b3442;

  /* Primary */
  --primary: #0079ff;
  --primary-foreground: #ffffff;

  /* Secondary */
  --secondary: #697c9a;
  --secondary-foreground: #ffffff;

  /* Muted */
  --muted: #f6f8ff;
  --muted-foreground: #4b6a9b;

  /* Accent */
  --accent: #60abff;
  --accent-foreground: #ffffff;

  /* Destructive */
  --destructive: #f74646;

  /* Border & Input */
  --border: #90a4d4;
  --input: #ffffff;

  /* Ring */
  --ring: #0079ff;

  /* Charts (optional - adjust as needed) */
  --chart-1: #0079ff;
  --chart-2: #60abff;
  --chart-3: #4b6a9b;
  --chart-4: #697c9a;
  --chart-5: #90a4d4;

  /* Sidebar */
  --sidebar: #ffffff;
  --sidebar-foreground: #2b3442;
  --sidebar-primary: #0079ff;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f6f8ff;
  --sidebar-accent-foreground: #2b3442;
  --sidebar-border: #90a4d4;
  --sidebar-ring: #0079ff;
}

/* ===========================
 * DARK MODE
 * =========================== */
.dark {
  /* Background & Foreground */
  --background: #141d2f;
  --foreground: #ffffff;

  /* Card */
  --card: #1e2a47;
  --card-foreground: #ffffff;

  /* Popover */
  --popover: #1e2a47;
  --popover-foreground: #ffffff;

  /* Primary */
  --primary: #0079ff;
  --primary-foreground: #ffffff;

  /* Secondary */
  --secondary: #4b6a9b;
  --secondary-foreground: #ffffff;

  /* Muted */
  --muted: #2b3442;
  --muted-foreground: #90a4d4;

  /* Accent */
  --accent: #60abff;
  --accent-foreground: #141d2f;

  /* Destructive */
  --destructive: #f74646;

  /* Border & Input */
  --border: #2b3442;
  --input: #2b3442;

  /* Ring */
  --ring: #0079ff;

  /* Charts */
  --chart-1: #0079ff;
  --chart-2: #60abff;
  --chart-3: #4b6a9b;
  --chart-4: #697c9a;
  --chart-5: #90a4d4;

  /* Sidebar */
  --sidebar: #1e2a47;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #0079ff;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #2b3442;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #2b3442;
  --sidebar-ring: #0079ff;
}

/* ===========================
 * BASE STYLES
 * =========================== */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground font-mono;
  }
}

/* ===========================
 * TEXT PRESET UTILITIES
 * =========================== */
@layer utilities {
  .text-preset-1 {
    font-family: var(--font-mono);
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0;
  }

  .text-preset-2 {
    font-family: var(--font-mono);
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0;
  }

  .text-preset-3 {
    font-family: var(--font-mono);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
  }

  .text-preset-3-mobile {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
  }

  .text-preset-4 {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
  }

  .text-preset-5 {
    font-family: var(--font-mono);
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0;
  }

  .text-preset-6 {
    font-family: var(--font-mono);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
  }

  .text-preset-7 {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
  }

  .text-preset-8 {
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 2.5px;
    text-transform: uppercase;
  }
}
```

---

## 8. Layout.tsx Font Configuration

```tsx
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 9. Usage Examples

### Using Colors

```tsx
// Background colors
<div className="bg-neutral-100 dark:bg-neutral-900">
<div className="bg-card">
<div className="bg-primary">

// Text colors
<p className="text-neutral-700 dark:text-neutral-0">
<p className="text-muted-foreground">
<p className="text-primary">
```

### Using Spacing

```tsx
// Padding
<div className="p-[var(--spacing-200)]">  // 16px
<div className="p-[var(--spacing-300)]">  // 24px

// Margin
<div className="m-[var(--spacing-100)]">  // 8px

// Gap
<div className="gap-[var(--spacing-200)]">
```

### Using Border Radius

```tsx
<div className="rounded-lg">     // 10px (--radius-lg)
<div className="rounded-xl">     // 12px (--radius-xl)
<div className="rounded-full">   // 9999px
```

### Using Text Presets

```tsx
<h1 className="text-preset-1">DevFinder</h1>
<h2 className="text-preset-2">User Name</h2>
<p className="text-preset-4">Body text</p>
<span className="text-preset-7">Caption</span>
```

---

## 10. Notes & Considerations

1. **Tailwind v4**: The project uses Tailwind CSS v4 which uses `@theme` directive instead of `tailwind.config.js`
2. **CSS Variables**: All values are stored as CSS custom properties for runtime theming
3. **Dark Mode**: Uses class-based dark mode with `.dark` class
4. **Font Loading**: Prefer `next/font` for optimal font loading performance
5. **Backward Compatibility**: Existing shadcn/ui components will continue to work with the semantic color tokens
