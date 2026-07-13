# Taskyrox Project Documentation

## 1. Project Overview

Taskyrox is a client-side, single-page task manager built with TypeScript, Vite, and Tailwind CSS. Components return HTML template strings, application state is held in shared modules, and browser `localStorage` provides persistence.

The active interface is Persian and right-to-left. An English dictionary is available, but the application does not currently include a locale switcher.

### Features

- Create tasks with a title, description, and priority.
- Edit and delete existing tasks.
- Mark tasks complete or incomplete.
- Display incomplete and completed tasks separately.
- Persist tasks, theme, username, and profile image.
- Switch between light and dark themes.
- Edit the displayed username.
- Select a local profile image.
- Use responsive desktop and mobile navigation.
- Display the current date using the Persian calendar.

## 2. Technology and Commands

### Technology

- TypeScript 6
- Vite 8
- Tailwind CSS 4 through `@tailwindcss/vite`
- pnpm
- Prettier with `prettier-plugin-tailwindcss`

### Commands

| Command | Purpose |
| --- | --- |
| `pnpm install` | Installs project dependencies. |
| `pnpm dev` | Starts the Vite development server. |
| `pnpm build` | Type-checks with `tsc` and creates a production build. |
| `pnpm preview` | Serves the production build locally. |

## 3. Architecture

| Layer | Location | Responsibility |
| --- | --- | --- |
| Bootstrap | `src/main.ts` | Hydrates state, mounts the initial component tree, and registers events. |
| Components | `src/components/` | Produces HTML strings for page, navigation, task lists, cards, and editors. |
| Core | `src/core/` | Updates state, validates data, persists values, and requests DOM updates. |
| Events | `src/events/` | Connects DOM interactions to core operations. |
| Render | `src/render/` | Replaces DOM sections or applies visual state after changes. |
| State | `src/state/` | Stores shared mutable application and task state. |
| Types | `src/types/` | Defines task, card, navigation, theme, and application contracts. |
| Dictionaries | `src/dic/` | Provides Persian and English interface text and task-count formatters. |
| Utilities | `src/utils/` | Provides typed inline SVG generation. |
| Assets/styles | `src/assets/`, `src/styles/` | Provides fonts, icons, images, theme variables, and global styles. |

### Data flow

1. A component returns an HTML string.
2. An event handler receives a DOM interaction.
3. The event handler calls a core function.
4. The core function updates shared state and browser storage.
5. A render function refreshes the affected DOM section.
6. Direct listeners are rebound when their elements were replaced.

### Rendering model

The project does not use a UI framework or virtual DOM. Initial HTML is assigned to the root application element, and later render functions replace:

- both task-list sections,
- one task card,
- the active task editor,
- the add-task card,
- the username area,
- profile images, or
- menu/theme attributes and CSS classes.

## 4. Naming Conventions

Function names follow their architectural role:

| Function type | Convention | Examples |
| --- | --- | --- |
| Component | PascalCase | `TaskCard`, `NavBarProfile`, `PrioritySelector` |
| Core | camelCase | `saveCurrentTask`, `toggleTask`, `selectTaskPriority` |
| Event | camelCase ending in `_event` | `themeToggle_event`, `taskDelete_event` |
| Render | camelCase ending in `_render` | `taskList_render`, `profileImage_render` |
| General utility | descriptive camelCase | `generateIcon` |

Additional rules:

- Prefer complete, understandable words over abbreviations.
- Keep JSDoc directly above every named function.
- Document parameters and return values when applicable.
- Component-local HTML helpers are also PascalCase.
- Event helpers inside event modules must also end in `_event`.

## 5. Application Lifecycle

1. `index.html` creates the `[data-key="app"]` mount element and loads `src/main.ts`.
2. `appInitialization_event()` hydrates tasks, theme, username, and avatar state from `localStorage`.
3. `main.ts` applies base and theme attributes to the application root.
4. `Body()` creates the initial component tree.
5. `eventRegistry_event()` registers global application interactions.
6. `taskList_render()` renders stored tasks and binds current task-card controls.

## 6. Shared State and Persistence

### Application state

`appState` contains:

| Field | Purpose |
| --- | --- |
| `openPageId` | Identifies the visually active navigation item. |
| `theme` | Stores `light` or `dark`. |
| `isNavbarOpen` | Tracks mobile navigation visibility. |
| `navbarProfile.avatarUrl` | Stores the current profile image data URL. |
| `navbarProfile.username` | Stores the displayed username. |
| `navbarProfile.date` | Stores the formatted Persian date. |
| `navbarProfile.isUsernameEditable` | Controls username display/edit mode. |

### Task state

- `tasksState` is the in-memory collection of saved tasks.
- `currentTask` is the mutable working task used by add and edit flows.
- `cardState` exports a default card-state object but is not used by the current application flow.

### Local storage keys

| Key | Value |
| --- | --- |
| `tasks` | JSON array of task objects. |
| `theme` | `light` or `dark`. |
| `user-name` | Saved username. |
| `user-img` | Profile image Base64 data URL. |

## 7. Types

### `Task`

| Field | Type | Purpose |
| --- | --- | --- |
| `id` | `number` | Task identity generated with `Date.now()`. |
| `title` | `string` | Task title. |
| `description` | `string` | Task description. |
| `isDone` | `boolean` | Completion state. |
| `priority` | `'' \| 'LOW' \| 'MEDIUM' \| 'HIGH'` | Selected priority or an empty editor value. |
| `createAt` | `string` | ISO creation timestamp. |
| `editAt` | `string` | ISO edit timestamp. |
| `state` | `CardState` | Task-specific UI state. |

### `CardState`

| Field | Purpose |
| --- | --- |
| `cardState` | Declared card view mode. |
| `isTagmenuOpened` | Controls priority-selector visibility. |
| `isOptionOpened` | Controls task action-menu visibility. |
| `btnDisabled` | Declared button state; not used by current logic. |
| `prioritySelected` | Declared priority state; not used by current logic. |

Runtime task objects currently create only `isTagmenuOpened` and `isOptionOpened` inside `state` and use a type assertion.

### Navigation types

- `NavBarProfile` contains username, date, avatar URL, and username editing state.
- `NavBarItem` contains item ID, typed icon name, label, and optional desktop/mobile scope.

## 8. Main User Flows

### Add a task

1. The user clicks `[data-key="new-task-card"]`.
2. `taskCardClick_event()` calls `openNewTaskEditor()`.
3. `ModifyTaskCard(currentTask)` replaces the add-task card.
4. `taskInput_event()` updates `currentTask.title` and `currentTask.description`.
5. `togglePriorityMenu()` opens the selector.
6. `selectPriorityFromTarget()` resolves the selected priority.
7. `saveCurrentTask()` validates, saves, persists, renders, and resets the working task.

### Edit a task

1. `taskOptions_event()` opens the action menu through `toggleOptionMenu()`.
2. `taskEdit_event()` calls `editTask(id)`.
3. The saved task is copied into `currentTask`.
4. `editTaskCard_render(id)` replaces the selected card with `ModifyTaskCard()`.
5. `saveCurrentTask()` updates the existing task because its ID is unchanged.

### Close an editor

`closeTaskEditor()` resets `currentTask`. When editing an existing task, it redraws both task sections. When creating a new task, it restores `AddTaskCard()`.

### Complete or reopen a task

`taskCheck_event()` extracts the task ID and calls `toggleTask()`. The completion value is inverted, persisted, and both lists are refreshed.

### Delete a task

`taskDelete_event()` extracts the task ID and calls `removeTask()`. State and storage are updated before the task lists are rendered again.

### Change theme

`themeToggle_event()` reads the checked radio value and calls `themeToggle()`. `theme_render()` applies `data-theme` to the application root and persists the selection.

### Mobile navigation

`mobileMenuToggle_event()` binds the open and close controls. `toggleNavbar()` updates state, and `mobileMenu_render()` changes sidebar, overlay, opacity, translation, and pointer-event classes.

### Change username

`usernameEdit_event()` opens the input state through `toggleUsernameEditor()`. `usernameSave_event()` calls `saveUsername()` and returns the profile area to display mode.

### Change profile image

`profileImageSelection_event()` opens `window.showOpenFilePicker()`, converts the selected file with `convertFileToBase64()`, then calls `saveProfileImage()`. `profileImage_render()` updates desktop and mobile avatars.

## 9. Function Reference

### Bootstrap and registration

| Function | Location | Purpose |
| --- | --- | --- |
| `appInitialization_event()` | `src/events/init.ts` | Hydrates tasks, theme, username, and profile image from storage. |
| `eventRegistry_event()` | `src/events/REGISTRY.ts` | Registers application events and performs the first task-list render. |

### Page and navigation components

| Function | Location | Purpose |
| --- | --- | --- |
| `Body()` | `src/components/body.ts` | Creates the complete application layout. |
| `MainContent()` | `src/components/main_content.ts` | Creates task-list render targets and the mobile profile block. |
| `NavBar()` | `src/components/navbar.ts` | Creates the desktop sidebar. |
| `NavbarMobileHeader()` | `src/components/NavBar/navbar_header.ts` | Creates the mobile header and menu opener. |
| `NavbarMobile()` | `src/components/NavBar/navbar_moblie.ts` | Creates the mobile sidebar and overlay. |
| `NavBarList(scope)` | `src/components/NavBar/navbar_list.ts` | Creates desktop or mobile navigation entries. |
| `NavBarItem(props)` | `src/components/NavBar/navbar_item.ts` | Creates one navigation row. |
| `UsernameZone()` | `src/components/NavBar/navbar_profile.ts` | Creates username display or edit controls. |
| `NavBarProfile(scope)` | `src/components/NavBar/navbar_profile.ts` | Creates the avatar, username, and date area. |
| `NavBarProfileAvatar(avatarUrl, scope)` | `src/components/NavBar/navbar_profile_avatar.ts` | Creates a profile image or fallback icon. |
| `NavBarThemeToggle(scope)` | `src/components/NavBar/navbar_theme_toggle.ts` | Creates scoped theme radio controls. |

### Task components

| Function | Location | Purpose |
| --- | --- | --- |
| `AddTaskCard()` | `src/components/Card/add_task.ts` | Creates the compact add-task control. |
| `TaskCard(state, task)` | `src/components/Card/card.ts` | Selects the correct card component for the requested state. |
| `DoneTaskCard(task)` | `src/components/Card/done_card.ts` | Creates a completed task card. |
| `UndoneTaskCard(task)` | `src/components/Card/undone_card.ts` | Creates an incomplete task card. |
| `ModifyTaskCard(task, startRotated)` | `src/components/Card/modify_card.ts` | Creates the add/edit task form. |
| `TaskActions(id)` | `src/components/Card/edit_btn_div.ts` | Creates edit and delete controls. |
| `PrioritySelector()` | `src/components/Card/select_priority.ts` | Creates low, medium, and high priority options. |
| `TaskPriorityBadge(priority)` | `src/components/Card/priority_span_color.ts` | Creates a localized priority badge. |
| `TaskPriorityBar(priority, taskId)` | `src/components/Card/priority_nav_color.ts` | Creates the colored task-card edge. |
| `TaskList(isDone, list)` | `src/components/Card/list_task.ts` | Selects the completed or incomplete task-list view. |
| `EmptyTaskList()` | Private in `src/components/Card/list_task.ts` | Creates the incomplete-list empty state. |
| `UndoneTaskList(tasks)` | Private in `src/components/Card/list_task.ts` | Creates the incomplete task section. |
| `DoneTaskList(tasksDone)` | Private in `src/components/Card/list_task.ts` | Creates the completed task section. |
| `UnselectedTaskCard()` | `src/components/Card/new_task_not_selected.ts` | Creates a legacy unused task placeholder. |

### Core task operations

| Function | Location | Purpose |
| --- | --- | --- |
| `openNewTaskEditor(target)` | `src/core/add_task.ts` | Replaces an add-task card with the task editor. |
| `closeTaskEditor(target)` | `src/core/close_caard.ts` | Closes the active add/edit form. |
| `editTask(id)` | `src/core/edit_task.ts` | Copies a saved task into editor state. |
| `saveCurrentTask()` | `src/core/save_task.ts` | Validates and inserts or updates a task. |
| `isCurrentTaskValid()` | `src/core/save_btn_disabled.ts` | Checks required title, description, and priority values. |
| `resetCurrentTask()` | `src/core/reset_current_task.ts` | Restores blank task-editor state. |
| `removeTask(id)` | `src/core/remove_card.ts` | Removes, persists, and rerenders a task. |
| `toggleTask(id)` | `src/core/toggle_task.ts` | Changes task completion state. |
| `toggleOptionMenu(id)` | `src/core/option_menu.ts` | Toggles one task action menu and closes the others. |
| `togglePriorityMenu()` | `src/core/tag_menu.ts` | Toggles the editor priority selector. |
| `selectTaskPriority(priority)` | `src/core/priority.ts` | Applies a priority to `currentTask`. |
| `selectPriorityFromTarget(target)` | `src/core/priority.ts` | Resolves and applies a clicked priority option. |

### Profile, theme, storage, and navigation core

| Function | Location | Purpose |
| --- | --- | --- |
| `saveTask(task)` | `src/core/task_storage.ts` | Appends one task to stored tasks; currently unused by the main flow. |
| `getTasks()` | `src/core/task_storage.ts` | Safely parses stored tasks. |
| `saveTasks(tasks)` | `src/core/task_storage.ts` | Replaces the stored task collection. |
| `themeToggle(state)` | `src/core/theme_toggle.ts` | Updates theme state and requests rendering. |
| `toggleNavbar()` | `src/core/menu_toggle.ts` | Updates mobile navigation state. |
| `getTodayPersianDate()` | `src/core/date.ts` | Formats the current Persian-calendar date. |
| `toggleUsernameEditor()` | `src/core/user_state.ts` | Switches username display/edit mode. |
| `saveUsername(username)` | `src/core/user_state.ts` | Updates and persists the username. |
| `convertFileToBase64(file)` | `src/core/profile_img.ts` | Reads an image file as a Base64 data URL. |
| `saveProfileImage(base64)` | `src/core/profile_img.ts` | Updates, persists, and renders the profile image. |

### Render functions

| Function | Location | Purpose |
| --- | --- | --- |
| `taskList_render()` | `src/render/list_render.ts` | Refreshes both task sections and binds card controls. |
| `taskCard_render(id)` | `src/render/list_render.ts` | Refreshes one saved task card. |
| `editTaskCard_render(id)` | `src/render/edit_render.ts` | Replaces a saved card with the task editor. |
| `modifyTaskCard_render()` | `src/render/modify_render.ts` | Refreshes the active editor and priority-icon state. |
| `addTaskCard_render(target)` | `src/render/add_task_render.ts` | Restores the compact add-task card. |
| `mobileMenu_render()` | `src/render/menu_render.ts` | Applies mobile sidebar and overlay state. |
| `theme_render()` | `src/render/theme_render.ts` | Applies and persists the theme. |
| `profileImage_render(base64)` | `src/render/profile_img_render.ts` | Updates all visible profile avatars. |
| `usernameEditor_render()` | `src/render/user_state_render.ts` | Refreshes the username area and rebinds its events. |

`src/render/undone_card_render.ts` contains only commented legacy code.

### Event functions

| Function | Location | Purpose |
| --- | --- | --- |
| `taskInput_event(event)` | Private in `src/events/card_event.ts` | Synchronizes editor inputs with `currentTask`. |
| `taskCardClick_event(event)` | Private in `src/events/card_event.ts` | Routes delegated task-editor clicks. |
| `taskCardInteractions_event()` | `src/events/card_event.ts` | Registers delegated editor events once. |
| `taskDelete_event()` | `src/events/card_event.ts` | Binds current delete controls. |
| `taskOptions_event()` | `src/events/card_event.ts` | Binds current option-menu controls. |
| `taskCheck_event()` | `src/events/card_event.ts` | Binds current completion checkboxes. |
| `taskEdit_event()` | `src/events/card_event.ts` | Binds current edit controls. |
| `mobileMenuToggle_event()` | `src/events/menu_event.ts` | Binds mobile menu open and close controls. |
| `themeToggle_event()` | `src/events/theme_event.ts` | Binds theme radio controls. |
| `usernameEdit_event()` | `src/events/username_event.ts` | Binds username editing activation. |
| `usernameSave_event()` | `src/events/username_event.ts` | Binds username saving. |
| `profileImageSelection_event()` | `src/events/profile_img_event.ts` | Binds profile image selection. |

### Dictionaries and utility

| Function | Location | Purpose |
| --- | --- | --- |
| `FaDic.getUndoneTaskSummary(taskCount)` | `src/dic/fa.ts` | Creates the Persian incomplete-task summary. |
| `FaDic.getDoneTaskSummary(taskCount)` | `src/dic/fa.ts` | Creates the Persian completed-task summary. |
| `EnDic.getUndoneTaskSummary(taskCount)` | `src/dic/en.ts` | Creates the English incomplete-task summary. |
| `EnDic.getDoneTaskSummary(taskCount)` | `src/dic/en.ts` | Creates the English completed-task summary. |
| `generateIcon(name, className)` | `src/utils/icon_generator.ts` | Injects classes into typed raw SVG markup. |

## 10. DOM Contracts

The event and render layers depend on these selectors and `data-key` formats:

| Selector | Purpose |
| --- | --- |
| `[data-key="app"]` | Application root and theme attribute owner. |
| `[data-key="not-done-tasks"]` | Incomplete-task render target. |
| `[data-key="done-tasks"]` | Completed-task render target. |
| `[data-key="new-task-card"]` | Add-task interaction target. |
| `[data-key="creating-task"]` | Active add/edit form. |
| `[data-key="task-title"]` | Working task title input. |
| `[data-key="task-description"]` | Working task description input. |
| `[data-key="tag-menu-button"]` | Priority-menu toggle. |
| `[data-key="tag-icon"]` | Animated priority-menu icon. |
| `[data-key="priority-low-button"]` | Low-priority selection. |
| `[data-key="priority-medium-button"]` | Medium-priority selection. |
| `[data-key="priority-high-button"]` | High-priority selection. |
| `[data-key="close-modify-card-button"]` | Editor close action. |
| `[data-key="save-task-button"]` | Editor save action. |
| `[data-key="task-card-ID"]` | Saved task-card wrapper. |
| `[data-key="remove-ID"]` | Delete action. |
| `[data-key="edit-ID"]` | Edit action. |
| `[data-key="option-ID"]` | Task options action. |
| `[data-key="check-ID"]` | Completion checkbox. |
| `[data-key="menu-open"]` | Mobile menu opener. |
| `[data-key="menu-close"]` | Mobile menu closer. |
| `[data-key="navbar-main"]` | Mobile sidebar. |
| `[data-key="menu-overlay"]` | Mobile navigation overlay. |
| `input[name="theme"]` | Theme radio inputs. |
| `[data-key="name-zone"]` | Username render target. |
| `[data-key="name-output"]` | Username display and edit trigger. |
| `[data-key="name-input"]` | Username input. |
| `[data-key="name-save-button"]` | Username save action. |
| `[data-key^="profile-image-"]` | Profile image interaction/render targets. |

Changing these values requires corresponding updates in components, events, and render functions.

## 11. File Guide

### Entry, state, and types

| File | Purpose |
| --- | --- |
| `src/main.ts` | Application bootstrap and initial mount. |
| `src/state/app_state.ts` | Shared application/profile state and Persian date initialization. |
| `src/state/task_state.ts` | Saved task collection and mutable working task. |
| `src/state/card_state.ts` | Unused standalone default card state. |
| `src/types/task.d.ts` | Task and priority contracts. |
| `src/types/card_state.d.ts` | Card view and UI-state contracts. |
| `src/types/app_state.d.ts` | Theme and application-state contracts. |
| `src/types/navbar.d.ts` | Profile and navigation-item contracts. |

### Components

| Area | Files |
| --- | --- |
| Page layout | `src/components/body.ts`, `src/components/main_content.ts`, `src/components/navbar.ts` |
| Navigation | `src/components/NavBar/*.ts` |
| Task cards and editor | `src/components/Card/*.ts` |

The filenames `navbar_moblie.ts` and `close_caard.ts` retain existing spelling errors even though their function names are clean.

### Core

| Area | Files |
| --- | --- |
| Task editing and persistence | `add_task.ts`, `close_caard.ts`, `edit_task.ts`, `save_task.ts`, `task_storage.ts` |
| Task state controls | `toggle_task.ts`, `remove_card.ts`, `option_menu.ts`, `tag_menu.ts`, `priority.ts` |
| Validation/reset | `save_btn_disabled.ts`, `reset_current_task.ts` |
| Application preferences | `theme_toggle.ts`, `menu_toggle.ts`, `user_state.ts`, `profile_img.ts`, `date.ts` |

### Events and rendering

| Area | Files |
| --- | --- |
| Registration and hydration | `src/events/REGISTRY.ts`, `src/events/init.ts` |
| Interactions | `src/events/card_event.ts`, `menu_event.ts`, `theme_event.ts`, `username_event.ts`, `profile_img_event.ts` |
| DOM updates | `src/render/*.ts` |

### Dictionaries, utilities, and assets

| File or directory | Purpose |
| --- | --- |
| `src/dic/fa.ts` | Active Persian text. |
| `src/dic/en.ts` | Prepared English text. |
| `src/utils/icon_generator.ts` | Typed raw SVG generator. |
| `src/assets/icons/` | SVG icon sources. |
| `src/assets/images/empty.svg` | Empty-task illustration. |
| `src/assets/fonts/` | Tanha and Vazirmatn font files. |
| `src/styles/global.css` | Tailwind import, semantic theme variables, and base styles. |

## 12. Styling and Theming

`src/styles/global.css` defines semantic CSS variables for:

- primary interaction colors,
- success, warning, and danger priority colors,
- backgrounds and elevated surfaces,
- sidebar, borders, text, icons, and overlays.

Light values are defined on `:root`. Dark values override them under `[data-theme='dark']`. Tailwind theme mappings expose utilities such as `bg-bg`, `text-text`, `border-border`, and `fill-icon`.

## 13. Maintenance Guide

### Add a task field

Update:

1. `src/types/task.d.ts`
2. `src/state/task_state.ts`
3. `src/core/reset_current_task.ts`
4. `src/core/edit_task.ts`
5. `src/components/Card/modify_card.ts`
6. `src/events/card_event.ts` when user input is required
7. task card components when the value should be displayed
8. storage migration or validation when compatibility is required

### Add an icon

1. Add the SVG to `src/assets/icons/`.
2. Import it with `?raw` in `src/utils/icon_generator.ts`.
3. Add it to the `icons` object.
4. Call `generateIcon()` using the inferred `IconName`.

### Add a locale

1. Create a dictionary with the same keys as `FaDic` and `EnDic`.
2. Add locale state and optional persistence.
3. Replace direct `FaDic` imports with a selected-dictionary module.
4. Rerender visible components after locale changes.

### Add a navigation page

1. Bind navigation item events.
2. Update `appState.openPageId`.
3. Add content routing or rendering.
4. Refresh navigation active styles.
5. Close mobile navigation after selection when appropriate.

### Add or rename a function

1. Follow the naming convention for its architectural layer.
2. Choose a descriptive name without unclear abbreviations.
3. Add JSDoc directly above the function.
4. Update every import and call site.
5. Update this document when the public flow or module reference changes.
6. Run `pnpm build`.

## 14. Current Limitations

- The application has no backend, authentication, or external database.
- Navigation and logout entries are visual only.
- Persian is fixed as the active dictionary.
- The profile picker depends on `window.showOpenFilePicker()`.
- Automated tests are not currently included.
- `saveTask()`, `cardState`, and `UnselectedTaskCard()` are currently unused.
- `src/render/undone_card_render.ts` contains only legacy commented code.
- Runtime task card state is narrower than the declared `CardState`.
- The web manifest still contains generic application names.
