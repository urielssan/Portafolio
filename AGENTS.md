# Agent Instructions: Portfolio & Grasa Project

# Next.js & React 19 Standards
- **Source of Truth**: ALWAYS read the documentation in `node_modules/next/dist/docs/` before implementing new features.
- **React Compiler**: DO NOT use `useMemo` or `useCallback`. The project has React Compiler enabled. Focus on writing clean, idiomatic React.
- **Rendering**: Use Server Components by default. Only use `'use client'` for components with state or event listeners.
- **Data Fetching**: Prefer Server Actions for mutations and `async` Server Components for data fetching.
## Project Context
- **Name**: Professional Full Stack Portfolio
- **Main Project Focus**: "Grasa" (Bicycle management ERP with AI/SQL integration).
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, PostgreSQL.

## Coding Guidelines (Claude 4.7 + Antigravity)
1. **TypeScript**: Use strict typing. Avoid `any`. Prefer interfaces over types for public APIs.
2. **Architecture**: Follow the `src/` directory pattern. Place shared UI in `src/components/ui/` (Shadcn style).
3. **Artifacts**: Before large refactors, generate a "Mission Plan" Artifact in Antigravity to describe the changes.
4. **Testing**: Use the integrated Antigravity browser to verify UI changes after each significant task.
5. **Styles**: Use Tailwind CSS utility classes exclusively. Avoid CSS Modules unless strictly necessary.

## Database & Backend (Postgres)
- Use **Prisma** or **Drizzle ORM** for database interactions.
- Ensure all database queries in Server Components are wrapped in appropriate error boundaries.