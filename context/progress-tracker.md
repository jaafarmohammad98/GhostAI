# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 02: Editor Chrome — in progress

## Current Goal

- Implement editor navbar and project sidebar shell components.

## Completed

- **Design System (01-design-system.md)**
  - shadcn/ui installed and configured (Nova preset — Radix + Lucide + Geist)
  - Components added: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea
  - lucide-react installed (^1.14.0, pulled in by Nova preset)
  - lib/utils.ts created with cn() helper (clsx + tailwind-merge)
  - globals.css: design system CSS custom properties defined, shadcn variables
    remapped to dark tokens, @theme inline mappings expose utility classes,
    .dark {} block removed (dark-only app)

## In Progress

- **Editor Chrome (02-editor.md)**
  - `components/editor/editor-navbar.tsx` — fixed top navbar, sidebar toggle (PanelLeftOpen/Close), left/center/right sections
  - `components/editor/project-sidebar.tsx` — floating overlay sidebar, slides from left, Tabs (My Projects / Shared), New Project footer button

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Dark-only theme; all design tokens defined as CSS custom properties in globals.css and exposed as Tailwind utility classes via @theme inline.
- shadcn/ui components live in components/ui/ and must not be modified after generation.
- shadcn Nova preset used: Radix UI + Lucide icons + Geist fonts.

## Session Notes

- Tailwind v4 in use (CSS-first config, no tailwind.config.js).
- shadcn variables (--background, --foreground, etc.) are remapped to our design
  tokens in :root so shadcn components inherit the dark theme automatically.
- No .dark {} class block — the app is always dark; no theme switching.
