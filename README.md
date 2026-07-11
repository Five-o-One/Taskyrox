# Taskyrox

Taskyrox is a modern, lightweight task manager built with TypeScript, Vite, and Tailwind CSS. It provides a clean interface for adding, editing, and tracking tasks with priority and theme support.

## Key Features

- Create and save tasks with title, description, and priority
- Mark tasks as done and manage unfinished tasks
- Persistent task storage using browser localStorage
- Light and dark theme toggle
- Responsive UI built with Tailwind CSS
- Organized in modular TypeScript components and event handlers

## Tech Stack

- TypeScript
- Vite
- Tailwind CSS
- Prettier

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Then open the local URL shown by Vite in your browser.

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

## Project Structure

- `src/main.ts` — app bootstrap and layout rendering
- `src/components/` — UI components, navigation, and task cards
- `src/core/` — task logic, validation, storage, theme control
- `src/events/` — event registration and handlers
- `src/render/` — DOM rendering utilities
- `src/state/` — application and task state definitions
- `src/types/` — TypeScript type definitions
- `src/styles/global.css` — global styling

## Notes

- Tasks are stored in the browser using `localStorage`, so they persist between refreshes.
- The current codebase is designed for a simple SPA without an external backend.

## Contribution

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with a clear description of your changes

## License

This project is currently unlicensed.
