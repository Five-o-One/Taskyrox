import { appState } from '../../state/app_state'

/**
 * Creates the theme toggle section in the navigation bar.
 * Displays light and dark theme options and activates the selected one based on the current theme in `appState`.
 * @returns Theme toggle HTML.
 */

export function NavBarThemeToggle(): string {
  const isLight = appState.theme === 'light'
  return /* HTML */ `
    <div
      id="theme_toggle"
      class="bg-surface border-border-muted flex w-full flex-row gap-1 rounded-lg border p-1"
    >
      <label
        class="text-text-muted has-checked:bg-bg-elevated has-checked:text-text flex w-full cursor-pointer flex-row items-center justify-center gap-1.5 rounded-md py-2 transition-all duration-300 has-checked:shadow-sm"
      >
        <input
          type="radio"
          name="theme"
          class="hidden"
          data-theme-option="light"
          ${isLight ? 'checked' : ''}
        />
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <path
            d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span class="text-sm transition-all has-checked:font-bold"> روشن </span>
      </label>

      <label
        class="text-text-muted has-checked:bg-primary-soft has-checked:text-text flex w-full cursor-pointer flex-row items-center justify-center gap-1.5 rounded-md py-2 transition-all duration-300 has-checked:shadow-sm"
      >
        <input
          type="radio"
          name="theme"
          class="hidden"
          data-theme-option="dark"
          ${isLight ? '' : 'checked'}
        />
        <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        </svg>
        <span class="has-checkedfont-bold text-sm transition-all"> تاریک </span>
      </label>
    </div>
  `
}
