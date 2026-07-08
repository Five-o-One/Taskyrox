import { appState } from '../../state/app_state'

export function NavBarThemeToggle(): string {
  const isLight = appState.theme === 'light'
  return /* HTML */ `
    <div
      id="theme_toggle"
      class="bg-surface flex w-full flex-row gap-0.5 rounded-lg p-1"
    >
      <label
        class="has-checked:bg- flex w-full cursor-pointer flex-row items-center justify-center gap-1.5 rounded-md py-2"
      >
        <input
          type="radio"
          name="theme"
          id="theme-light"
          class="hidden"
          ${isLight ? 'checked' : ''}
        />

        <svg class="text-text size-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <path
            d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span class="text-text text-sm font-semibold"> روشن </span>
      </label>

      <label
        class="has-checked:bg-primary-soft flex w-full cursor-pointer flex-row items-center justify-center gap-1.5 rounded-md py-2"
      >
        <input
          type="radio"
          name="theme"
          id="theme-dark"
          class="hidden"
          ${isLight ? '' : 'checked'}
        />

        <svg class="text-text-muted size-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
            fill="currentColor"
          />
        </svg>

        <span class="text-text-muted text-sm font-semibold"> تاریک </span>
      </label>
    </div>
  `
}
