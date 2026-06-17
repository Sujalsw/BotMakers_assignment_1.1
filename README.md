# BotLeague — India's Ultimate Robotics Arena 🤖🔥

A futuristic, high-performance web portal built for **BotLeague**, India's national robotics arena. Designed to support matchmaking, national rankings, event registrations, and career progression pathways for top student and professional roboticists.

---

## 🚀 Key Features

- **Live Arena Updates**: Real-time tournament coverage badges showing active regional matches.
- **Interactive Matchups & Categories**: Sleek showcase grids highlighting different competition divisions (Robowars, Roborace, Drone Racing, Line Follower, etc.).
- **Interactive Journey Timeline**: Chronological roadmap mapping the progression from school-level entries to national championship matchups.
- **Neon Cyberpunk Aesthetic**: Modern dark mode interface styled with custom OKLCH color gradients, neomorphism glow utilities, and dynamic layout shapes.
- **Fluid Animations**: Smooth component entrance triggers and interactive floating particles powered by Framer Motion.

---

## 🛠️ Technology Stack

- **Core Framework**: [TanStack Start](https://tanstack.com/start) — full-stack React framework built on top of [Vite](https://vite.dev/).
- **Routing & Querying**: [TanStack Router](https://tanstack.com/router) & [TanStack Query](https://tanstack.com/query) for type-safe routing and state management.
- **UI Components**: Handcrafted custom components utilizing Radix UI primitives.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native OKLCH theme color configurations, utility glows, and custom clip-paths.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid and premium UI motion effects.
- **Icons**: [Lucide React](https://lucide.dev/).

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/             # Images, graphics, and visual media assets
│   ├── components/
│   │   ├── landing/        # Custom sections (Hero, Competitions, Journey, Footer, etc.)
│   │   └── ui/             # Reusable Radix UI building blocks
│   ├── hooks/              # Custom React hooks (e.g., use-mobile)
│   ├── lib/
│   │   ├── api/            # Server functions and API call definitions
│   │   └── utils.ts        # Helper functions
│   ├── routes/             # File-based routing folder (TanStack Start)
│   │   ├── __root.tsx      # Global app layout & shell
│   │   └── index.tsx       # Landing page entry point
│   ├── server.ts           # Nitro server rendering & SSR configuration
│   ├── start.ts            # Client-side initialization entry point
│   └── styles.css          # Main Tailwind CSS file with customized tokens
├── vite.config.ts          # Standard Vite bundler configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts & project dependencies
```

---

## 💻 Local Development Setup

To run this application locally, ensure you have **Node.js** (version 20+ recommended) installed.

### 1. Install Dependencies
Initialize package dependencies cleanly:
```bash
npm install --legacy-peer-deps
```

### 2. Run the Development Server
Launch the server in development mode:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to view the page.

### 3. Build for Production
Generate optimized production bundles (for clients and SSR server entry):
```bash
npm run build
```

### 4. Preview the Production Build
Test the compiled production app locally:
```bash
npm run preview
```

---

## 🌐 Deployment

The build target utilizes the **Nitro** server engine, enabling straightforward deployment to serverless platforms such as Cloudflare Workers, Vercel, Netlify, or self-hosted Node environments. 

To configure a specific deployment target, pass the target flag to your build commands or update the configurations in `vite.config.ts`.
