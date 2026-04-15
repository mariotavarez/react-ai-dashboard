# 🤖 React AI Dashboard

A sleek, production-grade AI analytics dashboard built with React 18 and TypeScript, featuring AI-powered insights, real-time data visualization, and an elegant dark-mode UI.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

## ✨ Features

- 📊 **Interactive Charts** — Revenue, profit, and user growth visualized with Recharts
- 🌙 **Dark Mode UI** — Polished dark-mode interface with gradient accents
- 📈 **KPI Metric Cards** — Real-time metrics with trend indicators and percentage changes
- 🤖 **AI Insights Panel** — ML-driven recommendations with confidence scores
- 📋 **Activity Feed** — Real-time stream of user actions across the platform
- 📱 **Responsive** — Fully adaptive from mobile to ultra-wide displays

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Static type safety |
| Tailwind CSS | Utility-first styling |
| Recharts | Composable chart library |
| Lucide React | Beautiful icon set |
| Vite | Next-gen build tooling |

## 🚀 Quick Start

```bash
git clone https://github.com/mariotavarez/react-ai-dashboard.git
cd react-ai-dashboard
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── AiInsights.tsx      # AI recommendations panel
│   ├── ActivityFeed.tsx    # Real-time activity stream
│   ├── MetricCard.tsx      # KPI metric cards
│   ├── RevenueChart.tsx    # Area chart for revenue/profit
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── TopBar.tsx          # Header bar
│   └── UserGrowthChart.tsx # Bar chart for user growth
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## 📄 License

MIT © Mario Tavarez
