# Taskyrox

Taskyrox is a lightweight, responsive task manager built with TypeScript, Vite, and Tailwind CSS. It runs entirely in the browser and stores tasks and theme preferences in `localStorage`.

The current interface is Persian and uses a right-to-left layout.

## Features

- Create tasks with a title, description, and priority
- Edit and delete existing tasks
- Mark tasks as complete or incomplete
- View unfinished and completed tasks separately
- Persist tasks between browser sessions
- Switch between light and dark themes
- Use responsive desktop and mobile navigation
- Display dates using the Persian calendar

## Tech Stack

- TypeScript 6
- Vite 8
- Tailwind CSS 4
- Prettier
- pnpm

## Getting Started

### Requirements

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open the local URL displayed by Vite.

### Production Build

```bash
pnpm build
```

The command type-checks the project and creates the production bundle.

### Preview

```bash
pnpm preview
```

## Project Structure

```text
Taskyrox/
├── doc/                 Project and function documentation
├── public/              Favicons, manifest, and public assets
├── src/
│   ├── assets/          Fonts, icons, and images
│   ├── components/      HTML-rendering UI components
│   ├── core/            Task, storage, theme, and menu logic
│   ├── dic/             Persian and English UI dictionaries
│   ├── events/          DOM event registration and handlers
│   ├── render/          DOM update functions
│   ├── state/           Shared application and task state
│   ├── styles/          Global styles and theme variables
│   ├── types/           TypeScript declarations
│   ├── utils/           SVG icon utilities
│   └── main.ts          Application entry point
├── index.html           HTML shell
├── package.json         Dependencies and scripts
├── tsconfig.json        TypeScript configuration
└── vite.config.ts       Vite and Tailwind configuration
```

## How It Works

1. `src/main.ts` loads saved state and mounts the application.
2. Components return HTML template strings.
3. Event handlers call functions in `src/core/`.
4. Core functions update shared state and browser storage.
5. Functions in `src/render/` refresh the affected DOM sections.

Tasks are stored under the `tasks` key and the selected theme under the `theme` key in browser `localStorage`.

## Documentation

Detailed architecture, data models, user flows, DOM contracts, file descriptions, and function references are available in:

- [`doc/PROJECT_DOCUMENTATION.md`](doc/PROJECT_DOCUMENTATION.md)

## Current Scope

- The application has no backend or external database.
- Navigation and logout entries are currently visual only.
- Profile information is currently hard-coded.
- Persian is the active interface language; an English dictionary exists but no language switcher is implemented.
- Automated tests are not currently included.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Install dependencies with `pnpm install`.
4. Make and verify your changes.
5. Run `pnpm build`.
6. Open a pull request with a clear description.

## License

See the [`LICENSE`](LICENSE) file.
