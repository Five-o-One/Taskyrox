# Taskyrox Project Documentation

## 1. Project Overview

Taskyrox is a browser-based, single-page task manager. It is written in TypeScript, rendered with HTML template strings, styled with Tailwind CSS, and bundled by Vite. It has no backend: task and theme data are stored in browser `localStorage`.

The current interface is Persian and right-to-left by default. An English dictionary exists but is not currently selected by the application.

### Main capabilities

- Add a task with a title, description, and priority.
- Edit or delete an existing task.
- Mark tasks complete or incomplete.
- Separate unfinished and completed tasks.
- Persist tasks between browser sessions.
- Switch between light and dark themes.
- Display desktop and mobile navigation layouts.

## 2. Technology and Commands

### Runtime and build tools

- TypeScript 6
- Vite 8
- Tailwind CSS 4 through `@tailwindcss/vite`
- pnpm lockfile and package scripts
- Prettier with the Tailwind CSS plugin

### Package scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Starts the Vite development server. |
| `pnpm build` | Type-checks the project with `tsc`, then creates a Vite production build. |
| `pnpm preview` | Serves the production build locally for inspection. |

## 3. Architecture

The application uses a small module-based architecture:

| Layer | Directory | Responsibility |
| --- | --- | --- |
| Bootstrap | `src/main.ts` | Initializes state, mounts the initial page, and registers events. |
| Components | `src/components/` | Returns HTML strings for the page, navigation, lists, cards, and forms. |
| Core logic | `src/core/` | Mutates state, validates tasks, persists data, and requests rendering. |
| Events | `src/events/` | Connects DOM events to core operations. |
| Rendering | `src/render/` | Replaces specific DOM sections after state changes. |
| State | `src/state/` | Holds shared mutable application and task state. |
| Types | `src/types/` | Defines TypeScript contracts for tasks, cards, navigation, and app state. |
| Dictionaries | `src/dic/` | Contains Persian and English interface text. |
| Utilities | `src/utils/` | Contains the typed SVG icon generator. |
| Styling/assets | `src/styles/`, `src/assets/` | Provides theme variables, fonts, images, and icons. |

### Rendering model

Components do not create DOM nodes directly. They return HTML strings. The initial component tree is assigned to `#app`, and later render helpers replace either:

- the complete unfinished/completed list sections,
- one task card,
- the task editor,
- the add-task placeholder, or
- CSS classes and attributes for the menu and theme.

### State model

The application uses shared mutable objects instead of a state-management library:

- `appState` stores theme, navigation state, active navigation item, and profile data.
- `tasksState` is the in-memory array of saved tasks.
- `currentTask` is a mutable working copy used by the add/edit form.
- `cardState` is exported but is not used by the current application flow.

### Persistence model

| Key | Value |
| --- | --- |
| `tasks` | JSON array of task objects. |
| `theme` | Either `light` or `dark`. |

## 4. Application Lifecycle

1. `index.html` creates the `#app` mount element and loads `src/main.ts`.
2. `init()` loads tasks and theme from `localStorage`.
3. `main.ts` applies the theme to `#app`.
4. `Body()` builds the complete initial HTML structure.
5. `registry()` binds global card, theme, and mobile-menu events.
6. `renderTaskList()` refreshes task lists and binds task-card controls.

## 5. Main User Flows

### Add a task

1. The user clicks an element with `id="NewTaskCard"`.
2. The delegated document click handler calls `AddTask()`.
3. `AddTask()` replaces the add/empty card with `Modifycard(currentTask)`.
4. Delegated input events update `currentTask.title` and `currentTask.description`.
5. The priority menu uses `TagMenu()`, `PrSelector()`, and `SelectPrBtn()`.
6. `SaveDataBtn()` validates and copies `currentTask` into `tasksState`.
7. `saveTasks()` persists the array.
8. `renderTaskList()` redraws both task sections.
9. `resetCurrentTask()` prepares a new blank working task.

### Edit a task

1. The option button calls `toggleOptionMenu()`.
2. The edit action calls `EditTask(id)`.
3. The saved task is copied into `currentTask`.
4. `renderEditCard()` replaces that card with the modify form.
5. Saving updates the task at its existing array index because its ID is unchanged.

### Complete or reopen a task

1. A checkbox change calls `toggleTask(id)`.
2. The task's `isDone` property is inverted.
3. The task array is saved and both lists are rendered again.

### Delete a task

1. The delete action calls `removeCard(id)`.
2. A new array excluding the selected ID is created.
3. The shared `tasksState` array is emptied and repopulated.
4. Storage and task lists are updated.

### Change theme

1. A theme radio input changes.
2. `themeToggleEvent()` derives `light` or `dark`.
3. `themeToggle()` changes `appState.theme`.
4. `themeRender()` updates `data-theme` and persists the choice.
5. CSS custom properties under `[data-theme='dark']` activate the dark palette.

### Open or close mobile navigation

1. `navbarMobileEvent()` listens to the mobile open and close controls.
2. `toggleNavbar()` changes `appState.isNavbarOpen`.
3. `menuRender()` changes sidebar and overlay classes.

## 6. Types and Data Structures

### `Task`

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | `number` | Task identity, currently generated with `Date.now()`. |
| `title` | `string` | Task title. |
| `description` | `string` | Task description. |
| `isDone` | `boolean` | Completion status. |
| `priority` | `'' \| 'LOW' \| 'MEDIUM' \| 'HIGH'` | Selected priority or blank while editing. |
| `createAt` | `string` | ISO creation timestamp. |
| `editAt` | `string` | ISO edit timestamp. |
| `state` | `CardState` | UI state associated with the task/card. |

### `CardState`

| Field | Meaning |
| --- | --- |
| `cardState` | Card display mode: blank, edit, done, or not done. |
| `isTagmenuOpened` | Whether the priority selector is visible. |
| `isOptionOpened` | Whether edit/delete actions are visible. |
| `btnDisabled` | Declared save-button state; not used by current logic. |
| `prioritySelected` | Declared selected priority; not used by current logic. |

The runtime task objects currently construct a smaller `state` object containing only `isTagmenuOpened` and `isOptionOpened`.

### `AppState`

| Field | Meaning |
| --- | --- |
| `navbarProfile` | Avatar URL, date, and username displayed in the sidebar. |
| `openPageId` | ID used to style one navigation item as active. |
| `theme` | `light` or `dark`. |
| `isNavbarOpen` | Mobile sidebar visibility. |

### Navigation types

- `NavBarProfile`: `username`, `date`, and `avatarUrl`.
- `NavBarItem`: numeric item ID, typed icon name, and display label.

## 7. Function Reference

### Bootstrap and event registration

#### `src/main.ts`

This module has no exported function. Its top-level code:

- calls `init()`,
- obtains `#app`,
- applies base and theme attributes,
- inserts `Body()` HTML, and
- calls `registry()`.

#### `init()` — `src/events/init.ts`

Loads the `tasks` JSON value into `tasksState` and loads the saved theme into `appState`. Defaults the theme to `light`.

#### `registry()` — `src/events/REGISTRY.ts`

Registers delegated card events, theme events, and mobile navigation events, then calls `renderTaskList()`. Task-list rendering is intentionally last because it also attaches card-specific listeners.

### Page and navigation components

#### `Body()` — `src/components/body.ts`

Returns the top-level application HTML containing the mobile header, mobile sidebar, desktop sidebar, and main content.

#### `MainContent()` — `src/components/main_content.ts`

Returns the central page layout. It contains separate `#notDoneTasks` and `#doneTasks` render targets and a mobile-only profile block.

#### `NavBar()` — `src/components/navbar.ts`

Returns the desktop sidebar with profile information, navigation entries, theme controls, and a logout entry.

#### `NavbarMobileHeader()` — `src/components/NavBar/navbar_header.ts`

Returns the mobile-only header containing the menu-open control and application name.

#### `NavbarMobile()` — `src/components/NavBar/navbar_moblie.ts`

Returns the hidden mobile sidebar and its overlay, including menu close, navigation, theme, and logout controls.

#### `NavBarList()` — `src/components/NavBar/navbar_list.ts`

Maps the module's navigation item definitions into a list of `NavBarItem()` components.

#### `NavBarItem(props)` — `src/components/NavBar/navbar_item.ts`

Returns one navigation row. It compares `props.itemId` with `appState.openPageId` to choose active styles and icon color.

#### `NavBarProfile()` — `src/components/NavBar/navbar_profile.ts`

Reads profile information from `appState`, combines it with the Persian greeting, and returns the profile display.

#### `NavProfileAvatar(avatarUrl)` — `src/components/NavBar/navbar_profile_avatar.ts`

Returns an image when the URL is non-empty. Otherwise, it returns a fallback user icon.

#### `NavBarThemeToggle()` — `src/components/NavBar/navbar_theme_toggle.ts`

Returns light/dark radio controls. The checked radio is derived from `appState.theme`.

### Task components

#### `AddNewTask()` — `src/components/Card/add_task.ts`

Returns the dashed add-task card used above a non-empty unfinished-task list.

#### `Card(state, task)` — `src/components/Card/card.ts`

Dispatches to a task-card component:

- `Done` → `DoneCardComponent()`
- `NotDone` → `UnDoneCardComponent()`
- any other value → `Modifycard()`

#### `DoneCardComponent(task)` — `src/components/Card/done_card.ts`

Returns a compact completed card with a checked checkbox, struck-through title, priority strip, option button, and optional edit/delete actions.

#### `UnDoneCardComponent(task)` — `src/components/Card/undone_card.ts`

Returns an unfinished card with an unchecked checkbox, title, priority label and strip, description, option button, and optional edit/delete actions.

#### `EditButtonDiv(id)` — `src/components/Card/edit_btn_div.ts`

Returns the edit/delete action popup. It embeds the task ID in `data-key` attributes used by event handlers.

#### `Modifycard(task)` — `src/components/Card/modify_card.ts`

Returns the add/edit form. It includes title and description fields, priority controls, cancel, and save. Save is disabled when `isCurrentTaskValid()` is false.

#### `SelectPriority()` — `src/components/Card/select_priority.ts`

Returns the low, medium, and high priority choices.

#### `ColorPriorityPiece(taskPriority)` — `src/components/Card/priority_span_color.ts`

Returns a localized colored priority badge:

- high uses danger colors,
- medium uses warning colors,
- low uses success colors.

#### `PriorityNavColor(taskPriority)` — `src/components/Card/priority_nav_color.ts`

Returns the narrow colored edge displayed on a task card. It uses the same danger/warning/success priority mapping.

#### `ListTask(isDone, list)` — `src/components/Card/list_task.ts`

Splits the supplied task list into unfinished and completed arrays. It returns the requested view, including the empty state when there are no unfinished tasks.

#### `EmptyPage()` — private in `src/components/Card/list_task.ts`

Returns the large empty-state add control with the empty-task illustration.

#### `NotDoneTaskList(tasks)` — private in `src/components/Card/list_task.ts`

Returns the unfinished-task heading, count, add control, and mapped unfinished cards.

#### `DoneTaskList(tasksDone)` — private in `src/components/Card/list_task.ts`

Returns the completed-task heading, count, and mapped completed cards.

#### `NewTaskComponenet()` — `src/components/Card/new_task_not_selected.ts`

Returns an older dashed add-task card. Its own comment marks it for deletion, and it is not imported by current code.

### Core task operations

#### `AddTask(target)` — `src/core/add_task.ts`

Checks whether the click occurred inside `#NewTaskCard`. If so, replaces that element with the task modify form and returns `true`; otherwise returns `false`.

#### `CloseBtn(target)` — `src/core/close_caard.ts`

Cancels the add/edit form. It detects whether `currentTask` belongs to a saved task, resets working state, then either redraws the task lists or restores the add-task card.

#### `EditTask(id)` — `src/core/edit_task.ts`

Finds the saved task, copies its values into `currentTask`, updates the edit timestamp, closes option/tag menus, and renders the editor in place of the selected card.

#### `SaveDataBtn()` — `src/core/save_task.ts`

Validates `currentTask`, makes a shallow task copy plus a copied state object, updates or inserts it in `tasksState`, persists all tasks, redraws task lists, and resets the working task. Returns `false` for invalid data and `true` after saving.

#### `isCurrentTaskValid()` — `src/core/save_btn_disabled.ts`

Returns `true` only when title and description contain non-whitespace text and a priority has been selected.

#### `resetCurrentTask()` — `src/core/reset_current_task.ts`

Generates a new ID, clears task content and priority, resets completion and timestamps, and closes the priority menu.

#### `removeCard(id)` — `src/core/remove_card.ts`

Removes a task by ID, updates the shared array in place, persists the new array, and redraws the task lists.

#### `toggleTask(id)` — `src/core/toggle_task.ts`

Finds a task, flips `isDone`, saves all tasks, and redraws both lists.

#### `toggleOptionMenu(id)` — `src/core/option_menu.ts`

Toggles the selected task's option menu and closes option menus on other tasks, then redraws only the selected card.

#### `TagMenu()` — `src/core/tag_menu.ts`

Toggles the current task's priority-menu state and redraws the modify form.

#### `SelectPrBtn(priority)` — `src/core/priority.ts`

Sets `currentTask.priority`, closes the priority menu, and redraws the modify form.

#### `PrSelector(target)` — `src/core/priority.ts`

Matches a click against the three priority option IDs. It calls `SelectPrBtn()` for a match and reports whether it handled the target.

### Storage, theme, date, and menu operations

#### `saveTask(task)` — `src/core/task_storage.ts`

Loads stored tasks, appends a copy of one task, and writes the resulting array. The current application flow uses `saveTasks()` instead.

#### `getTasks()` — `src/core/task_storage.ts`

Reads and parses the `tasks` storage key. Returns an empty array when the key is absent, JSON is invalid, or the parsed value is not an array.

#### `saveTasks(tasks)` — `src/core/task_storage.ts`

Serializes and writes the complete task array to `localStorage`.

#### `themeToggle(state)` — `src/core/theme_toggle.ts`

Updates `appState.theme` and delegates DOM/storage work to `themeRender()`.

#### `toggleNavbar()` — `src/core/menu_toggle.ts`

Flips `appState.isNavbarOpen` and delegates visual changes to `menuRender()`.

#### `getTodayPersianDate()` — `src/core/date.ts`

Uses `Intl.DateTimeFormat` with the Persian calendar and Persian locale, extracts date parts, and returns a localized weekday/month/day/year string.

### DOM render functions

#### `renderTaskList()` — `src/render/list_render.ts`

Renders unfinished and completed task sections from `tasksState`, then attaches delete, option, checkbox, and edit listeners to the newly inserted cards.

#### `renderTaskCard(id)` — `src/render/list_render.ts`

Finds one task and its DOM wrapper, chooses its done/not-done component, replaces the wrapper, and reattaches card listeners.

#### `renderEditCard(id)` — `src/render/edit_render.ts`

Replaces a selected task card with `Modifycard(currentTask)`.

#### `renderModifyCard()` — `src/render/modify_render.ts`

Finds the existing modify form and replaces it with a fresh rendering of `currentTask`.

#### `renderAddTaskCard(target)` — `src/render/add_task_render.ts`

Finds the modify form closest to the supplied target and replaces it with the compact add-task card.

#### `themeRender()` — `src/render/theme_render.ts`

Sets the `data-theme` attribute on `#app` and writes the selected theme to `localStorage`.

#### `menuRender()` — `src/render/menu_render.ts`

Opens or closes the mobile sidebar by changing translation, opacity, and pointer-event classes. Small timeouts coordinate CSS transitions.

`src/render/undone_card_render.ts` contains only commented-out legacy code and exports nothing.

### Event functions

#### `handleTaskInput(event)` — private in `src/events/card_event.ts`

Updates the working task's title or description when delegated input events originate from the modify form fields.

#### `handleCardClick(event)` — private in `src/events/card_event.ts`

Routes delegated document clicks through add-task, tag-menu, close, priority, and save actions.

#### `clickedOnAddEvent()` — `src/events/card_event.ts`

Attaches the delegated document input and click listeners once. The `isCardEventsBound` guard prevents duplicate registration.

#### `CardDeleteEvent()` — `src/events/card_event.ts`

Attaches click listeners to current delete controls, extracts IDs from `data-key="remove-ID"`, and calls `removeCard()`.

#### `CardOptionEvent()` — `src/events/card_event.ts`

Attaches click listeners to current option buttons, extracts IDs from `data-key="option-ID"`, and calls `toggleOptionMenu()`.

#### `CardCheckEvent()` — `src/events/card_event.ts`

Attaches change listeners to task checkboxes, extracts IDs from `data-key="check-ID"`, and calls `toggleTask()`.

#### `CardEditEvent()` — `src/events/card_event.ts`

Attaches click listeners to current edit controls, extracts IDs from `data-key="edit-ID"`, and calls `EditTask()`.

#### `navbarMobileEvent()` — `src/events/menu_event.ts`

Attaches open and close handlers to mobile navigation controls and avoids unnecessary toggles by checking `appState.isNavbarOpen`.

#### `themeToggleEvent()` — `src/events/theme_event.ts`

Attaches change handlers to all theme radio inputs and calls `themeToggle()` for the checked option.

### Dictionaries and utilities

#### `EnDic.subTittleNotDone(n)` — `src/dic/en.ts`

Returns a special no-task sentence for zero or an English unfinished-task count for other values.

#### `EnDic.subTittleDone(n)` — `src/dic/en.ts`

Returns an English completed-task count.

#### `FaDic.subTittleNotDone(n)` — `src/dic/fa.ts`

Returns a special Persian no-task sentence for zero or a Persian unfinished-task count for other values.

#### `FaDic.subTittleDone(n)` — `src/dic/fa.ts`

Returns a Persian completed-task count.

#### `iconGen(name, classes)` — `src/utils/icon_generator.ts`

Gets raw SVG markup from the typed icon map and injects the supplied CSS class string into the root `<svg>` element.

## 8. File Reference

### Root files

| File | Purpose |
| --- | --- |
| `README.md` | Short public project overview, setup instructions, and structure summary. |
| `LICENSE` | Repository license file. It is currently empty. |
| `package.json` | Package metadata, scripts, and dependencies. |
| `pnpm-lock.yaml` | Exact pnpm dependency resolution. Generated dependency metadata rather than application logic. |
| `tsconfig.json` | Strict bundler-oriented TypeScript configuration with no output emission. |
| `vite.config.ts` | Enables the Tailwind CSS Vite plugin. |
| `index.html` | RTL Persian HTML shell, metadata, icons, manifest, mount point, and entry script. |

### Public files

| File | Purpose |
| --- | --- |
| `public/site.webmanifest` | Installable web-app metadata, colors, and icon declarations. |
| `public/favicon.svg` | Vector browser favicon. |
| `public/favicon.ico` | Legacy/multi-size browser favicon. |
| `public/favicon-96x96.png` | 96-pixel favicon. |
| `public/apple-touch-icon.png` | Apple home-screen icon. |
| `public/web-app-manifest-192x192.png` | 192-pixel installable-app icon. |
| `public/web-app-manifest-512x512.png` | 512-pixel installable-app icon. |
| `public/icons.svg` | Additional public SVG icon asset; not imported by current source code. |

### Source entry and styles

| File | Purpose |
| --- | --- |
| `src/main.ts` | Application bootstrap and initial DOM mount. |
| `src/styles/global.css` | Tailwind import, semantic light/dark color variables, Tailwind theme exposure, and base HTML styling. |

### Dictionaries

| File | Purpose |
| --- | --- |
| `src/dic/fa.ts` | Persian labels, placeholders, headings, and task-count functions currently used by the UI. |
| `src/dic/en.ts` | Equivalent English text prepared for localization but not currently selected. |

### State

| File | Purpose |
| --- | --- |
| `src/state/app_state.ts` | Creates shared application state and populates the profile date. |
| `src/state/task_state.ts` | Creates the saved task array and mutable working task. |
| `src/state/card_state.ts` | Creates a standalone default card-state object; currently unused. |

### Type declarations

| File | Purpose |
| --- | --- |
| `src/types/task.d.ts` | Task and priority contracts. |
| `src/types/card_state.d.ts` | Task-card mode and card UI state contracts. |
| `src/types/app_state.d.ts` | Theme and application-state contracts. |
| `src/types/navbar.d.ts` | Profile and navigation-item contracts. |

### Page/navigation components

| File | Purpose |
| --- | --- |
| `src/components/body.ts` | Top-level component composition. |
| `src/components/main_content.ts` | Main task content and render targets. |
| `src/components/navbar.ts` | Desktop sidebar. |
| `src/components/NavBar/navbar_header.ts` | Mobile header/menu opener. |
| `src/components/NavBar/navbar_moblie.ts` | Mobile sidebar and overlay. The filename contains the existing `moblie` spelling. |
| `src/components/NavBar/navbar_list.ts` | Navigation definition and list renderer. |
| `src/components/NavBar/navbar_item.ts` | Reusable navigation row. |
| `src/components/NavBar/navbar_profile.ts` | Profile summary component. |
| `src/components/NavBar/navbar_profile_avatar.ts` | Avatar/fallback component. |
| `src/components/NavBar/navbar_theme_toggle.ts` | Light/dark radio component. |

### Task-card components

| File | Purpose |
| --- | --- |
| `src/components/Card/list_task.ts` | Empty, unfinished, and completed list composition. |
| `src/components/Card/card.ts` | Card-state dispatcher. |
| `src/components/Card/add_task.ts` | Compact add-task control. |
| `src/components/Card/modify_card.ts` | Add/edit form. |
| `src/components/Card/undone_card.ts` | Unfinished task card. |
| `src/components/Card/done_card.ts` | Completed task card. |
| `src/components/Card/edit_btn_div.ts` | Edit/delete popup controls. |
| `src/components/Card/select_priority.ts` | Priority choice menu. |
| `src/components/Card/priority_span_color.ts` | Priority badge renderer. |
| `src/components/Card/priority_nav_color.ts` | Priority edge-strip renderer. |
| `src/components/Card/new_task_not_selected.ts` | Unused legacy add-task component. |

### Core logic

| File | Purpose |
| --- | --- |
| `src/core/add_task.ts` | Opens the add-task form. |
| `src/core/close_caard.ts` | Cancels add/edit mode. The filename contains the existing `caard` spelling. |
| `src/core/edit_task.ts` | Copies a saved task into edit state. |
| `src/core/save_task.ts` | Validates, inserts/updates, persists, and rerenders tasks. |
| `src/core/save_btn_disabled.ts` | Task-form validation. |
| `src/core/reset_current_task.ts` | Resets the working task. |
| `src/core/remove_card.ts` | Deletes a task. |
| `src/core/toggle_task.ts` | Changes completion state. |
| `src/core/option_menu.ts` | Controls task option menus. |
| `src/core/tag_menu.ts` | Controls the priority menu. |
| `src/core/priority.ts` | Handles priority selection. |
| `src/core/task_storage.ts` | Reads and writes task data in browser storage. |
| `src/core/theme_toggle.ts` | Changes theme state. |
| `src/core/menu_toggle.ts` | Changes mobile-menu state. |
| `src/core/date.ts` | Formats today's Persian-calendar date. |

### Events

| File | Purpose |
| --- | --- |
| `src/events/init.ts` | Loads persisted tasks and theme. |
| `src/events/REGISTRY.ts` | Central event-registration entry point. |
| `src/events/card_event.ts` | Delegated form events and direct task-card events. |
| `src/events/menu_event.ts` | Mobile navigation events. |
| `src/events/theme_event.ts` | Theme radio events. |

### Rendering

| File | Purpose |
| --- | --- |
| `src/render/list_render.ts` | Renders task lists or one task card and rebinds card events. |
| `src/render/edit_render.ts` | Replaces a saved card with the edit form. |
| `src/render/modify_render.ts` | Refreshes the current add/edit form. |
| `src/render/add_task_render.ts` | Restores the add-task control after cancellation. |
| `src/render/menu_render.ts` | Applies mobile sidebar transition classes. |
| `src/render/theme_render.ts` | Applies and saves the theme. |
| `src/render/undone_card_render.ts` | Commented-out legacy renderer; no active behavior. |

### Utility

| File | Purpose |
| --- | --- |
| `src/utils/icon_generator.ts` | Imports raw SVGs, defines valid icon names, and produces classed inline SVG markup. |

### Image asset

| File | Purpose |
| --- | --- |
| `src/assets/images/empty.svg` | Empty-task illustration used by the unfinished-list empty state. |

### Icon assets

| File | Purpose |
| --- | --- |
| `src/assets/icons/add.svg` | Add icon asset; not imported by the current icon map. |
| `src/assets/icons/calendar-light.svg` | Light-weight calendar icon. |
| `src/assets/icons/calendar-bold.svg` | Bold calendar icon. |
| `src/assets/icons/checklist-light.svg` | Light-weight checklist icon. |
| `src/assets/icons/checklist-bold.svg` | Bold checklist icon. |
| `src/assets/icons/home-light.svg` | Light-weight home icon. |
| `src/assets/icons/home-bold.svg` | Bold home icon. |
| `src/assets/icons/info-light.svg` | Light-weight information icon. |
| `src/assets/icons/info-bold.svg` | Bold information icon. |
| `src/assets/icons/logout-light.svg` | Light-weight logout icon. |
| `src/assets/icons/logout-bold.svg` | Bold logout icon. |
| `src/assets/icons/menu-light.svg` | Light-weight menu icon used by task option buttons. |
| `src/assets/icons/menu-bold.svg` | Bold menu icon. |
| `src/assets/icons/moon-light.svg` | Light-weight moon icon. |
| `src/assets/icons/moon-bold.svg` | Bold moon icon. |
| `src/assets/icons/pen-light.svg` | Light-weight edit icon. |
| `src/assets/icons/pen-bold.svg` | Bold edit icon. |
| `src/assets/icons/settings-light.svg` | Light-weight settings icon. |
| `src/assets/icons/settings-bold.svg` | Bold settings icon. |
| `src/assets/icons/square-light.svg` | Light-weight reports/square icon. |
| `src/assets/icons/square-bold.svg` | Bold reports/square icon. |
| `src/assets/icons/sun-light.svg` | Light-weight sun icon. |
| `src/assets/icons/sun-bold.svg` | Bold sun icon. |
| `src/assets/icons/tag-right.svg` | Tag/priority menu icon. |
| `src/assets/icons/trash-light.svg` | Delete icon used by task actions. |
| `src/assets/icons/trash-bold.svg` | Bold delete icon. |
| `src/assets/icons/user-light.svg` | Light-weight user icon. |
| `src/assets/icons/user-bold.svg` | Bold user/fallback avatar icon. |
| `src/assets/icons/xmark.svg` | Close icon, also rotated to visually represent add. |
| `src/assets/icons/logo.svg` | Project logo asset; not imported by current components. |

### Font assets

| File | Purpose |
| --- | --- |
| `src/assets/fonts/fonts.css` | Declares bundled Tanha and Vazirmatn font faces. |
| `src/assets/fonts/tanha/Tanha.ttf` | Tanha TrueType font. |
| `src/assets/fonts/tanha/Tanha.woff` | Tanha WOFF font. |
| `src/assets/fonts/tanha/Tanha.woff2` | Tanha WOFF2 font. |
| `src/assets/fonts/vazir/Vazirmatn[wght].woff2` | Variable-weight Vazirmatn font. |
| `src/assets/fonts/vazir/Vazirmatn-Thin.woff2` | Vazirmatn thin weight. |
| `src/assets/fonts/vazir/Vazirmatn-ExtraLight.woff2` | Vazirmatn extra-light weight. |
| `src/assets/fonts/vazir/Vazirmatn-Light.woff2` | Vazirmatn light weight. |
| `src/assets/fonts/vazir/Vazirmatn-Regular.woff2` | Vazirmatn regular weight. |
| `src/assets/fonts/vazir/Vazirmatn-Medium.woff2` | Vazirmatn medium weight. |
| `src/assets/fonts/vazir/Vazirmatn-SemiBold.woff2` | Vazirmatn semi-bold weight. |
| `src/assets/fonts/vazir/Vazirmatn-Bold.woff2` | Vazirmatn bold weight. |
| `src/assets/fonts/vazir/Vazirmatn-ExtraBold.woff2` | Vazirmatn extra-bold weight. |
| `src/assets/fonts/vazir/Vazirmatn-Black.woff2` | Vazirmatn black weight. |

## 9. DOM Contracts

The event and rendering layers rely on these selectors:

| Selector | Role |
| --- | --- |
| `#app` | Root application mount and theme attribute owner. |
| `#notDoneTasks` | Unfinished-task list render target. |
| `#doneTasks` | Completed-task list render target. |
| `#NewTaskCard` | Add-task click target. |
| `#Creating-Task` | Current add/edit form. |
| `#taskTitle` | Working task title input. |
| `#taskDescription` | Working task description textarea. |
| `#TagMenuBtn` | Priority-menu toggle. |
| `#lowPriorityBtn` | Low-priority choice. |
| `#mediumPriorityBtn` | Medium-priority choice. |
| `#highPriorityBtn` | High-priority choice. |
| `#closeModifyCardBtn` | Add/edit cancel control. |
| `#saveTaskBtn` | Add/edit save control. |
| `#taskCard-ID` | Wrapper for one saved task. |
| `[data-key="remove-ID"]` | Delete action. |
| `[data-key="edit-ID"]` | Edit action. |
| `[data-key="option-ID"]` | Option-menu action. |
| `[data-key="check-ID"]` | Completion checkbox. |
| `#menu-open` / `#menu-close` | Mobile navigation controls. |
| `#navbar-main` | Mobile sidebar. |
| `#menu-overlay` | Mobile menu overlay. |
| `input[name="theme"]` | Theme choices. |

Changing these IDs or data-key formats requires corresponding event/render updates.

## 10. Styling and Theming

`src/styles/global.css` defines semantic color tokens for:

- primary interaction colors,
- success/warning/danger priority colors,
- page and elevated backgrounds,
- surface interaction states,
- sidebar and borders,
- text and icon levels,
- overlay color.

The light palette is declared on `:root`. Dark-mode values override it under `[data-theme='dark']`. The Tailwind `@theme` block exposes the CSS variables as utility names such as `bg-bg`, `text-text`, `border-border`, and `fill-icon`.

The root HTML element uses Vazirmatn, and all properties receive a short transition.

## 11. Current Scope and Implementation Notes

- The application is entirely client-side.
- Navigation entries are visual; no page-switch event logic is implemented.
- Logout is visual; no authentication/logout behavior exists.
- Profile data is hard-coded in `appState`.
- The avatar uses an external image URL.
- English text exists but no locale-switch mechanism exists.
- No automated test files are present.
- `saveTask()` and `cardState` are currently unused.
- `NewTaskComponenet()` and `undone_card_render.ts` are legacy/inactive.
- The manifest still uses generic names (`MyWebSite` and `MySite`) rather than Taskyrox.
- Runtime task state is narrower than the declared `CardState` and is currently forced with `as any`.

## 12. Maintenance Guide

### Adding a task field

Update:

1. `src/types/task.d.ts`
2. `src/state/task_state.ts`
3. `src/core/reset_current_task.ts`
4. `src/core/edit_task.ts`
5. `src/components/Card/modify_card.ts`
6. `src/events/card_event.ts` if user input is required
7. saved card components if the field is displayed

### Adding a new icon

1. Add the SVG under `src/assets/icons/`.
2. Import it with `?raw` in `src/utils/icon_generator.ts`.
3. Add it to the `icons` object.
4. Use the newly inferred `IconName` with `iconGen()`.

### Adding a locale

1. Add a dictionary matching the keys in `FaDic`/`EnDic`.
2. Introduce locale state and persistence.
3. Replace direct `FaDic` imports with a selected-dictionary module.
4. Rerender components after locale changes.

### Adding a navigation page

The current navigation only changes visual active state at initial render. A complete page addition needs:

1. an event handler for navigation items,
2. an update to `appState.openPageId`,
3. content routing/rendering,
4. navigation rerendering to reflect the active entry, and
5. mobile menu closure after navigation when appropriate.

