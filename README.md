# React AI Dashboard

A production-grade AI analytics dashboard built with React 19 and TypeScript 5.7, featuring AI-powered insights, real-time data visualization, and a polished dark-mode UI.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

## Preview

![ Demo](.github/demo.gif)

## Features

- **Interactive Charts** — Revenue, profit, and user growth visualized with Recharts
- **Dark Mode UI** — Polished dark-mode interface with gradient accents
- **KPI Metric Cards** — Real-time metrics with trend indicators and percentage changes
- **AI Insights Panel** — ML-driven recommendations with confidence scores
- **Activity Feed** — Real-time stream of user actions across the platform
- **Responsive** — Fully adaptive from mobile to ultra-wide displays

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.7 | Static type safety |
| Tailwind CSS | v4 | Vite plugin — zero config |
| Recharts | 2.10 | Composable chart library |
| Lucide React | 0.344 | Icon set |
| Vite | 6.2 | Build tooling |

## Quick Start

```bash
git clone https://github.com/mariotavarez/react-ai-dashboard.git
cd react-ai-dashboard
npm install
npm run dev
```

## Structure — Atomic Design

```
src/
├── atoms/
│   ├── Avatar.tsx          # Initials avatar with gradient option
│   ├── Badge.tsx           # Generic badge with variants
│   ├── Button.tsx          # Primary / ghost / period variants
│   ├── IconWrapper.tsx     # Lucide icon with colored background
│   ├── ProgressBar.tsx     # 0–100 progress bar
│   └── TrendBadge.tsx      # Up/down percentage indicator
├── molecules/
│   ├── ActivityItem.tsx    # Feed row (Avatar + Badge)
│   ├── InsightCard.tsx     # AI insight (IconWrapper + Badge + ProgressBar)
│   ├── MetricCard.tsx      # KPI card (IconWrapper + TrendBadge)
│   ├── NavItem.tsx         # Sidebar nav button
│   └── SearchInput.tsx     # Search field with icon
├── organisms/
│   ├── ActivityFeed.tsx    # List of ActivityItems
│   ├── AiInsightsPanel.tsx # List of InsightCards
│   ├── MetricGrid.tsx      # Grid of MetricCards
│   ├── RevenueChart.tsx    # Recharts AreaChart with period selector
│   ├── Sidebar.tsx         # Full navigation sidebar
│   ├── TopBar.tsx          # Header bar
│   └── UserGrowthChart.tsx # Recharts BarChart
├── templates/
│   └── DashboardLayout.tsx # Sidebar + TopBar + main content wrapper
├── pages/
│   └── DashboardPage.tsx   # Full page composition
├── data/mockData.ts
├── types/index.ts
├── App.tsx
└── main.tsx
```

## Tailwind CSS v4

Uses the official `@tailwindcss/vite` plugin — no `tailwind.config.js` or PostCSS config needed:

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

```css
/* src/index.css */
@import "tailwindcss";
```

## License

MIT © Mario Tavarez
